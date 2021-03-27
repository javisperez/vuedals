<script lang="ts">
import { VuedalComposable, InternalOptions } from "../main";
import { provide, defineComponent } from "vue";
import VuedalModal from "./Vuedal.vue";
import useVuedals from "../composables/vuedals";

export type Vuedals = {
  isCurrent: (id: string) => boolean;
  getInstance: (id: string) => InternalOptions;
};

export default defineComponent({
  name: "Vuedals",

  components: {
    VuedalModal
  },

  setup() {
    const { instances, close } = useVuedals() as VuedalComposable;
    const getInstance = (id: string) =>
      instances.value.find((m: InternalOptions) => m.id === id);

    provide("Vuedals", {
      isCurrent: (id: string) => {
        const cm = getInstance(id);

        if (!cm) {
          return false;
        }

        return cm.isActive;
      },

      getInstance
    });

    function onBackdropClick() {
      const currentModal = instances.value[instances.value.length - 1];

      if (!currentModal.closeOnBackdrop) {
        return;
      }

      close(currentModal);
    }

    return {
      instances,
      onBackdropClick
    };
  }
});
</script>

<template>
  <div
    class="vuedals-wrapper"
    :style="!instances.length && { 'pointer-events': 'none' }"
  >
    <!-- Backdrop -->
    <div
      class="vuedals-backdrop"
      @click="onBackdropClick"
      v-if="instances.length"
    ></div>

    <!-- Modals -->
    <template v-for="modal in instances" :key="modal.id">
      <!-- Non-customized components -->
      <VuedalModal :id="modal.id" :title="modal.title" v-if="!modal.isCustom">
        <component
          :is="modal.component"
          v-bind="modal.props"
          :ref="modal.componentRef"
        />
      </VuedalModal>

      <!-- Custom components that implements <Vuedal /> by its own -->
      <component
        v-else
        :is="modal.component"
        v-bind="modal.props"
        :_vuedal-id="modal.id"
        :ref="modal.componentRef"
      />
    </template>
  </div>
</template>

<style>
.vuedals-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vuedals-backdrop {
  background-color: rgb(0, 0, 0, 0.5);
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
