<template>
    <router-link v-if="link" class="linkbutton">
        <slot></slot>
    </router-link>
    <button v-else>
        <slot></slot>
    </button>    
</template>

<script>
export default {
    props: {
        link: Boolean
    }
}
</script>

<style scoped>
    .linkbutton {
        background-color: var(--accent-color);
        display: flex;
        align-items: center;
        justify-content: center;
        padding:0.7em 1.4em;
        border-radius:2px;
        text-transform:uppercase;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        width: fit-content;
        font-family: var(--main-font);
        text-decoration: none;
        color: var(--light-text);
        transition: all .3s;
    }

    .linkbutton:hover {
        background-color: var(--accent-light-color);
        transition: all .3s;
    }

    .linkbutton:active {
        transform: translateY(2px);
        transition: all .3s;
    }
</style>