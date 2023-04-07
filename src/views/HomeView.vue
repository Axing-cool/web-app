<script setup>
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import Swiper1 from "../components/Swiper1.vue";
</script>

<template>
  <div class="home-page">
    <swiper class="mySwiper"
    :autoplay="true"
    :loop="true"
    :modules="[Autoplay]"
    >
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_4.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_5.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_6.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_7.jpg" alt="" />
      </swiper-slide>
    </swiper>
    <div class="house-type">
      <img class="bg" src="../assets/image/c_house.jpg" alt="" />
      <img class="bg" src="../assets/image/d_house.jpg" alt="" />
      <img class="bg" src="../assets/image/f_house.jpg" alt="" />
    </div>
    <swiper
    :autoplay="true"
    :loop="true"
    :modules="[Autoplay]"
    >
      <swiper-slide>
        <img class="bg1" src="../assets/image/house_1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg1" src="../assets/image/house_2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg1" src="../assets/image/house_3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="bg1" src="../assets/image/house_4.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>


<style scoped>
.home-page {
  width: 100vw;
  height: 100vh;
}
.mySwiper{
  background-color: #00002e;
}
.house-type{
}
.bg {
  width: 100%;
  object-fit: cover;
}
.bg1 {
  width: 100%;
  height: 500px;
  object-fit: fill;
}
</style>