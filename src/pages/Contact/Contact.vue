<template>
    <div class="contact">
        <contact-form></contact-form>
    </div>
</template>

<script>
import ContactForm from '../../components/pages/contact/ContactCard';
export default {
    components: {
        ContactForm
    }
}
</script>

<style scoped>
    .contact {
        width: 100%;
        padding: 1rem;
    }
</style>