<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import cultural_1 from '../assets/cultural_1.jpg';
import cultural_2 from '../assets/cultural_2.jpg';
import store from "../store/Index";

const videoModal = (url)=> {
  
  alert('Hi', url)
}

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
      thumbnail: cultural_1,
      name: "সাম্য-দ্রোহ ও মানবতার কবি কাজী নজরুল ইসলামের ১২২ তম জন্মবার্ষিকীতে বিনম্র শ্রদ্ধা।",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "1",
      thumbnail: cultural_2,
      name: "রাতের তারা আমায় কি তুই বলতে পারিস কোথায় আছে কেমন আছে মা?- ইঞ্জিঃ কাজী আব্দুল কাইয়ুম।",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    }
    
]

</script>


<template>
<PageTitle title="Cultural Hour" />

    <div 
     class="grid grid-cols-3 gap-6 container mx-auto my-12">
      <the-card @click="videoModal(video)" v-for="item in items" :key="item.name" class="hover:cursor-pointer">
        {{ store.state.url }}
        {{ store.state.modal }}
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
