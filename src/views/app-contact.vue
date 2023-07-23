<template>
    <div class="row">
      <div class="col-lg-3 col-sm-11 order-sm-1">
        <h1 class="headline-1">
          Contact
        </h1>
      </div>
      <div class="col-lg-8 col-sm-12 order-sm-2">
    <p class="headline-2">
      Axel Månson Lokrantz
      <br>
      1990-01-25
      <br>
      +46 722 33 10 95
      <br>
      <a href="mailto:axel.lokrantz@gmail.com">axel.lokrantz@gmail.com</a>
      <br>
      <a href="https://linkedin.com/in/axellokrantz">
        LinkedIn Profile
      </a>
      <br>
      <a href="https://github.com/axellokrantz">
        GitHub Portfolio
      </a>
    </p>
    </div>

    </div>
  </template>

<script>
import '@/app.css';

export default {
  name: 'app-contact',
};
</script>

<style scoped>
.col-lg-8{
  background-color: orange;
  margin: 0px;
  padding: 10px;
}

.col-lg-3{
  background-color: yellow;
  padding: 0px;
  margin: 0px;
}

.row{
  padding: 0px;
  margin: 5px;
}

</style>