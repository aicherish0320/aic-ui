<template>
  <div class="ac-container" :class="{ isVertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcContainer',
  data() {
    return {
      isVertical: true
    }
  },
  mounted() {
    this.isVertical = this.$children.some((child) =>
      ['AcFooter', 'AcHeader'].includes(child.$options.name)
    )
  }
}
</script>

<style lang="scss" scoped>
.ac-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  &.isVertical {
    flex-direction: column;
  }
}
</style>
