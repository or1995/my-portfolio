<template>
    <div class="projects">
        <section-title text="projects"></section-title>
        <div class="cards">
            <projects-project></projects-project>
            <projects-project></projects-project>
            <projects-project></projects-project>
        </div>
    </div>
</template>

<script>
import ProjectsProject from './Project.vue';
export default {
    components: {
        ProjectsProject
    }
}
</script>

<style scoped>
    .projects {
        margin-top: 1rem;
        width: 100%;
    }

    .cards {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .cards div {
        width: 32.8%;
    }
</style>