<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import hat from '../assets/1.jpeg';
import digital from '../assets/digital.jpg';
import tipsoi from '../assets/TIPSOI.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}

const items = [
    {
        id: "1",
        thumbnail: hat,
        name: "হাতের মুঠোয় কোরবানির হাট. VOEBD",
        video: "https://www.youtube.com/embed/RLkm7Ijv6uA",
    },
    {
        id: "2",
        thumbnail: digital,
        name: "Analyzen: A 360 Degree Digital Solution & Technology Company",
        video: "https://www.youtube.com/embed/7oZyNe7PYYQ",

    },
    {
        id: "3",
        thumbnail: tipsoi,
        name: "Introducing TIPSOI Smart Attendance System. VOEBD",
        video: "https://www.youtube.com/embed/ai3KkbRO2SM",
    },

]

</script>


<template>
    <PageTitle title="Encourage Entrepreneurship" />
    <div class="bg-gray-200 py-10 sm:py-16">
        <p class="mx-auto max-w-7xl px-6 lg:px-8 text-xl">This type of program inspires new engineers to become
            entrepreneurs by hearing the success stories of engineer entrepreneurs. For fresh engineers and learners,
            discovering their challenge-facing and resolving stories sounds motivational and inspirational.</p>
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
