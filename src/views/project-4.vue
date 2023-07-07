<template>
    <Introduction/>
    <Video1/>
    <Description/>
  </template>

<script>
import '@/app.css';
import Video1 from '@/components/app-project4-video1.vue'
import Description from '@/components/app-project4-description.vue'
import Introduction from '@/components/app-project4-introduction.vue'

export default {
  name: 'project-4',
  components: { Introduction, Video1, Description }
};
</script>