<template>
    
    <section>

        
    <!--SECTION FOR THE PRINCIPAL HEADER-->
    <section class="flex justify-center w-full h-[100vh] px-10 pt-10 bg-[url(https://elotroenfoque.mx/wp-content/uploads/2023/10/turismo-gto-5.jpeg)] bg-cover overflow-x-hidden">
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
    <section class="mt-15 mb-15 h-[105vh] bg-(--primary-light) flex flex-col w-full 2xl:px-28 xl:px-22 text-(--blue-normal) 2xl:gap-8">
        <h1 class="self-center text-(--blue-dark) 2xl:text-6xl xl:text-4xl font-semibold text-center">Como reservar</h1>
        <h4 class="self-center 2xl:w-6/10 text-center 2xl:text-4xl xl:text-2xl mb-xl">Este es el proceso por el cual puedes reservar un cuarto por nosotros, es sencillo y rapido</h4>
        <div class="h-[90vh] w-full flex justify-around flex-nowrap gap-2 ">
            <book-process v-for="instruction, index in instructions" :key="index" :instruction="instruction"/>
        </div>
        <h3 class="mt-auto font-bold xl:text-3xl px-25">Contactos</h3>
        <article class="h-min    flex 2xl:gap-28 xl:gap-20 lg:gap-16 justify-center  items-end">
            <p class="h-min align-bottom"><Icon name="material-symbols:perm-phone-msg" class="mr-2 2xl:text-5xl xl:text-4xl"/><span class="h-full align-top 2xl:text-3xl xl:text-2xl font-bold">473-110-1235</span></p>
            <p class="h-min align-bottom"><Icon name="material-symbols:mail" class="mr-2 2xl:text-5xl xl:text-4xl"/><span class="h-full align-top 2xl:text-3xl xl:text-2xl font-bold">paradordelconvento@gmail.com</span></p>
            <button class="bg-(--primary-normal) p-4 px-8 rounded-3xl text-(--blue-light) 2xl:text-2xl xl:text-xl"><a href="#contact">Contacto</a></button>
        </article>
     
    </section>
    <!--LOCATION SECTION-->
    <location-section/>
    </section>


    
    

</template>

<script setup>
import FeatureRoomsCards from '~/components/FeatureRoomsCards.vue';
const featuredRooms = ref(null)
onMounted(()=>{
featuredRooms.value=getFeaturedRooms()
})

const instructions = [
    {
        title: 'Contactanos',
        description: 'Primero manda mensaje por alguno de nuestros medios de contacto como llamada telefonica, mensaje de whatsapp, por correo electronico o llenando el formulario de contacto',
        backgroundIcon:'garden:whatsapp-fill-12',
        translate:"10"
    },
    {
        title: 'Elige fecha y cuarto',
        description:'Elige y verifica disponibilidad de los cuartos, nosotros te ayudaremos a encontrar el mejor cuarto para ti',
        backgroundIcon:'solar:checklist-outline',
        translate:"30"
    },
    {
        title: 'Confirma tu reservación',
        description:'Elige y verifica disponibilidad de los cuartos, nosotros te ayudaremos a encontrar el mejor cuarto para ti',
        backgroundIcon:'ic:twotone-playlist-add-check-circle',
        translate:"50"
    }
]


</script>