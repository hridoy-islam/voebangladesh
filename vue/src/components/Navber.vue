<template>
    <div>
        <nav class="px-6 py-8  md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <router-link to="/"><img class="h-20 w-auto" src="../assets/logo.jpg" alt="Your Company" /></router-link>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ">
                <router-link class="text-lg" to="/">Home</router-link>
                <router-link class="text-lg" to="/about">About Us</router-link>
                <router-link class="text-lg" to="/programs">Programs</router-link>
                <router-link class="text-lg" to="/advisors">Advisors</router-link>
                <router-link class="text-lg" to="/ambassadors">Ambassadors</router-link>
                <router-link class="text-lg" to="/publication">Publication</router-link>
                <router-link class="text-lg" to="/updates">Updates</router-link>
                <li>
                    <div class="relative">
                        <!-- Dropdown toggle button -->
                        <button @click="toggleNav" @onfocusout="toggleHide" class="
                  flex
                  items-center
                  rounded-md
                  focus:outline-none

                ">
                            <span class="mr-4 text-lg">Subscribe</span>
                            <svg class="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div v-show="showMenu" class="
                  py-2
                  mt-2
                  rounded-md
                  shadow-md
                  lg:absolute lg:right-0
                  w-56
                  z-40
                  bg-gray-100

                ">
                            <router-link to="/subscribe" class="
                    px-4
                    py-3
                    text-lg
                    block
                  ">
                                Subscribe Us
                            </router-link>
                            <router-link to="/subscribe-benefits" class="
                    px-4
                    py-3
                    text-lg
                    block
                  ">
                                Subscription Benefits
                            </router-link>
                        </div>
                    </div>
                </li>
                <router-link class="text-lg" to="/contact">Contact</router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        const toggleHide = () => (showMenu.value = false)
        return { showMenu, toggleNav, toggleHide };
    },
};
</script>
