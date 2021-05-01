<template>
    <router-link v-if="link" class="normalbutton" :class="{'invertbutton': invert}" >
        <slot></slot>
    </router-link>
    <button v-else class="normalbutton" :class="{'invertbutton': invert}">
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
        padding:0.7rem 1.5rem;
        border-radius: 2px;
        border-bottom-right-radius: 1rem;
        text-transform: capitalize;
        font-size: 1.1rem;
        font-family: var(--main-font);
        font-weight: 500;
        text-decoration: none;
        color: var(--dark-text);
        outline: none;
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        transition: all .3s;
    }

    .normalbutton:hover {
        background-color: var(--accent-light-color);
        transition: all .3s;
    }

    .invertbutton {
        background-color: var(--accent-color);
        color: var(--dark-text);
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

    @media only screen and (max-width: 500px) { 
        .normalbutton {
            padding:0.6rem 1.5rem;
            font-size: .9rem;
        }
    }
</style>