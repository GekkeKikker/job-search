<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>

<style scoped>
@import "@/index.css" reference;

button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent  text-brand-blue-2 hover:text-white hover:bg-brand-blue-2;
}
</style>
