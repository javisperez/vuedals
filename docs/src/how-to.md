# How to

## Open a Modal
To open a modal you need to call the `open` method, either from the composable function or if you're using the plugin, you can call the `$vuedals.open` method.

**Examples:**
* With the composition API:
```vue
<script>
import { open } from 'vuedals'
export default {
  setup() {
    const showDialog = () => {
      open(MyComponent)
    }

    return {
      showDialog
    }
  }
}
</script>

<template>
<div @click"showDialog">Open the Dialog</div>
</template>
```

* With the options API:
```vue
<script>
export default {
  methods: {
    showDialog() {
      this.$vuedals.open(MyComponent);
    }
  }
}
</script>

<template>
<div @click"showDialog">Open the Dialog</div>
</template>
```

## Close a Modal

There are 3 ways to close a modal, depending on your needs.

* **Close**: Takes an optional id parameter and closes the modal assinged to that id. If no id is given, it calls the `pop` method internally.
* **Pop**: Closes the last opened modal.
* **Remove**: Expects an index number (starting from 0) and closes the modal on that index.

Feel free to use the method that fits you the best, based on your needs.

**Examples:**
* With the composition API:
```vue
<script>
import { close } from 'vuedals'
export default {
  setup() {
    const closeDialog = () => {
      close()
    }

    return {
      closeDialog
    }
  }
}
</script>

<template>
<div @click"closeDialog">Close the Dialog</div>
</template>
```

* With the options API:
```vue
<script>
export default {
  methods: {
    closeDialog() {
      this.$vuedals.close();
    }
  }
}
</script>

<template>
<div @click"closeDialog">Close the Dialog</div>
</template>
```

## Customize a Modal

To create a custom modal you need to use the `Vuedal` component that is included.

**Modal Id**

Normally, all modals gets a dynamic internal id if none is specified. Because of limitations in the way that custom modals are loaded, that `id` is passed as a prop to your component when registering the modal, and is expected in the `Vuedal` component as an `id`, if you don't specify the id

::: warning IMPORTANT
All custom modals will receive a `vuedals-id` prop, please make sure to add it to your component and pass it to the `<Vuedal />` instance as an `id` prop.
:::
