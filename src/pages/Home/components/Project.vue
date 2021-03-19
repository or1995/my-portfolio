<template>
    <base-card scrollan="flip-left">
        <div class="project">
            <div class="prism"></div>
            
        </div>
    </base-card>
</template>

<style scoped>
    .project {
        width: 100%;
        border: solid 5px var(--accent-color);
        height: 30rem;
        background-color: var(--main-dark-color);
        position: relative;
        overflow: hidden;
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