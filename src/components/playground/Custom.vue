<script lang="ts">
import { defineComponent } from "vue";
import { Vuedal } from "../../main";

export default defineComponent({
  components: {
    Vuedal
  },

  methods: {
    accept(closefn: (values?: unknown) => void) {
      closefn("Accept");
    },

    decline(closefn: (values?: unknown) => void) {
      closefn("Decline");
    }
  }
});
</script>

<template>
  <vuedal>
    <div class="leading-relaxed">
      Temporibus qui aperiam. Omnis suscipit magnam. Adipisci iste unde omnis
      suscipit dolor. Nihil debitis molestiae nostrum. Dolorem temporibus nam
      quidem voluptas perferendis et quia sit a. In expedita unde quis quidem
      fugiat.
    </div>

    <template #footer="{ close }">
      <div class="p-4 text-right">
        <button
          class="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white rounded px-2 py-1"
          @click="accept(close)"
        >
          Accept
        </button>
        <button
          class="text-blue-600 hover:text-blue-900 hover:underline focus:outline-none rounded px-2 py-1 ml-2"
          @click="decline(close)"
        >
          Decline
        </button>
      </div>
    </template>
  </vuedal>
</template>
