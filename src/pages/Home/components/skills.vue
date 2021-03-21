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
        width: 100%;
    }

    .skillscards {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skillscards div:not(:last-child) {
        margin-right: 1rem;
    }

    .skillscards div ul li {
        position: relative;
        font-size: 1.5rem;
        font-family: var(--main-font);
        color: var(--light-text);
        margin-bottom: 1rem;
    }

    /*.skillscards div ul li::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--accent-color);
        position: absolute;
        top: .5rem;
        left: -1rem;
    }*/

</style>