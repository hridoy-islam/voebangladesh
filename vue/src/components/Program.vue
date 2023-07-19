<script>
import { TheCard } from 'flowbite-vue';
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
        <router-link :to="`/programs/${program.url}`">
        <img :src="program.image"/>
        <h5 class="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900 dark:text-white">
            {{ program.name }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ program.description }}
        </p>
    </router-link>
    </the-card>

</template>

