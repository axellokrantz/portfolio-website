<template>
  <div>
    <Carousel/>
    <Introduction/>
    <Video/>
  </div>

</template>

<script>
import '@/app.css';
import Introduction from '@/components/app-project2-introduction.vue'
import Carousel from '@/components/app-project2-carousel.vue'
import Video from '@/components/app-project2-video1.vue'


export default {
  name: 'project-2',
  components: {Introduction, Carousel, Video}
};
</script>