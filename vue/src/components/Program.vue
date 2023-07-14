<script>
import { TheCard } from 'flowbite-vue';
import image from "../assets/1.jpeg"
export default {
    components: {
        TheCard
    },
    props: {
        program: {
            type: Object,
        }
    }
    
}
</script>
    
<template>
    <the-card href="#" variant="horizontal"  img-alt="Desk">
        <img :src="image"/>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ program.name }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ program.description }}
        </p>
    </the-card>
</template>

