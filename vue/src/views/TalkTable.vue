<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import table_1 from '../assets/table_1.jpg';
import table_2 from '../assets/table_2.jpg';
import table_3 from '../assets/table_3.jpg';
import table_4 from '../assets/table_4.jpg';
import table_5 from '../assets/table_5.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
        id: "1",
        thumbnail: table_1,
        name: "Working Experience Sharing in Engineering and also in Public Administration",
        video: "https://www.youtube.com/embed/hl-gprDttuw",
    },
    {
        id: "2",
        thumbnail: table_2,
        name: "Prospects & Challenges Of Cross Border Power Trade With Neighboring Countries",
        video: "https://www.youtube.com/embed/II8bBKoZ2VE",

    },
    {
        id: "3",
        thumbnail: table_3,
        name: "Exploring The Engineers Foundation",
        video: "https://www.youtube.com/embed/dmvMyaBorBo",

    },
    {
        id: "4",
        thumbnail: table_4,
        name: "Journey to Google from Bangladesh -Engr. Anik Sarker",
        video: "https://www.youtube.com/embed/QFmwVwaE6os",

    },
    {
        id: "5",
        thumbnail: table_5,
        name: "Exploring The Institute of Energy and Sustainable Development- IESD, BUET",
        video: "https://www.youtube.com/embed/evakDFTh3hQ",

    }

]

</script>


<template>
    <PageTitle title="Talk Table" />
    <div class="bg-gray-200 py-10 sm:py-16">
        <p class="mx-auto max-w-7xl px-6 lg:px-8 text-xl">Engineers precision and morale can be bolstered by technical
            discussions, debates, and question-and-answer sessions. In a nutshell, Talk-Table is just as the name implies.
            Point of interest for attracting lovers.</p>
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
