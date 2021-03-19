<template>
    <router-link to="/">
        <div class="logo" :class="{small: size === 'small', big: size === 'big'}">
            <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
            </svg>
            <svg viewBox="0 0 149 184" class="o" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="148.9" height="183.3" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <svg viewBox="0 0 117 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3 204L117 0H62.7L0 204H54.3Z" />
            </svg>
            <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
            </svg>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['size']
}
</script>

<style scoped>
 .logo {
     display: flex;
     align-items: flex-end;
     justify-content: center;
     transition: all .3s;
 }

 svg {
     fill: var(--main-light-color);
     height: 3rem;
 }

 .o {
     fill: var(--main-light-color);
     height: 2.6rem;
     margin-right: -.3rem;
 }

 .logo:hover svg {
     fill: #fff;
     transition: all .3s;
 }

 .logo:hover .o{
     fill: var(--accent-color);
     transition: all .3s;
 }

 .small svg {
     height: 1.5rem;
     transition: all .3s;
 }

 .small .o {
     height: 1.3rem;
     transition: all .3s;
     margin-right: -.1rem;
 }


</style>