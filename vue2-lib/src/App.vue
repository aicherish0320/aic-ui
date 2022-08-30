<template>
  <div id="app">
    <AcContainer>
      <AcHeader>Header</AcHeader>
      <AcMain>Main</AcMain>
    </AcContainer>

    <AcContainer>
      <AcHeader>Header</AcHeader>
      <AcMain>Main</AcMain>
      <AcFooter>Footer</AcFooter>
    </AcContainer>

    <AcContainer>
      <AcAside width="200px">Aside</AcAside>
      <AcMain>Main</AcMain>
    </AcContainer>

    <AcContainer>
      <AcHeader>Header</AcHeader>
      <AcContainer>
        <AcAside width="200px">Aside</AcAside>
        <AcMain>Main</AcMain>
      </AcContainer>
    </AcContainer>
    <hr />
    <AcContainer>
      <AcHeader>Header</AcHeader>
      <AcContainer>
        <AcAside width="200px">Aside</AcAside>
        <AcContainer>
          <AcMain>Main</AcMain>
          <AcFooter>Footer</AcFooter>
        </AcContainer>
      </AcContainer>
    </AcContainer>

    <AcContainer>
      <AcAside width="200px">Aside</AcAside>
      <AcContainer>
        <AcHeader>Header</AcHeader>
        <AcMain>Main</AcMain>
      </AcContainer>
    </AcContainer>

    <AcContainer>
      <AcAside width="200px">Aside</AcAside>
      <AcContainer>
        <AcHeader>Header</AcHeader>
        <AcMain>Main</AcMain>
        <AcFooter>Footer</AcFooter>
      </AcContainer>
    </AcContainer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {}
}
</script>

<style lang="scss">
.ac-header,
.ac-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.ac-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.ac-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .ac-container {
  margin-bottom: 40px;
}

.ac-container:nth-child(5) .ac-aside,
.ac-container:nth-child(6) .ac-aside {
  line-height: 260px;
}
</style>
