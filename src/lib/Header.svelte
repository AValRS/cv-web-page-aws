<script>
    import { onMount, onDestroy } from 'svelte';
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

    // script.js
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }


    function handleClickOutside(event) {
        if (typeof document !== 'undefined') {
            const menuElement = document.querySelector('.menu');
            const buttonElement = event.target.closest('button');

            if (menuElement && !menuElement.contains(event.target) && !buttonElement) {
                isOpen = false;
            }
        }
    }

    if (typeof document !== 'undefined') {
        document.addEventListener('click', handleClickOutside);
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
    <nav>
        <button on:click={toggleMenu} class="hamburger md:hidden p-4">
            ☰
        </button>
        <div class="menu  {isOpen ? 'open' : ''} shadow-2xl">
            <a class="button top px-4" href="/">Inicio</a>
            <a class="button px-4" href="/experience">Experiencia</a>
            <a class="button px-4" href="/academic">Educación</a>
            <a class="button px-4" href="/hobbies">Pasatiempos</a>
            <a class="button bottom px-4" href="/contact">Contacto</a>
        </div>
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

.menu {
    display: none;
    flex-direction: column;
    background-color: white;
    position: absolute;
    border-radius: 1rem;
    right: 1.25rem;
    width: 12.5rem;
    z-index: 10;
}

.menu.open {
    display: flex;
}
.hamburger {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
}
.menu a {
    padding: 0.625rem;
    text-decoration: none;
    color: black;
}
.menu a:hover {
    background-color: #e6d2ff;
}

.top{
    border-radius: 1rem 1rem 0 0;
}

.bottom{
    border-radius: 0 0 1rem 1rem;
}
</style>
  