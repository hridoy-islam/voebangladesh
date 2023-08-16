<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import news_1 from '../assets/news_1.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}

const items = [
    {
        id: "1",
        thumbnail: news_1,
        name: "মুজিব বর্ষ ও স্বাধীনতার সুবর্ণ জয়ন্তী উপলক্ষে আয়োজিত ব্যাডমিন্টন টুর্নামেন্ট ২০২১",
        video: "https://www.youtube.com/embed/p0ejh7ozM28",
    }

]

</script>


<template>
    <PageTitle title="Engineers News" />
    <div class="bg-gray-200 py-10 sm:py-16">
        <p class="mx-auto max-w-7xl px-6 lg:px-8 text-xl">whats going on in the engineering community, in companies, and in
            engineering schools; Technical developments, construction news, engineer welfare, and engineer integrity issues
            are all covered in this section. Engineers news is made up of all of these aspects.</p>
    </div>
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
