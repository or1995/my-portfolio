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
                        <path  overflow="visible" ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                    </svg>
                    <svg viewBox="0 0 149 184" class="o" ref="o" fill="none" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <g clip-path="url(#clip0)">
                        <path  overflow="visible" d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect  overflow="visible" width="148.9" height="183.3" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg style="margin-right: -2rem" viewBox="0 0 117 204" fill="none" class="slash" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <path id="slashpath" d="M54.3 204L117 0H62.7L0 204H54.3Z"  overflow="visible"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg"  overflow="visible">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"  overflow="visible"/>
                    </svg>
                </div>
            </div>
            <!--<div class="divider" ref="divide"></div>-->
            <div class="text-wrapper">
                <div class="text">
                    <h1>My Name is <span>OMAR ALI</span></h1>
                    <p>I'm a web developer</p>
                    <div>
                        <base-button link cta to="/projects">My Projects</base-button>
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
            <div class="sidesocial">
                <div>
                    <a href="https://github.com/or1995" target="_blank">
                    <svg viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g><path fill="var(--accent-color)" d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/omar-ali-webdevelopment" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="var(--accent-color)"/><stop offset="1" stop-color="var(--accent-color)"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"/></svg>
                    </a>
                </div>
            </div>
            <div class="sideone"></div>
            <div class="sideother">
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
        border-radius: 5px;
        height: calc(100vh - 2rem); /* maybe will be 40rem */
        background:  linear-gradient(124deg, rgba(23,26,38,.995) 0%, rgba(26,29,43,.995) 100%), url("../../../assets/back/back1.jpg") no-repeat center center;
        background-size: cover;
        position: relative;
        overflow: hidden;
        transition: all .3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .logo {
        opacity: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1000;
        margin-right: 2rem;
        animation: logoani .3s .5s linear forwards;
    }
    .logo svg {
        height: 11.5rem;
        fill: var(--light-text);
        padding: 1rem;
        margin-right: -2rem;
        transition: all .3s;
    }

    .logo svg path {
        overflow: visible;
        padding: 1rem;
    }

    .logo .o{
        height: 10.5rem;
        fill: var(--accent-color);
        transition: all .3s;
        margin-bottom: -1px;
        margin-right: -3.2rem;
        animation: scaling 1s linear forwards !important;
    }

    .slash {
        z-index: 1000;
    }

    .logo-wrapper {
        z-index: 1000;
        overflow: hidden;
        flex: 1;
    }
    .text-wrapper {
        z-index: 1000;
        overflow: hidden;
        flex: 1;
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
    .text h1 {
        font-family: var(--title-font);
        font-size: 2.8rem;
        
        /*text-transform: uppercase;*/
        font-weight: 500;
        color: var(--light-text);
        margin-bottom: .1rem;
        margin-top: -1rem;
        opacity: 0;
        animation: textani .5s .3s linear forwards;
    }

    .text h1 span {
        color: var(--accent-color);
    }

    .text p {
        font-family: var(--main-font);
        font-weight: 400;
        color: var(--light-text);
        font-size: 1.6rem;
        margin-bottom: 2rem;
        opacity: 0;
        animation: textani .5s .5s linear forwards;
    }
    .text div {
        width: 100%;
        display: flex;
        opacity: 0;
        animation: textani .5s .8s linear forwards;
    }
    .text div a {
        margin-right: .5rem;
    }
    .mousewheel {
        position: absolute;
        bottom: 5rem;
        width: 1.2rem;
        height: 4.4rem;
        border: 1px solid var(--accent-color);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        border-radius: 15px;
        z-index: 1000000;
        opacity: 0.2;
    }
    .mousewheel div {
        margin-top: 2px;
        width: .7rem;
        height: 2rem;
        background-color: var(--accent-color);
        border-radius: 8px;
        animation: mousewheelani 2s infinite;
    }

    .overlaylogo {
        opacity: .5;
        position: absolute;
        bottom: 15rem;
        right: -23rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        transform: rotate(90deg);
        z-index: 1;
    }

    .overlaylogo svg {
        height: 25rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .overlayo {
        height: 22rem !important;
    }

    .sidesocial {
        position: absolute;
        width: 2.5rem;
        height: 14rem;
        /*background-color: var(--main-very-dark-color);*/
        left:0;
        top: calc(50% - 7rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        border-radius: 0 2px 2px 0; 
    }

    .sidesocial div {
        width: 2rem;
        height: 2rem;
        margin-right: -2rem;
        margin-bottom: 1rem;
        border-radius: 50%;
        background-color: var(--accent-color);
        border: 5px solid var(--main-dark-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;
    }

    .sidesocial div:hover {
        transform: rotate(360deg);
        transition: all .3s;
    }

    .sidesocial div a {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--main-dark-color);
    }

    .sidesocial div a svg {
        width: 2rem;
        height: auto;
    }

    .sideone {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5rem;
        background-color: var(--main-very-dark-color);
    }

    .sideother {
        position: absolute;
        width: .5rem;
        height: 14rem;
        background-color: var(--accent-color);
        right:0;
        top: calc(50% - 7rem);
        border-radius: 2px 0 0 2px;
    }

    @media only screen and (max-width: 1440px) { 
        .logo svg {
            height: 10rem;
        }

        .logo .o{
            height: 9rem;
            margin-right: -3rem;
        }

        .text {
            width: 30rem;
            height: 15rem;
        }
        .divider {
            width: 2px;
            height: 13rem;
        }

        .text h1 {
            font-size: 2rem;
        }

    }

    @media only screen and (max-width: 900px) { 
        .logo svg {
            height: 8rem;
        }

        .logo .o{
            margin-bottom: 0px;
            height: 7.3rem;
            margin-right: -2.8rem;
        }

        .text {
            width: 25rem;
            height: 15rem;
        }
        .divider {
            width: 2px;
        }

        .text h1 {
            font-size: 1.8rem;
            letter-spacing: 0px;
        }

        .text p {
            font-size: 1.4rem;
        }
    }

    @media only screen and (max-width: 760px) { 
        .head {
            flex-direction: column;
            /*border: solid 1px var(--accent-color);*/
        }

        .logo-wrapper {
            z-index: 1000;
            overflow: hidden;
            flex: initial;
        }
        .text-wrapper {
            z-index: 1000;
            overflow: hidden;
            flex: initial;
        }

        .logo svg {
            height: 5rem;
        }

        .logo .o{
            height: 4.6rem;
            margin-right: -2.4rem;
        }

        .divider {
            display: none;
        }

        .text {
            align-items: center;
            justify-content: center;
            width: 30rem;
            height: 12rem;
            margin-left: 0;
        }

        .text p {
            text-align: center;
        }

        .text div {
            justify-content: center;
        }
    }

    @media only screen and (max-width: 830px) {
        .sideone {
            display: none;
        }
        .sidesocial {
            display: none;
        }

        .sideother {
            display: none;
        }
    }

    @media only screen and (max-width: 500px) { 
        .head {
            flex-direction: column;
            /*border: solid 1px var(--accent-color);*/
        }

        .divider {
            display: none;
        }

        .text {
            align-items: center;
            justify-content: center;
            width: 23rem;
            margin-left: 0;
        }

        .text div {
            justify-content: center;
        }
    }

    @media only screen and (max-width: 440px) { 
        .text {
            align-items: center;
            justify-content: center;
            width: 20rem;
            margin-left: 0; 
        }

        .text h1 {
            font-size: 1.7rem;
        }
    }
</style>

<style> 
    @keyframes logoani {
        0% {
            opacity: 0;
            transform: translateX(1.5rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes textani {
        0% {
            opacity: 0;
            transform: translateY(1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes mousewheelani {
        0% {
            margin-top: 2px;
        }
        100% {
            margin-top: 200%;
        }
    }
</style>