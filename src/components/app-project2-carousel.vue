<template>
    <div class="row">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" class="img" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">❮ Previous</a>
      <a class="next" @click="next" href="#">❯ Next</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "app-project2-carousel",
    data() {
  return {
    images: [
      require('@/assets/thumbnail1.png'),
      require('@/assets/thumbnail2.png'),
      require('@/assets/test1.png')
    ],
    timer: null,
    currentIndex: 0
  };
},

    mounted: function() {
      this.startSlide();
    },
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },
      next: function() {
        this.currentIndex += 1;
      },
      prev: function() {
        this.currentIndex -= 1;
      }
    },
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>
  
<style>

.img{
    width: 100%;
  }

</style>