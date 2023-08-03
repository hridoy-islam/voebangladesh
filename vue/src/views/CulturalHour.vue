<script setup>
import { TheCard } from 'flowbite-vue';

import PageTitle from '../../src/components/PageTitle.vue';
import cultural_1 from '../assets/cultural_1.jpg';
import cultural_2 from '../assets/cultural_2.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}


const items = [
    {
        id: "1",
        thumbnail: cultural_1,
        name: "সাম্য-দ্রোহ ও মানবতার কবি কাজী নজরুল ইসলামের ১২২ তম জন্মবার্ষিকীতে বিনম্র শ্রদ্ধা।",
        video: "https://www.youtube.com/embed/0cJFycGrcR8",
    },
    {
        id: "1",
        thumbnail: cultural_2,
        name: "রাতের তারা আমায় কি তুই বলতে পারিস কোথায় আছে কেমন আছে মা?- ইঞ্জিঃ কাজী আব্দুল কাইয়ুম।",
        video: "https://www.youtube.com/embed/EJLXRK6pU9Q",
    }

]

</script>


<template>
    <PageTitle title="Cultural Hour" />
    <div class="grid lg:grid-cols-3 gap-6 container mx-auto my-12">
        <the-card @click="videoModal(item.video)" v-for="item in items" :key="item.name" class="hover:cursor-pointer">
            <img :src="item.thumbnail" />
            <h5 class=" text-2xl py-3 font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                {{ item.description }}
            </p>
        </the-card>
    </div>
</template>
