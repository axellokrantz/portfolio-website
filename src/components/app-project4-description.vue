<template>
    <div class="row gx-4 custom-row">
      <div class="col-lg-6">
        <p class="headline-1">
          Cyberjammer is an online step sequencer that allows users to collaborate on beat-making sessions.
        </p>
        <p class="body-copy">Cyberjammer is developed using the Vue framework in the MVP (Model-View-Presenter) architecture, providing an intuitive web interface for creating and manipulating audio.
          Powered by the Tone.js library, Cyberjammer offers a diverse selection of instruments, including synths, drums, and pianos, enabling users to explore and unleash their creativity.
          The integration of Firebase facilitates seamless real-time collaboration, allowing users and their friends to collectively craft beats and immerse themselves in a dynamic music-making experience.
        </p>
      </div>
      <div class="col-lg-6">
        <img src="../assets/cyberjammer1.png" class="image"/>
      </div>
    </div>
    
    <div class="row gx-4 custom-row">
        <div class="col-6"/>
        <div class="col-lg-6">
        <p class="body-copy">
          This project was created during the course Interactive programming and the dynamic web DH2642 at KTH.
          <br><br>
          Link to website can be found <a class="body-copy" href="https://cyberjammer-40b7c.web.app/feed">here</a>
          <br>
          Link to GitHub repository can be found <a class="body-copy" href="https://github.com/axellokrantz/DH2642-cyber-jammer">here</a>
          <br>
          <span class="tag javascript">JavaScript</span>, 
          <span class="tag html">HTML</span>, 
          <span class="tag css">CSS</span>, 
          <span class="tag vue">Vue</span>
        </p>
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

.body-copy{
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 1.25;
    margin-left: 0px;
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
