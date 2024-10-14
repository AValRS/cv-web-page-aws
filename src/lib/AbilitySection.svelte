<script>
    export let title
    export let abilities
    export let imgUrl
    let duration = 1000
</script>

<div class="grid mt-1 sm:grid-cols-5" >
    <div class="p-4 sm:col-span-2 lg:col-span-1 h-full flex items-center overflow-hidden" data-aos="fade" data-aos-duration="1000" data-aos-once="true" >
        <img class="rounded-lg border-gray-100" src={imgUrl} alt={`imagen relacionada con ${title}`}>
    </div>    
    <div class="p-4 sm:col-span-3 lg:col-span-4">
        <h2 class="text-lg font-medium mb-2" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
            { title }
        </h2>
        <ul class="list-disc ml-6">
            {#each abilities as ability, i}
                <li data-aos="fade-left" data-aos-duration="{duration + (i * 100)}" data-aos-once="true">{ ability }</li>
            {/each}
        </ul>
    </div>
</div>
