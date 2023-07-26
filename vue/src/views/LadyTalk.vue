<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import talk1 from '../assets/lady_talk_1.jpg';
import talk2 from '../assets/lady-talk-episode-2.jpg';
import talk3 from '../assets/lady_talk_3.jpg';
import talk4 from '../assets/lady_talk_4.jpg';
import talk5 from '../assets/lady_talk_5.jpg';
import talk6 from '../assets/lady_talk_6.jpg';
import talk7 from '../assets/lady_talk_7.jpg';
import talk8 from '../assets/lady_talk_8.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
      id: "1",
      thumbnail: talk1,
      name: "Experience Sharing as Women in Engineering.",
      video: "https://www.youtube.com/embed/VvezEETJr4U",
    },
    {
      id: "2",
      thumbnail: talk2,
      name: "Exploring IEEE Bangladesh Section and Region-10",
      video: "https://www.youtube.com/embed/PMja-7o2HdM",
      
    },
    {
      id: "3",
      thumbnail: talk3,
      name: "Women's Leadership in Professional Platforms",
      video: "https://www.youtube.com/embed/qKOIbkvA9vE",
    },
    {
      id: "4",
      thumbnail: talk4,
      name: "Experience Sharing as Woman in Engineering Charms",
      video: "https://www.youtube.com/embed/0vSFobklvt8",
    },
    {
      id: "5",
      thumbnail: talk5,
      name: "Story and Status of Electricity in Country's Second Capital Chattogram",
      video: "https://www.youtube.com/embed/GuxhapVfdqY",
    },
    {
      id: "6",
      thumbnail: talk6,
      name: "Exploring GTCL With It's First Lady Managing Director Ever",
      video: "https://www.youtube.com/embed/I5b4ikrgOz0",
    },
    {
      id: "7",
      thumbnail: talk7,
      name: "Exploring WaterAid Bangladesh",
      video: "https://www.youtube.com/embed/9v3LXrSNxdM",
    },
    {
      id: "8",
      thumbnail: talk8,
      name: "Exploring Real State & Housing Association of Bangladesh",
      video: "https://www.youtube.com/embed/pNFSsCt5mQE",
    },
    
]

</script>


<template>
<PageTitle title="Lady Talk" />
    <div 
     class="grid grid-cols-3 gap-6 container mx-auto my-12">
      <the-card @click="videoModal(item.video)" v-for="item in items" :key="item.name" class="hover:cursor-pointer">
        <img :src="item.thumbnail"/>
        <h5 class=" text-2xl py-3 font-bold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }}
        </p>
      </the-card>
    </div>
</template>
