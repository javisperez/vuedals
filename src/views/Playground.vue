<script lang="ts">
import { Options } from "@/composables/vuedals";
import Generic from "../components/playground/Generic.vue";
import Custom from "../components/playground/Custom.vue";
import WithChild from "../components/playground/WithChild.vue";
import Notification from "../components/playground/Notification.vue";
import { useVuedals, VuedalsWrapper, VuedalComposable } from "../main";

const { open, create } = useVuedals() as VuedalComposable;

export default {
  name: "Playground",

  components: {
    VuedalsWrapper
  },

  methods: {
    openGeneric() {
      open(Generic, null, {
        title: "Generic Modal Sample"
      } as Options);
    },

    openCustom() {
      const onModalClose = create(Custom, null, {
        header: false,
        closeOnBackdrop: false,
        enterActiveClass: "transition duration-1000",
        leaveActiveClass: "transition duration-1000",
        enterFromClass: "opacity-0 transform scale-50",
        enterToClass: "opacity-100 transform scale-100",
        leaveFromClass: "opacity-100 transform scale-100",
        leaveToClass: "opacity-0 transform scale-90"
      } as Options);

      onModalClose(response => {
        console.log("User Response:", response);
      });
    },

    openWithChild() {
      open(WithChild, null, {
        header: false,
        inactiveClass:
          "transition duration-500 transform scale-90 origin-top pointer-events-none",
        activeClass:
          "transition duration-250 transform scale-100 origin-top pointer-events-auto"
      });
    },

    openWithNotification() {
      open(Notification, null, {
        header: false
      });
    }
  }
};
</script>

<template>
  <div class="p-2">
    <h1 class="font-medium text-2xl text-gray-800">
      Vuedals Playground!
    </h1>

    <div class="m-5 border p-2 inline-block">
      <button
        class="px-2 py-1 rounded bg-blue-500 text-white"
        @click="openGeneric"
      >
        Open Default Modal
      </button>
      <div class="text-xs text-gray-500 mt-2">
        A default generic modal with all the default options values.
      </div>
    </div>

    <div class="m-5 border p-2 inline-block">
      <button
        class="px-2 py-1 rounded bg-blue-500 text-white"
        @click="openCustom"
      >
        Open Custom
      </button>
      <div class="text-xs text-gray-500 mt-2">
        A simple custom modal with very basic functions.
      </div>
    </div>
    <div class="m-5 border p-2 inline-block">
      <button
        class="px-2 py-1 rounded bg-blue-500 text-white"
        @click="openWithChild"
      >
        Open Modal with Child
      </button>
      <div class="text-xs text-gray-500 mt-2">
        A custom modal that opens another modal when clicked in an action button
      </div>
    </div>
    <div class="m-5 border p-2 inline-block">
      <button
        class="px-2 py-1 rounded bg-blue-500 text-white"
        @click="openWithNotification"
      >
        Open Modal with Notification bar
      </button>
      <div class="text-xs text-gray-500 mt-2">
        A custom modal that shows a custom notification bar on top
      </div>
    </div>

    <Teleport to="body">
      <VuedalsWrapper />
    </Teleport>
  </div>
</template>
