<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 custom-col" v-for="(image, index) in images" :key="index">
        <a :href="getImageUrl(index)">
          <img :src="require(`@/assets/thumbnail${image.id}`)" class="img-fluid custom-img-thumbnail" style="width: 100%;">
        </a>
        <p class="image-text">{{ imageText(index) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: "1.png", text: "Citric-03" },
        { id: "2.png", text: "Smart Brew" },
        { id: "3.gif", text: "Image Steganography" },
        { id: "4.png", text: "Cyberjammer" },
        { id: "5.png", text: "Image 5" },
        { id: "6.png", text: "Image 6" }
      ]
    };
  },
  methods: {
    getImageUrl(index) {
      return `/project-${index + 1}`;
    },
    imageText(index) {
      return this.images[index].text;
    }
  }
};
</script>

<style scoped>
.row {
  margin-right: 0px;
  margin-left: 0px;
}

.col-lg-4 {
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 30px;
}


.container {
  background-color: yellowgreen;
  padding: 0px;
  margin: 0px;
}

.image-text {
  font-size: 20px;
  color: rgb(20, 20, 20);
  font-weight: medium;
  text-align: left;
}
</style>

