<script>
    export let title;
    export let university;
    export let university2;
    export let years;

</script>

<div class="card-space flex justify-center">
    <div class="card bg-gray-100 w-56 h-72 rounded-xl m-4 shadow-lg transition-transform transform hover:scale-105 will-change-transform">
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
                <h3 class="text-lg font-bold">{title}</h3>
                <h3>{university}</h3>
                <h3>{university2}</h3>
                <p class="subtext text-xs text-gray-500">{years}</p>
            </div>
        </div>
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