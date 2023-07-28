<template lang="">
<div class="carousel" data-flickity='{ "autoPlay": true }'>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
</div>
</template>
<script >
export default {
    data: () => ({
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      script.onload = () => {
    resolve(import(someComponent))
   }
   script.async = true
      recaptchaScript.setAttribute('src', src="/path/to/flickity.pkgd.min.js")
      document.head.appendChild(recaptchaScript)
    },
    methods: {
    }
  }

  $('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
  var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
</script>

<style lang="">
<link rel="stylesheet" href="/path/to/flickity.css" media="screen">
.carousel {
  background: #EEE;
}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  border-radius: 5px;
  counter-increment: gallery-cell;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}


</style>