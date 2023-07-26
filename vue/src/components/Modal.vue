<template lang="">
    <div class="Modal">
        <Modal :size="full" v-if="store.state.modal" @close="closeModal">

          <template #body>

            <iframe width="560" height="315" :src="store.state.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
