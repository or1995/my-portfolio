<template>
    <div class="card" :data-aos="scrollan">
        <slot></slot>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    props: ['scrollan'],
    created() {
        AOS.init()
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;
}
</style>