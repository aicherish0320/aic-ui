<template>
  <button
    class="ac-button"
    :class="btnClasses"
    :disabled="loading"
    @click="$emit('click', $event)"
  >
    <template v-if="icon && !loading">
      <AcIcon :icon="icon" class="icon"> </AcIcon
    ></template>
    <template v-if="loading">
      <AcIcon icon="loading" class="icon"></AcIcon>
    </template>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'AcButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        if (
          !type ||
          ![
            'default',
            'success',
            'warning',
            'danger',
            'info',
            'primary'
          ].includes(type)
        ) {
          console.error('按钮类型错误')
        }
        return true
      }
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator(type) {
        if (!['left', 'right'].includes(type)) {
          console.error('图片位置有误')
        }
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClasses() {
      const classes = []
      if (this.type) {
        classes.push(`ac-button-${this.type}`)
      }
      if (this.iconPosition) {
        classes.push(`ac-button-${this.iconPosition}`)
      }
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.ac-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $active-color;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        danger: $danger,
        warning: $warning
      )
  {
    &-#{$type} {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        danger: $danger-hover,
        warning: $warning-hover
      )
  {
    &-#{$type}:hover {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        danger: $danger-active,
        warning: $warning-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
    & + span {
      margin-left: 5px;
    }
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    .icon + span {
      order: 1;
      margin-right: 5px;
      margin-left: 0;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
