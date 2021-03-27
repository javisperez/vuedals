<script lang="ts">
import { defineComponent } from "vue";
import { Vuedal } from "../../main";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    }
  },

  components: {
    Vuedal
  },

  methods: {
    confirm(close: (response?: unknown) => void) {
      close(true);
    }
  }
});
</script>

<template>
  <vuedal>
    <template #header>
      <span></span>
    </template>

    <div class="leading-relaxed">
      {{ text }}
    </div>

    <template #footer="{ close }">
      <div class="p-4 text-right">
        <button
          class="bg-red-500 hover:bg-red-700 focus:outline-none text-white rounded px-2 py-1"
          @click="confirm(close)"
        >
          Confirm
        </button>
        <button
          class="text-red-600 hover:text-red-800 hover:underline focus:outline-none rounded px-2 py-1 ml-2"
          @click="close()"
        >
          Cancel
        </button>
      </div>
    </template>
  </vuedal>
</template>
