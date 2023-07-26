<script setup>
import { TheCard } from 'flowbite-vue';
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import PageTitle from '../../src/components/PageTitle.vue';
import table_1 from '../assets/table_1.jpg';
import table_2 from '../assets/table_2.jpg';
import table_3 from '../assets/table_3.jpg';
import table_4 from '../assets/table_4.jpg';
import table_5 from '../assets/table_5.jpg';


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
      thumbnail: table_1,
      name: "Working Experience Sharing in Engineering and also in Public Administration",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",
    },
    {
      id: "2",
      thumbnail: table_2,
      name: "Prospects & Challenges Of Cross Border Power Trade With Neighboring Countries",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",

    },
    {
      id: "3",
      thumbnail: table_3,
      name: "Exploring The Engineers Foundation",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",

    },
    {
      id: "4",
      thumbnail: table_4,
      name: "Journey to Google from Bangladesh -Engr. Anik Sarker",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",

    },
    {
      id: "5",
      thumbnail: table_5,
      name: "Exploring The Institute of Energy and Sustainable Development- IESD, BUET",
      video: "https://www.youtube.com/embed/1GGLvxjOkKI",

    }

]

</script>


<template>
<PageTitle title="Talk Table" />
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
