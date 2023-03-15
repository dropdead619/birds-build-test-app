<script setup lang="ts">
import SearchIcon from '../icons/SearchIcon.vue';

const props = defineProps({
  withIcon: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div
    class="input-container"
    :class="{
      'input-container--icon': props.withIcon,
    }"
  >
    <input
      class="input-container__input"
      :value="modelValue"
      type="text"
      @input="onInput"
    >

    <div class="input-container__icon">
      <slot name="icon">
        <SearchIcon />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  padding: 16.5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: white;
  border: 1px solid var(--platinum);
  border-radius: 10px;
}

.input-container--icon {
  padding: 4px 4px 4px 20px;
  cursor: pointer;
  width: max-content;
}

.input-container__input {
  border: none;
  width: 92%;
  font-family: Rubik;
  background-color: transparent;
  color: var(--primary);
  font-size: var(--fz-15);
  outline: none;
}

.input-container__icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
