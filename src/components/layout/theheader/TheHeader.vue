<template>
    <teleport to="body">
        <div class="smallheader">
            <button class="menubutton" :class="{'menubuttonshawn': mmenu}" @click="() => {mmenu = !mmenu}">
                <div :class="{'btop': mmenu}"></div>
                <div :class="{'bmid': mmenu}"></div>
                <div :class="{'bbottom': mmenu}"></div>
            </button>
            <div class="menu" :class="{'menushawn': mmenu}" @click="() => {mmenu = !mmenu}">
                <router-link class="smallnav-button"  to="/">
                    <h1>HOME</h1>
                </router-link>
                <router-link class="smallnav-button" :class="{'router-link-active':$route.fullPath.includes('projects'), 'router-link-exact-active':$route.fullPath.includes('projects')}" to="/projects">
                    <h1>PROJECTS</h1>
                </router-link>
                <router-link class="smallnav-button" to="/resume">
                    <h1>RESUME</h1>
                </router-link>
                <router-link class="smallnav-button" to="/contact">
                    <h1>CONTACT ME</h1>
                </router-link>
                <router-link class="smallnav-button" to="/about">
                    <h1>ABOUT ME</h1>
                </router-link>
            </div>
        </div>
    </teleport>
    <header>
        <div class="logodiv" :class="{logorotate: notTop}">
            <o-logo :size="notTop ? 'small' : 'medium'"></o-logo>
        </div>
        <div class="nav-buttons">
            <router-link class="nav-button one" :class="{'router-link-active':$route.fullPath.includes('projects'), 'router-link-exact-active':$route.fullPath.includes('projects')}" to="/projects">
                <h1><span>P</span>ROJECTS</h1>
            </router-link>
            <router-link class="nav-button two" to="/resume">
                <h1><span>R</span>ESUME</h1>
            </router-link>
            <router-link class="nav-button three" to="/contact">
                <h1><span>C</span>ONTACT ME</h1>
            </router-link>
            <router-link class="nav-button four" to="/about">
                <h1><span>A</span>BOUT ME</h1>
            </router-link>
        </div>
    </header>    
</template>

<script>
export default {
    data() {
        return {
            notTop: false,
            mmenu: false
        }
    },
    mounted() {
        document.addEventListener('scroll', () => {
            const lastKnownScrollPosition = window.scrollY;

            if (lastKnownScrollPosition > 200) {
                this.notTop = true;
            } else {
                this.notTop = false;
            }
        });
    }
}
</script>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 5rem;
    height: 100vh;
    background-color: var(--main-dark-color);
    box-shadow: 4px -1px 11px -3px rgba(0,0,0,0.50);
    overflow: hidden;
    z-index: 10000;
}

.logodiv {
    margin-top: 4rem;
    transform: rotate(-90deg);
    transition: all .3s;
}

.logorotate {
    margin-top: 1rem;
    transform: rotate(0deg);
    transition: all .3s;
}

.nav-buttons {
    position: relative;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.nav-button::before {
    opacity: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: calc(7.5rem - 4px);
    left: 0;
    background-color: var(--accent-color);
    transition: all .3s;
}

.nav-button {
    text-decoration: none;
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
    transition: all .3;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}

.one h1 {
    animation: buttonshowtext 1s;
}

.two h1 {
    animation: buttonshowtext 1s;
}

.three h1 {
    animation: buttonshowtext 1s;
}

.four h1 {
    animation: buttonshowtext 1s;
}

.nav-button h1 {
    color: var(--main-light-color);
    font-family: var(--main-font);
    font-size: 1.4rem;
    font-weight: 400;
    transition: all .3s;
}
/*
.nav-button h1 span{
    color: var(--light-text);
    padding-right: 4px;
    padding-left: 4px;
    background-color: var(--accent-color);
}*/

.smallheader {
    z-index: 100000000;
}

.nav-button:hover::before{
    opacity: 1;
    transition: all .3s;
}

.nav-button:hover h1 {
    color: var(--light-text);
}

.menubutton {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem; 
    background-color: var(--accent-color);
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 15px;
    border: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.38);
    z-index: 100000000;
    outline: none;
    transition: all .3s;
    cursor: pointer;
}

.menubuttonshawn {
    background-color: transparent;
    box-shadow: none;
    transition: all .3s;
}

.menubutton div {
    height: 4px;
    width: 30px;
    background-color: var(--main-dark-color);
    border-radius: 2px;
    transition: all .3s;
}

.menu {
    pointer-events: none;
    opacity: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10000000;
    height: 100vh;
    background-color: var(--accent-color);
    background: linear-gradient(310deg, rgba(245,189,110,1) 0%, rgba(245,175,78,1) 100%);
    transition: all .5s;
}

.menushawn {
    pointer-events: all;
    opacity: 1;
    transition: all .5s;
}

.smallnav-button {
    text-decoration: none;
    color: var(--main-color);
    font-family: var(--main-font);
}

.smallnav-button:focus,
.smallnav-button:active,
.smallnav-button:hover {
    text-decoration: underline;
    color: var(--main-color);
}



.btop {
    transform-origin: 0px 0px;
    transition: all .3s;
}

.bbottom {
    transform-origin: 0px 0px;
    transition: all .3s;
}

.bmid {
    transform: translateX(8px);
    transition: all .3s;
}

@media only screen and (max-width: 1919px) { 
    header {
        overflow-y: auto;
        width: 4.5rem;
    }

    .nav-buttons {
        position: relative;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    .nav-button {
        height: 7.5rem;
        width: 10rem;
    }

    .nav-button h1 {
        font-size: 1rem;
        font-weight: 500;
    }
}

@media only screen and (max-width: 600px) { 
    header {
        display: none;
    }

    .menubutton {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
}
</style>

<style>
@keyframes buttonshowtext {
    0% {
        color: var(--main-light-color);
    }
    50% {
        color: var(--light-text);
    }
    100% {
        color: var(--main-light-color);
    }
}
</style>