<template>
    <div class="logotype">
        <router-link to="/projects">
            <img src="../assets/logotype.png" class="logo-image">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'app-logotype'
}
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.logo-image {
    width: 130px;
    animation: spin 5s linear infinite;
}
</style>
