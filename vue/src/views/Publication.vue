<template lang="">
    <div>
        <PageTitle title="Our Publications" />
        <div class="my-5 container mx-auto">
    <the-card href="#" variant="horizontal" class="w-72" img-alt="Desk">
        <router-link :to="`/`">
        <img :src="voemagazinecover" />
        <h5 class="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900 dark:text-white">

        </h5>
        <a :href="voemagazineDemo" class="font-normal text-white bg-primary py-2 px-10 w-full block text-center" >
            Download
        </a>
    </router-link>
    </the-card>
        </div>
    </div>
</template>
<script setup>
import voemagazinecover from '../assets/voemagazinecover.png'
import voemagazineDemo from '/src/assets/voemagazineDemo.pdf'
import PageTitle from '../components/PageTitle.vue';
import { TheCard } from 'flowbite-vue';

</script>
<style lang="">

</style>
