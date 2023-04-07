<script setup>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <div class="swiper1">
    <swiper
      :direction="'vertical'"
      :slidesPerView="'auto'"
      :freeMode="true"
      :scrollbar="true"
      :mousewheel="true"
      :modules="[FreeMode, Scrollbar, Mousewheel]"
      class="mySwiper"
    >
      <swiper-slide>
        <img class="bg" src="../assets/image/bg_1.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_2.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_3.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_4.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_5.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_6.jpg" alt="" />
        <img class="bg" src="../assets/image/bg_7.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>


<style scoped>
.swiper1{
    width: 100vw;
    height: 100vh;
    overflow: scroll;
}
.bg {
  width: 100%;
  object-fit: cover;
}
</style>