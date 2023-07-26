<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Modal></Modal>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Modal from '../components/Modal.vue';
export default {
    components: {
        Header,
        Footer,
        Modal,
    }
}
</script>

<style></style>
