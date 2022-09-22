<template>
  <div class="ac-date-picker">
    <AcInput suffix-icon="lanqiu1"></AcInput>
    <div class="ac-date-content">
      <div class="ac-date-picker-head">
        <AcIcon icon="lanqiu1"></AcIcon>
        <AcIcon icon="lanqiu1"></AcIcon>
        <span>XX 年 XX 月</span>
        <AcIcon icon="lanqiu1"></AcIcon>
        <AcIcon icon="lanqiu1"></AcIcon>
      </div>
      <div class="ac-date-picker-content">
        <template>dates</template>
        <template>years</template>
        <template>month</template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcDatePicker',
  props: {
    value1: {
      type: [String, Number],
      default: () => new Date()
    }
  }
}
</script>

<style lang="scss" scoped></style>
