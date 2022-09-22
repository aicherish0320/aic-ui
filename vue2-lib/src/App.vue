<template>
  <div id="app">
    <AcDatePicker v-model="value1"></AcDatePicker>
    <hr />
    <!-- <AcDateRangePicker v-model="value2"></AcDateRangePicker> -->
    <!-- 
      on-exceed：如果超出限制后 会执行此方法
      on-change：如果当前上传文件的状态发生变化的时候 会触发，如果用户选择了文件，上传成功、失败
     -->
    <AcUpload
      name="avatar"
      action="http://localhost:3001/upload"
      :limit="3"
      :accept="accept"
      :file-list="fileList"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :beforeUpload="beforeUpload"
    >
      <AcButton type="primary" icon="lanqiu1">点击上传</AcButton>
      <div slot="tip">只能上传image/jpeg，且不超过500kb</div>
    </AcUpload>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value1: new Date(),
      value2: [],
      accept: 'image/jpeg',
      fileList: [
        {
          url: '',
          name: '爱絮鹊'
        },
        {
          url: '',
          name: '爱絮鹊'
        }
      ]
    }
  },
  methods: {
    handleExceed(files, fileList) {
      // 超过限制
      console.log('超过限制 >>> ')
    },
    handleChange(file) {
      console.log('handleChange >>> ', file)
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    beforeUpload(file) {
      const limitSize = file.size / 1024 > 500
      if (limitSize) {
        console.error('太大了哦')
        return false
      } else if (this.accept) {
        if (!file.name.endsWith('.jpeg')) {
          console.error('文件类型不对')
          return false
        }
      }
      return true
    }
  }
}
</script>

<style lang="scss"></style>
