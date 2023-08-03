<script setup>
import { TheCard } from 'flowbite-vue';
import PageTitle from '../../src/components/PageTitle.vue';
import img4 from '../assets/img4.jpeg';
import helpac from '../assets/help-ac.jpg';
import helpgas from '../assets/help-gas.jpg';
import helpmeter from '../assets/help-meter.jpg';
import store from "../store/Index";


const videoModal = (url) => {
    store.commit('setUrl', url)
    store.commit('openModal');
}

const items = [
    
    {
      id: "1",
      thumbnail: helpgas,
      name: "Gas Distribution System and Safety Issues",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "2",
      thumbnail: helpmeter,
      name: "Prepaid Electricity Meter- Prospects, Challenges & Public Awareness",
      video: "https://www.youtube.com/embed/6iPRJbi-KwI",
    },
    {
      id: "3",
      thumbnail: helpac,
      name: "AC Blast; Reasons, Remedies and Safety Awareness",
      video: "https://www.youtube.com/embed/Pl9QeR4wYyU",
    },
    {
      id: "4",
      thumbnail: img4,
      name: "Most Common Mistakes In Online World & Tips For Cyber Security",
      video: "https://www.youtube.com/embed/S7src6C3e0E",
    },
    
]

</script>


<template>
<PageTitle title="Help The Nation" />
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
