# Options

These are the options that you can pass when opening or creating a modal.

## onClose

* **Type**: `Function`
* **Default**: `() => {}`
* **Usage**:
```js
open(MyComp, {
  onClose() {
    console.log('the modal is now closed')
  }
})
```

A callback function to call when the modal is closed.

## closeOnBackdrop

* **Type**: `Boolean`
* **Default**: true
* **Usage**:
```js
open(MyComp, {
  closeOnBackdrop: false
})
```

Should the modal be closed when clicking in the backdrop?

## closeOnEsc

* **Type**: `Boolean`
* **Default**: true
* **Usage**:
```js
open(MyComp, {
  closeOnEsc: false
})
```

Should the modal be closed when the Esc key is pressed?

## props
* **Type**: `Object`
* **Default**: null
* **Usage**:
```vue
<script>
import Child from './Child.vue';

export default {
  mounted() {
    open(Child, {
      props: {
        name: 'Joe Doe'
      }
    })
  }
}
</script>
```

The props to pass to the component that will be embeded into the modal.

## title
* **Type**: `String`
* **Default**: ""
* **Usage**:
```js
open(MyComp, {
  title: "Accept the agreement"
})
```

The title to display in the header of the modal. This is used when you're opening a basic modal.

## Active / Inactive Classes
Vuedals assume two states for each modal:

* **Active**
The most recently opened modal. Is visible and on top of the rest.
* **Inactive**
Any modal instance that is not active.

You can control the css classes to pass to either the `active` or `inactive` modals, that way you can control if you want to hide it, lower the opacity or add some custom style.

If no class is given, this default style will be used:

```css
.vuedal-active {
  opacity: 100;
}

.vuedal-inactive {
  opacity: 0;
  pointer-events: none;
}
```

### activeClass
* **Type**: `String`
* **Default**: `vuedal-active`
* **Usage**:
```js
open(MyComp, {
  activeClass: 'opacity-100'
})
```

Use this option to specify what class to use when the modal is active.

### inactiveClass
* **Type**: `String`
* **Default**: `vuedal-inactive`
* **Usage**:
```js
open(MyComp, {
  inactiveClass: 'bg-red-500 opacity-50 pointer-events-none'
})
```

The classes to add when the modal is not active.

## Transition Classes

You can control how transitions work by specifying the transition classes to use. For more information on how transitions work, check [the official Vue transitions documentation](https://v3.vuejs.org/guide/transitions-enterleave.html#enter-leave-transitions)

If you don't specify anything, a default set of classes will be used.

The default classes used are:

```css
.vuedal-enter-active,
.vuedal-leave-active {
  transition: transform 1s, opacity 1s;
}

.vuedal-enter-from,
.vuedal-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

.vuedal-enter-to,
.vuedal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
```

### enterActiveClass
* **Type**: `String`
* **Default**: `vuedal-enter-active`
* **Usage**:
```js
open(MyComp, {
  enterActiveClass: 'transition duration-500'
})
```

The class to use when the modal is actively entering. This class will be passed directly to the Vue's transition component `enter-active-class` prop.

### leaveActiveClass
* **Type**: `String`
* **Default**: `vuedal-leave-active`
* **Usage**:
```js
open(MyComp, {
  leaveActiveClass: 'transition duration-500'
})
```

The class to use when the modal is actively leaving. This class will be passed directly to the Vue's transition component `enter-leave-class` prop.

### enterFromClass
* **Type**: `String`
* **Default**: `vuedal-enter-from`
* **Usage**:
```js
open(MyComp, {
  enterFromClass: 'transform -translate-y-10'
})
```

The class to use when the modal is about to enter.

This is the initial value to start transitioning from when the modal is opening. This class will be passed directly to the Vue's transition component `enter-from-class` prop.

### enterToClass
* **Type**: `String`
* **Default**: `vuedal-enter-to`
* **Usage**:
```js
open(MyComp, {
  enterToClass: 'transform translate-y-0'
})
```

The class to use when the modal is about to finish opening.

This is the destination value where the transition will end. This class will be passed directly to the Vue's transition component `enter-from-class` prop.

### leaveFromClass
* **Type**: `String`
* **Default**: `vuedal-leave-from`
* **Usage**:
```js
open(MyComp, {
  leaveFromClass: 'transform translate-y-0'
})
```

The class to use when the modal is about to close.

This is the initial value to start transitioning from when the modal is closing. This class will be passed directly to the Vue's transition component `leave-from-class` prop.

### leaveToClass
* **Type**: `String`
* **Default**: `vuedal-leave-to`
* **Usage**:
```js
open(MyComp, {
  leaveToClass: 'transform -translate-y-20'
})
```

The class to use when the modal is about to finish closing.

This is the destination value where the transition will end. This class will be passed directly to the Vue's transition component `leave-to-class` prop.