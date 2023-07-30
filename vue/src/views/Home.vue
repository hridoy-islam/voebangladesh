<script >
import BannerImage from '../assets/banner.jpeg';
import HeroImage from '../assets/hero_banner.png';
import theTimeline from '../assets/thetimeline.jpg';
import { Carousel } from 'flowbite-vue'
import AboutMission from '../components/AboutMission.vue';
import SlickSliderComponent from '../components/SlickSliderComponent.vue';
import UpdateGallery from '../components/UpdateGallery.vue';
import video from '../assets/video.mp4';
export default {
  name: 'Home',
    components: { AboutMission, SlickSliderComponent, UpdateGallery },
    data() {
        return {
          BannerImage,
          video,
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
            </div>
            <div>
                <UpdateGallery/>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>


