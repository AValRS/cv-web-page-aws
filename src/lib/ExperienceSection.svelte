<script>
    export let title;
    export let enterprise;
    export let years;
    export let functions;
</script>
<div>
    <h3 class="text-2xl font-medium">{ title }</h3>
    <div>
        <div class="flex items-center gap-2">
            <h4 class="text-lg">{ enterprise }</h4>
            <span class="py-1 h-6 bg-gray-200 rounded-xl text-xs w-28 text-center hidden sm:block">
                { years }
            </span>
        </div>
        <span class="flex sm:hidden py-1 bg-gray-200 rounded-xl text-xs w-28 justify-center mt-2 sm:mt-0">
            { years }
        </span>
        <p class="mt-3">
            { functions }
        </p>
    </div>
</div>


