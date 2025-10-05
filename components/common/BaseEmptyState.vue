<template>
  <div class="container">
    <slot name="image"></slot>
    <slot name="description" class="description"></slot>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.description {
  margin-top: 20px;
}
</style>
