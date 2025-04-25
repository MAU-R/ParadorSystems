<template>
    <div
    v-if="props.isBanner"
     class="flex flex-col gap-6 p-6"
     >
     <div class="flex ">
        <h1 class="mr-auto  font-black text-(--blue-dark)" :class="subtitleClass">{{ props.title }}</h1>
        <button class="rounded-[50%] bg-(--primary-light) h-[50px] w-[50px] border-solid border-2 border-(--primary-normal)">
        <Icon 
      name="material-symbols:arrow-outward-rounded" 
      style="height: 50px; width: 50px;"
      class=" inset-0 opacity text-(--blue-normal) p-2"
      aria-hidden="true"
    />
    </button>
     </div>
     <p
     class=" text-(--blue-normal)/80"
     :class="textClass"
     >
     {{ props.description }}
    </p>
     </div>
     <div v-else  class="flex flex-col gap-1">
        <img :src=props.img alt="Imagen del cuarto" class="object-cover w-full  h-5/10 rounded-t-4xl">
        <div class="w-full px-4 py-2 h-6/10">
            <h1 class="font-bold  text-(--blue-dark) " :class="subtitleClass">{{ props.title }}</h1>
            <p class="font-semibold  text-(--blue-normal)" :class="textClass">{{ props.description }}</p>
        <div class="flex gap-2">
            <div
            v-for="service, index in props.services" :key="index"
            class="flex w-1/4 gap-1 text-(--blue-primary) xl:text-lg 2xl:text-xl md:text-sm lg:text-md font-bold">
            <Icon 
                :name="service.icon" 
                style="height: 30px; width: 30px;"
                class=" inset-0 opacity text-(--blue-normal) p-2"
                aria-hidden="true"
                />
            <span class="">{{ service.number }}</span>
            </div>
        </div>
        </div>
     </div>
</template>
<script setup>
import { titleClass, subtitleClass, textClass } from '../utils/getClasses.js';
const {props} = defineProps({
    props:{
        type:Object,
        required:true
    }
})


</script>