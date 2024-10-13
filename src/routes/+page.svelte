<script>
    import { fade } from 'svelte/transition';
    let visible = false;
    setTimeout(() => {
        visible = true;
    }, 500);
</script>
<div class="text-center mx-20 2xl:mx-40">
    {#if visible}
        <h1 class="main-text mt-20 2xl:mt-44" transition:fade={{duration:500}}>
            Explora mi trayectoria profesional, donde la 
            <span class="colored-text">tecnología</span>, la 
            <span class="colored-text">innovación</span> y la 
            <span class="colored-text">dedicación</span> 
            se unen para crear soluciones únicas que inspiran.
        </h1>
        <h4 class="secondary-text mt-8 mx-48 2xl:mx-64" transition:fade={{duration:500}}>
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
    font-size: 44px;
}
.secondary-text{
    font-weight: 300;
    font-size: 20px;
}

.colored-text{
    color: #4a1f90;
}

.more-button {
    border-radius: .25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 300;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    height: 40px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: .2s .1s;
    background-image: linear-gradient(90deg,#1c1c1c,#4a1f90);
    overflow: hidden;
}

.more-button:hover {
    cursor: pointer;
    transition: all .3s ease-in;
    padding-right: 30px;
    padding-left: 30px;
}
</style>
