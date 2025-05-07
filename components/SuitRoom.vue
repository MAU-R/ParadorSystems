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
        <div class="w-23/10">
            
        </div>
        </div>
    </article>

</template>

<script setup>


</script>