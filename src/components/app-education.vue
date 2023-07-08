<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-12">
        <h1 class="headline-1">Education</h1>
      </div>
      <div class="col-lg-9 col-sm-12">
        <div v-for="education in educations" :key="education.title" class="row">
          <div class="col-lg-3 col-sm-12">
            <p class="headline-2">{{ education.year }}</p>
          </div>
          <div class="col-lg-9 col-sm-12">
            <p class="headline-2">
              <a :href="education.schoolWebsite">{{ education.school }}</a>

            </p>
            <p class="body-copy">{{ education.degree }}</p>

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
        educations: [
          {
            year: "2021-2024",
            school: "KTH - Computer Engineering",
            schoolWebsite: "https://www.kth.se/social/program/tidab/",
            degree: "180hp Bachelor Degree in Computer Science"
          },
          
          {
            year: "2023",
            school: "DTU - Computer Engineering",
            schoolWebsite: "https://www.dtu.dk/english/education/undergraduate/undergraduate-programmes-in-danish/beng-programmes/computer-engineering",
            degree: "Exchange Studies, Denmark Cophenhagen."
          },

          {
            year: "2013-2016",
            school: "Beckmans College of Design",
            schoolWebsite: "https://www.kth.se/social/program/tidab/",
            degree: "180hp Bachelor Degree in Visual Communication."
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

.body-copy{
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 1.25;
  }
</style>
  