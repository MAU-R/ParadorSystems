<template>
<article class="w-100% h-15% sm:h-8% flex">
    <div class="w-1/3  flex flex-col justify-between h-100%">
        <p class="font-semibold text-(--primary-light-hover) 2xl:text-xl xl:text-lg lg:text-xl md:text-lg sm:text-md mb-2">parador@parador.com</p>
        <p class="font-semibold text-(--primary-light-hover) 2xl:text-xl xl:text-lg lg:text-xl md:text-lg sm:text-md mb-2">Guanajuato centro</p>
        <p class="font-semibold text-(--primary-light-hover) 2xl:text-xl xl:text-lg lg:text-xl md:text-lg sm:text-md mb-2">473 117 0056</p>
    </div>
    <div class="w-max flex-1 xl:max-w-[63%] lg:max-w-[100%] flex ml-auto h-max justify-end no-wrap self-center">
        <span
        v-for="link in links" :key="link.name"
        class=" 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md  font-bold lg:p-4"
        :class = "link.action=='openUpModal'? 'text-(--primary-light) bg-(--primary-normal) rounded-3xl md:p-2 self-center text-center': link.action=='contact' ? 'self-center text-center ml-auto text-(--blue-normal) bg-(--primary-light-active) rounded-3xl mr-4 md:p-2' : 'justify-self-center text-(--primary-light-hover) '"
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