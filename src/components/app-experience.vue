<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-12">
        <h1 class="headline-1">Experience</h1>
      </div>
      <div class="col-lg-9 col-sm-12">
        <div v-for="experience in experiences" :key="experience.title" class="row">
          <div class="col-lg-3 col-sm-12">
            <p class="headline-2">{{ experience.year }}</p>
          </div>
          <div class="col-lg-9 col-sm-12">
            <p class="headline-2">
              <a :href="experience.companyWebsite">{{ experience.company }}</a>
              <br>
            </p>
            <p class="body-copy">{{ experience.role }}</p>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            year: "2020-2021",
            company: "Nothing / Seventy Agency",
            companyWebsite: "https://se.nothing.tech/",
            role: "Art Director, Stockholm Sweden"
          },

          {
            year: "2017",
            company: "Eurobest Young Creatives",
            companyWebsite: "https://www.eurobest.com/competitions",
            role: "Swedish Representative & Finalist."
          },

          {
            year: "2017",
            company: "Resumé Månadens Kampanj",
            companyWebsite: "https://www.resume.se/manadens-kampanj/",
            role: "Jury Representative in Print & Outdoor Category."
          },

          {
            year: "2016-2020",
            company: "King Advertising Agency",
            companyWebsite: "https://www.king.se/",
            role: "Art Director, Stockholm Sweden."
          },
          
        ]
      };
    }
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

.col-lg-9{
  background-color: pink;
  padding: 0px;
  margin: 0px;
}

.body-copy {
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 1.25;
  }
</style>