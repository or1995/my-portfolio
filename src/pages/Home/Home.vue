<template>
    <div class="home">
        <home-head class="headwidth"></home-head>
        <home-skills></home-skills>
        <home-projects></home-projects>
        <home-contact></home-contact>
    </div>
</template>

<script>
import HomeHead from './components/Head.vue';
import HomeSkills from './components/skills.vue';
import HomeProjects from './components/Projects.vue';
import HomeContact from './components/Contact.vue';
export default {
    components: {
        HomeHead,
        HomeSkills,
        HomeProjects,
        HomeContact
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.headwidth {
    width: 100% !important;
}
</style>