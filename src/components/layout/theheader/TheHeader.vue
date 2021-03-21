<template>
    <header>
        <div class="logodiv" :class="{logorotate: notTop}">
            <o-logo :size="notTop ? 'small' : 'medium'"></o-logo>
        </div>
        <div>

        </div>
    </header>    
</template>

<script>
export default {
    data() {
        return {
            notTop: false
        }
    },
    mounted() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const lastKnownScrollPosition = window.scrollY;

            if (lastKnownScrollPosition > 200) {
                this.notTop = true;
            } else {
                this.notTop = false;
            }
        });
    }
}
</script>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 5rem;
    height: 100vh;
    background-color: var(--main-dark-color);
    box-shadow: 4px -1px 11px -3px rgba(0,0,0,0.50);
    padding: .5rem;
    overflow: hidden;
    z-index: 10000;
}

.logodiv {
    margin-top: 4rem;
    transform: rotate(90deg);
    transition: all .3s;
}

.logorotate {
    margin-top: 1rem;
    transform: rotate(0deg);
    transition: all .3s;
}
</style>