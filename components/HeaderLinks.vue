<template>
    <article class="w-full flex items-center justify-between md:py-4 md:px-4  md:shadow-sm">
      <!-- Contact Info (solo visible si no es showMinimal y en md o más) -->
      <div
        v-if="!showMinimal"
        class="hidden md:flex flex-col justify-between w-1/3"
      >
        <p class="font-semibold text-(--primary-light-hover) text-sm md:text-md xl:text-lg 2xl:text-xl">parador@parador.com</p>
        <p class="font-semibold text-(--primary-light-hover) text-sm md:text-md xl:text-lg 2xl:text-xl">Guanajuato centro</p>
        <p class="font-semibold text-(--primary-light-hover) text-sm md:text-md xl:text-lg 2xl:text-xl">473 117 0056</p>
      </div>

      <!-- Desktop Nav (visible en md+) -->
      <div
        class="hidden md:flex flex-nowrap  xl:max-w-[63%] lg:max-w-[100%] ml-auto h-max justify-end  gap-4 w-1/3"
        :class="showMinimal ? 'w-max' : 'flex-1'"
      >
        <span
          v-for="link in links"
          :key="link.name"
          class="font-bold text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl lg:p-2 text-[var(--primary-light)]"
          :class="[
                    link.action === 'openUpModal' && 'bg-[var(--primary-normal)] rounded-3xl !p-3 self-center text-center',
                    link.action === 'contact' && '!text-[var(--blue-normal)] bg-[var(--primary-light-active)] rounded-3xl !p-3 self-center text-center ml-auto mr-4'
                ]"
        >
          <a :href="link.route">{{ link.name }}</a>
        </span>
      </div>

      <!-- Mobile Menu Button (solo visible en < md) -->
<div class="flex w-full md:hidden">
    <div
        v-if="!showMinimal"
        class=" flex-col justify-between w-1/3"
      >
        <p class="font-semibold text-(--primary-light-hover) text-sm md:text-md xl:text-lg 2xl:text-xl mb-2">parador@parador.com</p>
        <p class="font-semibold text-(--primary-light-hover) text-sm md:text-md xl:text-lg 2xl:text-xl">473 117 0056</p>
      </div>
    <button class="md:hidden ml-auto border-none rounded-[100%] bg-(--primary-normal) p-2 h-12 w-12" @click="isOpen = !isOpen">
        <Icon name="material-symbols:menu" size="28" />
      </button>
</div>
    </article>

    <!-- Mobile Nav Menu -->
    <transition name="fade" >
      <div
      ref="menuRef"
        v-if="isOpen"
        class="md:hidden bg-(--blue-darker)/98 border-4 border-solid border-(--blue-light-active)/40 rounded-2xl shadow-md px-6 py-4 space-y-4 fixed h-3/10 w-7/10 max-w-[55w]"
      >
        <span
          v-for="link in links"
          @click="isOpen=!isOpen"
          :key="'mobile-'+link.name"
          class=" block font-bold text-md text-[var(--primary-light)]"
          :class="[
                    link.action === 'openUpModal' && 'bg-[var(--primary-normal)] rounded-3xl p-2 self-center text-center',
                    link.action === 'contact' && ' !text-[var(--blue-normal)] bg-[var(--primary-light-active)] rounded-3xl p-2 self-center text-center ml-auto mr-4'
                ]"
        >
          <a :href="link.route">{{ link.name }}</a>
        </span>
      </div>
    </transition>
  </template>

  <script setup>
  import { onClickOutside } from '@vueuse/core'
  const menuRef = ref(null)
  const { showMinimal } = defineProps({
    showMinimal: {
      required: true,
      type: Boolean
    }
  })
  onClickOutside(menuRef, ()=>{
    isOpen.value=false
})
  const isOpen = ref(false)

  const links = showMinimal
    ? [
        { name: 'Regresar', route: "/", action: 'link' },
        { name: 'Contacto', route: '#contacto', action: 'contact' },
        { name: 'Reservar', route: '#reservar', action: 'openUpModal' }
      ]
    : [
        { name: 'Cuartos', route: '/rooms', action: 'link' },
        { name: 'Ubicacion', route: '#ubicacion', action: 'link' },
        { name: 'Servicios', route: '#servicios', action: 'link' },
        { name: 'Contacto', route: '#contacto', action: 'contact' },
        { name: 'Reservar', route: '#reservar', action: 'openUpModal' }
      ]
  </script>

  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
