<template>
    <router-link v-if="link" :class="{'normalbutton': !invert , 'invertbutton': invert}" >
        <slot></slot>
    </router-link>
    <button v-else class="normalbutton">
        <slot></slot>
    </button>    
</template>

<script>
export default {
    props: {
        link: Boolean,
        invert: Boolean,
        big: Boolean
    }
}
</script>

<style scoped>
    .normalbutton {
        background-color: var(--accent-color);
        display: flex;
        align-items: center;
        cursor: pointer;
        border: none;
        justify-content: center;
        padding:0.7em 1.4em;
        border-radius:2px;
        text-transform:uppercase;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        width: fit-content;
        font-family: var(--main-font);
        text-decoration: none;
        color: var(--light-text);
        outline: none;
        transition: all .3s;
    }

    .normalbutton:hover {
        background-color: var(--accent-light-color);
        transition: all .3s;
    }

    .invertbutton {
        background-color: var(--light-text);
        display: flex;
        align-items: center;
        justify-content: center;
        padding:0.7em 1.4em;
        border-radius:2px;
        outline: none;
        text-transform:uppercase;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        width: fit-content;
        font-family: var(--main-font);
        text-decoration: none;
        color: var(--accent-color);
        transition: all .3s;
    }

    .invertbutton:hover {
        background-color: #fff;
        transition: all .3s;
    }

    .linkbutton:active,
    .invertbutton:active {
        transform: translateY(2px);
        transition: all .3s;
    }
</style>