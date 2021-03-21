<template>
    <base-card scrollan="fade-up">
        <div class="project">
            <div class="prism"></div>
            <slot>
            </slot>
            <div class="title">
                <h3>{{title}}</h3>
            </div>
            <div class="overlay"></div>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    .project {
        width: 100%;
        height: 18rem;
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
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0) 100%);
        animation: prismani 2s infinite;
        z-index: 100000;
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
        top:70%;
        left: 0;
        width: 15rem;
        height: 3.5rem;
        background-color: var(--accent-color);
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        transform: translateX(-100%);
        transition: all .3s;
        pointer-events: none;
        z-index: 10000;
    }

    .title::before {
        content: '';
        position: absolute;
        width: 110%;
        top: -15%;
        left: -14%;
        height: 100%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        background-color: var(--main-very-dark-color);
    }

    .title h3 {
        font-family: var(--main-font);
        color: var(--light-text);
        font-size: 1.4rem;
        font-weight: 300;
        z-index: 11000;
        margin-top: -8%;
        margin-left: -5%;
    }

    .overlay {
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9000;
        background-color: #000;
        pointer-events: none;
        transition: all .3s;
    }

    .project:hover .overlay {
        opacity: 0;
        transition: all .3s;
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