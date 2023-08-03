<template >
    <swiper class="my-12"
      :slides-per-view="4"
      :space-between="20"
      @autoplay="autoplay"
      :breakpoints="{
      '320': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide> <div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.somoynews.tv/news/2023-02-10/%E0%A6%A6%E0%A7%8D%E0%A6%AF-%E0%A6%9F%E0%A6%BE%E0%A6%87%E0%A6%AE%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%8F%E0%A6%B0-%E0%A6%AE%E0%A7%8B%E0%A6%A1%E0%A6%BC%E0%A6%95-%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%AE%E0%A7%8B%E0%A6%9A%E0%A6%A8"><img src="../assets/news_somoy.png" alt="news_Somoy"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://ekattor.tv/news/article?article_id=39220"><img src="../assets/News_ekattor.png" alt="News_ekattor"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://samakal.com/bangladesh/article/2302156142/"><img src="../assets/News_somokal.png" alt="News_Somokal"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.jamuna.tv/news/430374"><img src="../assets/News_jamuna.png" alt="News_jamuna"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.dailyvorerpata.com/details.php?id=88105"><img src="../assets/News_dailyvorerpata.png" alt="News_dailyvorerpata"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://sarabangla.net/post/sb-750413/"><img src="../assets/News_sarabangla.png" alt="News_Sarabangla"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.dailymessenger.net/bangla/bangladesh/news/5703"><img src="../assets/News_Dailymessenger.png" alt="News_DailyMessenger"/></a>
        </div></swiper-slide>
      <swiper-slide><div class="p-5 h-[550px] lg:h-[450px] bg-gray-100 rounded-xl flex items-center">
            <a href=""><img src="../assets/News_ss.png" alt="News_ss"/></a>
        </div></swiper-slide>
      ...
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      breakpoints:{
        320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
            
        };
      },
    };
  </script>