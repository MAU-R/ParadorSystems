<template>

    <div 
    class="relative p-8 w-1/3 max-w-[500px] max-h-[200px]"
    :style="`transform:translateY(${totalTranslate}vh);`"
    >
    <!-- Background icon -->
    <Icon 
      :name="instruction.backgroundIcon" 
      style="height: 120%; width: 120%;"
      class="absolute inset-0 opacity-40 text-(--primary-light-active) -translate-x-45 -translate-y-0"
      aria-hidden="true"
    />
    
    <!-- Your content -->
    <div class="relative z-20 flex flex-col gap-1 align-center">
        <h3 class="text-center 2xl:text-7xl xl:text-5xl font-black text-(--blue-dark)">0{{number}}</h3>
        <h3 class="text-center text-(--blue-dark) font-extrabold 2xl:text-3xl xl:text-2xl mb-2 ">{{ instruction.title }}</h3>
        <p class="text-justify self-start  font-semibold xl:text-xl">{{ instruction.description }}</p>
    </div>
   </div>
</template>

<script setup lang="ts">

 const {instruction, number} = defineProps({
    instruction:{
        type: Object,
        required: true
    },
    number:{
        type:Number,
        required:true
    }

 })

const baseTranslate =  instruction.translate
const windowWidth = ref(0)
const totalTranslate = ref(baseTranslate)
onMounted(()=>{
    windowWidth.value = window.innerWidth
    if(windowWidth.value < 1800 && windowWidth.value > 1499) 
   totalTranslate.value =  baseTranslate+5
  if(windowWidth.value < 1500 && windowWidth.value >= 900) 
  totalTranslate.value =  baseTranslate+10
   if(windowWidth.value < 900 )
   totalTranslate.value =  0
console.log(instruction.title)
console.log(baseTranslate)
console.log(totalTranslate.value)
})

</script>