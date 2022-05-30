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
        items: 1,
        swipeAngle: 45,
        center: true,
        loop: true,
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        responsive: {
          768: {
            items: 3
          }
        }
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
      transition: transform .5s ease;
      position: relative;
      @media(min-width:768px){
        transform: scale(.8);
      }
    }
    @media(min-width:768px){
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
}
</style>