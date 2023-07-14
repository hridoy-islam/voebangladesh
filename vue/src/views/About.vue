<template>
    <PageTitle title="About"></PageTitle>
    <div class="my-16 flex justify-between container mx-auto">
      <div class="w-2/4 mx-auto">
        <p class="my-2">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes Bangladeshi engineers' contributions, struggles, and sacrifices through daily news, alerts, and online programs. This is a platform for technical discussion, information and experience sharing, and the generation of new concepts, inventions, and recommendations for the betterment of Bangladesh. VOE is currently working as a collaborative partner of the Institution of Engineers, Bangladesh-IEB, Dhaka Centre. </p>
        <p class="my-2">VOE aspires to create a broad professional network among Bangladeshi engineers while also advocating for their rights. Our main goal in achieving our vision and missions is to create unity and connectivity among Bangladeshi engineers through our social media platforms and website.</p>
      </div>
      <div>
        <img class="w-10/12 mx-auto" :src="BannerImage" />
      </div>
      
    </div>
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 my-16 container mx-auto">
           <aboutDetails v-for="(data, x) in aboutDetails" :key="x" :about="data" />
        </div>
        <!-- <div>
           <h2>Our Advisors</h2>
            <p>We are fortunate to have the assistance and advice of our Advisors as we continue on the path of Voice of Engineers Bangladesh. Our advisors are divided into two categories: Honorary Senior Advisors and Honorary Advisors. Honorary Advisors are those who started their engineering careers after the year 2000, i.e., passed the HSC Exam in the year 2000 or onwards, while Honorary Senior Advisors started their careers before that.</p>
        </div>  -->
  </template>
  
  <script>
import PageTitle from '../components/PageTitle.vue';
import aboutDetails from '../components/AboutDetails.vue'
import BannerImage from '../assets/banner.jpeg'

export default {
    components: { PageTitle, aboutDetails },
    data() {
        return {
          BannerImage,
            aboutDetails: [
                {
                    name: 'Our Mission',
                    title: 'The contribution and efforts of Engineers are not vigilantly visible to our society and country as well. Our fundamental mission is to apprise engineers role in the operation, maintenance, and development of Bangladesh.'
                },
                {
                    name: 'Our Vision',
                    title: 'Our vision is to be a loud voice for Engineers Rights and Dignities in Bangladesh. In the near future,  through our Technical Discussions, Workshops, Idea and Technical solution hunting programs, we will be able to assist the Government with the cooperation of IEB.'
                },
                {
                    name: 'What are we doing Now',
                    title: 'Currently, we are running eleven different types of Virtual Programs in a sequential order, each with its own type name and program subject. We have used social media to share Engineers optimistic feelings, accomplishments, sacrifice, and effort. Were also working along with the IEB Dhaka Centres ICT-related standing committee to host online Tech-Talk services.'
                },
                {
                    name: 'Our Future Plans',
                    title: 'We are at the inception phase of our journey. In the following phase, we are well planned to conduct Technical Workshops, Idea hunting and Technical hackathons countrywide.'
                },

                // {
                //     name: 'Our Advisors',
                //     title: 'We are fortunate to have the assistance and advice of our Advisors as we continue on the path of Voice of Engineers Bangladesh. Our advisors are divided into two categories: Honorary Senior Advisors and Honorary Advisors. Honorary Advisors are those who started their engineering careers after the year 2000, i.e., passed the HSC Exam in the year 2000 or onwards, while Honorary Senior Advisors started their careers before that.'
                // },
                

            ]
        }
    },
}
  
  </script>