<script>
import Bus from './bus';

export default {
    name: 'vuedals',

    created() {
        // Create a new Vuedal instance
        Bus.$on('new', options => {
            const defaults = {
                title: null,
                dismisable: true,
                name: '',
                size: 'md',
                onClose() {},
                onDismiss() {}
            };

            options = Object.assign(defaults, options);

            this.vuedals.push(options);

            // Let know everyone else that a new Vuedal is open
            Bus.$emit('opened', {
                index: this.vuedals.length - 1,
                options
            });
        });

        // When a close event is receive, close the Vuedal instance
        Bus.$on('close', data => this.close(data));

        Bus.$on('dismiss', _ => this.dismiss());
    },

    data() {
        return {
            // Storage for all the vuedal's instances
            vuedals: []
        };
    },

    methods: {
        // Remove the given index from the vuedals array
        splice(index) {
            // And if it was the last window, also notify that all instances are destroyed
            if (index === 0)
                Bus.$emit('destroyed');

            if (!index) {
                this.vuedals.pop();
                return;
            }

            if (index === -1)
                return;

            this.vuedals.splice(index, 1);
        },

        // Close the modal and pass any given data
        close(data = null) {
            // Close the most recent Vuedal instance
            const index = this.vuedals.length - 1;

            // Notify the app about this window being closed
            Bus.$emit('closed', {
                index,
                instance: this.vuedals[index],
                data
            });

            // Dismiss callback
            this.vuedals[index].onClose(data);

            this.splice(index);
        },

        // Dismiss the active modal
        dismiss() {
            // Close the most recent Vuedal instance
            const index = this.vuedals.length - 1;

            // Notify the app about this window being closed
            Bus.$emit('dismissed', {
                index,
                instance: this.vuedals[index]
            });

            // Dismiss callback
            this.vuedals[index].onDismiss();

            this.splice(index);
        },

        // Get css classes
        getCssClasses(index) {
            const vuedal = this.vuedals[index];

            let classNames = vuedal.name +' '+ vuedal.size;

            if (index < this.$last)
                classNames += ' disabled';

            return classNames;
        }
    },

    computed: {
        // Get the last element of the Vuedals array (the most recent Vuedal instance)
        $last() {
            return this.vuedals.length - 1;
        }
    }
}
</script>

<template>
<transition tag="div" name="vuedal">
    <div class="vuedals" v-show="vuedals.length">
        <div class="vuedal" v-for="(vuedal, index) in vuedals" :key="vuedal" :class="getCssClasses(index)">
            <header v-if="vuedal.title || vuedal.dismisable">
                <span class="title">{{ vuedal.title }}</span>
                <span @click="dismiss()" v-if="vuedal.dismisable" class="close">&times;</span>
            </header>

            <component :is="vuedal.component" :props="vuedal.props"></component>
        </div>
    </div>
</transition>
</template>

<style lang="sass">

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
