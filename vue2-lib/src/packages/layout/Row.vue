<template>
  <div class="ac-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      validator(type) {
        if (
          !['start', 'end', 'center', 'space-around', 'space-between'].includes(
            type
          )
        ) {
          console.error('参数不对')
        }
        return true
      }
    }
  },
  computed: {
    rowStyle() {
      let style = {}
      style = {
        ...style,
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }

      if (this.justify) {
        let key = ['start', 'end'].includes(this.justify)
          ? `flex-${this.justify} `
          : this.justify

        style = {
          ...style,
          justifyContent: key
        }
      }

      return style
    }
  },
  mounted() {
    this.$children.forEach((child) => {
      child.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.ac-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
