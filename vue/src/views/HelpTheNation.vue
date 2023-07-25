<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import img4 from '../assets/img4.jpeg';
import helpac from '../assets/help-ac.jpg';
import helpgas from '../assets/help-gas.jpg';
import helpmeter from '../assets/help-meter.jpg';


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
      thumbnail: helpgas,
      name: "Gas Distribution System and Safety Issues",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "2",
      thumbnail: helpmeter,
      name: "Prepaid Electricity Meter- Prospects, Challenges & Public Awareness",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "3",
      thumbnail: helpac,
      name: "AC Blast; Reasons, Remedies and Safety Awareness",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "4",
      thumbnail: img4,
      name: "Most Common Mistakes In Online World & Tips For Cyber Security",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    
]

</script>


<template>
<PageTitle title="Help The Nation" />
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
