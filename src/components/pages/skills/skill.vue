<template>
    <base-card scrollan="fade-up">
        <div class="skill">
            <div class="title">
                <h3><span>{{firstLetter}}</span>{{otherLetters}}</h3>
            </div>
            <ul class="skilllist">
                <slot></slot>
            </ul>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['title'],
    computed: {
        firstLetter() {
            return this.title.substring(0,1);
        },
        otherLetters() {
            return this.title.substring(1);
        }
    }
}
</script>

<style scoped>
    .skill {
        width: 36.5rem;
        height: 30rem;
        background-color: var(--main-dark-color);
        background: var(--gradient);
        position: relative;
        overflow: hidden;
        padding-top: 1rem;
    }

    .title {
        width: 100%;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title h3 {
        font-size: 2.3rem;
        font-family: var(--main-font);
        font-weight: 400;
        color: var(--light-text);
        text-transform: uppercase;
    }

    .title h3 span {
        color: var(--accent-color);
        
    }

    .skilllist {
        width: 100%;
        padding-left: 2rem;
        padding-right: 1rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .arrowsone {
        position: absolute;
        top: -5rem;
        right: -2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-45deg);
    }

    .arrowstwo {
        position: absolute;
        bottom: -5rem;
        left: -2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-45deg);
    }

    .arrowsup {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }

    .arrowsup svg {
        fill: var(--main-very-dark-color);
        height: 4rem;
        width: auto;
        transform: rotate(-90deg);
    }

    .arrowsdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .arrowsdown svg {
        fill: var(--main-very-dark-color);
        height: 4rem;
        width: auto;
        transform: rotate(90deg);
    }
</style>