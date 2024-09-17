<script lang="ts">
    // Components
    import HomeFeatures from './home-partials/HomeFeatures.svelte';

    // Page Partials
    import HomeHero from './home-partials/HomeHero.svelte';
    import HomeTailwind from './home-partials/HomeTailwind.svelte';
    import HomeTheming from './home-partials/HomeTheming.svelte';
</script>

<div>
    <header id="hero" class="bg-surface-100-800-token hero-gradient">
        <div class="section-container"><HomeHero /></div>
    </header>

    <section id="sveltekit" class="bg-surface-100-800-token sveltekit-gradient">
        <div class="section-container"><HomeTailwind /></div>
    </section>

    <section id="tailwind" class="bg-surface-100-800-token tailwind-gradient">
        <div class="section-container"><HomeTheming /></div>
        <div class="section-container"><HomeFeatures /></div>
    </section>
</div>

<style lang="postcss">
    .section-container {
        @apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
    }

    /* Hero Gradient */
    .hero-gradient {
        background-image: radial-gradient(
                at 0% 0%,
                rgba(var(--color-secondary-500) / 0.33) 0px,
                transparent 50%
            ),
            radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
    }

    /* SvelteKit Gradient */
    .sveltekit-gradient {
        background-image: radial-gradient(
            at 0% 100%,
            rgba(var(--color-secondary-500) / 0.5) 0px,
            transparent 50%
        );
    }

    /* SvelteKit Gradient */
    .tailwind-gradient {
        background-image: radial-gradient(
                at 0% 0%,
                rgba(var(--color-secondary-500) / 0.5) 0px,
                transparent 50%
            ),
            radial-gradient(
                at 100% 100%,
                rgba(var(--color-primary-500) / 0.24) 0px,
                transparent 50%
            );
    }
</style>
