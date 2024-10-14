<script>
    export let title;
    export let description;
    export let imgUrl;
</script>

<div class="card rounded-lg shadow-lg h-full transition-transform transform hover:scale-105 will-change-transform">
    <img class="img h-60 object-cover w-full rounded-t-lg" src={imgUrl} alt={`imagen relacionada con ${title}`}>
    <div class="m-4">
        <h5 class="mb-2 text-2xl font-medium">{title}</h5>
        <p class="secondary-text font-normal pb-6 text-justify">
            {description}
        </p>
    </div>
</div>

<style>
.img{
    border-radius: 1rem 1rem 0 0;
}
.secondary-text{
    color: #383838;
}
.card:hover{
    transition: 0.8s;

}
</style>