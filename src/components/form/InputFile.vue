<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  fileProgress: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex flex-col w-full">
    <label class="font-semibold"> {{ props.label }} </label>
    <div class="flex items-center">
      <input
        v-bind="$attrs"
        type="file"
        :class="{ 'file:bg-gray-300 hover:file:bg-gray-300': $attrs.disabled }"
        class="block file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
      >
      <BaseFileProgress :file-progress="fileProgress" />
    </div>
    <div v-if="props.error" class="text-red-600">
      {{ props.error }}
    </div>
  </div>
</template>
