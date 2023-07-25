<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import hope_1 from '../assets/hope_1.jpg';
import hope_2 from '../assets/hope_2.jpg';
import hope_3 from '../assets/hope_3.jpg';
import hope_4 from '../assets/hope_4.jpg';
import hope_5 from '../assets/hope_5.jpg';


const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}
const items = [
    {
      id: "1",
      thumbnail: hope_1,
      name: "Exploring Bangladesh Delta Plan 2100",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "2",
      thumbnail: hope_2,
      name: "Exploring SHOBAR DHAKA Apps by Dhaka North City Corporation",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "3",
      thumbnail: hope_3,
      name: "Bangladesh is on the Verge of 100% Electrification",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "4",
      thumbnail: hope_4,
      name: "Exploring UPOSORGO- Emerging Digital Health Care Services Platform",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "5",
      thumbnail: hope_5,
      name: "Electric Car in Bangladesh; A new Horizon in Country's Transportation System",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    }
    
]

</script>


<template>
<PageTitle title="Hope Talk" />
    <div 
     class="grid grid-cols-3 gap-6 container mx-auto my-12">
      <the-card @click="showModal" v-for="item in items" :key="item.name" class="hover:cursor-pointer">
        <img :src="item.thumbnail"/>
        <h5 class=" text-2xl py-3 font-bold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }}
        </p>
        
       
      </the-card>
      <div class="Modal">
        <Modal :size="full" v-if="isShowModal" @close="closeModal">
          
          <template #body>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1GGLvxjOkKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </template>
            </Modal>
      </div>
      

        
      
    </div>
</template>
