const Bus = Vuedals.Bus;
const Component = Vuedals.Component;
const Plugin = Vuedals.default;

Vue.use(Plugin);

// Sample component
const Sample = {
    name: 'sample-component',

    methods: {
        openNewModal() {
            this.$vuedals.open({
                title: 'Cutie',

                component: {
                    name: 'inside-modal',

                    template: `<div>Im a cute modal</div>`
                }
            })
        }
    },

    template: `
        <div class="sample-component">
            <p>
                <h4>Sample Component</h4>
            </p>
            <p>
                <span class="btn btn-primary" @click="openNewModal()">Open a Modal from a component</span>
            </p>
        </div>`
}

// First sample modal
const ModalComponent1 = {

    name: 'inside-modal-1',

    props: ['props'],

    methods: {
        openModal() {
            this.$emit('vuedals:new', {
                title: 'Modal in modal!  wow!',
                component: ModalComponent2
            });
        }
    },

    template: `<div>
        <p>This is a component inside the modal, you can pass some props by using a "props" options.</p>
        <blockquote>{{ props.example }}</blockquote>
        <span class="btn btn-primary" @click="openModal()">Open another modal</span>
    </div>`
};

// Second sample component
const ModalComponent2 = {
    name: 'inside-modal-2',

    methods: {
        openModal() {
            this.$emit('vuedals:new', {
                dismisable: false,
                component: ModalComponent3
            });
        },

        closeModal() {
            this.$emit('vuedals:close');
        }
    },

    template: `<div>
        <p>
            <h3>How awesome is this?</h3>
        </p>

        <p class="text-right">
            <span class="btn btn-primary" @click="openModal()">Another modal?</span>
            <span class="btn btn-default" @click="closeModal()">Close</span>
        </p>
    </div>`
};

// Third sample component
const ModalComponent3 = {
    name: 'inside-modal-3',

    methods: {
        close() {
            Bus.$emit('close');
        }
    },

    template: `<div>
        <h3>INCEPTION</h3>
        <p class="text-right">
            <span class="btn btn-default" @click="close()">Close</span>
        </p>
    </div>`
};

// Our app
new Vue({
    name: 'example',

    el: '#app',

    components: {
        vuedals: Component,
        sample: Sample
    },

    methods: {
        openModal() {
            Bus.$emit('new', {
                title: 'New modal window',
                component: ModalComponent1,
                props: {
                    example: 'This text for example, comes from a prop'
                }
            });
        }
    },

    template: `<div>
        <p>
            <h3>Hello! You can open a new modal window if you like!</h3>
            <span class="btn btn-primary" @click="openModal()">New Modal</span>
        </p>

        <sample></sample>

        <vuedals></vuedals>
    </div>`
});