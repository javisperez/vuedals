<script lang="ts">
import { Component, defineComponent } from "vue";
import { VuedalComposable } from "@/composables/vuedals";
import { useVuedals } from "../../main";
import Confirm from "./Confirm.vue";

const { create } = useVuedals() as VuedalComposable;

export default defineComponent({
  data() {
    return {
      products: [
        "bowl",
        "purse",
        "ring",
        "soy sauce packet",
        "eye liner",
        "bread",
        "fridge",
        "socks",
        "cinder block",
        "mouse pad",
        "keys",
        "outlet",
        "chalk",
        "computer",
        "grid paper",
        "thread",
        "plastic fork",
        "chapter book",
        "rubber band",
        "toe ring"
      ]
    };
  },
  methods: {
    confirm(product: string) {
      const onModalClose = create(
        Confirm as Component,
        {
          text: "Do you really want to delete this?"
        },
        {
          closeOnBackdrop: false
        }
      );

      onModalClose(response => {
        if (!response) {
          return;
        }

        const index = this.products.findIndex(p => p === product);

        if (index > -1) {
          this.products.splice(index, 1);
        }
      });
    },

    removeProduct(product: string) {
      this.confirm(product);
    }
  }
});
</script>

<template>
  <div class="max-h-96 overflow-y-auto">
    <div class="font-medium text-sm mb-4 text-gray-500">
      These are your current products, to remove one just click on the "X":
    </div>

    <transition-group
      tag="ul"
      leave-active-class="transition duration-500"
      leave-to-class="transform scale-50 shadow-lg opacity-0"
    >
      <li
        v-for="product in products"
        :key="product"
        class="flex items-center justify-between px-4 py-2 bg-blue-100 rounded m-1 hover:bg-blue-200 capitalize"
      >
        <span class="inline-block text-black">
          <span
            class="bg-blue-500 font-bold text-white uppercase rounded-full w-6 h-6 text-center inline-block"
          >
            {{ product[0] }}
          </span>
          {{ product }}
        </span>

        <span
          :title="`Remove ${product}`"
          class="cursor-pointer bg-white text-blue-500 rounded-full flex h-6 w-6 items-center justify-center hover:bg-gray-700 hover:text-white"
          @click="removeProduct(product)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="toe-icon ti ti-times h-4 w-4"
            viewBox="0 0 64 64"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M32.033 29.19l15.55-15.55 2.863 2.863-15.55 15.55 15.55 15.55-2.863 2.863-15.55-15.55-15.55 15.55-2.863-2.863 15.55-15.55-15.55-15.55 2.863-2.863 15.55 15.55z"
            />
            <path
              d="M32.033 29.19l15.55-15.55 2.863 2.863-15.55 15.55 15.55 15.55-2.863 2.863-15.55-15.55-15.55 15.55-2.863-2.863 15.55-15.55-15.55-15.55 2.863-2.863 15.55 15.55z"
            />
          </svg>
        </span>
      </li>
    </transition-group>
  </div>
</template>
