<template>
  <PageTitle title="Contact Us" />
  <div class=" bg-white py-12 sm:py-12 lg:px-8 container mx-auto">
    <div class="lg:flex justify-between ">
      <div class="lg:w-6/12 lg:mx-0 w-11/12 mx-auto">
          <div class="mx-auto text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Now</h2>
            
          </div>
          <form action="#" method="POST" class="mx-auto mt-3  sm:mt-10">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                <div class="mt-2.5">
                  <input type="number" name="phone" id="phone" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              
            </div>
            <div class="mt-10">
              <button type="submit" class="block w-full rounded-md bg-gradient-to-r from-primary to-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>
      </div>
      <div class="lg:w-6/12 lg:mx-0 w-11/12 mx-auto lg:pt-0 pt-12 lg:ml-36 lg:text-left text-center">
        <h3 class="text-4xl font-bold pb-8">JOIN OUR TEAM AS</h3>
        <p class="text-lg pb-1 font-medium">HONORARY SENIOR ADVISOR</p>
        <p class="text-lg pb-1 font-medium">HONORARY ADVISOR</p>
        <p class="text-lg pb-1 font-medium">HONORARY AMBASSADOR</p>
        <p class="text-lg pb-3 font-medium">CAMPUS AMBASSADOR</p>
        <p class="text-xl  font-semibold text-green-500">JUST WHATSAPP US !!!</p>
        <p class="text-xl pb-1 font-semibold text-green-500">01512-333-555</p>
        <div class="pt-8">
          <p class="text-md my-3 flex items-center font-semibold">
             <a href=""><img class="w-12 pr-4" :src="browser" alt=""></a> WWW.VOEBD.COM</p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="https://www.facebook.com/VoE.Bangladesh/"><img class="w-12 pr-4" :src="facebook" alt=""></a>VOE.BANGLADESH</p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="https://www.youtube.com/@voe.bangladesh"><img class="w-12 pr-4" :src="utube" alt=""></a> VOEBD</p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="https://wa.me/01512333555"><img class="w-12 pr-4" :src="whatsapp" alt=""></a> +8801512-333-555,   +8801512-333-666</p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="tel:8801512444888"><img class="w-12 pr-4" :src="mobile" alt=""></a> +8801512-333-555 (FRONT DESK) </p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="mailto:voe.bangladesh@gmail.com"><img class="w-12 pr-4" :src="mail" alt=""></a> VOE.BANGLADESH@GMAIL.COM </p>
          <p class="text-md my-3 flex items-center font-semibold">
             <a href="http://www.facebook.com/groups/VoE.Bangladesh"><img class="w-12 pr-4" :src="fb_group" alt=""></a>Facebook.com/groups/VoE.Bangladesh</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import browser from "../assets/browser.jpg"
import facebook from "../assets/facebook.png"
import utube from "../assets/utube.png"
import whatsapp from "../assets/whatsapp.jpg"
import mobile from "../assets/mobile.png"
import mail from "../assets/mail.png"
import fb_group from "../assets/fb_group.png"
import PageTitle from '../components/PageTitle.vue';

const agreed = ref(false)
</script>