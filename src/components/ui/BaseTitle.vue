<template>
    <div class="title" data-aos="fade-right">
        <h1><span>{{firstLetter}}</span>{{rest}}</h1>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    props: ['text'],
    computed: {
        firstLetter() {
            return this.text.substring(0,1);
        },
        rest() {
            return this.text.substring(1);
        }
    },
    created() {
        AOS.init()
    }
}
</script>

<style scoped>
    .title {
        width: 112rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2rem .4rem;
    }

    .title div {
        height: .5rem;
        width: 25rem;
        background-color: var(--accent-color);
        box-shadow: 0 0px 5px rgba(0,0,0,0.2);
    }

    .title h1 {
        font-family: var(--main-font);
        font-size: 2.5rem;
        color: var(--light-text);
        text-transform: uppercase;
        font-weight: 400;
        display: flex;
        align-items: flex-start;
        text-shadow: 0px 2px 5px rgba(0,0,0,0.2);
    }

    .title span {
        color: var(--accent-color);
    }

    @media only screen and (max-width: 1919px) {
        .title {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1366px) {
        .title h1 {
            font-size: 2rem;
        }
    }
</style>