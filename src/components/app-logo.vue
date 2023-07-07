<template>
    <div class="logotype">
        <router-link to="/projects">
            <img src="../assets/logo.png" class="logo-image">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'app-logotype'
}
</script>

<style scoped>
.logo-image {
    width: 150px;
}
</style>