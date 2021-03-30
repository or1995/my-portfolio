<template>
    <div class="projects">
        <section-title text="projects"></section-title>
        <div class="cards">
            <projects-project v-for="project in homeProjects" :key="project.name" :title="project.name" hidetitle prism class="left">
                <img class="projectimg" :src="require('../../../assets/projectspics/' + project.projectImage + '.jpg')" :alt="project.name"/>
                <img class="projectimgheader" :class="project.height ? 'height' : null" :src="require('../../../assets/projectspics/' + project.projectHeaderImage + '.jpg')" :alt="project.name"/>
            </projects-project>
        </div>
        <router-link to="projects" class="morelink">MORE <span>&#10095;&#10095;</span></router-link>
    </div>
</template>

<script>
import ProjectsProject from '../../../components/pages/projects/Project.vue';
export default {
    components: {
        ProjectsProject
    },
    computed: {
        homeProjects() {
            return this.$store.getters.homeProjects;
        }
    }
}
</script>

<style scoped>
    .projects {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
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

    .projectimgheader {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 100000;
        filter: grayscale(1);
        pointer-events: none;
    }

    .height {
        height: 100%;
        width: auto;
    }

    .projectimg {
        width: 100%;
        height: auto;
        filter: grayscale(1);
    }

    .projectimg:hover + .projectimgheader {
        filter: none;
    }


    .projectimg:hover {
        transform: translateY(calc(-100% + 18rem));
        transition: transform 8s;
        filter: none;
    }

    .morelink {
        align-self: flex-end;
        text-decoration: none;
        color: var(--accent-color);
        font-weight: 500;
        font-size: 1.2rem;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        font-family: var(--main-font);
        margin-right: 1rem;
        transition: all .3s
    }

    .morelink:hover {
        color: var(--accent-light-color);
        transition: all .3s;
    }
</style>