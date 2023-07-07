<template>
  <div class="sidebar">
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-navigation',
  props: {}
}
</script>

<style scoped>

.sidebar a {
  text-decoration: none;
  color: #000000;
  margin-left: 25px; /* Adjust the value as needed */
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 20px; /* Adjust the value as needed */
}

.sidebar a.router-link-active {
  text-decoration: underline;
}

</style>