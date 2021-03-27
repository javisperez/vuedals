# Getting Started

## Plugin

Vuedals offers a Vue plugin you can install and will add a `$vuedals` option to handle opening / closing modals.

To install the plugin just do:

```js
import Vuedals from 'vuedals'

createApp(App).use(Vuedals, options?)
```

To see the details on the supported options please check the [options](/options.html) section.

## Composable

You can import a composable function to call the Vuedals methods from. This can be used with either the options api or composition api.

To use:
```js
import { useVuedals } from 'vuedals'

const {
  instances,
  open,
  create,
  close,
  pop,
  remove
} = useVuedals()
```

The Vuedals composable exposes:

### instances
* **Type**: Options[]
* **Usage**:
```js
import { instances } from 'vuedals'
```

An array of all the open modal instances.

### open
* **Type**: Function(component: VueComponent, options: Options)
* **Usage**:
```js
import { open } from 'vuedals'

open(MyComponent, options?)
```

Open a modal.

### create
* **Type**: Function(Component, Options)
* **Usage**:
```js
import { create } from 'vuedals'

create(MyComponent, options?)
```

Basically the same as `open` but this is for custom modal windows only.

Register a custom modal window and open it immediately.

### close
* **Type**: Function(id?: String)
* **Usage**:
```js
import { close } from 'vuedals'

close(id?)
```

Close a modal. If an id is given will close that modal, if not, will close the most recently opened modal.

### pop
* **Type**: Function()
* **Usage**:
```js
import { pop } from 'vuedals'

pop()
```

Close the most recent modal.

### remove
* **Type**: Function(index: Int)
* **Usage**:
```js
import { remove } from 'vuedals'

// Removes the first modal from the stack
remove(0)
```

Close the most recent modal.

## The Vuedals Wrapper

All modals are gonna live inside a Vuedals wrapper that you manually need to set up inside your application's root.

To use:
```js
import { VuedalsWrapper } from 'vuedals'
```

We recommend you Teleport it to the `body` of the document, like this:

```html
<Teleport to="body">
  <VuedalsWrapper />
</Teleport>
```

## The Vuedal Component

Vuedals includes a `Vuedal` component that you can import to customize your modals. It uses `named scoped slots` to pass relevant data to your component.

Example:
```vue
<script>
import { Vuedal } from 'vuedals'

export default {
  name: 'AgreementDialog',

  components: {
    Vuedal
  },

  methods: {
    accept() {
      console.log('The agreement was accepted')
    }
  }
}
</script>

<template>
  <!-- You need to pass the vuedalId prop you'll receive -->
  <Vuedal>
    <!-- The custom header -->
    <template #header="{ close }">
      <div class="flex justify-between items-center p-2">
      Please accept this agreement <span @click="close">&times;</span>
      </div>
    </template>

    <!-- The content of the modal -->
    <div class="p-2">Provident amet pariatur dignissimos illum est nobis ipsa eius illo. Animi alias cum quasi qui aliquid ut autem. Sint aliquid fugiat et voluptatem animi neque minus. Animi est qui eum quos ratione voluptate sapiente natus. Iure voluptatibus est a quae molestiae reiciendis alias animi iusto. Alias exercitationem minima ipsam dolore cum natus.</div>

    <!-- The custom footer -->
    <template #footer="{ close }">
      <div class="flex items-center justify-end">
        <button @click="close" class="mr-2">Don't Agree</button>
        <button @click="accept">Agree</button>
      </div>
    </template>
  </Vuedal>
</template>
```

### Header Slot

The `Vuedal` component supports a `header` named slot that injects:
* **close**: a method to close the modal
* **id**: the id of the modal
* **title**: the title given in the options

This allows you to create a modal with a custom header.

### Footer Slot

The `Vuedal` component also has a `footer` named slot that you can used to customize the footer of the modal.

This slot is scoped and exposes:
* **close**: a method to close the modal
* **id**: the id of the modal

So you can use any of these properties based on your needs.