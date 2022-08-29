<template>
  <div id="app">
    <div>
      <AcRow>
        <AcCol :span="12">
          <div class="pink">aaa</div>
        </AcCol>
        <AcCol :span="12">
          <div class="green">bbb</div>
        </AcCol>
      </AcRow>
      <AcRow>
        <AcCol>
          <div class="cyan">ccc</div>
        </AcCol>
      </AcRow>
      <AcRow>
        <AcCol :span="6">
          <div class="green">ccc</div>
        </AcCol>
        <AcCol :span="6" :offset="2">
          <div class="pink">ccc</div>
        </AcCol>
      </AcRow>
      <AcRow :gutter="20">
        <AcCol :span="6">
          <div class="orange">ccc</div>
        </AcCol>
        <AcCol :span="6">
          <div class="green">ccc</div>
        </AcCol>
        <AcCol :span="6">
          <div class="cyan">ccc</div>
        </AcCol>
        <AcCol :span="6">
          <div class="pink">ccc</div>
        </AcCol>
      </AcRow>
      <AcRow justify="center">
        <AcCol :span="6">
          <div class="orange">ccc</div>
        </AcCol>
      </AcRow>
      <AcRow justify="end">
        <AcCol :span="6">
          <div class="orange">ccc</div>
        </AcCol>
      </AcRow>

      <AcRow :gutter="10">
        <AcCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple"></div
        ></AcCol>
        <AcCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></AcCol>
        <AcCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></AcCol>
        <AcCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></AcCol>
      </AcRow>
    </div>
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

<style lang="scss">
.green {
  background-color: green;
}
.pink {
  background-color: pink;
}
.cyan {
  background-color: cyan;
}
.orange {
  background-color: orange;
}
.ac-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
