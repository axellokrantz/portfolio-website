<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8 col-sm-12">
        <div class="flex-container">
          <div class="logotype"><Logotype/></div>
          <div class="navigation"><Navigation/></div>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Navigation from './components/app-navigation.vue'
import Logotype from './components/app-logo.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Logotype,
  }
}
</script>

<style scoped>
.col-md-8 {
  background-color: cyan;
  padding: 0px;
  margin: 0px;
}
.container-fluid {
  background-color: blue;
  padding-top: 50px;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 0 20px;
}

.logotype {
  display: flex;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 20px;
}

</style>
