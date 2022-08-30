<template>
  <main class="ac-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'AcMain'
}
</script>

<style lang="scss" scoped>
.ac-main {
  flex: 1;
  padding: 20px;
}
</style>
