<template>
  <h1 class="col-lg-6 headline-1">
    Smart Brew
  </h1>
  <div class="arrow-container">
    <a class="prev" @click="prev($event)" :class="{ disabled: currentIndex === 0 }" href="#">
      <i class="material-icons-outlined">arrow_back</i>
    </a>
    <transition-group name="slide-fade" tag="div">
      <div :key="currentIndex">
        <img :src="currentImg" class="img" />
      </div>
    </transition-group>
    <a class="next" @click="next($event)" :class="{ disabled: currentIndex === images.length - 1 }" href="#">
      <i class="material-icons-outlined">arrow_forward</i>
    </a>
  </div>
</template>

<script>
export default {
  name: "app-project2-carousel",
  data() {
    return {
      images: [
        require('@/assets/montage2.png'),
        require('@/assets/montage1.png')
      ],
      currentIndex: 0,
      isTransitioning: false // New data property to track the transition state
    };
  },
  methods: {
    next: function(event) {
      event.preventDefault();
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        const nextIndex = this.currentIndex + 1;
        this.currentIndex = nextIndex % this.images.length;
        setTimeout(() => {
          this.isTransitioning = false;
        }, 300); // The transition duration in milliseconds (adjust as needed)
      }
    },
    prev: function(event) {
      event.preventDefault();
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        const nextIndex = this.currentIndex - 1;
        this.currentIndex = (nextIndex + this.images.length) % this.images.length;
        setTimeout(() => {
          this.isTransitioning = false;
        }, 300); // The transition duration in milliseconds (adjust as needed)
      }
    }
  },
  computed: {
    currentImg: function() {
      return this.images[this.currentIndex];
    }
  }
};
</script>

<style>
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.img {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
}

.prev,
.next {
  font-family: monospace;
  cursor: pointer;
  font-size: 30px; /* Change the font size to adjust the arrow size */
  color: #000; /* Change the color as needed */
  text-decoration: none;
}

.disabled {
  pointer-events: none; /* Disable click events on the disabled arrow */
  opacity: 0.5; /* Change the opacity to visually indicate that it's disabled */
}



</style>