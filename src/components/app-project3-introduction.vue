<template>

    <div>
        <div class="row">
            <div class="col-lg-6 first-col">
                <p class="headline-1">
                    Image steganography is the practice of concealing information within an image to avoid detection.
                    Steganography can be used to hide any type of digital content, including text, image, video, or audio.
                    That hidden data is then extracted at its destination.
                </p>
            </div>
            <div class="col-lg-6">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <p class="body-copy">
                This program hides data in the least significant bits of an image's pixels. A pixel holds the value of BGR, (blue, green, red) each color is 1 byte each. Meaning at most the user could store 24 bits of data in each pixel, but the pixel would then be heavily altered colorwise.<br><br>
                Suppose you want to conceal n bits of data in each color level of a pixel. Then you could use the following scheme. Say that you want to conceal the data value v in a color level c. The program then alters the color level slightly so that it becomes c', such that c' mod 2^n = v. To extract the concealed data, the program takes the color level modulo 2^n.<br><br>
                <img src="@/assets/steganography2.png" class="centered-image"><br><br>
                The program takes two files as input: one data file with the data to be concealed, and one target file, the image, and generates a third file as output with the result. The program conceals the data file in the data of the target file and writes the result to the output file. The n value is a parameter of the program, controlling how much data is stored in each color level.
                </p>
            </div>
            <div class="col-lg-6">
                <img src="@/assets/steganography1.png" class="image">
                <br><br>
                <p class="body-copy">
                    Link to the Steganography Image Generator can be found <a class="body-copy" href="https://github.com/axellokrantz/DH2642-cyber-jammer">here</a>
                <a class="material-symbols-outlined" href="https://github.com/axellokrantz/IV1013-computer-security/tree/main/steganography">arrow_outward</a>
                <br>
                <span class="tag java">Java</span> 
                </p>
            </div>
        </div>
    </div>

</template>

<script>
import '@/app.css'
export default{
    component: 'app-project3-introduction.vue'
}
</script>

<style>
.image{
    max-width: 75%;
}

.centered-image {
  display: block;
  margin: 0 auto;
  width: 80%;
}

.java::before {
  background-color: orange;
}

.tag::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

</style>