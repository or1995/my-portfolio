<template>
    <base-card>
        <div  class="carousel">
                <div v-if="pagenum === 1" class="carouselpage page1">
                    <slot name="1"></slot>
                </div>
                <div v-else-if="pagenum === 2" class="carouselpage page2">
                    <slot name="2"></slot>
                </div>
                <div v-else-if="pagenum === 3" class="carouselpage page3">
                    <slot name="3"></slot>
                </div>
                <div class="log">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                    </svg>
                    <svg viewBox="0 0 149 184" class="o" ref="o" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <button @click="back">back</button>
    <button @click="next">next</button>
</template>

<script>
export default {
    data() {
        return {
            pagenum: 1,
            theInterval: null
        }
    },
    mounted() {
        this.turnpage();
    },
    methods: {
        turnpage() {
            this.theInterval = setInterval(() => {
                if(this.pagenum < 3) {
                    this.pagenum = this.pagenum + 1;
                } else if (this.pagenum === 3) {
                    this.pagenum = 1;
                }
            }, 500000);
        },
        next() {
            clearInterval(this.theInterval);
            if(this.pagenum < 3) {
                this.pagenum = this.pagenum + 1;
            } else if (this.pagenum === 3) {
                this.pagenum = 1;
            }
            this.turnpage();
        },
        back() {
            clearInterval(this.theInterval);
            if(this.pagenum > 1) {
                this.pagenum = this.pagenum - 1;
            } else if (this.pagenum === 1) {
                this.pagenum = 3;
            }
            this.turnpage();
        }
    }
}
</script>

<style scoped>
    .carousel {
        width: 100%;
        height: 50rem;
        position: relative;
        overflow: hidden;
    }

    .carouselpage {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .pic {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .pic img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }

    .svgs {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .svgs svg {
        width: 12rem;
    }

    .dessvg {
        height: 10rem !important;
        width: auto !important;
        margin-right: 2rem;
    }

    .textdiv {
        margin-left: 3rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        border-left: 4px solid var(--accent-color);
        padding-left: 3rem;
        z-index: 10000;
    }

    .textdiv h1 {
        opacity: 0;
        font-weight: 400;
        animation: textdivani .5s forwards;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--title-font);
        color: var(--light-text);
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .textdiv h1 span {
        color: var(--accent-color);
    }

    .textdiv ul{
        list-style: none;
        z-index: 10000;
    }

    .textdiv ul li {
        font-family: var(--main-font);
        font-size: 2rem;
        color: var(--grey-text);
        margin-bottom: .4rem;
        animation: textdivani 1s forwards;
    }

    .page1 {
        background-color: var(--main-dark-color);
    }

    .page2 {
        background-color: var(--main-dark-color);
    }

    .page3 {
        background-color: var(--main-dark-color);
    }

    .car-enter-active {
        animation: carani .2s ease-in;
    }

    .car-leave-active {
        animation: carani .2s ease-in reverse;
    }

    .log {
        position: absolute;
        bottom: -5%;
        right: -30%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 0;
    }

    .log svg {
        
        height: 30rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .o {
        height: 28rem !important;
    }
</style>

<style>
    @keyframes carani {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes textdivani {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>