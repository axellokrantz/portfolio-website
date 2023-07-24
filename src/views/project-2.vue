<template>
  <div>
    <Introduction/>
    <Carousel/>
  </div>

</template>

<script>
import '@/app.css';
import Introduction from '@/components/app-project2-introduction.vue'
import Carousel from '@/components/app-project2-carousel.vue'


export default {
  name: 'project-2',
  components: {Introduction, Carousel}
};
</script>