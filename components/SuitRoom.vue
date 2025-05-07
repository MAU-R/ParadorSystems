<template>

    <article class="w-full h-[45vh]" :class="isDark? 'bg-(--blue-normal)' : 'bg-(--primary-light-hover)' ">
        <div
        v-if="isDark"
        class="w-full flex gap-12 flex-nowrap p-8 h-full"
        >
        <div class="h-full"><img src="" alt="" class="w-full rounded-xl h-8/10"><p class="w-full h-2/8 p-2 text-(--blue-light) bg-(--blue-dark) rounded-lg hover:bg-(--blue-darker)">Ver mas fotos</p></div>
        <div class="w-43/10 flex flex-col justify-around align-center h-full">
            <h4>{{ suit.title }}</h4>
            <p>{{ suit.description }}</p>
        </div >
        <div class="w-23/10 flex gap-12 w-8/10 mt-auto mb-auto columns-3">
            <div
            v-for="service in room.services" :key="service.id"
            class="rounded-3xl bg-(--blue-light)/50 flex gap-2 justify-around p-2 sm:p-1 align-center">
            
            <Icon :name="service.icon" style="color: var(--blue-light); height: 100%; font-weight: 900;" />
            <p class="xl:text-md md:text-sm sm:text-xs">{{ service.quantity ?? service.label ?? ""}}</p>
            </div>
        </div>
        </div>
    </article>

</template>

<script setup>


</script>