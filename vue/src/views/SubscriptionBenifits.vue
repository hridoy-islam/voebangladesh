<template lang="">
    <PageTitle title='Subscription Benefits' />
    <h3 class="lg:text-8xl text-5xl text-center pt-10 font-bold">Coming Soon</h3>
    <div class="grid lg:grid-cols-4 gap-6 container lg:mx-auto my-16">
        <div class="p-4 bg-gray-100 rounded-xl lg:mx-0 mx-2">
            <a href="https://www.dailymessenger.net/bangla/bangladesh/news/5703"><img :src="resort" alt="News_DailyMessenger"/></a>
            <h3 class="text-2xl text-center font-bold pt-5 pb-2">Resort</h3>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl lg:mx-0 mx-2">
            <a href="https://www.dailyvorerpata.com/details.php?id=88105"><img :src="restaurant" alt="News_dailyvorerpata"/></a>
            <h3 class="text-2xl text-center font-bold pt-5 pb-2">Restaurant</h3>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl lg:mx-0 mx-2">
            <a href="https://ekattor.tv/news/article?article_id=39220"><img :src="sports" alt="News_ekattor mx-2"/></a>
            <h3 class="text-2xl text-center font-bold pt-5 pb-2">Health & Fitness</h3>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl lg:mx-0 mx-2">
            <a href="https://www.jamuna.tv/news/430374"><img :src="ecommerce" alt="News_jamuna"/></a>
            <h3 class="text-2xl text-center font-bold pt-5 pb-2">E-commerce</h3>
        </div>
        
    </div>
</template>
<script>
import resort from "../assets/resort.jpg";
import restaurant from "../assets/restaurant.jpg";
import sports from "../assets/sports.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import PageTitle from '../components/PageTitle.vue';
export default{
    name: 'SubscriptionBenifits',
    data() {
        return {
            resort,
            restaurant,
            sports,
            ecommerce
        }
    },
    components: { PageTitle},
}
</script>
<style lang="">
    
</style>