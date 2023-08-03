<template lang="">
    <div class="Modal">
        <Modal :size="full" v-if="store.state.modal" @close="closeModal">

          <template #body>

            <iframe  class="w-full lg:h-72 h-64" :src="store.state.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </template>
            </Modal>
      </div>
</template>
<script setup>
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import store from "../store/Index";

function closeModal() {
    store.commit('closeModal');
    store.commit('setUrl', "");
}

</script>
