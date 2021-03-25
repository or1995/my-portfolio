<template>
  <the-header></the-header>
  <div class="main-container">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/theheader/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap'); /* font-family: 'Fascinate', cursive; */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap'); /* font-family: 'Cinzel', serif; */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); /* font-family: 'Montserrat', sans-serif; */
:root {
  /* colors */
  
  --light-text: #f0f0f0;
  --dark-text: #12100E;
  --main-light-color: #313550;
  --main-color: #2C2F47;
  --main-dark-color: #1A1D2B;
  --main-very-dark-color: #171A26;
  --accent-light-color: #F5C684;
  --accent-color: #F5AF4E;
  --alert-color: #d72638;
  /*
  --light-text: #f0f0f0;
  --grey-text: #ebebeb;
  --main-light-color: #213054;
  --main-color: #1A2642;
  --main-dark-color: #141D33;
  --main-very-dark-color: #121A2E;
  --accent-light-color: #FF475A;
  --accent-color: #d72638;
  --accenr-dark-color: #ad102b;
  */
  /* fonts */
  --main-font: 'Montserrat', sans-serif; 
  --title-font: 'Cinzel', serif;
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

.router-link-active h1 {
  color: var(--light-text) !important;
}

.route-enter-active {
  animation: routeani .2s ease-in;
}

.route-leave-active {
  animation: routeani .2s ease-in reverse;
}

@keyframes routeani {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
