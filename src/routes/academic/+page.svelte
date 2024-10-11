<script>
    import { fly } from 'svelte/transition';
	let visible_t1 = false;
	let visible_t2 = false;
    
    setTimeout(() => {
        visible_t1 = true;
    }, 500);

    setTimeout(() => {
        visible_t2 = true;
    }, 700);

</script>

<div class="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
    <div class="card-space flex justify-center lg:justify-end">
        {#if visible_t1}
            <div class="card bg-gray-100 w-56 h-72 rounded-xl m-4 shadow-lg transition-transform transform hover:scale-105 will-change-transform"
                transition:fly={{ y: 200, duration: 2000 }}>
                <div class="flex p-2 gap-1">
                    <div>
                        <span class="circle1 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                        <span class="circle2 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                        <span class="circle3 box inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                </div>
                <div class="card-container flex">
                    <div class="card-content flex-grow mx-3 bg-gray-50 rounded-xl">
                        <h3 class="text-lg font-bold">Bachillerato</h3>
                        <h3>Universidad Autónoma de Yucatán</h3>
                        <h3>Escuela Preparatoria Dos</h3>
                        <p class="subtext text-xs text-gray-500">2016-2019</p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
    <div class="card-space flex justify-center lg:justify-start">
        {#if visible_t2}
        <div class="card bg-gray-100 w-56 h-72 rounded-xl m-4 shadow-lg transition-transform transform hover:scale-105 will-change-transform"
            transition:fly={{ y: 200, duration: 2000 }}>
            <div class="flex p-2 gap-1">
                <div>
                    <span class="circle1 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div>
                    <span class="circle2 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div>
                    <span class="circle3 box inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
            <div class="card-container bg-white">
                <div class="">
                    
                </div>
            </div>
        </div>
    {/if}
    </div>
</div>

<style>
.card-space{
    min-width: 14rem;
    min-height: 20rem;
}

.card:hover{
    transition: 0.8s;

}
.circle1{
    background-color: #3d34b8;

}
.circle2{
    background-color: #4a1f90;
}  

.circle3{
    background-color: #d122d1;
}

.card-content{
    padding: 1rem;
    font-weight: 200;
    min-height: 14.5rem;
}

</style>