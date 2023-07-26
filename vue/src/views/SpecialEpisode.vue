<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import special_1 from '../assets/special_1.jpg';
import special_2 from '../assets/special_2.jpg';
import special_3 from '../assets/special_3.jpg';
import special_4 from '../assets/special_4.jpg';
import special_5 from '../assets/special_5.jpg';
import special_6 from '../assets/special_6.jpg';
import special_7 from '../assets/special_7.jpg';
import special_8 from '../assets/special_8.jpg';
import special_9 from '../assets/special_9.jpg';
import special_10 from '../assets/special_10.jpg';
import special_11 from '../assets/special_11.jpg';
import store from "../store/Index";

const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}
const items = [
    {
      id: "1",
      thumbnail: special_1,
      name: "Exploring Bangladesh Engineers Club Ltd",
      video: "https://www.youtube.com/embed/hPMSOvrGAcQ",
    },
    {
      id: "2",
      thumbnail: special_2,
      name: "Glorious 25 Years in Teaching Profession",
      video: "https://www.youtube.com/embed/9JQRuQpEiB0",
      
    },
    {
      id: "3",
      thumbnail: special_3,
      name: "TRIATHETE OF BANGLADESH POLICE",
      video: "https://www.youtube.com/embed/LLeTpzxQ5Jg",
      
    },
    {
      id: "4",
      thumbnail: special_4,
      name: "Fake Currency Gang Captured & Busted",
      video: "https://www.youtube.com/embed/7vDIPeY4nNc",
      
    },
    {
      id: "5",
      thumbnail: special_5,
      name: "Exploring Virtual Semester on COVID-19 Pandemic at BUET",
      video: "https://www.youtube.com/embed/IirqdCRBNO4",
      
    },
    {
      id: "6",
      thumbnail: special_6,
      name: "Triumph of Team Mongol Barota (MIST), in the Biggest Platform of Global Robotics",
      video: "https://www.youtube.com/embed/UZQhMUrL1ko",
      
    },
    {
      id: "7",
      thumbnail: special_7,
      name: "BUET Hellbent Team, Asia West Champion In ICPC World Finals Moscow 2021",
      video: "https://www.youtube.com/embed/F1ClKvzXPto",
      
    },
    {
      id: "8",
      thumbnail: special_8,
      name: "Adda with Heroes of 71, The Engineers -প্রকৌশলী মাসরুর-উল-হক (কামাল) সিদ্দিকী",
      video: "https://www.youtube.com/embed/o2LYGWVQcfc",
      
    },
    {
      id: "9",
      thumbnail: special_9,
      name: "Adda with Heroes of 71, The Engineers -প্রকৌশলী গোলাম আজাদ",
      video: "https://www.youtube.com/embed/68GdSJy5Uas",
      
    },
    {
      id: "10",
      thumbnail: special_10,
      name: "Adda with Heroes of 71, The Engineers -প্রকৌশলী মোঃ নুরুজ্জামান",
      video: "https://www.youtube.com/embed/1vEm2bfbUf8",
      
    },
    {
      id: "11",
      thumbnail: special_11,
      name: "The Heroes of Padma Bridge. VOEBD",
      video: "https://www.youtube.com/embed/YoWGD-sRdnY",
      
    }
    
]

</script>


<template>
<PageTitle title="Special Episode" />
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
