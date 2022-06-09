<template>
  <main>
    <Header />
    <Slider v-if="winWidth > 768" />
    <Content />
    <New />
    <Footer />
  </main>
</template>
<script>
export default {
  data(){
    return {
      winWidth: 0
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
  }
}
</script>
<style lang="scss">
main{
  background: #0B0B0B;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}
.container {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
}

</style>