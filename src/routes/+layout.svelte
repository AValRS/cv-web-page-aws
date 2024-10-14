<script>
    import '../app.css';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';

    onMount(() => {
        AOS.init();
    });
    $: title = $page.data?.title || '';
</script>

<div class="container-pers">
    <Header {title}/>

    <main class="main flex">
        <slot />
    </main>

    <Footer />
</div>

<style>
    .container-pers{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: 'AfacadFlux';
    }

    .main{
        flex: 1;
    }

</style>


  