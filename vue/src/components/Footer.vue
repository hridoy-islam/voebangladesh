<script setup>
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import utube from '../assets/utube.png'
</script>
<template>
  <div class="py-4 bg-primary text-center lg:flex justify-evenly items-center">
    <p class="text-white text-md lg:text-xl ">© 2023 VOE. All Rights Reserved.</p>
    <div class="flex lg:mx-4 justify-center my-3">
      <img class="lg:w-12 w-8 mx-2"  :src="facebook">
      <img class="lg:w-12 w-8 mx-2"  :src="twitter">
      <img class="lg:w-12 w-8 mx-2"  :src="utube">
    </div>
  </div>
</template>
