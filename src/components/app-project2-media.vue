<template>
    <div class="row">
      <div class="col-12">
        <img src="@/assets/breakdown.png" class="centered-image">
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <video autoplay muted loop>
          <source :src="require('@/assets/smartbrew_mobile.mp4')" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="col-lg-6 first-col">
        <p class="body-copy">Cyberjammer is developed using the Vue framework in the MVP (Model-View-Presenter) architecture, providing an intuitive web interface for creating and manipulating audio.
          Powered by the Tone.js web audio framework, Cyberjammer offers a diverse selection of instruments, including synths, drums, and pianos, enabling users to explore and unleash their creativity.
          The integration of Firebase facilitates seamless real-time collaboration, allowing users and their friends to collectively craft beats and immerse themselves in a dynamic music-making experience.
          <br>
        </p>
        <p class="body-copy">
          Link to website can be found <a class="body-copy" href="https://cyberjammer-40b7c.web.app/feed">here</a>
          <a class="material-symbols-outlined" href="https://cyberjammer-40b7c.web.app/feed">arrow_outward</a>
          <br>
          Link to GitHub repository can be found <a class="body-copy" href="https://github.com/axellokrantz/DH2642-cyber-jammer">here</a>
          <a class="material-symbols-outlined" href="https://github.com/axellokrantz/DH2642-cyber-jammer">arrow_outward</a>
          <br>
          <span class="tag javascript">JavaScript</span>, 
          <span class="tag html">HTML</span>, 
          <span class="tag css">CSS</span>, 
          <span class="tag react">React</span>
        </p>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'app-project4-video1',
};
</script>

<style scoped>

.centered-image{
  width: 100%;
  padding-bottom: 20px;
}

video {
  width: 100%;
  padding-bottom: 50px;
}

.img{
  width: 100%;
  margin: 0px;
  padding: 0px;
}


</style>

