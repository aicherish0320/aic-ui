<template>
  <div class="ac-input" :class="inputClass">
    <input
      ref="inputRef"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <AcIcon
      icon="lanqiu1"
      v-if="clearable && value"
      @click.native="$emit('input', '')"
      @mousedown.native.prevent
    ></AcIcon>
    <AcIcon
      icon="avatar"
      v-if="showPassword && value"
      @click.native="changeStatus"
    ></AcIcon>

    <AcIcon :icon="prefixIcon" v-if="prefixIcon"></AcIcon>
    <AcIcon :icon="suffixIcon" v-if="suffixIcon"></AcIcon>
  </div>
</template>

<script>
export default {
  name: 'AcInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    inputClass() {
      let classes = []
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push(`ac-input-suffix-icon`)
      }
      if (this.prefixIcon) {
        classes.push(`ac-input-prefix-icon`)
      }
      return classes
    }
  },
  methods: {
    changeStatus() {
      this.passwordVisible = !this.passwordVisible
      this.$nextTick(() => {
        this.$refs.inputRef.focus()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/_var.scss';
.ac-input {
  display: inline-flex;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
    }
  }
}
.ac-input-suffix-icon {
  input {
    padding-right: 25px;
  }
  .ac-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 16px;
  }
}
.ac-input-prefix-icon {
  input {
    padding-left: 25px;
  }
  .ac-icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 16px;
  }
}
</style>
