<script>
    import HobbieCard from "../../lib/HobbieCard.svelte";
    let hobbies = [
        {
            title: "Cuidado de gatos ferales",
            description: `Empleo mi tiempo libre para alimentar, cuidar y esterilizar gatos ferales. 
            También me gusta pasar tiempo con los que he adoptado y crearles un entorno donde
            puedan entretenerse y sentirse seguros.`,
            imgUrl: "/hobbies/cats.jpg"
        },
        {
            title: "Pasión por el mundo digital",
            description: `Me considero un aficionado a las computadoras y todo lo relacionado con videojuegos. Siempre
            es un placer para mí discutir sobre tecnologías, descubrimientos y eventos del mundo tecnológico.`,
            imgUrl: "/hobbies/computer.jpg"
        },
        {
            title: "Aprendizaje a través de recursos",
            description: `Aprender es una de mis actividades favoritas. Difruto adquirir nuevos conocimientos 
            investigando y a través de la lectura de artículos de divulgación, documentales y conferencias. Me gusta
            escuchar a los demás y considero que siempre se puede aprender algo nuevo`,
            imgUrl: "/hobbies/book.jpg"
        }
    ];
</script>
<div class="grid grid-cols-3 m-8 w-full">
    <div class="card-container col-span-3 md:col-span-1 m-4 md:m-6 lg:m-8" data-aos="fade-up" data-aos-duration="1000">
        <HobbieCard title={hobbies[0].title} description={hobbies[0].description} imgUrl={hobbies[0].imgUrl}/>
    </div>
    <div class="card-container col-span-3 md:col-span-1 m-4 md:m-6 lg:m-8" data-aos="fade-up" data-aos-duration="1200">
        <HobbieCard title={hobbies[1].title} description={hobbies[1].description} imgUrl={hobbies[1].imgUrl}/>
    </div>
    <div class="card-container col-span-3 md:col-span-1 m-4 md:m-6 lg:m-8" data-aos="fade-up" data-aos-duration="1400">
        <HobbieCard title={hobbies[2].title} description={hobbies[2].description} imgUrl={hobbies[2].imgUrl}/>
    </div>
</div>

<style>

</style>