<script>
    export let title;
</script>

<header class="header flex items-center justify-between h-12 font-light">
    <div class="w-1/5">
        <h1 class="px-4">{title}</h1>
    </div>
    <nav class="flex h-full w-3/5 justify-center">
        <a class="button px-4" href="/">Inicio</a>
        <a class="button px-4" href="/experience">Experiencia profesional</a>
        <a class="button px-4" href="/academic">Educación</a>
        <a class="button px-4" href="/hobbies">Pasatiempos</a>
    </nav>
    <div class="flex h-full w-1/5 justify-end">
        <a class="contact-button px-4 transition-transform transform hover:scale-105 will-change-transform" href="/contact">Contacto</a>
    </div>
</header>

  
<style>
.header{
    background-color: white;
    color: #1f1f1f;
}

.button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

.button:hover{
    background-color: #d2e6ff;
    transition: 0.8s;
}

.contact-button{
    margin: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f1f1f;
    color: white;
    font-size: 1rem;
}
.contact-button:hover{
    background-color: #3a3a3a;
    transition: 0.4s;
}
</style>
  