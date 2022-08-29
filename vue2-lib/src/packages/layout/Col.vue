<template>
  <div class="ac-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcCol',
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass() {
      let classes = []
      classes.push(`ac-col-${this.span}`)

      if (this.offset) {
        classes.push(`ac-col-offset-${this.offset}`)
      }

      ;['xs', 'sm', 'md', 'lg', 'xl'].forEach((type) => {
        if (typeof this[type] === 'object') {
          let { span, offset } = this[type]
          span && classes.push(`ac-col-${type}-${span}`)
          offset && classes.push(`ac-col-${type}-offset-${offset}`)
        } else {
          classes.push(`ac-col-${type}-${this[type]}`)
        }
      })

      return classes
    },
    colStyle() {
      let style = {}

      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }

      return style
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var';

@for $i from 1 through 24 {
  .ac-col-#{$i} {
    width: $i/24 * 100%;
  }
  .ac-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}

@include res(xs) {
  @for $i from 1 through 24 {
    .ac-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .ac-col-xs-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}

@include res(sm) {
  @for $i from 1 through 24 {
    .ac-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .ac-col-sm-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}

@include res(md) {
  @for $i from 1 through 24 {
    .ac-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .ac-col-md-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}

@include res(lg) {
  @for $i from 1 through 24 {
    .ac-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .ac-col-lg-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}

@include res(xl) {
  @for $i from 1 through 24 {
    .ac-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .ac-col-xl-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
</style>
