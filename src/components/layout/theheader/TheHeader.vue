<template>
    <header>
        <div class="logodiv" :class="{logorotate: notTop}">
            <o-logo :size="notTop ? 'small' : 'medium'"></o-logo>
        </div>
        <div class="nav-buttons">
            <router-link class="nav-button one" to="/projects">
                <h1><span>P</span>ROJECTS</h1>
            </router-link>
            <router-link class="nav-button two" to="/skills">
                <h1><span>S</span>KILLS</h1>
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
            notTop: false
        }
    },
    mounted() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
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
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.nav-button {
    text-decoration: none;
    margin-bottom: 1rem;
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
    transition: all .3;
}

.one {
    animation: buttonshow .3s;
}

.two {
    animation: buttonshow .3s .3s;
}

.three {
    animation: buttonshow .3s .6s;
}

.four {
    animation: buttonshow .3s .9s;
}

.one h1 {
    animation: buttonshowtext .3s;
}

.two h1 {
    animation: buttonshowtext .3s .3s;
}

.three h1 {
    animation: buttonshowtext .3s .6s;
}

.four h1 {
    animation: buttonshowtext .3s .9s;
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

.nav-button:hover {
    background-color: var(--accent-color);
    box-shadow: 0 2px 4px rgba(0,0,0,0.38);
    transition: all .3s;
}

.nav-button:hover h1 {
    color: var(--light-text);
}
</style>

<style>
@keyframes buttonshow {
    0% {
        background-color: transparent;
        box-shadow: none;
    }
    50% {
        background-color: var(--accent-color);
        box-shadow: 0 2px 4px rgba(0,0,0,0.38);
    }
    100% {
        background-color: transparent;
        box-shadow: none;
    }
}

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