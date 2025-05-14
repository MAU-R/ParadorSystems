<template>
   
    <div
    class="roomCard h-full mb-5 sm:w-28/100 md:27/100 lg:15/100 xl:15/100 2xl:w-18/100 rounded-2xl overflow-hidden">
    
    <div class="p-1 w-full h-[calc(45%+5%)]"><div class="customImage w-full h-full rounded-2xl z-10 "/></div>
    <div class="customBadge content w-full py-4 px-4  flex flex-col justify-between gap-1 rounded-2xl z-15 text-(--blue-light)">
        <h1 class="font-bold" :class="subtitleClass">{{ room.title }}</h1>
        <p class=" " :class="textClass">{{ room.description }}</p>
        <div class="grid grid-cols-3  gap-2 w-full">
            <div
            v-for="service in room.services" :key="service.id"
            class="rounded-3xl bg-(--blue-light)/50 flex gap-2 justify-around p-2 sm:p-1 align-center">
            
            <Icon :name="service.icon" style="color: var(--blue-light); height: 100%; font-weight: 900;" />
            <p class="xl:text-md md:text-sm sm:text-xs">{{ service.quantity ?? service.label ?? ""}}</p>
            </div>
            
        </div>
        <span class="self-start font-bold text-(--blue-light) text-md" :class="smallTitle">{{ `$${room.price}/noche` }}</span>
    </div>
    </div>
</template>

<script setup>
const {room} = defineProps({
    room: {
        type: Object,
        required: true,
    },
})

import { textClass, titleClass, subtitleClass } from '~/utils/getClasses';
</script>

<style>
.roomCard{
    background: rgb(15,22,28);
    background: linear-gradient(360deg, rgba(15,22,28,0) 0%,  rgba(15,22,28,0.9) 100%); 
}
.customImage{
    background:linear-gradient(to top,rgba(15,22,28,0.8), rgba(15,22,28,0)), url("https://hips.hearstapps.com/hmg-prod/images/piso-familiar-coleccionsita-arte-sao-paulo-dormitorio-alfombras-superpuestas-1543243868.jpg");
    background-size: cover;
    z-index: 10;
}
.customBadge{
    background: rgb(15,22,28);
    background: linear-gradient(180deg, rgba(15,22,28,0) 0%,rgba(15,22,28,0.8) 70%,  rgba(15,22,28,0.9) 100%); 
    translate: 0 -30%;
    z-index: 1000;
    height: calc(50% + 20%);
}
</style>