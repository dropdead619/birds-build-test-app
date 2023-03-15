import type { Ref } from 'vue';

const state = reactive({
  globalLoadingCount: 0,
});

function useLoadingControls(loadingCountRef: Ref<number>) {
  const isLoading = computed(() => loadingCountRef.value > 0);

  const startLoading = () => {
    loadingCountRef.value += 1;
  };
  const stopLoading = () => {
    if (loadingCountRef.value > 0) {
      // Prevent fast jumps
      setTimeout(() => {
        loadingCountRef.value -= 1;
      });
    }
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}

export function useGlobalLoading() {
  return useLoadingControls(toRef(state, 'globalLoadingCount'));
}

export function useLoading() {
  const loadingCount = ref(0);
  return useLoadingControls(loadingCount);
}
