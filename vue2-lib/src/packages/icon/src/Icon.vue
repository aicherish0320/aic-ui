<template>
  <svg class="ac-icon" aria-hidden="true">
    <use :xlink:href="`#ac-icon-${icon}`"></use>
  </svg>
</template>

<script>
import '@/styles/icon'
export default {
  name: 'AcIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ac-icon {
  width: 25px;
  height: 25px;
  fill: currentColor;
}
</style>
