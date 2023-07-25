<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import news_1 from '../assets/news_1.jpg';


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
      thumbnail: news_1,
      name: "মুজিব বর্ষ ও স্বাধীনতার সুবর্ণ জয়ন্তী উপলক্ষে আয়োজিত ব্যাডমিন্টন টুর্নামেন্ট ২০২১",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    }
    
]

</script>


<template>
<PageTitle title="Engineers News" />
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
