<template>
    <div class="row">
      <div class="col-lg-3 col-sm-12">
        <h1 class="headline-1">
          Awards
        </h1>
      </div>
      <div class="col-lg-9 col-sm-12">
        <div v-for="award in awards" :key="award.name" class="row">
          <div class="col-lg-3 col-sm-12">
            <p class="body-copy">
              {{ award.name }}
            </p>
          </div>
          <div class="col-lg-6 col-sm-12">
            <p class="body-copy">
              {{ award.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        awards: [
          { name: "Guldägget", details: "x1 Gold, x2 Silver, x3 Bronze" },
          { name: "Webby Awards", details: "x1 Gold" },
          { name: "Cannes Lions", details: "x1 Shortlist PR" },
          { name: "Future Lions", details: "x1 Gold" },
          { name: "Epica", details: "x1 Gold, x3 Silver" },
          { name: "One Show", details: "x3 Merit, x1 Bronze Pencil" },
          { name: "LIA", details: "x2 Bronze, x2 Silver" },
          { name: "Cresta Awards", details: "x1 Silver, x1 Bronze" },
          { name: "100 Wattaren", details: "x1 50 Watt" },
        ],
      };
    },
  };
</script>

<style scoped>
.row{
  padding: 0px;
  margin: 5px;
}
.col-lg-3{
  background-color: yellow;
  padding: 0px;
  margin: 0px;
}
.col-lg-6{
  padding-left: 0px;
  margin: 0px;
  background-color: chartreuse;
}

.col-lg-9{
  background-color: pink;
  padding: 0px;
  margin: 0px;
}

.body-copy{
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 0.1;
    margin-top: 10px;
  }
</style>