<template>
    
    <section >

        
    <!--SECTION FOR THE PRINCIPAL HEADER-->
    <section class="flex justify-center w-full h-[100vh] px-10 pt-10 bg-[url(https://elotroenfoque.mx/wp-content/uploads/2023/10/turismo-gto-5.jpeg)] bg-cover overflow-x-hidden">
       <div class="justify-self-center bg-(--blue-dark)/60 max-w-[1650px] w-full h-full rounded-4xl rounded-b-none border-solid border-6 border-(--blue-light)/40 p-10 md:p-5 sm:p-4 flex flex-col justify-between gap-10">
        <!--Component for the header links-->
        <header-links :show-minimal="false" class="text-(--primary-light-hover)"/>
        <!--Component for the header links-->

        <h1 class="tracking-[15px] text-(--blue-light) font-semibold self-center w-full text-center mt-auto" :class="heroTitleClass">parador del convento</h1>
        <p :class="subtitleClass"  class="font-regular text-(--primary-light-hover) w-17/20 self-center text-center mb-auto">Ven y conoce guanajuato mientras te hospedas en el centro de la ciudad. Disfruta de todos los servicios que ofrecemos mientras te sientes en la familiaridad de tu hogar </p>
        <h4 class="2xl:ml-48 xl:ml-28 lg:28 lg:ml-16 text-(--blue-light) 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md w-full text-start font-black ">Conoce nuestros mejores cuartos</h4>

        <!--Component for the room cards-->
        
        <div class="flex gap-3 justify-center flex-1 max-h-[41vh]">
            <FeatureRoomsCards v-for="room in featuredRooms" :key="room.id" :room="room" />
        </div>
           
        <!--Component for the room cards-->

       </div>
    </section>      
    <!--SECTION FOR THE HOW TO BOOK ROOM-->
    <section class=" h-[90vh] bg-(--primary-light) flex flex-col w-full 2xl:px-28 xl:px-22 text-(--blue-normal) 2xl:gap-8 my-32">
        <h2 class="self-center text-(--blue-dark) text-center" :class="titleClass">Como reservar</h2>
        <h4 class="self-center 2xl:w-6/10 text-center text-(--blue-normal)/80" :class="sectionSubtitle">Este es el proceso por el cual puedes reservar un cuarto por nosotros, es sencillo y rapido</h4>
        <div class="h-[50vh] w-full flex justify-around flex-nowrap gap-2 mb-auto">
            <book-process v-for="instruction, index in instructions" :key="index" :instruction="instruction" :number="index+1"/>
        </div>
        <article class="h-min flex 2xl:gap-28 xl:gap-20 lg:gap-16 justify-center  items-end">
            <p class="h-min align-bottom"><Icon name="material-symbols:perm-phone-msg" class="mr-2 2xl:text-5xl xl:text-4xl"/><span class="h-full align-top  font-bold" :class="sectionSubtitle">473-110-1235</span></p>
            <p class="h-min align-bottom"><Icon name="material-symbols:mail" class="mr-2 2xl:text-5xl xl:text-4xl"/><span class="h-full align-top  font-bold" :class="sectionSubtitle">paradordelconvento@gmail.com</span></p>
            <button class="bg-(--primary-normal) p-4 px-8 rounded-3xl text-(--blue-light) " :class="subtitleClass"><a href="#contact">Contacto</a></button>
        </article>
     
    </section>
    <!--LOCATION SECTION-->
    <location-section/>
 <!--SECTION FOR THE ROOMS-->
    <section class="relative w-full bg-(--blue-dark) 2xl:h-[130vh] xl:h-[135vh] py-20">
        <h2 class=" font-black text-(--primary-light-active) w-full text-center" :class="titleClass">Habitaciones</h2>
        <h3 class=" whitespace-nowrap text-[9vw] font-bold text-(--blue-light)/60 z-0 select-none w-full">
        Parador del convento
        </h3>
        <div class="translate-x-0 2xl:-translate-y-[9vh] xl:-translate-y-[6vh] md:-translate-y-[4vh] lg:-translate-y-[6vh] max-h-[90vh] grid grid-cols-6 gap-2 h-[90vh] grid-rows-2 z-100 max-w-[125vh] ml-auto mr-auto px-2">
            <room-type-card
            v-for="type in roomTypes" :key="type.title"
            :class="type.optionalClass"
            class="rounded-4xl"
            :props="type"
            />
        </div>
    </section>

    <!--SECTION FOR THE SERVICES-->
    <section id="servicios" class="w-full h-[75vh] my-10 p-20 flex flex-col justify-between mb-48 mt-24">
       <h3 class="max-w-[55vw] font-bold" :class="titleClass">Servicios que incluye su estancia</h3>
       <div class="h-1/2 w-full flex justify-between gap-10 flex-nowrap" >
        <article
        v-for="service in services" :key="service.title"
        class="w-1/3 max-w-[25%] flex flex-col align-center"
        
        >
        <Icon :name="service.icon" style="color: var(--blue-normal); height: 100px; width:150px; font-weight: 900;" />
        <h4 class="text-(--blue-dark) font-bold" :class="subtitleClass">{{ service.title }}</h4>
        <p class=" font-semibold" :class="textClass">{{ service.description }}</p>
    </article>
       </div>
    </section>
    <!--PHOTO GALLERY SECTION-->
    <section id="photoGallery" class="w-full h-[100vh] 2xl:p-10 xl:p-8 lg:p-6 md:p-4 xs:p-2 mb-48">
        <h3 class="w-full  text-center font-black" :class="titleClass">Explora el encanto del parador</h3>
        <PhotoGallery/>
    </section>
    <!--Section for the contact form-->
    <section class="">
        <h2 class="p-8 w-full text-end 2xl:text-7xl xl:text-5xl lg:text-3xl md:text-xl sm:text-lg xs:text-md font-black">Contactanos para hacer una <br> reservacion</h2>
    <ContactForm/>
    </section>
</section>


    
    

</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue';
import FeatureRoomsCards from '~/components/FeatureRoomsCards.vue';
import PhotoGallery from '~/components/PhotoGallery.vue';

import { textClass, titleClass, subtitleClass } from '~/utils/getClasses';
const featuredRooms = ref(null)
onMounted(()=>{
featuredRooms.value=getFeaturedRooms()
})

const instructions = [
    {
        title: 'Contactanos',
        description: 'Primero manda mensaje por alguno de nuestros medios de contacto como llamada telefonica, mensaje de whatsapp, por correo electronico o llenando el formulario de contacto',
        backgroundIcon:'garden:whatsapp-fill-12',
        translate:0
    },
    {
        title: 'Elige fecha y cuarto',
        description:'Elige y verifica disponibilidad de los cuartos, nosotros te ayudaremos a encontrar el mejor cuarto para ti',
        backgroundIcon:'solar:checklist-outline',
        translate:15
    },
    {
        title: 'Confirma tu reservación',
        description:'Elige y verifica disponibilidad de los cuartos, nosotros te ayudaremos a encontrar el mejor cuarto para ti',
        backgroundIcon:'ic:twotone-playlist-add-check-circle',
        translate:25
    }
]
const roomTypes = [
    {
        title:'Suites',
        isBanner:true,
        optionalClass: 'bg-(--primary-light-active) col-span-4',
        description:'Explora nuestras suites y encuentra una estancia de en sueño',
        type:'/rooms#suites'
    },
    {
        title:'Habitacion de una matrimonial',
        isBanner:false,
        optionalClass: 'bg-(--primary-light) col-span-2',
        description:'Habitaciones de 1 cama matrimonial excelentes para una estancia para dos personas',
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg',
        services:[
            {
                icon:'material-symbols:person-apron-outline-rounded',
                number:2
            },
            {
                icon:'material-symbols:bathtub-outline-sharp',
                number:1
            }
        ]
    },
    {
        title:'Habitacion de dos matrimoniales',
        isBanner:false,
        optionalClass: 'bg-(--primary-light) col-span-2',
        description:'Habitaciones de 2 cama matrimonial excelentes para una estancia para dos personas',
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg',
        services:[
            {
                icon:'material-symbols:person-apron-outline-rounded',
                number:4
            },
            {
                icon:'material-symbols:bathtub-outline-sharp',
                number:1
            }
        ]
        
    },
    {
        title:'Habitacion de tres matrimoniales',
        isBanner:false,
        optionalClass: 'bg-(--primary-light) col-span-2',
        description:'Habitaciones de 1 cama matrimonial excelentes para una estancia para dos personas',
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg',
        services:[
            {
                icon:'material-symbols:person-apron-outline-rounded',
                number:6
            },
            {
                icon:'material-symbols:bathtub-outline-sharp',
                number:1
            }
        ]
    },
    {
        title:'Habitaciones',
        isBanner:true,
        type:'/rooms#regular',
        optionalClass: 'bg-(--primary-light-active) col-span-2',
        description:'Explora todas las habitaciones que tenemos para ofrecerte',
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg'
        
    },
]
const services = [
    {
        icon:'fluent:vehicle-car-parking-48-filled',
        title:'Estacionamiento',
        description:'La estancia por noche incluye un lugar de estacionamiento por cuarto, este finaliza a mediodia cuando vence el cuarto'
    },
    {
        icon:'fluent:vehicle-car-parking-48-filled',
        title:'Estacionamiento',
        description:'La estancia por noche incluye un lugar de estacionamiento por cuarto, este finaliza a mediodia cuando vence el cuarto'
    },
    {
        icon:'fluent:vehicle-car-parking-48-filled',
        title:'Estcionamiento',
        description:'La estancia por noche incluye un lugar de estacionamiento por cuarto, este finaliza a mediodia cuando vence el cuarto'
    }
]


</script>