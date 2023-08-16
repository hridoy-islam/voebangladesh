<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import technical from '../assets/ep-1.2.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
        id: "1",
        thumbnail: technical,
        name: "Technology Behind Mobile Telecommunication in Bangladesh. VOEBD",
        video: "https://www.youtube.com/embed/QtAVEWNRzhY",
    }

]

</script>


<template>
    <PageTitle title="Technical Know How" />
    <div class="bg-gray-200 py-10 sm:py-16">
        <p class="mx-auto max-w-7xl px-6 lg:px-8 text-xl">The technical aspects raise certain concerns in the minds of the
            general public. Such technical explanations and discussions are very beneficial for engineers technical
            knowledge growth as well as for the mass publics easy learning experience of simple ideas on various technical
            issues</p>
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
