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
        loop: true,
        autoplay: false,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        responsive: {
          768: {
            items: 3,
            center: true,
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
      z-index: 1;
      transform: scale(.95);
      @media(min-width:768px){
        transform: scale(.8);
      }
    }
    &-slide{
      &-active{
        box-shadow: 0px -10px 70px rgba(0, 0, 0, 0.4);
        z-index: 2;
        transform: scale(1);
      }
    }
    @media(min-width:768px){
      &-slide{
        &-active{
          transform: scale(.9);
          & + .tns-slide-active{
            transform: scale(1);
            box-shadow: 0px -10px 70px rgba(0, 0, 0, 0.4);
            z-index: 2;
            & + .tns-slide-active{
              transform: scale(.9);
              box-shadow: none;
              z-index: 1;
            }
          }
        }
      }
    }
  }
}
</style>