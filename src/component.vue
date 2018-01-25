<script>
import Bus from './bus';

export default {
    name: 'vuedals',

    created() {
        // Create a new Vuedal instance
        Bus.$on('new', options => {
            const defaults = {
                title: null,
                dismissable: true,
                name: '',
                size: 'md',
                escapable: false,
                onClose() {},
                onDismiss() {}
            };

            options = Object.assign(defaults, options);

            this.vuedals.push(options);

            // Let know everyone else that a new Vuedal is open
            Bus.$emit('opened', {
                index: this.$last,
                options
            });

            this.body.classList.add('vuedal-open');

            document.querySelector('.vuedals').scrollTop = 0;
        });

        // When a close event is receive, close the Vuedal instance
        Bus.$on('close', data => {
            let index = null;

            // If an $index was given on the data
            if (data && data.$index)
                index = data.$index;

            // If a Vue component was passed as the data
            if (data && data._isVue) {
                for (let [idx, vuedal] of this.$refs.components.entries()) {
                    if (data === vuedal) {
                        index = idx
                        break
                    }
                }
            }
            
            if (index === null)
                // Close the most recent Vuedal instance
                index = this.$last;

            this.close(data, index);
        });

        // Same for dismiss
        Bus.$on('dismiss', index => {
            if (index === null)
                // Close the most recent Vuedal instance
                index = this.$last;

            this.dismiss(index);
        });
    },

    data() {
        return {
            // Storage for all the vuedal's instances
            vuedals: []
        };
    },

    methods: {
        // Remove the given index from the vuedals array
        splice(index = null) {
            if (index === -1)
                return;

            // If there's nothing to close, ignore it
            if (!this.vuedals.length)
                return;

            // If there's no index, pop() it
            if (index === null)
                this.vuedals.pop();
            else
                this.vuedals.splice(index, 1);

            // And if it was the last window, notify that all instances are destroyed
            if (!this.vuedals.length) {
                this.body.classList.remove('vuedal-open');
                Bus.$emit('destroyed');
            }
        },

        doClose(data = null, index) {
            // If there's nothing to close, ignore it
            if (!this.vuedals.length)
                return;

            if (!this.vuedals[index])
                return;

            this.splice(index);

            // Firefox fix: https://github.com/javisperez/vuedals/issues/1
            const vuedals = document.querySelector('.vuedals');

            if (vuedals)
                vuedals.scrollTop = 0;
        },

        // Close the modal and pass any given data
        close(data = null, index = null) {
            // Can't close if there's no modal open
            if (this.vuedals.length === 0)
                return;

            let localIndex = index;

            // If the index is a function, pass the current open vuedal index
            if (index && typeof index === 'function') {
              localIndex = index(data, this.vuedals);
            }

            // If the index is either null or undefined
            if (typeof localIndex !== 'number')
                localIndex = this.$last;

            // Notify the app about this window being closed
            Bus.$emit('closed', {
                index: localIndex,
                instance: this.vuedals[index],
                data
            });

            // Close callback
            if (localIndex !== false && this.vuedals[localIndex])
                this.vuedals[localIndex].onClose(data);

            this.doClose(data, localIndex);
        },

        // Dismiss the active modal
        dismiss(index = null) {
            let localIndex = index;

            // If the index is a function, pass the current open vuedal index
            if (index && typeof index === 'function')
                localIndex = index(this.$last);

            // If the index is either null or undefined
            if (typeof localIndex !== 'number')
                localIndex = this.$last;

            // Check dismiss callback result for prevention
            if (this.vuedals[localIndex].onDismiss() === false)
                return;

            // Notify the app about this window being closed
            Bus.$emit('dismissed', {
                index: localIndex,
                instance: this.vuedals[localIndex]
            });

            this.doClose(null, localIndex);
        },

        // Get css classes
        getCssClasses(index) {
            const vuedal = this.vuedals[index];

            let classNames = vuedal.name +' '+ vuedal.size;

            if (index < this.$last)
                classNames += ' disabled';

            return classNames;
        },

        handleEscapeKey(e) {
            if (!this.vuedals.length)
                return;

            if (this.current.escapable)
                this.dismiss();
        }
    },

    computed: {
        // Get the current window
        current() {
            return this.vuedals[this.$last];
        },

        // Get the last element of the Vuedals array (the most recent Vuedal instance)
        $last() {
            return this.vuedals.length - 1;
        },

        body() {
            if (typeof document !== 'undefined') {
                return document.querySelector('body');
            }
        }
    }
}
</script>

<template>
<transition tag="div" name="vuedal">
    <div class="vuedals" v-show="vuedals.length" tabindex="0" @keyup.esc.prevent="handleEscapeKey($event)" @click="dismiss()">
        <div class="vuedal" v-for="(vuedal, index) in vuedals" :key="index" :class="getCssClasses(index)" @click.stop>
            <header v-if="(vuedal.title || vuedal.dismissable) && !vuedal.header">
                <span class="title">{{ vuedal.title }}</span>
                <span @click="dismiss()" v-if="vuedal.dismissable" class="close">&times;</span>
            </header>
            <header v-if="vuedal.header">
                <component :is="vuedal.header.component" v-bind="vuedal.header.props"></component>
            </header>
            <component :is="vuedal.component" v-bind="vuedal.props" ref="components"></component>
        </div>
    </div>
</transition>
</template>

<style lang="sass">
body.vuedal-open {
    overflow: hidden;
}

.vuedals {
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1050;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 500px;
    transition: opacity .4s ease;
}

.vuedal {
    background: #FFF;
    box-shadow: 3px 5px 20px #333;
    padding: 20px;
    margin: 30px 0;
    transition: all 0.6s ease;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    will-change: transform;
    width: 650px;

    &.xl { width: 1024px; }

    &.lg { width: 850px; }

    &.sm { width: 550px; }

    &.xs { width: 350px; }

    &.disabled {
        opacity: 0.2;

        &::after {
            background: transparent;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
        }
    }

    header {
        border-bottom: 1px solid #EEE;
        min-height: 32px;
        margin-bottom: 20px;

        .title { font-size: 21px; font-weight: 100;}

        .close { float: right; font-size: 26px; font-weight: 100; line-height: 21px; cursor: pointer; }
    }
}

.vuedal-enter,
.vuedal-leave-active {
    opacity: 0;
}

.vuedal-enter .vuedal,
.vuedal-leave-active .vuedal {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px) scale(0.95);
}
</style>
