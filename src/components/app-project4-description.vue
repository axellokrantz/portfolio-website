<template>
    <div class="row">
      <div class="col-lg-6 third">
      <p class="headline-1">
          Cyberjammer is an online step sequencer that allows users to collaborate on beat-making sessions.
        </p>
      </div>
      <div class="col-lg-6">
        <p class="info">Created during the course 'Interactive design and the dynamic web' at KTH.
          <br>Interface was chosen as the best among a pool of over 100 other groups.
        </p>

      </div>
      

      <div class="col-lg-6 first">
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
          <span class="tag vue">Vue</span>
        </p>
        </div>

      <div class="col-lg-6 second">
        <img src="../assets/cyberjammer1.png" class="image"/>
      </div>

    </div>
    
</template>

<script>
import '../app.css'
  export default {
    name: 'app-project4-description.vue',
  }

</script>

<style scoped>

.image{
  max-width: 100%;
}

.row{
  padding: 0px;
  margin: 5px;
}

.material-symbols-outlined {
  text-decoration: none;
  font-size: 19px;
  vertical-align: middle;
  font-variation-settings:
  'FILL' 0,
  'wght' 600,
  'GRAD' 0,
  'opsz' 48
  
}
.first{
  background-color: pink;
  padding: 0px;
  padding-right: 20px;
  margin: 0px
}
.second{
  background-color: purple;
  padding: 0px;
  margin: 0px;
}

.third{
  padding: 0px;
  margin: 0px;
  background-color: greenyellow;
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

.tag::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.javascript::before {
  background-color: yellow;
}

.css::before {
  background-color: purple;
}

.html::before {
  background-color: orange;
}

.vue::before {
  background-color: green;
}

</style>
