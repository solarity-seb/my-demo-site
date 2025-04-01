<script>
    import ContactForm from "$lib/components/ContactForm.svelte";
    import SocialLinks from "$lib/components/SocialLinks.svelte";
    import headshot from '$lib/images/seb.jpg?enhanced';
</script>

<section class="bg1 contact-form-section">
    <div class="grid-container thirds">
        <div>
            <enhanced:img src={headshot} alt="" class="headshot"/>
            <p class="eyebrow">Contact</p>
            <h3>Lorem</h3>
            <p>Lorem ipsum.</p>
            <SocialLinks />
        </div>
        <div class="span-2">
            <ContactForm />
        </div>
    </div>
</section>

<style>
    .contact-form-section .headshot {
        width: 100px;
        border-radius: 100%;
        border: 4px solid var(--accent);
        margin-bottom: 1rem;
    }
</style>