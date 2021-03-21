<template>
    <div class="projects">
        <section-title text="projects"></section-title>
        <div class="cards">
            <projects-project title="ECommerce">
                <img class="projectimg" src="../../../assets/projectspics/ecommerce2.png"/>
            </projects-project>
            <projects-project title="Hello Blog">
                <img class="projectimg" src="../../../assets/projectspics/hello.png"/>
            </projects-project>
            <projects-project title="Social Media App">
                <img class="projectimg" src="../../../assets/projectspics/social.png"/>
            </projects-project>
        </div>
    </div>
</template>

<script>
import ProjectsProject from '../../../components/pages/projects/Project.vue';
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

    .projectimg {
        width: 100%;
        height: auto;
        filter: grayscale(1);
    }

    .projectimg:hover {
        transform: translateY(calc(-100% + 18rem));
        transition: transform 8s;
        filter: none;
    }
</style>