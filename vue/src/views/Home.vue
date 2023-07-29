<script >
import BannerImage from '../assets/banner.jpeg';
import HeroImage from '../assets/hero_banner.png';
import theTimeline from '../assets/thetimeline.jpg';
import { Carousel } from 'flowbite-vue'
import AboutMission from '../components/AboutMission.vue';
import SlickSliderComponent from '../components/SlickSliderComponent.vue';
import video from '../assets/video.mp4';
import whatsapp from "../assets/whatsapp.jpg"
export default {
  name: 'Home',
    components: { AboutMission, SlickSliderComponent },
    data() {
        return {
          BannerImage,
          video,
          whatsapp
        }
    },
}

const pictures = [
  {
    'src': HeroImage,
    'alt': 'Picture 1',
  },
  {
    'src': theTimeline,
    'alt': 'Picture 2',
  }
]
</script>
<template>
    
    <div>
         <div class="bg-white z-0 d-none">
            <!-- <div class="relative isolate bg-gradient-to-r from-primary to-secondary px-6 pt-14 lg:px-8">

                <div class="mx-auto max-w-2xl py-12 sm:py-20 lg:py-20">

                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Voice of Engineers Bangladesh
                        </h1>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <router-link to="/about"
                                class="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">About
                               US</router-link>
                            <router-link to="/programs" class="text-sm font-semibold leading-6 text-white">Our Programms
                                <span aria-hidden="true">→</span></router-link>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="">
                <SlickSliderComponent/>
            </div>

        </div>
        <div class="lg:my-16 my-8 lg:flex justify-between items-center container mx-auto">

            <div class="lg:w-6/12 sm:mx-2 mx-2 lg:mx-auto">
                <h2 class="lg:text-4xl text-2xl font-bold pb-3">Voice of Engineers Bangladesh</h2>
                <p class="my-3 text-md fo">The Voice of Engineers-Bangladesh (VOE) is an online platform that promotes
                    Bangladeshi engineers contributions, struggles, and sacrifices through daily news, alerts, and online
                    programs. This is a platform for technical discussion, information and experience sharing, and the
                    generation of new concepts, inventions, and recommendations for the betterment of Bangladesh. VOE is
                    currently working as a collaborative partner of the Institution of Engineers, Bangladesh-IEB, Dhaka
                    Centre.
                </p>
            </div>
            <div class="lg:w-5/12">
                
                <iframe class="lg:w-full w-11/12 mx-auto" height="315" src="https://www.youtube.com/embed/6XjPX7dKcVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>
        <div>
            <AboutMission/>
        </div>
        <div class="container mx-auto my-12 ">
            <div class="lg:w-9/12 mx-4 my-4 lg:my-0 lg:mx-auto">
          <h2 class="text-4xl font-bold text-center">Our Updates</h2>
          <p class="my-2 text-lg font-normal pt-3 text-justify">Currently, we are running eleven different types of Virtual Programs in a sequential order, each with its own type name and program subject. We have used social media to share Engineer’s optimistic feelings, accomplishments, sacrifice, and effort. We’re also working along with the IEB Dhaka Centre’s ICT-related standing committee to host online Tech-Talk services. </p>
            </div>
            <div>
                
            </div>
        </div>
        <div>
            <a class="fixed bottom-20 right-10 bg-none z-50" href="https://wa.me/01512333555"><img class="w-20 pr-4" :src="whatsapp" alt=""></a> 
        </div>
        <div>
        </div>
    </div>
</template>


