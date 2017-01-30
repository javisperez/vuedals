import Bus from './bus';
import Component from './component.vue';

export default {
    install(Vue) {
        // Global $vuedals property
        Vue.prototype.$vuedals = new Vue({
            name: '$vuedals',

            created() {
                Bus.$on('opened', data => {
                    this.$emit('vuedals:opened', data);
                });

                Bus.$on('closed', data => {
                    this.$emit('vuedals:closed', data);
                });

                Bus.$on('destroyed', data => {
                    this.$emit('vuedals:destroyed', data);
                });

                this.$on('new', options => {
                    Bus.$emit('new', options);
                });

                this.$on('close', index => {
                    Bus.$emit('close', index);
                });
            },

            methods: {
                open(options = null) {
                    Bus.$emit('new', options);
                },

                close(index = null) {
                    Bus.$emit('close', index);
                }
            }
        });

        // Mixer for components
        Vue.mixin({
            created() {
                this.$on('vuedals:new', options => {
                    Bus.$emit('new', options);
                });

                this.$on('vuedals:close', index => {
                    Bus.$emit('close', index);
                });
            }
        });
    }
};

export {
    Bus,
    Component
};
