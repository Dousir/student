<template>
  <div class="bannerswiperbox">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/images/indexbgImg.png">
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/indexbgImg.png">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/indexbgImg.png">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/indexbgImg.png">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/indexbgImg.png">
      </swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        grabCursor: true,
        freeModeMomentumVelocityRatio: 2,
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        }
      }
    };
  },
};
</script>
<style>
.bannerswiperbox {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  height: auto;
}
.bannerswiperbox{position: relative;}
.swiper-container{height: 440px;}
.swiper-button-next,.swiper-button-prev{display: none;transition: 0.5s;}
.bannerswiperbox:hover .swiper-button-next{display: block;}
.bannerswiperbox:hover .swiper-button-prev{display: block;}
</style>


