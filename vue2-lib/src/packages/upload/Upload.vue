<template>
  <div class="ac-upload">
    <div class="upload-btn" @click="handleClick">
      <slot></slot>
    </div>
    <input
      class="upload-input"
      type="file"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
      ref="inputRef"
    />
    <div>
      <slot name="tip"></slot>
    </div>
    <pre>
      {{ files }}
    </pre>
  </div>
</template>

<script>
import ajax from './ajax'
export default {
  name: 'AcUpload',
  props: {
    name: {
      type: String,
      default: 'file'
    },
    action: {
      type: String,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    },
    limit: Number,
    multiple: Boolean,
    accept: String,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    beforeUpload: Function,
    httpRequest: {
      type: Function,
      default: ajax
    }
  },
  data() {
    return {
      tempIndex: 1,
      files: [],
      reqs: {}
    }
  },
  watch: {
    fileList: {
      immediate: true,
      handler(newVal) {
        this.files = newVal.map((item) => {
          item.uid = Date.now() + this.tempIndex++
          item.status = 'success'
          return item
        })
      }
    }
  },
  methods: {
    handleClick() {
      const inputRef = this.$refs.inputRef
      inputRef.value = ''
      // 在点击之前 先要还原输入框
      inputRef.click()
    },
    handleStart(rawFile) {
      // 给文件生成一个唯一的标识
      rawFile.uid = Math.random() + this.tempIndex++
      // 自己构建了一条文件信息
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0, // 上传的进度
        uid: rawFile.uid,
        raw: rawFile
      }
      // 将当前用户上传的文件 push 到列表中，过一会要显示
      this.files.push(file)
      // 上传文件变化了
      this.onChange && this.onChange(file)
    },
    post(rawFile) {
      // 调用 httpRequest 方法
      // 需要整合一下参数 调用 ajax，需要传递参数，处理上传到整个流程
      // 这里可能 稍后上传到时候 会后悔，中止 ajax
      const uid = rawFile.uid

      const options = {
        file: rawFile,
        filename: rawFile.name,
        action: this.action,
        onProgress: (ev) => {},
        onSuccess: (ev) => {},
        onError: (ev) => {}
      }

      // req 就是当前的请求
      let req = this.httpRequest(options)
      this.reqs[uid] = req
      // 允许用户使用的是 promise 的 ajax
      if (req && req.then) {
        req.then(options.onSuccess, options.onError)
      }
    },
    upload(rawFile) {
      // 上传文件
      // 先判断这个文件是否能够上传 没有任何限制直接上传即可
      if (!this.beforeUpload) {
        console.log('上传 >>> ')
        return this.post(rawFile)
      } else {
        const flag = this.beforeUpload(rawFile)
        if (flag) {
          // 直接上传
          return this.post(rawFile)
        }
      }
    },
    uploadFiles(files) {
      // 限制上传个数
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList)
        return
      }
      ;[...files].forEach((rawFile) => {
        // 用户的文件，需要做一些处理，可能用户频繁的上传同一文件
        this.handleStart(rawFile)
        this.upload(rawFile)
      })
    },
    handleChange(e) {
      // 获取选中的文件
      const files = e.target.files
      // 多个文件如何上传 多创建几个 ajax 一起传
      this.uploadFiles(files)
    }
  }
}
</script>

<style lang="scss" scoped>
.ac-upload {
  .upload-btn {
    display: inline-block;
  }
  .upload-input {
    display: none;
  }
}
</style>
