<script>
import aboutDetails from '../components/AboutDetails.vue'
import mission from '../assets/mission.png'
import vission from '../assets/vission.png'
import advisor from '../assets/advisor.png'
import future from '../assets/future.png'
export default {
    name: 'AboutMission',
    components: { aboutDetails},
    data() {
        return {
            aboutDetails: [
                {
                  image:mission,
                    name: 'Our Mission',
                    title: 'The contribution and efforts of Engineers are not vigilantly visible to our society and country as well. Our fundamental mission is to apprise engineers role in the operation, maintenance, and development of Bangladesh.'
                },
                {
                  image:vission,
                    name: 'Our Vision',
                    title: 'Our vision is to be a loud voice for Engineers Rights and Dignities in Bangladesh. In the future,  through our Technical Discussions, Idea and solution hunting programs, we will be able to assist the Government with the cooperation of IEB.'
                },
                {
                  image:advisor,
                    name: 'Our Advisors',
                    title: 'We are fortunate to have the assistance and advice of our Advisors as we continue on the path of Voice of Engineers Bangladesh. Our advisors are divided into two categories: Honorary Advisors started their careers before that.'
                },
                
                {
                  image:future,
                    name: 'Our Future Plans',
                    title: 'We are at the inception phase of our journey. In the following phase, we are well planned to conduct Technical Workshops, Technical Discussions, Idea and solution hunting and Technical hackathons countrywide.'
                },
                // {
                //     name: 'What are we doing Now',
                //     title: 'Currently, we are running eleven different types of Virtual Programs in a sequential order, each with its own type name and program subject. We have used social media to share Engineers optimistic feelings, accomplishments, sacrifice, and effort. Were also working along with the IEB Dhaka Centres ICT-related standing committee to host online Tech-Talk services.'
                // },
                

            ]
        }
    },
}
</script>
<template lang="">

        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 my-16 container mx-auto">
           <aboutDetails v-for="(data, x) in aboutDetails" :key="x" :about="data" />
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto my-24 ">
          <div class="lg:w-9/12 mx-4 my-4 lg:my-0 lg:mx-auto  p-16">
          <h2 class="text-4xl font-bold text-center">What are we doing Now</h2>
          <p class="my-2 text-lg font-normal pt-3 text-justify">Currently, we are running eleven different types of Virtual Programs in a sequential order, each with its own type name and program subject. We have used social media to share Engineer’s optimistic feelings, accomplishments, sacrifice, and effort. We’re also working along with the IEB Dhaka Centre’s ICT-related standing committee to host online Tech-Talk services. </p>
          <p class="my-2 text-lg font-normal pt-3 text-justify">
            We collect information from responsible Engineers on various issues including professional achievements of Engineers, Technical success stories, Observance of special days, attacks on engineers in different parts of the country, Birthday Poster for renowned Engineers, Sad news of Death of Engineers and distribute them in the form of pictures and video content. Our slogan is “Spread of Unity through Publicity”. To find all of our Virtual Programs just visit playlists of our <a class="text-red-500 font-semibold" href="https://www.youtube.com/@voe.bangladesh">YouTube Channel.</a>
          </p> 
      </div>
        </div>
        </div>


</template>

<style lang="">
    
</style>