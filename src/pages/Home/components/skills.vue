<template>
    <div class="skills">
        <section-title text="Skills"></section-title>
        <div class="skillscards">
            <skill-card title="FrontEnd">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vue</li>
                <li>ReactJs</li>
            </skill-card>
            <skill-card title="BackEnd">
                <li>Python Django</li>
                <li>NodeJs, ExpressJs (still learning)</li>
            </skill-card>
            <skill-card title="Other">
                <li>Git, Github</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
            </skill-card>
        </div>
    </div>
</template>

<script>
import SkillCard from '../../../components/pages/skills/skill.vue';
export default {
    components: {
        SkillCard
    }
}
</script>

<style scoped>
    .skills {
        margin-top: 1rem;
        width: 112rem;
    }

    .skillscards {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .skillscards div ul li {
        position: relative;
        font-size: 1.5rem;
        font-family: var(--main-font);
        color: var(--light-text);
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 1919px) {
        .skills {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1500px) {
        .skillscards div ul li {
            font-size: 1.3rem;
            margin-bottom: .7rem;
        }
    }

    @media only screen and (max-width: 1140px) {
        .skillscards {
             grid-template-columns: 100%;
             grid-template-rows: 1fr 1fr 1fr;
        }
    }

    @media only screen and (max-width: 380px) {
        .skillscards div ul li {
            font-size: 1.1rem;
            margin-bottom: .7rem;
        }
    }

</style>