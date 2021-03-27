import { ref, Ref, markRaw, Component, computed } from "vue";

type Instances = Ref<InternalOptions[]>;

const callbacks: {
  [key: string]: (values?: unknown) => void;
} = {};

type Props = {
  [key: string]: unknown;
};

export interface Options {
  id?: string;
  header?: boolean;
  footer?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  title?: string;
  activeClass?: string;
  inactiveClass?: string;
  enterActiveClass?: string;
  leaveActiveClass?: string;
  enterToClass?: string;
  enterFromClass?: string;
  leaveToClass?: string;
  leaveFromClass?: string;
  props?: Props;
  onClose?: (values?: unknown) => void;
}

export interface InternalOptions extends Options {
  id: string;
  isCustom: boolean;
  isActive?: boolean;
  component: Component;
  isVisible: boolean;
  componentRef: Ref<Component>;
}

const instances: Instances = ref([]);

const currentModal = computed(
  () => instances.value[instances.value.length - 1]
);

const defaultOptions: Options = {
  closeOnBackdrop: true,
  closeOnEsc: true,
  title: "",
  activeClass: "",
  inactiveClass: "",
  header: true,
  footer: true,
  onClose: () => undefined
};

function setActiveFlag() {
  // We mark the most recent instance as the current only
  instances.value.forEach((i: InternalOptions) => {
    i.isActive = false;
  });

  if (!currentModal.value) {
    return;
  }

  currentModal.value.isActive = true;
}

function generateId(): string {
  return Math.random()
    .toString(24)
    .slice(2);
}

function push(options: Partial<InternalOptions>) {
  instances.value.push({
    isVisible: false,
    ...defaultOptions,
    ...options,
    isActive: true
  } as InternalOptions);

  setActiveFlag();
}

function pop(values?: unknown) {
  const index = instances.value.length - 1;
  if (index === -1) {
    return;
  }

  const vuedal = instances.value[index];
  vuedal.onClose && vuedal.onClose(values);
  vuedal.isVisible = false;

  setActiveFlag();
}

function newModal(
  component: Component,
  props?: Props | null,
  options: Options = defaultOptions,
  isCustom = false
) {
  const id = generateId();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const globalOptions = useVuedals.prototype.globalOptions;

  push({
    id,
    ...globalOptions,
    ...defaultOptions,
    ...options,
    props,
    component: markRaw(component),
    componentRef: ref(component),
    isCustom
  });

  return (fn: (values?: unknown) => void) => {
    callbacks[id] = fn;
  };
}

function open(
  component: Component,
  props?: Props | null,
  options: Options = defaultOptions
) {
  return newModal(component, props, options, false);
}

function create(
  component: Component,
  props?: Props | null,
  options: Options = defaultOptions
) {
  return newModal(component, props, options, true);
}

function close(values?: unknown, modal?: Options) {
  if (!modal) {
    pop(values);
    return;
  }

  const index = instances.value.findIndex(
    (m: InternalOptions) => m.id === modal.id
  );

  if (index === -1) {
    pop(values);
    return;
  }

  if (modal.id && callbacks[modal.id]) {
    callbacks[modal.id](values);
    delete callbacks[modal.id];
  }

  const internal = instances.value[index];
  internal.isVisible = false;
  setActiveFlag();
}

function remove(index: number) {
  instances.value.splice(index, 1);
  setActiveFlag();
}

export type VuedalComposable = {
  instances: Instances;
  open: typeof open;
  create: typeof create;
  close: typeof close;
  pop: typeof pop;
  remove: typeof remove;
};

function useVuedals(instance: string): InternalOptions;

function useVuedals(): VuedalComposable;

function useVuedals(instance?: string): VuedalComposable | InternalOptions {
  // If an id is given, return the instance
  if (typeof instance === "string") {
    return instances.value.find(
      (m: InternalOptions) => m.id === instance
    ) as InternalOptions;
  }

  return {
    instances,
    create,
    open,
    close,
    pop,
    remove
  } as VuedalComposable;
}

function handleKeyUp(e: KeyboardEvent) {
  if (e.key !== "Escape" || !currentModal.value.closeOnEsc) {
    return;
  }

  pop();
}

// Avoid duplicity
document.removeEventListener("keyup", handleKeyUp);
// And now register it again
document.addEventListener("keyup", handleKeyUp);

useVuedals.prototype.globalOptions = {};

export default useVuedals;
