<template>
    <base-card>
        <div class="head" >
            <div class="logo-wrapper">
                <div class="logo" ref="logo">
                    <svg  viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                        <defs>
                            <filter id="f1" x="0" y="0" width="200%" height="200%">
                            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>
                        <path  overflow="visible" filter="url(#f1)" ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                    </svg>
                    <svg viewBox="0 0 149 184" class="o" ref="o" fill="none" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <g clip-path="url(#clip0)">
                        <path  overflow="visible" filter="url(#f1)" d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect  overflow="visible" filter="url(#f1)" width="148.9" height="183.3" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg style="margin-right: -2rem" viewBox="0 0 117 204" fill="none" class="slash" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <path filter="url(#f1)" id="slashpath" d="M54.3 204L117 0H62.7L0 204H54.3Z"  overflow="visible"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <path filter="url(#f1)" d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"  overflow="visible"/>
                    </svg>
                </div>
            </div>
            <div class="divider" ref="divide"></div>
            <div class="text-wrapper">
                <div class="text">
                    <h1>My Name is <span>Omar Ali</span></h1>
                    <p>From choosing colors to writing code, I love every aspect of web development and I want to know as much as I can. I like my work to look good and to be easy to use for the end user.</p>
                    <div>
                        <base-button link to="/projects">My Projects</base-button>
                    </div>
                </div>
            </div>
            <div class="mousewheel" ref="mousewheel">
                <div>
                </div>
            </div>
            <div class="overlaylogo">
                <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                </svg>
                <svg viewBox="0 0 149 184" class="overlayo" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="148.9" height="183.3" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg viewBox="0 0 117 204" fill="none" class="slash" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.3 204L117 0H62.7L0 204H54.3Z" />
                </svg>
                <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                </svg>
            </div>
        </div>
    </base-card>
</template>

<script>
//import anime from 'animejs/lib/anime.es.js';
export default {
    mounted() {
        document.addEventListener('scroll', this.mousewheel);
    },
    beforeUnmount() {
       document.removeEventListener('scroll', this.mousewheel);
    },
    methods: {
        mousewheel() {
            const lastKnownScrollPosition = window.scrollY;
            if (lastKnownScrollPosition > 0) {
                this.$refs.mousewheel.style.opacity = "0";
            } 
        }
    }
}
</script>

<style scoped>
    .head {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100vh - 2rem); /* maybe will be 40rem */
        background:  linear-gradient(124deg, rgba(23,26,38,.98) 0%, rgba(26,29,43,.98) 100%), url("../../../assets/back/back1.jpg") no-repeat center center;
        background-size: cover;
        position: relative;
       /* border: solid 5px var(--accent-color);*/ /* considering removing */
        overflow: hidden;
        transition: all .3s;
    }
    .head:hover {
        border-color: var(--accent-light-color);
        transition: all .3s;
    }
    .logo {
        display: flex;
        width: 40rem;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1000;
        margin-right: 2rem;
        animation: logomove .5s .3s linear forwards;
    }
    .logo svg {
        height: 14rem;
        fill: #fff;
        padding: 1rem;
        margin-right: -2rem;
        transition: all .3s;
    }

    .logo svg path {
        overflow: visible;
        padding: 1rem;
    }

    .logo .o{
        height: 0;
        fill: var(--accent-color);
        transition: all .3s;
        margin-bottom: -1px;
        margin-right: -1.2rem;
        animation: scaling 1s linear forwards !important;
    }

    .slash {
        z-index: 1000;
    }

    .logo-wrapper {
        z-index: 1000;
        overflow: hidden;
    }
    .text-wrapper {
        z-index: 1000;
        overflow: hidden;
    }
    
    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        z-index: 1000;
        width: 40rem;
        height: 15rem;
        margin-left: 2rem;
    }
    .divider {
        width: 3px;
        height: 15rem;
        background-color: var(--accent-color);
        z-index: 1000;
    }
    .text h1 {
        font-family: var(--title-font);
        font-size: 2.8rem;
        text-transform: uppercase;
        font-weight: 400;
        color: var(--light-text);
        margin-bottom: .8rem;
        margin-top: -1rem;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        opacity: 0;
        animation: textani .5s .3s linear forwards;
    }

    .text h1 span {
        color: var(--accent-color);
        font-weight: 500;
    }

    .text p {
        font-family: var(--main-font);
        font-weight: 300;
        color: var(--grey-text);
        font-size: 1.3rem;
        line-height: 1.3;
        margin-bottom: 2rem;
        opacity: 0;
        animation: textani .5s .5s linear forwards;
    }
    .text div {
        width: 100%;
        display: flex;
        opacity: 0;
        animation: textani .5s .7s linear forwards;
    }
    .text div a {
        margin-right: .5rem;
    }
    .mousewheel {
        position: absolute;
        bottom: 5rem;
        width: 2rem;
        height: 6rem;
        border: 2px solid var(--accent-color);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        border-radius: 15px;
        z-index: 1000000;
        opacity: 0.4;
    }
    .mousewheel div {
        margin-top: 5px;
        width: 1rem;
        height: 2.5rem;
        background-color: var(--accent-color);
        border-radius: 8px;
        animation: mousewheelani 1s infinite;
    }

    .overlaylogo {
        opacity: .4;
        position: absolute;
        bottom: -20rem;
        left: -40rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1;
    }

    .overlaylogo svg {
        height: 50rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .overlayo {
        height: 46rem !important;
    }
</style>

<style>
    @keyframes scaling {
        0% {
            height: 0;
            opacity: 0;
            margin-right: -2rem;
        }
        50% {
            height: 0;
            opacity: 0;
            margin-right: -2rem;
        }
        75% {
            height: 13rem;
            opacity: 0;
            margin-right: -3.2rem;
        }
        100% {
            height: 13rem;
            opacity: 1;
            margin-right: -3.2rem;
        }
    }
    
    /*@keyframes logomove {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
            margin-right: 2rem;
        }
    }*/
    @keyframes textani {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes mousewheelani {
        0% {
            margin-top: 5px;
        }
        100% {
            margin-top: 150%;
        }
    }
</style>