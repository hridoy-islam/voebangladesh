<template>
    <!-- <Header></Header> -->
    <Navber/>
    <router-view></router-view>
    <Footer></Footer>
    <Modal></Modal>
    <Whatsapp/>
</template>

<script>
import Footer from '../components/Footer.vue';
// import Header from '../components/Header.vue';
import Navber from '../components/Navber.vue';
import Modal from '../components/Modal.vue';
import Whatsapp from '../components/Whatsapp.vue';
export default {
    components: {
    // Header,
    Footer,
    Modal,
    Whatsapp,
    Navber
}
}
</script>

<style></style>
