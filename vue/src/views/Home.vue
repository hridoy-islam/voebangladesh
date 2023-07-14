<script setup>
</script>
<template>
  <div class="bg-white z-0 d-none">
      <div class="relative isolate bg-gradient-to-r from-primary to-secondary px-6 pt-14 lg:px-8">
        
        <div class="mx-auto max-w-2xl py-12 sm:py-20 lg:py-20">
          
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Voice of Engineers Bangladesh</h1>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <router-link to="/about" class="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">About US</router-link>
              <router-link to="/programs" class="text-sm font-semibold leading-6 text-white">Our Programms <span aria-hidden="true">→</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-16 flex justify-between container mx-auto">
      <div class="w-2/4 mx-auto">
        <p class="my-2">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes Bangladeshi engineers' contributions, struggles, and sacrifices through daily news, alerts, and online programs. This is a platform for technical discussion, information and experience sharing, and the generation of new concepts, inventions, and recommendations for the betterment of Bangladesh. VOE is currently working as a collaborative partner of the Institution of Engineers, Bangladesh-IEB, Dhaka Centre. </p>
        <p class="my-2">VOE aspires to create a broad professional network among Bangladeshi engineers while also advocating for their rights. Our main goal in achieving our vision and missions is to create unity and connectivity among Bangladeshi engineers through our social media platforms and website.</p>
      </div>
      <div>
        <img class="w-10/12 mx-auto" :src="BannerImage" />
      </div>
      
    </div>
</template>

<script setup>

import BannerImage from '../assets/banner.jpeg'

</script>