<template>  
  <AppIntroduction/>
  <hr>
  <AppExperience/>
  <hr>
  <AppEducation/>
  <hr>
  <AppAwards/>
  <hr>
  <AppSkills/>
</template>


<script>
import '@/app.css';
import AppAwards from '@/components/app-awards.vue';
import AppSkills from '@/components/app-skills.vue';
import AppIntroduction from '@/components/app-introduction.vue';
import AppExperience from '@/components/app-experience.vue';
import AppEducation from '@/components/app-education.vue';

export default {
    name: "app-about",
    components: { AppAwards, AppSkills, AppIntroduction, AppExperience, AppEducation }
};
</script>

<style scoped>
.line {
  height: 1px;
  background-color: rgb(0, 0, 0); 
  border: none; 
  opacity: 1; 
  margin: 0px;
  padding: 0px;
}

hr{
  margin: 5px;
  border: none;
  height: 1px;
  background-color: black;
  opacity: 1;
}

</style>

