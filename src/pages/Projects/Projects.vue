<template>
    <div class="projects">
        <base-card class="basecardwidth">
            <div class="featured">
                <h1>ORIGINAL <span>PROJECTS</span></h1>
                <p>I built all the projects in this portfolio from scratch, I didn't include any course projects.</p>
                <div class="log">
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                    </svg>
                    <svg viewBox="0 0 149 184" class="o" ref="o" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="148.9" height="183.3" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 117 204" fill="none" class="slash" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.3 204L117 0H62.7L0 204H54.3Z" />
                    </svg>
                    <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                    </svg>
                </div>
            </div>
        </base-card>
        <section-title text="All Projects"></section-title>
        <div class="allcards">
            <projects-project  v-for="project in allProjects" :key="project.name" :title="project.name" :prism="project.premium">
                <img class="projectimg" :src="require('../../assets/projectspics/' + project.projectImage + '.jpg')" :alt="project.name"/>
                <img class="projectimgheader" :class="project.height ? 'height' : null" :src="require('../../assets/projectspics/' + project.projectHeaderImage + '.jpg')" :alt="project.name"/>
            </projects-project>
        </div>
    </div>
</template>

<script>
import ProjectsProject from "../../components/pages/projects/Project.vue";
export default {
    components: {
        ProjectsProject,
    },
    computed: {
        allProjects() {
            return this.$store.getters.allProjects;
        },
        homeProjects() {
            return this.$store.getters.homeProjects;
        }
    }
}
</script>

<style scoped>
    .projects {
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .featured {
        background-color: var(--main-dark-color);
        background: var(--gradient);
        width: 112rem;
        height: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .featured h1 {
        font-family: var(--main-font);
        color: var(--light-text);
        font-weight: 500;
        font-size: 3rem;
        margin-bottom: 1rem;
        z-index: 10000;
    }

    .featured p {
        font-family: var(--main-font);
        color: var(--light-text);
        font-weight: 400;
        font-size: 1.7rem;
        z-index: 10000;
    }

    .featured h1 span {
        color: var(--accent-color);
    }

    .fcards {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        z-index: 10000;
    }

    .allcards {
        width: 112rem;
        display: grid;
        align-content: center;
        justify-content: center;
        grid-template-columns: 36.7rem 36.7rem 36.7rem;
        gap: 1rem;
        grid-auto-rows: auto;
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
        transform: translateY(calc(-100% + 19rem));
        transition: transform 8s;
        filter: none;
    }

    .left {
        transform: translateX(10rem) scale(.7) !important;
    }

    .middle {
        transform: scale(.8) !important;
        z-index: 1000;
    }

    .right {
        transform: translateX(-10rem) scale(.7) !important;
    }

    .log {
        position: absolute;
        bottom: -4rem;
        right: -30rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 0;
    }

    .log svg {
        
        height: 30rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .o {
        height: 28rem !important;
    }

    @media only screen and (max-width: 1919px) {
        .basecardwidth {
            width: 100%;
        }

        .featured {
            width: 100%;
        }

        .allcards {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media only screen and (max-width: 1450px) {
        .featured h1 {
            font-size: 2.5rem;
        }

        .featured p {
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 1365px) {
        .allcards {
            width: 100%;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (max-width: 1100px) {
        .featured h1 {
            font-size: 2.2rem;
        }

        .featured p {
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 900px) {
        .featured {
            height: 25rem;
        }

        .featured p {
            width: 40rem;
            text-align: center;
        }
    }

    @media only screen and (max-width: 750px) {
        .allcards {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (max-width: 740px) {
        .featured {
            height: 25rem;
        }

        .featured p {
            width: 30rem;
            text-align: center;
        }
    }

    @media only screen and (max-width: 500px) {
        .featured {
            height: 25rem;
        }

        .featured h1 {
            font-size: 1.8rem;
        }

        .featured p {
            width: 22rem;
            text-align: center;
            font-size: 1rem;
        }
    }
</style>