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
@import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap'); /* font-family: 'Holtwood One SC', serif; */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); /* font-family: 'Montserrat', sans-serif; */
:root {
  /* colors */
  
  --light-text: #f0f0f0;
  --grey-text: #e0e0e0;
  --dark-text: #12100E;
  --main-light-color: #313550;
  --main-color: #2C2F47;
  --main-dark-color: #1A1D2B;
  --main-very-dark-color: #171A26;
  --accent-light-color: #F5BD6E;
  --accent-color: #F5AF4E;
  --accent-dark-color: #D49844;
  --alert-color: #d72638;

  /* gradient */
  --gradient: linear-gradient(124deg, rgba(23,26,38,1) 0%, rgba(26,29,43,1) 100%);
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
  --title-font: 'Montserrat', sans-serif; 
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
  color: var(--main-dark-color);
  background: var(--accent-color);
}

::selection {
  color: var(--main-dark-color);
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
  box-shadow: 0 4px 8px rgba(0,0,0,0.38);
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
  animation: routeaniin .3s ease-in;
}

.route-leave-active {
  animation: routeaniout .2s ease-in;
}

@keyframes routeaniin {
  0% {
    transform: translateY(-3rem);
    opacity: 0;
  }
  50% {
    
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes routeaniout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media only screen and (max-width: 1919px) {
  .main-container {
    width: calc(100% - 4.5rem);
    margin-left: 4.5rem;
  }
}

@media only screen and (max-width: 1300px) {
  html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 2560px) {
  html {
    font-size: 20px;
  }
}

@media only screen and (min-width: 3840px) {
  html {
    font-size: 25px;
  }
}

@media only screen and (max-width: 600px) {
  .main-container {
    width: 100%;
    margin-left: 0;
  }

  .router-link-active h1 {
    color: var(--main-color) !important;
    text-decoration: underline;
  }
}
</style>
