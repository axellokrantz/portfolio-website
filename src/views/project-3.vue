<template>
  <Introduction/>
</template>

<script>
import '@/app.css';
import Introduction from '@/components/app-project3-introduction.vue';

export default {
  name: 'project-3',
  components: { Introduction }
};
</script>

<style>
.image{
  width:100%;
}

.body-copy{
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 1.25;
    margin-left: 0px;
    text-decoration: none;
}
</style>