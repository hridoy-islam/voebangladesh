<template lang="">
    <div>
        <the-card href="#" variant="horizontal" >
            <div>
                <img class="w-24 h-24" :src="about.image"/>
            </div>
        <h5 class="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900 dark:text-white">
            {{ about.name }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ about.title }}
        </p>
        </the-card>
        
    </div>
</template>
<script>
import { TheCard } from 'flowbite-vue'
export default {
    components: {
        TheCard,
    },
    props: {
        about: {
            type: Object,
        }
    }
}
</script>