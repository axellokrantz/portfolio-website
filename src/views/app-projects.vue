<template>
    <div>
      <div class="row">
        <div class="col-8">
          <div class="headline-1">
            Hello! my name is Axel Lokrantz Månson, and I am an art director currently pursuing computer science at KTH Royal Institute of Technology in Stockholm Sweden.
          </div>
        </div>
      </div>
      <Grid/>
    </div>
  </template>
  
<script>
import Grid from '@/components/app-grid.vue';
import '../app.css';

export default {
    name: 'app-projects',
    components: {
        Grid
    }
}
</script>

<style scoped>

.row{
  padding: 0px;
  margin: 5px;
}
.headline-1 {
    font-size: 38px;
    font-weight: medium;
    text-align: left;
    margin: 0px;
    color: rgb(20, 20, 20);
    line-height: 1.25;
    padding-bottom: 40px;
  }
  
  .col-8{
    margin: 0px;
    padding: 0px;
  }

</style>