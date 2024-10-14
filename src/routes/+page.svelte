<script>
    import { fade } from 'svelte/transition';
    let visible = false;
    setTimeout(() => {
        visible = true;
    }, 400);
</script>
<div class="text-center m-4 md:m-12 2xl:m-22 w-full">
    {#if visible}
        <div class="flex w-full">
            <h1 class="main-text md:mt-20 2xl:mt-44" transition:fade={{duration:500}}>
                Explora mi trayectoria profesional, donde la 
                <span class="colored-text">tecnología</span>, la 
                <span class="colored-text">innovación</span> y la 
                <span class="colored-text">dedicación</span> 
                se unen para crear soluciones únicas que inspiran.
            </h1>
        </div>
        <h4 class="secondary-text mt-8 lg:mx-48 2xl:mx-64" transition:fade={{duration:500}}>
            Cada proyecto es una nueva oportunidad de aprender, crecer y 
            aplicar conocimientos para enfrentar desafíos.
        </h4>
        <a href="/experience">
            <button class="mt-10 more-button" transition:fade={{duration:500}}>
                Conoce más
            </button>
        </a>
    {/if}
</div>

<style>
.main-text{
    font-weight: 300;
    font-size: 2.75rem;
    margin-top: 5rem;
}

.secondary-text{
    font-weight: 300;
    font-size: 1.5rem;
}

.colored-text{
    color: #4a1f90;
}

.more-button {
    border-radius: .25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 300;
    padding-left: 1.5625rem;
    padding-right: 1.5625rem;
    color: #fff;
    height: 2.5rem;
    font-size: 0.7rem;
    line-height: 0.875rem;
    letter-spacing: 0.075rem;
    transition: .2s .1s;
    background-image: linear-gradient(90deg,#1c1c1c,#4a1f90);
    overflow: hidden;
}

.more-button:hover {
    cursor: pointer;
    transition: all .3s ease-in;
    padding-right: 1.875rem;
    padding-left: 1.875rem;
}

@media (max-width: 48rem) {
    .main-text{
        font-weight: 300;
        font-size: 1.625rem;
    }

    .secondary-text{
    font-weight: 300;
    font-size: 1.125rem;
}
}
</style>
