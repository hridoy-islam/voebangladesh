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
      thumbnail: talk1,
      name: "Experience Sharing as Women in Engineering.",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "2",
      thumbnail: talk2,
      name: "Exploring IEEE Bangladesh Section and Region-10",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
      
    },
    {
      id: "3",
      thumbnail: talk3,
      name: "Women's Leadership in Professional Platforms",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "4",
      thumbnail: talk4,
      name: "Experience Sharing as Woman in Engineering Charms",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "5",
      thumbnail: talk5,
      name: "Story and Status of Electricity in Country's Second Capital Chattogram",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "6",
      thumbnail: talk6,
      name: "Exploring GTCL With It's First Lady Managing Director Ever",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "7",
      thumbnail: talk7,
      name: "Exploring WaterAid Bangladesh",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "8",
      thumbnail: talk8,
      name: "Exploring Real State & Housing Association of Bangladesh",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    
]

</script>


<template>
<PageTitle title="Lady Talk" />
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
