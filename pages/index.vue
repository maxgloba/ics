<template>
  <main>
    <Header />
    <Content />
    <Slider v-if="winWidth > 768" />
    <Footer />
    <button ref="audioBtn" class="audio" @click.prevent="play">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <audio controls ref="audio">
      <source src="http://nftstorks.com/audio/drums.mp3" type="audio/mpeg">
      <source src="http://nftstorks.com/audio/drums.ogg" type="audio/ogg">
    </audio>
  </main>
</template>
<script>
export default {
  data(){
    return {
      scrolled: false,
      winWidth: 0
    }
  },
  methods: {
    play(){
      if(this.$refs.audio.currentTime === 0){
        this.$refs.audio.play()
        this.$refs.audio.volume = 0.5;
        this.$refs.audioBtn.classList.add('active')
      } else {
        this.$refs.audio.pause()
        this.$refs.audio.currentTime = 0
      }
      this.$refs.audio.onpause = () => {
        this.$refs.audioBtn.classList.remove('active')
      }
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    document.addEventListener('click', e => {
      if(!this.scrolled){
        this.scrolled = true
        this.play()
      }
    })
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
audio{
  position: absolute;
  left: -1000px;
  opacity: 0;
}
.audio{
  display: flex;
  background: none;
  padding: 0;
  border: none;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media(max-width:767px){
    bottom: 40px;
  }
  @media(min-width:768px){
    top: 62px;
  }
  span{
    background: #4488EE;
    display: block;
    width: 4px;
    height: 20px;
    transition: .5s ease;
    pointer-events: none;
    &:not(:first-child){
      margin-left: 6px;
    }
  }
  &:hover, &.active{
    span{
      background: #FEEF00;
      &:nth-child(1){height: 33px;}
      &:nth-child(2){height: 45px;}
      &:nth-child(3){height: 23px;}
    }
  }
}
</style>