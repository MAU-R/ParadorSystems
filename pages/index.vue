<template>
    
    <section>

        
    <!--SECTION FOR THE PRINCIPAL HEADER-->
    <section class="flex justify-center w-full h-[100vh] px-10 pt-10 bg-[url(https://elotroenfoque.mx/wp-content/uploads/2023/10/turismo-gto-5.jpeg)] bg-cover">
       <div class="justify-self-center bg-(--blue-dark)/60 max-w-[1650px] w-full h-full rounded-4xl rounded-b-none border-solid border-6 border-(--blue-light)/40 p-10 md:p-5 sm:p-4 flex flex-col justify-between gap-10">
        <!--Component for the header links-->
        <header-links/>
        <!--Component for the header links-->

        <h1 class="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-3xl tracking-[15px] text-(--blue-light) font-semibold self-center w-full text-center mt-auto">parador del convento</h1>
        <p class="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-lg sm:text-sm font-regular text-(--primary-light-hover) w-17/20 self-center text-center mb-auto">Ven y conoce guanajuato mientras te hospedas en el centro de la ciudad. Disfruta de todos los servicios que ofrecemos mientras te sientes en la familiaridad de tu hogar </p>
        <h4 class="2xl:ml-48 xl:ml-28 lg:28 lg:ml-16 text-(--primary-light) 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md w-full text-start font-bold ">Conoce nuestros mejores cuartos</h4>

        <!--Component for the room cards-->
        
        <div class="flex gap-3 justify-center flex-1 max-h-[40vh]">
            <FeatureRoomsCards v-for="room in featuredRooms" :key="room.id" :room="room" />
        </div>
           
        <!--Component for the room cards-->

       </div>
    </section>
    <!--SECTION FOR THE HOW TO BOOK ROOM-->
    <section class="h-[90vh] bg-(--primary-light)">
        <h1>hellow</h1>
    </section>


    </section>


    
    

</template>

<script setup>
import FeatureRoomsCards from '~/components/FeatureRoomsCards.vue';
const featuredRooms = ref(null)
onMounted(()=>{
featuredRooms.value=getFeaturedRooms()
})

</script>