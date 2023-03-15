<script setup lang="ts">
import type { PropType } from 'vue';

type ButtonVariant = 'primary' | 'secondary' | 'ternary';
type ButtonSize = 'md' | 'icon';

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
});
</script>

<template>
  <button class="btn" :class="[`btn__${variant}`, `btn__${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border: none;
  font-family: Rubik;
  border-radius: 10px;
  color: var(--primary);
  cursor: pointer;
  font-weight: 500;
}
.btn__md {
  padding: 18px 36px;
}
.btn__icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__primary {
  background-color: var(--primary);
  color: white;
  font-size: var(--fz-15);
}

.btn__secondary {
  background-color: var(--secondary);
  color: white;
  font-size: var(--fz-15);
}

.btn__ternary {
  background-color: var(--back);
  font-size: var(--fz-15);
  color: var(--primary);
}
</style>
