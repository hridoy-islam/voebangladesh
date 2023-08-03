<script setup>
import { Carousel } from 'flowbite-vue'
import  banner1  from '../assets/hero_banner.png'

import theTimeline from '../assets/thetimeline.jpg';
const pictures = [
  {
    'src': banner1,
    'alt': 'Picture 1',
  },
  {
    'src': theTimeline,
    'alt': 'Picture 2',
  }
]
</script>
<template>
  <Carousel class=""   :pictures="pictures"></Carousel>
</template>
<style>
/* @media (min-width: 1020px){
.overflow-hidden {
    height: 36rem !important;
}
} */
@media (min-width: 1120px){
.h-56 {
    height: 36rem !important;
}
}
@media (mAX-width: 1119px){
  .h-56 {
    height: 30rem !important;
}
}
@media (max-width: 1020px){
  .h-56 {
    height: 24rem !important;
}
}
@media (max-width: 840px){
  .h-56 {
    height: 20rem !important;
}
}
@media (max-width: 600px){
  .h-56 {
    height: 14rem !important;
}
}
@media (max-width: 450px){
  .h-56 {
    height: 10rem !important;
}
}
</style>
