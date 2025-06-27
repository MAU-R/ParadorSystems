<template>
    <div
        v-if="props.isBanner"
        class="flex flex-col gap-6 p-2 xl:p-6 overflow-hidden row-span-1 h-max md:h-auto"
        >
        <div class="flex flex-row-reverse flex-nowrap">
            <button
            class="rounded-[50%] bg-(--primary-light) h-[50px] w-[50px] max-w-[28%] border-solid border-2 border-(--primary-normal)"

            >
                <a :href="props.type">
                <Icon
                name="material-symbols:arrow-outward-rounded" 
                style="height: 50px; width: 50px; max-width: 95%;"
                class=" inset-0 opacity text-(--blue-normal) p-2"
                aria-hidden="true"
                /></a>
            </button>
            <h1 class="mr-auto  font-extrabold text-(--blue-dark) px-2 py-4 xl:px-0 xl:py-0  overflow-clip" :class="subtitleClass">{{ props.title }}</h1>
     </div>
     <p
     class=" text-(--blue-normal)/80 mt-8 md:mt-0 mb-4 md:mb-0"
     :class="textClass"
     >
     {{ props.description }}
    </p>
     </div>
     <div v-else  class="flex flex-col gap-2">
        <img :src=props.img alt="Imagen del cuarto" class="object-cover w-full  h-45/100 rounded-t-4xl">
        <div class="w-full px-4 py-2 h-55/100 overflow-hidden flex flex-col justify-around">
            <h1 class="font-bold  text-(--blue-dark) " :class="sectionSubtitle">{{ props.title }}</h1>
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
const {props, index} = defineProps({
    props:{
        type:Object,
        required:true
    },
    isMobile:{
        type: Boolean,
        required: true
    }
})
function navigateTo  (route){
  window.location.href = route
}

</script>