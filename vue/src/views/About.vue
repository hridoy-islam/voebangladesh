<script>
import PageTitle from '../components/PageTitle.vue';
import AboutMission from '../components/AboutMission.vue';
import BannerImage from '../assets/banner.jpeg'

export default {
  name: 'About',
    components: { PageTitle, AboutMission},
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
        <p class="my-2">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes Bangladeshi engineers' contributions, struggles, and sacrifices through daily news, alerts, and online programs. This is a platform for technical discussion, information and experience sharing, and the generation of new concepts, inventions, and recommendations for the betterment of Bangladesh. VOE is currently working as a collaborative partner of the Institution of Engineers, Bangladesh-IEB, Dhaka Centre. </p>
        <p class="my-2">VOE aspires to create a broad professional network among Bangladeshi engineers while also advocating for their rights. Our main goal in achieving our vision and missions is to create unity and connectivity among Bangladeshi engineers through our social media platforms and website.</p>
      </div>
      <div>
        <img class="w-10/12 mx-auto rounded-xl" :src="BannerImage" />
      </div>
      
    </div>
        <div >
           <AboutMission/>
        </div>
        <div >
           <Slider/>
        </div>
        <!-- <div>
           <h2>Our Advisors</h2>
            <p>We are fortunate to have the assistance and advice of our Advisors as we continue on the path of Voice of Engineers Bangladesh. Our advisors are divided into two categories: Honorary Senior Advisors and Honorary Advisors. Honorary Advisors are those who started their engineering careers after the year 2000, i.e., passed the HSC Exam in the year 2000 or onwards, while Honorary Senior Advisors started their careers before that.</p>
        </div>  -->
  </template>
  
 