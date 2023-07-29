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
  <Carousel class="" :pictures="pictures"></Carousel>
</template>

