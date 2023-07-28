<script setup>
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import utube from '../assets/utube.png'
</script>
<template>
  <div class="py-4 bg-gray-100 text-center lg:flex justify-evenly items-center">
    <p class="text-md lg:text-xl ">© 2023 VOE. All Rights Reserved.</p>
    <div class="flex lg:mx-4 justify-center items-center my-3">
      <a href="https://www.facebook.com/VoE.Bangladesh/"><img class="lg:w-12 w-6 mx-2"  :src="facebook"></a>
      <!-- <a href=""><img class="lg:w-12 w-8 mx-2"  :src="twitter"></a> -->
      <a href="https://www.youtube.com/@voe.bangladesh"><img class="lg:w-12 w-8 mx-2"  :src="utube"></a>
    </div>
  </div>
</template>
