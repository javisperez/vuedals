<script lang="ts">
import { defineComponent } from "vue";
import { Vuedal } from "../../main";

export default defineComponent({
  component: {
    Vuedal
  },

  mounted() {
    setTimeout(() => {
      (this.$refs.input as HTMLInputElement).focus();
    }, 5000);
  }
});
</script>

<template>
  <Vuedal>
    <div>Input should be focused.</div>

    <div>
      <input
        ref="input"
        placeholder="focus"
        class="border p-2 rounded"
      >
    </div>
  </Vuedal>
</template>
