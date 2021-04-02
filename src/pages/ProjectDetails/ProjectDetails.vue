<template>
    <div class="details">
        <base-card class="allowoverflow">
            <div class="detailscontainer">
                <div class="projectimgs">

                </div>
                <div class="projecttext">
                    <h2 class="projecttitle"><span>{{ firstLetter }}</span>{{ rest }}</h2>
                    <ul class="projectfeatures">
                        <li>HTML, HTML 5, CSS3, Sass, Flexbox, CSS Grids</li>
                        <li>CSS3, Sass, Flexbox</li>
                        <li>CSS Animations, SVGS, Responsive design and media queries.</li>
                        <li>CSS3, Sass, Flexbox</li>
                        <li>HTML, HTML 5, CSS3, Sass, Flexbox, CSS Grids</li>
                    </ul> 
                    <div class="projectlinks">
                        <base-button big>Live View</base-button>
                        <base-button invert big>Source Code</base-button>
                    </div>   
                </div>
            </div>
        </base-card>
    </div>
</template>

<script>
export default {
    props: ['projectname'],
    created() {
        this.setCurrentProject();
    },
    computed: {
        project() {
            return this.$store.getters.currentProject;
        },
        firstLetter() {
            return this.project.name.substring(0,1);
        },
        rest() {
            return this.project.name.substring(1);
        }
    },
    methods: {
        setCurrentProject() {
            return this.$store.dispatch('setCurrentProject', {name: this.projectname});
        }
    }
}
</script>

<style scoped>
    .details {
        width: 100%;
        height: 100vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .detailscontainer {
        width: 112rem;
        height: 40rem;
        display: flex;
        align-items: center;
        background-color: var(--main-dark-color);
        background: var(--gradient);
        padding: 0 4rem;
    }

    .projectimgs {
        height: 45rem;
        width: 50%;
        border: solid 5px var(--accent-color);
        background-color: var(--main-dark-color);
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        transform-origin: 50% 50%;
        transform: rotate(-2deg);
    }

    .projecttext {
        width: 50%;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .allowoverflow {
        overflow: visible !important;
    }

    .projecttitle {
        font-size: 2.6rem;
        text-transform: uppercase;
        font-weight: 500;
        color: var(--light-text);
        font-family: var(--main-font);
    }

    .projecttitle span {
        color: var(--accent-color);
    }

    .projectfeatures {
        width: 45rem;
        padding: 2rem 5rem;
    }

    .projectfeatures li {
        list-style: none;
        font-family: var(--main-font);
        font-size: 1.5rem;
        margin-bottom: .8rem;
        color: var(--light-text);
        position: relative;
    }

    .projectfeatures li::before {
        content: '';
        position: absolute;
        top: .8rem;
        left: -1rem;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background-color: var(--accent-color);
    }

    .projectlinks {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

</style>