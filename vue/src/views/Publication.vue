<template lang="">
    <div>
        <PageTitle title="Our Publications" />
        <div class="my-5 container mx-auto">
    <the-card href="#" variant="horizontal" class="w-72" img-alt="Desk">
        <img :src="voemagazinecover" />
        <h5 class="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900 dark:text-white">

        </h5>
        <a href="https://drive.google.com/file/d/13JuNNe0MFl0p1-1Y9iHomry_PYr2VlCg/view?usp=sharing" class="font-normal text-white bg-primary py-2 px-10 w-full block text-center" >
            Download
        </a>
    </the-card>
        </div>
    </div>
</template>
<script setup>
import voemagazinecover from '../assets/voemagazinecover.jpg'
import PageTitle from '../components/PageTitle.vue';
import { TheCard } from 'flowbite-vue';

</script>
<style lang="">

</style>
