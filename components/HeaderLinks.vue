<template>
<article class="w-100% h-15% flex">
    <div class="w-1/3 flex flex-col justify-between h-100%">
        <p class="font-semibold text-(--primary-light-hover) text-2xl mb-2">parador@parador.com</p>
        <p class="font-semibold text-(--primary-light-hover) text-2xl mb-2">Guanajuato centro</p>
        <p class="font-semibold text-(--primary-light-hover) text-2xl mb-2">473 117 0056</p>
    </div>
    <div class="w-max flex-1 ml-auto h-max flex justify-between no-wrap">
        <span
        v-for="link in links" :key="link.name"
        class="text-2xl  font-bold p-4"
        :class = "link.action=='openUpModal'? 'text-(--primary-light) bg-(--primary-normal) rounded-3xl': link.action=='contact' ? 'text-(--blue-normal) bg-(--primary-light-active) rounded-3xl ml-auto mr-4' : 'text-(--primary-light-hover) '"
        ><a :href="link.route">{{link.name}}</a>
    </span>
    </div>
</article>

</template>

<script setup>

const links = [
    {
        name: 'Cuartos',
        route: '#cuartos',
        action: 'link'
    },
    {
        name: 'Ubicacion',
        route: '#ubicacion',
        action: 'link'
    },
    {
        name: 'Servicios',
        route: '#servicios',
        action: 'link'
    },
    {
        name: 'Contacto',
        route: '#contacto',
        action: 'contact'
    },
    {
        name: 'Reservar',
        route: '#reservar',
        action: 'openUpModal'
    }
]

</script>