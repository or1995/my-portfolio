<template>
    <div class="projects">
        <section-title text="projects"></section-title>
        <div class="cards">
            <projects-project v-for="project in homeProjects" :key="project.name" :title="project.name" prism class="left">
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
        width: 112rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    .cards {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;
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
        width: 20%;
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
        transform: translateY(calc(-100% + 19rem));
        transition: transform 8s;
        filter: none;
    }

    .morelink {
        align-self: flex-end;
        text-decoration: none;
        color: var(--accent-color);
        font-weight: 500;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        font-family: var(--main-font);
        margin-right: 1rem;
        transition: all .3s
    }

    .morelink span {
        font-size: .9rem;
        margin-left: .2rem;
    }

    .morelink:hover {
        color: var(--accent-light-color);
        transition: all .3s;
    }

    @media only screen and (max-width: 1919px) {
        .projects {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .cards {
            grid-template-columns: 1fr 1fr 0px;
        }
    }

    @media only screen and (max-width: 750px) {
        .cards {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }
    }
</style>