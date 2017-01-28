import {Bus} from './bus.vue';
import {Component} from './component.vue';

export const Vuedals = {
    install(Vue) {
        // Global $vuedals property
        Vue.prototype.$vuedals = new Vue({
            name: '$vuedals',

            created() {
                Bus.$on('opened', data => {
                    this.$emit('vuedals:opened', data);
                });

                Bus.$on('closed', data => {
                    this.$emit('vuedals:close', data);
                });

                Bus.$on('destroyed', data => {
                    this.$emit('vuedals:destroyed', data);
                });

                this.$on('vuedals:new', options => {
                    Bus.$emit('new', options);
                });

                this.$on('vuedals:close', index => {
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
    }
};

export {
    Bus,
    Component
};
