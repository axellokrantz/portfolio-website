<template>
    <div class="row">
        <div class="col-lg-3 col-sm-12">
            <h1 class="headline-1">
                Skills
            </h1>
        </div>
        <div class="col-lg-9 col-sm-12">
            <div class="row">
                <div class="col-lg-3 col-sm-12 order-sm-1">
                    <p class="body-copy underline">
                        Languages
                    </p>
                    <ul class="list-unstyled body-copy">
                        <li>JavaScript</li>
                        <li>HTML, CSS</li>
                        <li>Java</li>
                        <li>Elixir</li>
                        <li>PostgreSQL</li>
                        <li>C, C++</li>
                        <li>Python</li>
                        <li>Assembly (MAL)</li>
                        <li>R</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-12 order-sm-2">
                    <p class="body-copy underline">
                        Other
                    </p>
                    <ul class="list-unstyled body-copy">
                        <li>Adobe Suite</li>
                        <li>Microsoft 365</li>
                        <li>Mathematica</li>
                        <li>Vue CLI, React</li>
                        <li>Boostrap</li>
                        <li>Lucidchart</li>
                        <li>Astah</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-12 order-sm-3">
                    <p class="body-copy underline">
                        Hardware
                    </p>
                    <ul class="list-unstyled body-copy">
                        <li>Arduino UNO</li>
                        <li>Raspberry pi</li>
                        <li>Daisy Seed</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "app-skills",
}
</script>

<style scoped>

.underline {
    text-decoration: underline;
}

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
    line-height: 1.25;
    margin-left: 0px;
  }
</style>