# Vuedals

VueJS (2.x) Plugin for multiple modals windows with a single component instance.

## DEMO

[View demo on jsFiddle](https://jsfiddle.net/ackqudv7/19/)

### What is this?

A plugin to open stocked modals windows, event based, with just one component in your DOM.

### What do you mean with "just one component"?

e.g. if you want to have 3 modals, you don't need to add the component 3 times, just one (preferably in the root of your app) and open as many modals as you want by using an Event Bus

## Install

Install with npm:

```js
npm install --save vuedals
```

## Example

```js
import Vue from 'vue';
import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';

Vue.use(Vuedals);

var myComp = Vue.extend({
    template: `<div>
            <h1>Hello World!</h1>
            <button @click="showIt()">Show me the money</button>
        </div>`,

    methods: {
        showIt() {
            VuedalsBus.$emit('new', {
                name: 'showing-the-money',

                component: {
                    name: 'the-money',

                    template: `
                        <div>
                            <h1>THE MONEY!</h1>
                            <p>Money, money, money, moooneeyyy $ $ $ $</p>
                        </div>
                    `
                }
            });
        }
    }
});

var vm = new Vue({
    el: '#app',

    components: {
        myComp,
        Vuedal
    },

    template: `<div>
        <my-comp></my-comp>

        <vuedal></vuedal>
    </div>`
});
```

## Usage

### Opening a new modal window

You can emit an event in your component:

```js
this.$emit('vuedals:new', { option });
```

or a method:

```js
this.$vuedals.new({ options });
```

or the Vuedals Event Bus:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: {
    openNewModal() {
        Vuedals.$emit('new', { options });
    }
}
```

### Closing a modal

You can emit an event in your component:

```js
this.$emit('vuedals:close'[, data]);
```

a method:

```js
this.$vuedals.close([data]);
```

or the Vuedals Event Bus:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: {
    openNewModal() {
        Vuedals.$emit('close'[, data]);
    }
}
```

#### Closing an especific modal

If you need to close a specific modal index, you can pass it as an `$index` property of the data.

```js
this.$vuedals.close({
    $index: 3
})
```

*$index* can be an integer or a function. In case $index is a function, the additional data and all the vuedals that is currently present is `index(data, this.vuedals)` passed as argument so that you can determine the index of the vudedal to close and return the index of it

```js
this.$vuedals.close({
    $index(data, vuedals) {
        // this will always close the latest modal
        return vuedals.length - 1;
    }
})
```

### Events

Depending if you're creating the modal *from the component* or *from the Vuedals Event Bus*, these are the events (component / bus):

##### vuedals:new / new
Open a new modal window, with the given options

##### vuedals:close / close
Close the most recently opened modal window, if data is given, will pass it to the `onClose` option.

#### vuedals:opened / opened
When a modal was open. Returns an object with:

1. The index of the recently opened modal
2. The options passed to that modal instance

#### vuedals:closed / closed
When a modal was closed. Returns an object with:

1. The index of the closed modal
2. The options passed to that modal instance
3. The data given when `close` was called

#### vuedals:destroyed / destroyed
Emitted when the last modal instance is closed. *i.e. there's not more open modals left*

1. The index of the closed modal
2. The options passed to that modal instance
3. The data given when `close` was called

### Options

When creating a new modal, you'll need to pass the given options:

#### name
A reference name of the modal. Use to define the css class of that modal

*Default: null*

#### component
A Vue component to display inside the modal

#### props
A props object that will be passed to the component inside the modal.

example:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: {
    openModal() {
        this.$vuedals.open({
            name: 'test-component',

            // Pass these props to the component
            props: {
                firstname: 'John',
                lastname: 'Doe'
            },

            component: {
                name: 'show-john-doe',

                // Expect these props values
                props: ['firstname', 'lastname'],

                template: `
                    <div>
                        Hi {{ firstname }} {{ lastname }}
                    </div>
                `
            }
        });
    }
}
```

#### size
The size of the modal.

Possible values are:
- **xs**: 350px width
- **sm**: 550px width
- **md**: 650px width
- **lg**: 850px width
- **xl**: 1024px width

*Default: md*

#### dismissable
Should the modal include an "X" to be closed?

*Default: true*

#### escapable
Can this modal be closed by pression the *esc* key?

*Default: false*

#### closeOnBackdrop
Optionally prevent closing when clicking on backdrop

*Default: true*

#### title
Title of the modal window

*Default: ''*

#### header
An object that will be used to generate a custom header

*Default: null*

```
header: {
    component: 'header-component',
    props: {
        custom: 'Props'
    }
}
```

#### onClose
Callback function to call when the modal is closed. Any given data is passed as a parameter for that callback. Example:

```js
this.$vuedals.open({
    name: 'test-component',

    // Pass these props to the component
    props: {
        firstname: 'John',
        lastname: 'Doe'
    },

    component: {
        name: 'show-john-doe',

        // Pass these props to the component
        props: ['firstname', 'lastname'],

        template: `
            <div>
                Hi {{ firstname }} {{ lastname }}
            </div>
        `
    },

    onClose(data) {
        console.log('Data received from the vuedal instance': data);
    }
});
```

#### onDismiss
Callback function to call when the modal is closed.

Please notice that even `close` and `dismiss` both close the active modal instance (closes the modal) only the `close` event accepts data argument that can be passed to the callback, while `dismiss` just send the modal to close.

The callback may prevent the modal closing by returning `false`.

Example:

```js
this.$vuedals.open({
    name: 'test-component',

    // Pass these props to the component
    props: {
        firstname: 'John',
        lastname: 'Doe'
    },

    component: {
        name: 'show-john-doe',

        // expect these props
        props: ['firstname', 'lastname'],

        template: `
            <div>
                Hi {{ firstname }} {{ lastname }}
            </div>
        `
    },

    onDismiss() {
        console.log('The user dismissed the modal');
    }
});
```
