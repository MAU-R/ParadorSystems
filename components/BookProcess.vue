<template>

    <div 
    class="relative p-8 w-1/3 max-w-[500px] max-h-[200px]"
    :style="`transform:translateY(${instruction.translate}vh);`"
    >
    <!-- Background icon -->
    <Icon 
      :name="instruction.backgroundIcon" 
      style="height: 120%; width: 120%;"
      class="absolute inset-0 opacity-40 text-(--primary-light-active) -translate-x-45 -translate-y-15"
      aria-hidden="true"
    />
    
    <!-- Your content -->
    <div class="relative z-20">
        <h3 class="text-(--blue-dark) font-semibold 2xl:text-3xl xl:text-2xl mb-2 ">{{ instruction.title }}</h3>
        <p class="text-justify  font-semibold">{{ instruction.description }}</p>
    </div>
   </div>
</template>

<script setup lang="ts">

 const {instruction} = defineProps({
    instruction:{
        type: Object,
        required: true
    }
 })


</script>