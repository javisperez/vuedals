import { App, reactive } from "vue";
import useVuedals, { Options, VuedalComposable } from "./composables/vuedals";
import "./assets/tailwind.css";

export { default as VuedalsWrapper } from "./components/VuedalsWrapper.vue";
export { default as Vuedal } from "./components/Vuedal.vue";
export {
  Options,
  VuedalComposable,
  InternalOptions
} from "./composables/vuedals";
export { useVuedals };

let globalOptions;

const defaultOptions = {
  closeOnBackdrop: true,
  title: "",
  activeClass: "",
  inactiveClass: ""
};

interface AppWithVuedals extends App<unknown> {
  $vuedals: VuedalComposable;
}

function install(app: AppWithVuedals, options: Options) {
  globalOptions = reactive({
    ...defaultOptions,
    ...options
  });

  useVuedals.prototype.globalOptions = globalOptions;

  app.config.globalProperties.$vuedals = useVuedals() as VuedalComposable;
}

export default {
  install
};
