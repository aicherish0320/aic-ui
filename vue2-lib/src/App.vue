<template>
  <div id="app">
    <AcInput
      v-model="value"
      type="text"
      placeholder="请输入用户名"
      name="username"
    />
    <AcInput
      v-model="value"
      type="password"
      placeholder="请输入密码"
      name="password"
    />
    <h3>{{ value }}</h3>
    <AcInput
      v-model="value"
      type="password"
      placeholder="请输入密码"
      name="password"
      :disabled="true"
    />

    <AcInput
      v-model="value"
      type="text"
      placeholder="请输入密码"
      name="password"
      clearable
    />

    <AcInput
      v-model="value"
      type="text"
      placeholder="请输入密码"
      name="password"
      show-password
    />

    <AcInput
      v-model="value"
      type="text"
      placeholder="请输入密码"
      name="password"
      prefix-icon="home"
    />
    <AcInput
      v-model="value"
      type="text"
      placeholder="请输入密码"
      name="password"
      suffix-icon="home"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss"></style>
