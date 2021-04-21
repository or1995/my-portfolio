<template>
    <div class="details">
        <base-card class="detailsheadcard">
            <div class="detailshead">
                <h1><span>{{ titlefirst }} </span>{{ titlerest }}</h1>
                <div class="projectlinks">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"/></svg>
                        <h3>Live View</h3>
                    </a>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>
                        <h3>Source Code</h3>
                    </a>
                </div>
                <div class="logo">
                        <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                        </svg>
                        <svg viewBox="0 0 149 184" class="o" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <details-card :name="project.name" :title="'Technologies'">
            <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
        </details-card>       
        <details-card :name="project.name" :title="'Features'" invert>
            <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
        </details-card>            
    </div>
</template>

<script>
import detailsCard from './ProjectDetailsCard/ProjectDetailsCard.vue';

export default {
    components: {
        detailsCard
    },
    props: ['projectname'],
    created() {
        this.setCurrentProject();
    },
    computed: {
        project() {
            return this.$store.getters.currentProject;
        },
        titlefirst() {
            return this.project.name.split(' ')[0];
        },
        titlerest() {
            const namearr = this.project.name.split(' ');
            let rest = ''
            for(let i = 1;i < namearr.length; i++ ) {
                rest = rest + ' ' +  namearr[i];
            }
            return rest;
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
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8rem;
    }

    .projectfeatures li {
        list-style: none;
        font-family: var(--main-font);
        font-size: 1.3rem;
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

    .detailshead {
        width: 112rem;
        height: 20rem;
        background-color: var(--main-dark-color);
        background: var(--gradient);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .detailshead h1 {
        font-family: var(--title-font);
        color: var(--light-text);
        font-weight: 500;
        font-size: 3.5rem;
        margin-bottom: 1rem;
        z-index: 1000;
    }

    .detailshead h1 span {
        color: var(--accent-color);
        z-index: 1000;
    }

    .projectlinks {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        z-index: 1000;
    }

    .projectlinks a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: .4rem 1rem;
        color: var(--light-text);
    }

    .projectlinks a svg {
        width: 2.4rem;
        height: auto;
        fill: var(--accent-color);
    }

    .projectlinks a h3 {
        font-size: 1.2rem;
        font-family: var(--main-font);
        color: var(--light-text);
        font-weight: 500;
        /*text-transform: uppercase;*/
        margin-left: .6rem;
        transition: all .3s;
    }

    .projectlinks a:hover, 
    .projectlinks a:hover h3{
        color: var(--accent-color);
        transition: all .3s;
    }

    .logo {
        position: absolute;
        bottom: -5rem;
        right: -20rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1;
    }

    .logo svg {
        height: 30rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .o {
        height: 28rem !important;
    }

    @media only screen and (max-width: 1919px) { 
        .detailsheadcard {
            width: 100%;
        }

        .detailshead {
            width: 100%;
        }      
    }

    @media only screen and (max-width: 1200px) { 
        .details {
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }

        .projectfeatures li {
            font-size: 1.2rem;
        }        
    }

    @media only screen and (max-width: 900px) { 
        .detailshead h1 {
            font-size: 2.5rem;
        }  
    }

    @media only screen and (max-width: 500px) { 
        .detailshead h1 {
            font-size: 2rem;
        } 

        .projectlinks {
            gap: 1rem;
        }

        .projectlinks a svg {
            width: 2rem;
        }

        .projectlinks a h3 {
            font-size: 1rem;
        } 
}



</style>