<template>
    <div class="h-max flex flex-col gap-3 p-8 ">
        <span class="self-start font-semibold text-(--blue-normal)/75" :class="subtitleClass">{{ roomProps.number }}</span>
        <img class="w-full rounded-xl" alt="foto de la habitación" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3Bv_RyjLFT68bn3QQMH0lSxxNviMu5WBlA&s">
        <h4 class="w-full" :class="smallTitle">{{ roomProps.title }}</h4>
        <p class="w-full" :class="textClass">{{ roomProps.description }}</p>
        <div class="flex  w-full  flex-wrap gap-2">
            <div
            v-for="service in roomProps.services" :key="service.id"
            class="rounded-3xl bg-(--blue-normal)/90 flex gap-2 justify-around p-2 sm:p-1 align-center w-1/5">
            
            <Icon :name="service.icon" style="color: var(--blue-light); height: 100%; font-weight: 900;" :class="textClass" />
            <p class=" text-(--blue-light) p-[2px]" :class="textClass">{{ service.quantity ?? service.label ?? ""}}</p>
            </div>
        </div>
        <h4 class="self-end" :class="subtitleClass">$ {{ roomProps.price }}</h4>
    </div>
</template>

<script setup>
import { textClass, subtitleClass, smallTitle, smallText } from '~/utils/getClasses.js';
const {roomProps} = defineProps({       
    roomProps:{
        required: true,
        type:Object
    }
})

</script>