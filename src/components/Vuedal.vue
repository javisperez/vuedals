<script lang="ts">
import { defineComponent } from "vue";
import { useVuedals } from "../main";
import { InternalOptions } from "../composables/vuedals";

const { instances, close, remove } = useVuedals();

export default defineComponent({
  name: "VuedalModalInstance",

  props: {
    id: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      vuedalId: this.id || this.$parent?.$attrs["_vuedal-id"],
      isActive: false
    };
  },

  computed: {
    modals(): InternalOptions[] {
      return instances.value;
    },

    index(): number {
      return this.modals.findIndex(
        (m: InternalOptions) => m.id === this.vuedalId
      );
    },

    instance(): InternalOptions {
      return this.modals[this.index];
    },

    cssClasses() {
      const instance = (this.instance || {}) as InternalOptions;
      return {
        // State classes
        inactive: instance.inactiveClass || "vuedal-inactive",
        active: instance.activeClass || "vuedal-active",

        // Transition classes
        enterActiveClass: instance.enterActiveClass || "vuedal-enter-active",
        enterFromClass: instance.enterFromClass || "vuedal-enter-from",
        enterToClass: instance.enterToClass || "vuedal-enter-to",
        leaveActiveClass: instance.leaveActiveClass || "vuedal-leave-active",
        leaveFromClass: instance.leaveFromClass || "vuedal-leave-from",
        leaveToClass: instance.leaveToClass || "vuedal-leave-to"
      };
    },

    hasCustomTransition(): boolean {
      return Boolean(
        this.instance.enterActiveClass ||
          this.instance.leaveActiveClass ||
          this.instance.enterFromClass ||
          this.instance.enterToClass ||
          this.instance.leaveFromClass ||
          this.instance.leaveToClass
      );
    }
  },

  watch: {
    "instance.isActive"(isActive) {
      this.isActive = isActive;
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.instance.isVisible = true;
    });
  },

  methods: {
    close(value?: unknown) {
      close(value, this.instance);
    },

    beforeTransition() {
      const modalRef = this.$refs.vuedal as HTMLElement;
      this.cssClasses.active.split(" ").forEach(className => {
        modalRef.classList.remove(className);
      });
      this.cssClasses.inactive.split(" ").forEach(className => {
        modalRef.classList.remove(className);
      });
    },

    afterTransition() {
      this.isActive = this.instance.isActive as boolean;
      const modalRef = this.$refs.vuedal as HTMLElement;
      (this.isActive ? this.cssClasses.active : this.cssClasses.inactive)
        .split(" ")
        .forEach(className => {
          modalRef.classList.add(className);
        });
    },

    afterLeaveTransition() {
      remove(this.index);
    }
  }
});
</script>

<template>
  <transition
    :enter-active-class="cssClasses.enterActiveClass"
    :enter-from-class="cssClasses.enterFromClass"
    :enter-to-class="cssClasses.enterToClass"
    :leave-active-class="cssClasses.leaveActiveClass"
    :leave-from-class="cssClasses.leaveFromClass"
    :leave-to-class="cssClasses.leaveToClass"
    @before-enter="beforeTransition"
    @before-leave="beforeTransition"
    @after-enter="afterTransition"
    @after-leave="afterLeaveTransition"
  >
    <div
      v-show="instance.isVisible"
      ref="vuedal"
      class="vuedal-modal"
      :class="{
        [cssClasses.active]: isActive,
        [cssClasses.inactive]: !isActive,
      }"
    >
      <!-- Header slot -->
      <slot
        v-if="instance.header"
        :id="vuedalId"
        name="header"
        :close="close"
        :title="instance.title"
      >
        <header>
          <div class="title">
            {{ title }}
          </div>
          <div
            class="close-icon"
            @click="close()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="toe-icon ti ti-times"
              width="24"
              height="24"
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
          </div>
        </header>
      </slot>

      <!-- Content slot -->
      <div class="p-4">
        <slot
          :id="vuedalId"
          :close="close"
        />
      </div>

      <!-- Footer slot -->
      <slot
        v-if="instance.footer"
        :id="vuedalId"
        name="footer"
        :close="close"
      />
    </div>
  </transition>
</template>

<style>
.vuedal-modal {
  background-color: #fff;
  position: absolute;
  width: 100%;
  max-width: 32rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
}

.vuedal-modal > header {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  display: flex;
  background-color: #edf2f6;
}

.vuedal-modal > header > div {
  padding: 1rem;
}

.vuedal-modal > header .title {
  flex: auto;
  padding: 1rem;
  font-weight: 600;
  color: #1f2937;
}

.vuedal-modal > header .close-icon {
  cursor: pointer;
  color: #a1aec0;
}

.vuedal-modal > header .close-icon:hover {
  color: #000;
}

.vuedal-active {
  opacity: 1;
}

.vuedal-inactive {
  opacity: 0;
  pointer-events: none;
}

.vuedal-enter-active,
.vuedal-leave-active {
  transition: all 250ms ease;
}

.vuedal-enter-from,
.vuedal-leave-to {
  opacity: 0;
  transform: translate(0, -15%) scale(0.9);
}

.vuedal-enter-to,
.vuedal-leave-from {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}
</style>
