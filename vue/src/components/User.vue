<template>
    <the-card> 
        <img src="../assets/user.jpeg" alt="">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ user.name }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
    {{user.title}}
    </p>
</the-card> 
</template>

<script>
import { TheCard } from 'flowbite-vue'
import userThumbnail from '../assets/user.jpeg'
export default {
    components: { TheCard },
    props: {
        user: {
            type: Object,
        }
    }

}
</script>