<template>
  <section class="slider">
    <div class="container">
      <vue-tiny-slider v-bind="tinySliderOptions">
        <!-- <div class="item" > -->
          <img v-for="i in 11" :src="require(`@/assets/img/img-${i}.png`)">
        <!-- </div> -->
      </vue-tiny-slider>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        items: 3,
        swipeAngle: 45,
        center: true,
        loop: true,
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
      }
    }
  }
}
</script>
<style lang="scss" >
.slider{
  .tns{
    &-ovh {
      overflow: visible;
    }
    &-item{
      transform: scale(.8);
      transition: transform .5s ease;
      position: relative;
    }
    &-slide{
      &-active{
        transform: scale(.9);
        & + .tns-slide-active{
          transform: scale(1);
          & + .tns-slide-active{
            transform: scale(.9);
          }
        }
      }
    }
  }
}
</style>