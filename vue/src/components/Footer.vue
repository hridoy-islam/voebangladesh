<script setup>
import facebook from '../assets/facebook.png'
import fb_group from '../assets/fb_group.png'
import utube from '../assets/utube.png'
</script>
<template>
    <div class="py-4 w-full bg-[#006637] text-center text-white lg:flex justify-evenly items-center">
        <p class="text-md lg:text-xl ">© 2023 VOE. All Rights Reserved.</p>
        <div class="flex lg:mx-4 justify-center items-center my-3">
            <a href="https://www.facebook.com/VoE.Bangladesh/"><img class="lg:w-8 w-6 mx-2" :src="facebook"></a>
            <a href="https://www.youtube.com/@voe.bangladesh"><img class="lg:w-9 w-8 mx-2" :src="utube"></a>
            <a href="http://www.facebook.com/groups/VoE.Bangladesh"><img class="lg:w-8 w-6 mx-2" :src="fb_group" alt=""></a>
        </div>
    </div>
</template>
