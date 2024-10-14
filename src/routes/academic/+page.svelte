<script>
    import AcademicCard from '../../lib/AcademicCard.svelte';
</script>

<div class="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full">
    <div class="flex lg:justify-end" data-aos="fade-up" data-aos-duration="1000">
        <AcademicCard 
            title="Bachillerato" 
            university="Universidad Autónoma de Yucatán" 
            university2="Escuela Preparatoria Dos"
            years="2016-2019"
        />
    </div>
    <div class="flex lg:justify-start" data-aos="fade-up" data-aos-duration="1600">
        <AcademicCard 
            title="Licenciatura en Ciencias de la Computación" 
            university="Universidad Autónoma de Yucatán" 
            university2="Facultad de Matemáticas"
            years="2019-Actualidad"
        />
    </div>
</div>