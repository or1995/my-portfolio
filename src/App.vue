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
  --light-text: #f0f0f0;
  --main-light-color: #223e43;
  --main-color: #223e43;
  --main-dark-color: #152b2d;
  --main-very-dark-color: #132729;
  --accent-light-color: #e33452;
  --accent-color: #c3203c;
  --accenr-dark-color: #ad102b;
  /* fonts */
  --main-font: 'Montserrat', sans-serif; 
  --title-font: 'Fredoka One', cursive;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--main-color);
}

::-moz-selection { /* Code for Firefox */
  color: #fff;
  background: var(--accent-color);
}

::selection {
  color: #fff;
  background: var(--accent-color);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--main-light-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--main-very-dark-color);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--main-very-dark-color);
}

.main-container {
  width: calc(100% - 5rem);
  margin-left: 5rem;
}

</style>
