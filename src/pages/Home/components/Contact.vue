<template>
    <div class="contact">
        <section-title text="Contact Me"></section-title>
        <contact-card scrollan="fade-up"></contact-card>
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
        width: 112rem;
    }

    @media only screen and (max-width: 1919px) {
        .contact {
            width: 100%;
        }
    }
</style>
