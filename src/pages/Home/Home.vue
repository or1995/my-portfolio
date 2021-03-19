<template>
    <div class="home">
        <home-head></home-head>
        <home-projects></home-projects>
    </div>
</template>

<script>
import HomeHead from './components/Head.vue';
import HomeProjects from './components/Projects.vue';
export default {
    components: {
        HomeHead,
        HomeProjects
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>