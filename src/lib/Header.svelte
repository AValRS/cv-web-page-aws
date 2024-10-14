<script>
    import { fade } from "svelte/transition";
    export let title;

    let previousTitle;
    let animate = true;
    $: {
        if(previousTitle !== title){
            previousTitle = title;
            animate = false;
        }
        setTimeout(() => {
            animate = true;
        }, 300);
    }
</script>

<header class="header flex items-center justify-between h-12">
    <div class="w-1/5 h-full">
        <div class="custom-shape flex items-center justify-center">
            {#if animate}
                <h1 class="px-4 " transition:fade={{ duration: 300 }}>{title}</h1>
            {/if}
        </div>
    </div>
    <nav class="hidden md:flex h-full w-3/5 justify-center">
        <a class="left-c button px-4" href="/">Inicio</a>
        <a class="button px-4" href="/experience">Experiencia</a>
        <a class="button px-4" href="/academic">Educación</a>
        <a class="right-c button px-4" href="/hobbies">Pasatiempos</a>
    </nav>
    <div class="hidden h-full w-1/5 justify-end md:flex">
        <a class="contact-button px-4 transition-transform transform hover:scale-105 will-change-transform" href="/contact">Contacto</a>
    </div>
</header>

  
<style>
.header{
    background-color: white;
    color: #1f1f1f;
    font-weight: 300;
    font-size: 1.125rem;
}
.custom-shape {
    background-color: #4a1f90;
    border-radius: 0 0 1.5rem 0;
    color: white;
    width: 7.8125rem;
    min-height: 75%;
}

.left-c{
    border-radius: 0 0 0 1rem;
}

.right-c{
    border-radius: 0 0 1rem;
}

.button{
    display: flex;
    align-items: center;
    justify-content: center;
}

.button:hover{
    background-color: #e6d2ff;
    transition: 0.8s;
}

.contact-button{
    margin: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4a1f90;
    color: white;
    font-size: 1rem;
}
.contact-button:hover{
    background-color: #2f1756;
    transition: 0.4s;
}
</style>
  