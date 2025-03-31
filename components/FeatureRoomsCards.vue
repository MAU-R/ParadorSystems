<template>
    <div
    class="roomCard h-[35vh] w-25/100   rounded-2xl">
    <div class="p-1 w-full h-[calc(50%+5%)]"><div class="customImage w-full h-full rounded-2xl z-10 "/></div>
    
    <div class="customBadge content w-full p-2  flex flex-col -justify-between rounded-2xl z-15 text-(--blue-light)">
        <h1 class="-translate-y-8">ROom</h1>
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


</script>

<style>
.roomCard{
    background: rgb(15,22,28);
    background: linear-gradient(360deg, rgba(15,22,28,0) 0%,  rgba(15,22,28,0.9) 100%); 
}
.customImage{
    background-image: url("https://hips.hearstapps.com/hmg-prod/images/piso-familiar-coleccionsita-arte-sao-paulo-dormitorio-alfombras-superpuestas-1543243868.jpg");
    background-size: cover;
    z-index: 10;
}
.customBadge{
    background: rgb(15,22,28);
    background: linear-gradient(180deg, rgba(15,22,28,0.4) 0%,  rgba(15,22,28,0.9) 100%); 
    translate: 0 -25%;
    z-index: 1000;
    height: calc(50% + 20%);
}
</style>