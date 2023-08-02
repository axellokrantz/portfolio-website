<template>
  <div class="col-lg-3">
        <h1 class="headline-1">Cyberjammer</h1>
  </div>
    <div class="row">
      <div class="col-12">
        <video autoplay muted loop>
          <source :src="require('@/assets/cyberjammer.mp4')" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app-project4-video1',
};
</script>

<style scoped>

video {
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 50px;
}

.col-lg-3{
  margin: 5px;
}


</style>

