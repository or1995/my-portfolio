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
        width: 100%;
        height: 22rem;
        background-color: var(--main-dark-color);
        position: relative;
        overflow: hidden;
        display: flex;
    }

    .title {
        height: 100%;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-very-dark-color);
    }

    .title h3 {
        font-size: 2.3rem;
        font-family: var(--main-font);
        font-weight: 400;
        color: var(--light-text);
        text-transform: uppercase;
        transform: rotate(-90deg);
    }

    .title h3 span {
        color: var(--accent-color);
        
    }

    .skilllist {
        width: 100%;
        padding-left: .2rem;
        padding-right: .2rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 1500px) {
        .title h3 {
            font-size: 2rem;
        }
    }
</style>