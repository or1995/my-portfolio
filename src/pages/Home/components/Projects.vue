<template>
    <div class="projects">
        <section-title text="projects"></section-title>
        <div class="cards">
            <projects-project title="ECommerce">
                <img class="projectimg" src="../../../assets/projectspics/ecommerce2.png"/>
                <img class="projectimgheader" src="../../../assets/projectspics/ecommerce2header.png"/>
            </projects-project>
            <projects-project title="Hello Blog">
                <img class="projectimg" src="../../../assets/projectspics/hello.png"/>
                <img class="projectimgheader height" src="../../../assets/projectspics/helloheader.png"/>
            </projects-project>
            <projects-project title="Social Media App">
                <img class="projectimg" src="../../../assets/projectspics/social.png"/>
                <img class="projectimgheader" src="../../../assets/projectspics/socialheader.png"/>
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