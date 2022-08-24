<template>
  <div class="ac-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcButtonGroup',
  mounted() {
    let children = this.$el.children
    Array.from(children).forEach((c) =>
      console.assert(c.tagName === 'BUTTON', '子元素必须为是 button')
    )
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.ac-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
