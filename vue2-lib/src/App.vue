<template>
  <div id="app">
    <div>
      <AcButton>默认按钮</AcButton>
      <AcButton type="primary">主要按钮</AcButton>
      <AcButton type="success">成功按钮</AcButton>
      <AcButton type="warning">警告按钮</AcButton>
      <AcButton type="danger">危险按钮</AcButton>
      <AcButton type="info">信息按钮</AcButton>
    </div>
    <div>
      <AcButton type="primary" icon="zuqiu"></AcButton>
      <AcButton type="primary" icon="lanqiu1">信息按钮</AcButton>
      <AcButton type="danger" icon="lanqiu1" iconPosition="right"
        >信息按钮
      </AcButton>
      <AcButton type="success" icon="home" loading>信息按钮 </AcButton>
      <AcButton type="success" icon="home" loading @click="handleClick"
        >Click
      </AcButton>
      <AcButton type="success" icon="home" @click="handleClick"
        >Click
      </AcButton>
    </div>
    <div>
      <AcIcon icon="lanqiu1"></AcIcon>
    </div>
    <div>
      <AcButtonGroup>
        <AcButton type="primary" icon="home" iconPosition="left"
          >上一页
        </AcButton>
        <AcButton type="primary" icon="avatar" iconPosition="right"
          >下一页
        </AcButton>
      </AcButtonGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick(e) {
      alert(1)
    }
  }
}
</script>

<style lang="scss"></style>
