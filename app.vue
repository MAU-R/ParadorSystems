<template>
    <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }"/>
</template>

<script lang="ts" setup>
useHead({
  title: 'Hotel Parador Del Convento',
  meta: [
    { name: 'description', content: 'hotel parador del convento' },
    { name: 'keywords', content: 'Hotel, Guanajuato, Centro, Cuartos, Habitaciones, Centrico, Estancia, Mexico' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
