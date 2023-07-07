<template>
    <div class="row">
      <div class="col-lg-3 col-sm-11 order-sm-1">
        <h1 class="headline-1">About</h1>
      </div>
      <div class="col-lg-8 col-sm-12 order-sm-2">
        <p class="headline-2">
          I'm a creative with over 10 years of experience in the advertising industry.
          Now transitioning into computer science, I am driven by a passion for problem-solving and technology.
          Combining my creative background with a determination to learn, I am poised to make an impact in this exciting field.
        </p>
      </div>
      <div class="col-lg-3 col-sm-12 order-sm-3">
        <img src="../assets/pfp.jpg" class="pfp-image">
      </div>
      <div class="col-lg-7 col-sm-12 order-sm-4">
        <p class="body-copy">
          When the COVID-19 pandemic hit, I began to contemplate the possibility of pursuing my true passion for computers, games, and technology.
          I realized that this could be the perfect moment in my life to make a change.
          Driven by the desire to follow my dreams, I applied to KTH and was thrilled to be accepted.
          Without hesitation, I took the leap, resigned from my advertising job, and embarked on an exciting new journey towards my interests in the world of technology.
        </p>
      </div>
    </div>
</template>

<script>
export default{
    name: 'app-introduction.vue'
}
</script>

<style scoped>

.row{
  padding: 0px;
  margin: 5px;
}
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

.col-lg-7{
  margin: 0px;
  padding: 10px;
  background-color: brown;
}

.body-copy{
    font-size: 20px;
    color: rgb(20, 20, 20);
    font-weight: medium;
    text-align: left;
    line-height: 1.25;
  }

  .pfp-image {
  width: 100%;
}

  @media (max-width: 767px) { 
    .pfp-image{
      padding-bottom: 20px;
    }
  }

</style>