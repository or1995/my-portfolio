<template>
    <div class="home">
        <home-head></home-head>
        <home-skills></home-skills>
        <home-projects></home-projects>
    </div>
</template>

<script>
import HomeHead from './components/Head.vue';
import HomeSkills from './components/skills.vue';
import HomeProjects from './components/Projects.vue';
export default {
    components: {
        HomeHead,
        HomeSkills,
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