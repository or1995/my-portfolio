<template>
    <base-card scrollan="fade-up">
        <div class="skill">
            <div class="title">
                <h3>{{title}}</h3>
            </div>
            <ul class="skilllist">
                <slot></slot>
            </ul>
            <div class="arrowsone">
                <div class="arrowsup">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                </div>
                <div class="arrowsdown">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                </div>
            </div>
            <div class="arrowstwo">
                 <div class="arrowsup">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                </div>
                <div class="arrowsdown">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                </div>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    .skill {
        width: 30rem;
        height: 30rem;
        background-color: var(--main-dark-color);
        position: relative;
        overflow: hidden;
        padding-top: 1rem;
    }

    .title {
        width: 100%;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title h3 {
        font-size: 2.3rem;
        font-family: var(--main-font);
        font-weight: 400;
        color: var(--light-text);
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