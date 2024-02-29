<template>
  <div>
    <Carousel/>
    <Introduction/>
    <Media/>
  </div>

</template>

<script>
import '@/app.css';
import Introduction from '@/components/app-project2-introduction.vue'
import Carousel from '@/components/app-project2-carousel.vue'
import Media from '@/components/app-project2-media.vue'


export default {
  name: 'project-2',
  components: {Introduction, Carousel, Media}
};
</script>