<template>
  <div class="backdrop-container">
    <div class="">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.backdrop-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.5;
}

.backdrop {
  max-width: 672px;
  width: 100%;
  position: relative;
  padding: 20px;
}
</style>
