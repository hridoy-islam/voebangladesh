<template lang="">
     <div class="relative isolate overflow-hidden bg-[#006637] py-10 sm:py-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-2xl text-white tracking-tight lg:text-5xl">{{title}}</h2>
                </div>
            </div>
        </div>
</template>
<script>
import store from '../store/Index'
export default {
    props: ['title'],
}
</script>
<style lang="">

</style>
