<template>

    <section class="w-full h-[100vh] px-10 pt-10 bg-[url(https://elotroenfoque.mx/wp-content/uploads/2023/10/turismo-gto-5.jpeg)] bg-cover">
       <div class="bg-(--blue-dark)/50 w-full h-full rounded-4xl rounded-b-none border-solid border-6 border-(--blue-light)/40 p-10 flex flex-col justify-between gap-10">
        <!--Component for the header links-->
        <header-links/>
        <!--Component for the header links-->

        <h1 class="text-7xl tracking-[15px] text-(--blue-light) font-semibold self-center w-full text-center mt-auto">parador del convento</h1>
        <p class="text-3xl font-regular text-(--primary-light-hover) w-17/20 self-center text-center ">Ven y conoce guanajuato mientras te hospedas en el centro de la ciudad. Disfruta de todos los servicios que ofrecemos mientras te sientes en la familiaridad de tu hogar </p>
        <h4 class="text-(--primary-light) text-2xl w-full text-start font-bold ">Conoce nuestros mejores cuartos</h4>

        <!--Component for the room cards-->
        
        <div class="flex gap-3 justify-center">
            <FeatureRoomsCards v-for="room in featuredRooms" :key="room.id" :room="room" />
        </div>
           
        <!--Component for the room cards-->

       </div>
    </section>

</template>

<script setup>
import FeatureRoomsCards from '~/components/FeatureRoomsCards.vue';
const featuredRooms = ref(null)
onMounted(()=>{
featuredRooms.value=getFeaturedRooms()
})

</script>