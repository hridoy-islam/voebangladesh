<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programms', href: '/programs' },
  { name: 'Advisors', href: '/advisors' },
  { name: 'Ambassadors', href: '/ambassadors' },
  { name: 'Publication', href: '/publication' },
  { name: 'Updates', href: '/updates' },
  { name: 'Subscribe', href: '/subscribe' },
  { name: 'Contact', href: '/contact' },
]
</script>
<template>
  <Disclosure as="nav" class="" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex py-4 items-center justify-around">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex absolute left-80 items-center justify-center rounded-md p-2 text-primary hover:bg-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-shrink-0 items-center">
            <router-link to="/"><img class="h-20 w-auto" src="../assets/logo.jpg" alt="Your Company" /></router-link>
          </div>
        <div class="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex  space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-secondary text-white' : 'text-black hover:bg-secondary hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="" :to="item.href" :class="[item.current ? 'bg-secondary text-white' : 'text-black hover:bg-secondary hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>




