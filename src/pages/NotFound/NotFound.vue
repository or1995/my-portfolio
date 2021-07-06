<template>
    <div class="notfound">
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </div>
</template>


<style scoped>
    .notfound {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .notfound h2 {
        font-family: var(--main-font);
        font-size: 3rem;
        color: #fff;
    }

    .notfound h1{
        font-family: var(--main-font);
        font-size: 12rem;
        font-weight: bold;
        color: var(--accent-color);
    }
</style>