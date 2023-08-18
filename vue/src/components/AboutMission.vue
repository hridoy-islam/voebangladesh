<script>
import aboutDetails from '../components/AboutDetails.vue'
import mission from '../assets/mission.png'
import vission from '../assets/vission.png'
import advisor from '../assets/advisor.png'
import future from '../assets/future.png'
export default {
    name: 'AboutMission',
    components: { aboutDetails },
    data() {
        return {
            aboutDetails: [
                {
                    image: mission,
                    name: 'Our Mission',
                    title: 'The contribution and efforts of Engineers are not vigilantly visible to our society and country as well. Our fundamental mission is to appraise engineer’s role in the operation, maintenance, and development of Bangladesh.'
                },
                {
                    image: vission,
                    name: 'Our Vision',
                    title: 'Our vision is to be a loud voice for Engineer’s Rights and Dignities in Bangladesh. In the near future, through our Technical Discussions, Workshops, Idea and Technical solution hunting programs, we will be able to assist the Government with the cooperation of IEB.'
                },
                // {
                //     image: advisor,
                //     name: 'Our Advisors',
                //     title: 'We are fortunate to have the assistance and advice of our Advisors as we continue of Voice of Engineers Bangladesh.Our advisors are divided into two categories: Honorary Advisors started their careers before that.'
                // },

                {
                    image: future,
                    name: 'Our Future Plans',
                    title: 'We are at the inception phase of our journey. In the following phase, we are well planned to conduct Technical Workshops, Idea hunting and Technical Hackathons countrywide. Besides, Recruitment of Campus Ambassadors in Engineering & Technology Universities, Honorary Ambassadors in Different Technical Organizations, Honorary Advisors of VOE is under Process and will be published in our website and social media platforms when finalised. '
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

        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 my-16 container mx-auto">
           <aboutDetails v-for="(data, x) in aboutDetails" :key="x" :about="data" />
        </div>
        <div class="bg-[#006637] text-white">
          <div class="container mx-auto lg:mt-24 py-4 lg:py-2">
          <div class="lg:w-9/12 mx-4 my-4 lg:my-0 lg:mx-auto  lg:p-16 p-4">
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
