<template lang="">
 <div class="lg:w-6/12 sm:mx-2 mx-2 lg:mx-auto">
                <h2 class="lg:text-4xl text-2xl font-bold pb-3">Voice of Engineers Bangladesh</h2>
                <p class="my-3 text-md fo">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes
                    Bangladeshi engineers contributions, struggles, and sacrifices through daily news, alerts, and online
                    programs.
                </p>
            </div>
            <div class="grid lg:grid-cols-4 gap-6 container mx-auto my-12">
        <div class="p-4 bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.dailymessenger.net/bangla/bangladesh/news/5703"><img :src="News_Dailymessenger" alt="News_DailyMessenger"/></a>
            <h3></h3>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.dailyvorerpata.com/details.php?id=88105"><img :src="News_dailyvorerpata" alt="News_dailyvorerpata"/></a>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl flex items-center">
            <a href="https://ekattor.tv/news/article?article_id=39220"><img :src="News_ekattor" alt="News_ekattor"/></a>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl flex items-center">
            <a href="https://www.jamuna.tv/news/430374"><img :src="News_jamuna" alt="News_jamuna"/></a>
        </div>
        
    </div>
</template>
<script setup>
import News_Dailymessenger from "../assets/";
import News_dailyvorerpata from "../assets/News_dailyvorerpata.png";
import News_ekattor from "../assets/News_ekattor.png";
import News_jamuna from "../assets/News_jamuna.png";
</script>
<style lang="">
    
</style>