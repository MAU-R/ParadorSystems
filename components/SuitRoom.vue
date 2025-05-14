<template>

    <article class="w-full h-[50vh] " :class="isDark? 'bg-(--blue-normal)' : 'bg-(--primary-light-hover)' ">
        <div
        v-if="isDark"
        class="w-full flex gap-12 flex-nowrap p-8 h-full max-w-[1500px] ml-auto mr-auto"
        >
        <div class="h-full w-33/100">
            <img
             :src="suit.images?.[0] ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5ENNjz5ZpYWVHGUsS_tWb9M9De6FWAibA&s'"
             alt="FOTO DEL CUARTO"
             class="w-full rounded-xl rounded-b-none h-7/10 mt-auto">
            <p class="w-full h-1/10 p-2 align-center text-(--blue-light) bg-(--blue-dark) rounded-lg rounded-t-none hover:bg-(--blue-darker) text-center transition-all">
                Ver mas fotos
            </p>
        </div>
        <div class="w-43/100 h-full flex flex-col justify-center  align-center ">
            <h4 :class="subtitleClass" class="text-(--blue-light) h-[20%]">{{ suit.title }}</h4>
            <p :class="textClass" class="text-(--blue-light-hover) ">{{ suit.detail }}</p>
        </div >
        <div class="w-23/100 flex gap-5 mt-auto mb-auto columns-3 overflow-hidden flex-wrap h-min">
            <div
            v-for="service in suit.services" :key="service.id"
            class="rounded-3xl bg-(--blue-light)/60 w-28/100 flex gap-2 justify-around p-2 sm:p-1 align-center">
            
            <Icon :name="service.icon" style="color: var(--blue-light); height: 100%; font-weight: 900;" />
            <p class="xl:text-md md:text-sm sm:text-xs">{{ service.quantity ?? service.label ?? ""}}</p>
            </div>
        </div>
        </div>
        <div
        v-else
        class="w-full flex gap-12 flex-nowrap p-8 h-full max-w-[1500px] ml-auto mr-auto"
        >

        <div class="w-23/100 flex gap-5 mt-auto mb-auto columns-3 overflow-hidden flex-wrap h-min">
            <div
            v-for="service in suit.services" :key="service.id"
            class="rounded-3xl bg-(--primary-dark)/70 w-28/100 flex gap-2 justify-around p-2 sm:p-1 align-center">
            
            <Icon :name="service.icon" style="color: var(--primary-light-hover); height: 100%; font-weight: 900;" />
            <p class="text-(--blue-light) xl:text-md md:text-sm sm:text-xs">{{ service.quantity ?? service.label ?? ""}}</p>
            </div>
        </div>

        <div class="w-43/100 flex flex-col justify-center align-center h-full ">
            <h4 :class="subtitleClass" class="text-(--blue-dark) h-[20%] text-end">{{ suit.title }}</h4>
            <p :class="textClass" class="text-(--blue-normal) text-end">{{ suit.detail }}</p>
        </div >
        <div class="h-full w-33/100">
            <img
             :src="suit.images?.[0] ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5ENNjz5ZpYWVHGUsS_tWb9M9De6FWAibA&s'"
             alt="FOTO DEL CUARTO"
             class="w-full rounded-xl rounded-b-none h-7/10 mt-auto">
            <p class="w-full h-1/10 p-2 align-center text-(--blue-dark) bg-(--primary-light-active) rounded-lg rounded-t-none hover:bg-(--primary-normal)/80 text-center transition-all ">
                Ver mas fotos
            </p>
        </div>
        </div>
    </article>

</template>

<script setup>

const {suit, isDark} = defineProps(
    {
        suit:{
            type: Object,
            required:true
        },
        isDark:{
            type:Boolean,
            required:true
        }
    }
)

</script>