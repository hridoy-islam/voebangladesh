<template lang="">
    <div>
            <a class="fixed lg:bottom-20 bottom-10 right-10 bg-none z-50" href="https://wa.me/01512333555"><img class="lg:w-20 w-16 pr-4" :src="whatsapp" alt=""></a> 
        </div>
</template>
<script>
import whatsapp from "../assets/whatsapp.jpg"
export default {
  name: 'Whatsapp',
    data() {
        return {
          whatsapp
        }
    },
}
</script>
<style lang="">
    
</style>