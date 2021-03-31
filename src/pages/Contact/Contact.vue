<template>
    <div class="contact">
        <contact-form big></contact-form>
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
        height: 100vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>