<template>
  <header class="ac-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'AcHeader'
}
</script>

<style lang="scss" scoped>
.ac-header {
  height: 60px;
}
</style>
