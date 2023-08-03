<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import contribution_1 from '../assets/contribution_1.jpg';
import contribution_2 from '../assets/contribution_2.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
      id: "1",
      thumbnail: contribution_1,
      name: "Exploring E-nothi :: Behind the Scene",
      video: "https://www.youtube.com/embed/0Sfm4zfKATs",
    },
    {
      id: "2",
      thumbnail: contribution_2,
      name: "SUROKKHA- DIGITAL BLESSING FOR COVID VACCINATION MANAGEMENT",
      video: "https://www.youtube.com/embed/xsKEKUhLr9I",
      
    }
    
]

</script>


<template>
<PageTitle title="Contribution Stories" />
    <div 
     class="grid lg:grid-cols-3 gap-6 container mx-auto my-12">
      <the-card @click="videoModal(item.video)" v-for="item in items" :key="item.name" class="hover:cursor-pointer">
        <img :src="item.thumbnail"/>
        <h5 class=" text-2xl py-3 font-bold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }}
        </p>
      </the-card>
    </div>
</template>
