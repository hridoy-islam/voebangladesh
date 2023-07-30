<script setup>
import { Navbar, NavbarCollapse } from 'flowbite-vue';
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>
<template>
    <Navbar>
      <template #logo>
        <router-link to="/"><img class="h-20 w-auto" src="../assets/logo.jpg" alt="Your Company" /></router-link>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <router-link class="text-lg" to="/">Home</router-link>
          <router-link class="text-lg" to="/about">About Us</router-link>
          <router-link class="text-lg" to="/programs">Programs</router-link>
          <router-link class="text-lg" to="/advisors">Advisors</router-link>
          <router-link class="text-lg" to="/ambassadors">Ambassadors</router-link>
          <router-link class="text-lg" to="/publication">Publication</router-link>
          <router-link class="text-lg" to="/updates">Updates</router-link>
          
          <dropdown class="z-50" text="Subscribe">
              <list-group>
                <list-group-item>
                  <router-link class="text-lg" to="/subscribe">Subscribe Us</router-link>
                </list-group-item>
                <list-group-item>
                  <router-link class="text-lg" to="/subscribe-benefits">Subscription Benefits</router-link>
                </list-group-item>
              </list-group>
          </dropdown>

          <router-link class="text-lg" to="/contact">Contact</router-link>
        </NavbarCollapse>
      </template>
    </Navbar>
</template>
<style>
.bg-blue-700{
  background: none;
  font-size: 18px;
  color: black;
  padding: 0;
}
.bg-blue-700:hover{
 background: none;
}
/* .divide-y{
  bottom: -130px !important;
} */
.w-48{
  width: 250px ;
}
.w-48 li{
  padding: 20px 15px;
}
</style>





