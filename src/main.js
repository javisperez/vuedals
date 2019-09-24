import Bus from './bus';
import Component from './component.vue';

export default {
    install(Vue,options) {
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
                    this.open(options);
                });

                this.$on('close', data => {
                    this.close(data);
                });
            },

            methods: {
                open(options = null) {
                    Bus.$emit('new', options);
                },

                close(data = null) {
                    Bus.$emit('close', data);
                }
            }
        });

        // Mixer for components
        Vue.mixin({
            created() {
                this.$on('vuedals:new', options => {
                    Bus.$emit('new', options);
                });

                this.$on('vuedals:close', data => {
                    Bus.$emit('close', data);
                });
            }
        });
    }
};

export {
    Bus,
    Component
};
