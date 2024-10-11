<script>
    import '../app.css';
    import { page } from '$app/stores';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';

    $: title = $page.data?.title || 'Inicio';
</script>

<div class="container-pers">
    <Header {title}/>

    <main class="main">
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


  