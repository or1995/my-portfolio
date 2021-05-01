<template>
    <div class="details">
        <base-card class="detailsheadcard">
            <div class="detailshead">
                <h1><span>{{ titlefirst }} </span>{{ titlerest }}</h1>
                <div class="projectlinks">
                    <a :href="project.url">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                        <h3>Live View</h3>
                    </a>
                    <a v-if="project.source" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/></svg>
                        <h3>Source Code</h3>
                    </a>
                    <div v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/></svg>
                        <h3>Source is Private</h3>
                    </div>
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
        gap: 4rem;
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

    .projectlinks div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: .4rem 1rem;
        color: var(--grey-text);
    }

    .projectlinks div svg {
        width: 2.4rem;
        height: auto;
        fill: var(--grey-text);
    }

    .projectlinks div h3 {
        font-size: 1.2rem;
        font-family: var(--main-font);
        color: var(--grey-text);
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