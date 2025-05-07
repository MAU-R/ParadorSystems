<template>
    <section class="w-full h-full flex flex-col justify-between no-wrap"> 
        <article class="rounded-4xl flex w-full md:w-1/2 xl:w-1/3 justify-around align-center p-2 bg-(--primary-light-hover)">
                <button class="mt-auto mb-auto">
                <Icon
                name="material-symbols:menu"
                style="height: 35px; width: 35px;"
                
                />
                </button>
                <Field.Root>
                <Field.Input
                class="rounded-xl flex-1 focus:outline-none focus:ring-0 focus:border-none p-2 text-start align-center"
                placeholder="No. de cuarto"
                />
                <Field.ErrorText>No se encontro una habitacion</Field.ErrorText>
                </Field.Root>
                <Icon
                name="material-symbols:search" class="text-center align-center mt-auto mb-auto"
                style="height: 35px; width: 35px;"
                />
        </article>
        <Transition name="fade-move" mode="out-in">
      <div :key="page" class="flex gap-8 p-2">
        <RoomPaginatorRoomCard 
          v-for="regular in paginationRooms" 
          :key="regular.id"
          class="w-full md:w-1/3 lg:w-1/4"
          :room-props="regular"
        />
      </div>
    </Transition>
   <!-- Paginador -->
   <div class="w-full flex justify-end align-center gap-4 items-center">
      <button
        :disabled="page === step"
        class="p-1 cursos-pointer rounded-full h-min hover:bg-primary-light-active disabled:opacity-50"
        @click="prev"
      >
        <Icon name="material-symbols:chevron-left" class="mt-auto cursor-pointer" style="height:30px; width:30px;"/>
      </button>

      <span class="align-center text-center" :class="subtitleClass">
        {{page-step>total ?`${page-step+1}`:`${page-step+1} - ${page>total?total:page}` }} de {{ total }}
      </span>
      <button
        :disabled="page >= total"
        class="p-1  rounded-full hover:bg-primary-light-active disabled:opacity-50"
        @click="next"
      >
        <Icon name="material-symbols:chevron-right" class="mt-auto cursor-pointer"  style="height:30px; width:30px;"/>
      </button>
    </div>
    </section>

</template>

<script setup>
import { textClass, titleClass, subtitleClass } from '~/utils/getClasses';


import { useWindowSize } from '@vueuse/core'
const {rooms} = defineProps({
  rooms:{
    type: Object,
    required: true
  }
})
// Estado del paginador

const total = rooms.length
const paginationRooms=computed(()=>{
    return rooms.slice(page.value-step.value, page.value)
})
// Funciones next/prev
const { width } = useWindowSize()
const step = computed(() => {
  if (width.value < 768) return 2 // Mobile
  if (width.value < 1024) return 3 // Tablet/medium
  return 4 // Desktop
})

const page = ref(step.value)
// Functions next/prev
function next() {
  if (page.value - step.value <= total) {
    page.value += step.value
  }
}

function prev() {
  if (page.value - step.value >= step.value) {
    page.value -= step.value
  }
}


watch(step, () => {
  page.value = step.value
})
</script>

<style scoped>
.fade-move-enter-active,
.fade-move-leave-active {
  transition: all 0.4s ease;
}

.fade-move-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-move-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-move-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-move-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>