<template>
  <aside class="ac-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'AcAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>

<style lang="scss" scoped></style>
