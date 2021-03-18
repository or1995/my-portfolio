<template>
  <the-header></the-header>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/theheader/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  mounted() {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap'); /* font-family: 'Fascinate', cursive; */
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'); /* font-family: 'Fredoka One', cursive; */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); /* font-family: 'Montserrat', sans-serif; */
:root {
  /* colors */
  --main-light-color: #223e43;
  --main-color: #223e43;
  --main-dark-color: #152b2d;
  --main-very-dark-color: #132729;
  --accent-light-color: #e33452;
  --accent-color: #c3203c;
  --accenr-dark-color: #ad102b;
  /* fonts */
  --main-font: 'Montserrat', sans-serif; 
  --title-color: 'Fredoka One', cursive;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
body {
  background-color: var(--main-color);
}

.main-container {
  width: calc(100% - 5rem);
  margin-left: 5rem;
}

</style>
