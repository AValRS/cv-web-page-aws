<script>
    import { fly } from 'svelte/transition';
    import AcademicCard from '../../lib/AcademicCard.svelte';
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
    <div class="flex lg:justify-end">
        <AcademicCard 
            title="Bachillerato" 
            university="Universidad Autónoma de Yucatán" 
            university2="Escuela Preparatoria Dos"
            years="2016-2019"
        />
    </div>
    <div class="flex lg:justify-start">
        <AcademicCard 
            title="Licenciatura en Ciencias de la Computación" 
            university="Universidad Autónoma de Yucatán" 
            university2="Facultad de Matemáticas"
            years="2019-Actualidad"
        />
    </div>
</div>