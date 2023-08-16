<script>
import PageTitle from '../components/PageTitle.vue';
import AboutMission from '../components/AboutMission.vue';
import BannerImage from '../assets/about.png'

export default {
    name: 'About',
    components: { PageTitle, AboutMission },
    data() {
        return {
            BannerImage,
        }
    },
}

</script>

<template>
    <PageTitle title="About Us"></PageTitle>
    <div class="lg:my-16 lg:flex justify-between items-center container mx-auto">
        <div class="lg:w-2/4 mx-4 my-4 lg:my-0 lg:mx-auto">
            <p class="my-2">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes Bangladeshi
                engineers' contributions, struggles, and sacrifices through daily news, alerts, and online programs. This is
                a platform for technical discussion, information and experience sharing, and the generation of new concepts,
                inventions, and recommendations for the betterment of Bangladesh. VOE is currently working as a
                collaborative partner of the Institution of Engineers, Bangladesh-IEB, Dhaka Centre. </p>
            <p class="my-2">VOE aspires to create a broad professional network among Bangladeshi engineers while also
                advocating for their rights. Our main goal in achieving our vision and missions is to create unity and
                connectivity among Bangladeshi engineers through our social media platforms and website.</p>
        </div>
        <div class="w-8/12">
            <img class="w-10/12 mx-auto rounded-xl" :src="BannerImage" />
        </div>

    </div>
    <div>
        <AboutMission />
        <div class="w-5/12 mx-auto mb-10">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rtTIf5CnYGg" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

