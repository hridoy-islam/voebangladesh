<template>
    <div>
        <PageTitle title="Our Ambassadors" />
        <!-- <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 my-5 container mx-auto">
            <User v-for="(data, x) in users" :key="x" :user="data" />
        </div> -->
        <p class="container mx-auto my-5 pb-40 pt-20">
            Yes we are blessed with our Advisors; who guide us and support us in many ways to take forward the journey of
            Voice of Engineers Bangladesh. Honorary Senior Advisors and Honorary Advisors in these two types we catagorized
            our Advisors. Advisors who had started their engineering journey on of after the year 2000 that means whose HSC
            Exam was in the year 2000 or later are considered as Honourary Advisor and before the year 2000 are considered
            as Honourary Senior Advisor. And Definitely they are all Engineers.
        </p>
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
