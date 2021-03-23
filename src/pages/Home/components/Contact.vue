<template>
    <div class="contact">
        <section-title text="Contact Me"></section-title>
        <contact-card></contact-card>
    </div>
    
</template>

<script>
import ContactCard from '../../../components/pages/contact/ContactCard.vue';
export default {
    components: {
        ContactCard
    }
}
</script>

<style scoped>
    .contact {
        margin-top: 1rem;
        width: 100%;
    }
</style>
