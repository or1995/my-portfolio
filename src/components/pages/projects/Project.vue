<template>
    <base-card scrollan="fade-up">
        <router-link :to="link" class="project" :style="bordered ? 'border: 5px solid var(--accent-color)' : null">
            <div class="prism" v-if="prism"></div>
            <div class="imgcontainer">
                <slot>
                </slot>
            </div>
            <div class="title" v-if="!hidetitle">
                <h3><span>{{titlefirst}} </span>{{titlerest}}</h3>
            </div>
            <div class="overlay"></div>
        </router-link>
    </base-card>
</template>

<script>
export default {
    props: {
        title: String,
        prism: Boolean,
        hidetitle: Boolean,
        bordered: Boolean
    },
    computed: {
        link() {
            return '/projects/' + this.title.toLowerCase().replaceAll(' ', '');
        },
        titlefirst() {
            return this.title.split(' ')[0];
        },
        titlerest() {
            const namearr = this.title.split(' ');
            let rest = ''
            for(let i = 1;i < namearr.length; i++ ) {
                rest = rest + ' ' +  namearr[i];
            }
            return rest;
        }
    }
}
</script>

<style scoped>
    .project {
        height: 19rem;
        background-color: var(--main-dark-color);
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        cursor: pointer;
    }

    .prism {
        position: absolute;
        top: -30%;
        left: -100%;
        height: 150%;
        width: 12rem;
        transform: rotate(20deg);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%);
        animation: prismani 2s infinite;
        z-index: 100000000;
    }

    .imgcontainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        overflow: hidden;
    }

    .project .title {
        transform: translateX(0%);
        transition: all .3s;
    }

    .title {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: var(--main-very-dark-color);
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        transform: translateX(-100%);
        transition: all .3s;
        pointer-events: none;
        z-index: 10000000;
    }

    /*.title::before {
        content: '';
        position: absolute;
        width: 110%;
        top: -15%;
        left: -14%;
        height: 100%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        background-color: var(--main-very-dark-color);
    }*/

    .title h3 {
        font-family: var(--main-font);
        color: var(--light-text);
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 500;
        z-index: 11000;
        /*transform: rotate(-90deg);*/
        white-space: nowrap;
    }

    .title h3 span {
        color: var(--accent-color);
    }

    .overlay {
        opacity: .2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9000000;
        background-color: var(--main-very-light-color);
        pointer-events: none;
        transition: all .3s;
    }

    .project:hover .overlay {
        opacity: 0;
        transition: all .3s;
    }


    @media only screen and (max-width: 1366px) {
        .project {
            height: 14rem;
        }

        .title h3 {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 1000px) {
        .project {
            height: 16rem;
        }
    }

    @media only screen and (max-width: 750px) {
        .project {
            height: 22rem;
        }

        .title h3 {
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 500px) {
        .project {
            height: 17rem;
        }
    }
</style>

<style>
    @keyframes prismani {
        0% {
            transform: translateX(0) rotate(20deg);;
        }
        100% {
            transform: translateX(100rem) rotate(20deg);;
        }
    }
</style>