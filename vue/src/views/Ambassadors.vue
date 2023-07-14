<template>
    <PageTitle title="Our Ambassadors" />
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 my-5 container mx-auto">
        <User v-for="(data, x) in users" :key="x" :user="data" />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import User from '../components/User.vue'

export default {
    components: { PageTitle, User },
    data() {
        return {
            users: [
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Ashraful'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Musfiq'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Ashraful'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Musfiq'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Ashraful'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Musfiq'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Ashraful'
                },
                {
                    name: 'Md. Ridoy Islam',
                    title: 'Seniour Eng Musfiq'
                },
            ]
        }
    },
}
</script>
