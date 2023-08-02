<template>
    <div class="row">
      <div class="col-6">
        <video autoplay muted loop>
          <source :src="require('@/assets/mobil_smartbrew.mp4')" type="video/mp4">
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


</style>

