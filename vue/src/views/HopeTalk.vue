<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import hope_1 from '../assets/hope_1.jpg';
import hope_2 from '../assets/hope_2.jpg';
import hope_3 from '../assets/hope_3.jpg';
import hope_4 from '../assets/hope_4.jpg';
import hope_5 from '../assets/hope_5.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
      id: "1",
      thumbnail: hope_1,
      name: "Exploring Bangladesh Delta Plan 2100",
      video: "https://www.youtube.com/embed/IOzSwvviQ8Y",
    },
    {
      id: "2",
      thumbnail: hope_2,
      name: "Exploring SHOBAR DHAKA Apps by Dhaka North City Corporation",
      video: "https://www.youtube.com/embed/8ANOEPy2zqA",
      
    },
    {
      id: "3",
      thumbnail: hope_3,
      name: "Bangladesh is on the Verge of 100% Electrification",
      video: "https://www.youtube.com/embed/s9IKYhPHS3Q",
      
    },
    {
      id: "4",
      thumbnail: hope_4,
      name: "Exploring UPOSORGO- Emerging Digital Health Care Services Platform",
      video: "https://www.youtube.com/embed/0nYtfSiXJa4",
      
    },
    {
      id: "5",
      thumbnail: hope_5,
      name: "Electric Car in Bangladesh; A new Horizon in Country's Transportation System",
      video: "https://www.youtube.com/embed/o829FGSBPsQ",
      
    }
    
]

</script>


<template>
<PageTitle title="Hope Talk" />
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
