<script>
    import ExperienceSection from "../../lib/ExperienceSection.svelte";
    import AbilitySection from "../../lib/AbilitySection.svelte"

    const experienceInformation = [
        {
            title: "Desarrollador Backend",
            enterprise : "People & Business Management - Cliker",
            years: "2022 - Actualidad",
            functions: `Desarrollo y mantenimiento de módulos enfocados a la gestión de personal
                    tales como control de asistencias, incidencias, seguridad social, dispersión
                    bancaria, cálculo y timbrado de nómina, entre otros.`,
        }
    ];

    const technicalSkills = [
        {
            title: "Desarrollo",
            abilities: [
                "Desarollo y consumo de APIs RESTful",
                "Uso de arquitectura MVC.",
                "Dominio de Laravel 5.8 en adelante, incluyendo Eloquent y Query Builder, así como PHP 7.3 y versiones posteriores.",
                "Manejo de bases de datos relacionales a través de MySQL o PostgreSQL y competencia en la implementación de migraciones.",
                "Conocimientos intermedios en Vue 2, Vue 3 y Svelte 4.",
                "Manipulación de CSS3, HTML5 y JavaScript.",
                "Familiaridad y experiencia en frameworks CSS como Bootstrap, Tailwind, Vuetify, Quasar y Flowbite Svelte."
            ],
            imgUrl: "/experience/develop.webp"
        },
        {
            title: "Servidores",
            abilities: [
                "Configuración y administración básica de servidores Linux, incluyendo virtual hosts (vhosts), Apache  y cronjobs.",
                "Experiencia con websockets y colas de trabajo",
                "Gestión de certificados SSL/TLS"
            ],
            imgUrl: "/experience/servers.webp"
        }
    ]

</script>

<div class="section m-6 md:m-16 2xl:mx-32 2xl:my-20 w-full">
    {#each experienceInformation as element}
        <ExperienceSection title={element.title} enterprise={element.enterprise} years={element.years} functions={element.functions}/>
    {/each}
    
    <h3 class="mt-4 text-2xl font-medium" data-aos="fade" data-aos-duration="1000">Habilidades técnicas</h3>
    <div class="mt-6">
        {#each technicalSkills as element}
            <AbilitySection title={element.title} abilities={element.abilities} imgUrl={element.imgUrl}/>
            <div class="separator"></div>
        {/each}
    </div>

</div>

<style>
    .separator{
        width: 100%;
        min-height: 1px;
        background-color: #dbdbdb;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .section{
        color: #383838;
    }
</style>