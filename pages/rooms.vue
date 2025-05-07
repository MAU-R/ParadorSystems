<template>
  <div>
    <section class="relative h-[100vh] text-(--blue-normal)">
        <div
        class=" w-full h-full  bg-no-repeat bg-cover z-10"
        style="
          background-image: linear-gradient(to bottom ,rgba(182, 90, 56,0.4), rgba(0, 0, 0, 0.2)),
            url('https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Ciudad-de-Guanajuato-Capital.jpg');
          background-position: 0% 0%, 0% 10%;
          clip-path: polygon(0 0, 0% 100%, 20% 100%, 60% 0%);
        "
      />
      <div class="absolute top-0 right-0 w-1/2 h-full p-6 z-100 flex flex-col align-end text-center">
        <HeaderLinks :show-minimal="true"/>
        <h1 class="font-black  mt-auto self-center mb-14" :class="titleClass">Cuartos</h1>
        <h4 class="mb-auto" :class="subtitleClass">Conoce todos los cuartos que tenemos disponibles, escoge el que mas te guste y reserva con nosotros para tu siguiente viaje a guanajuato gto</h4>
      </div>
    </section>

    <section class="h-[100vh] max-h-[850px] w-full my-32">
      <h2 class="w-full text-center" :class="titleClass" >Habitacion regular</h2>
      <h4 class="text-(--blue-normal)/80 w-full text-center" :class="subtitleClass">Habitaciones con 2 camas matrimoniales y un baño</h4>
      <div class="w-full h-full p-8">

        <RoomPaginatorRoomSection :rooms="regularRooms"/>
      </div>
    </section>
    <section class="h-[100vh] max-h-[850px] w-full my-32">
      <h2 class="w-full text-center" :class="titleClass" >Habitacion alternativa</h2>
      <h4 class="text-(--blue-normal)/80 w-full text-center" :class="subtitleClass">Habitaciones variadas con diferentes distribuciones</h4>
      <div class="w-full h-full p-8">

        <RoomPaginatorRoomSection :rooms="alternativeRooms"/>
      </div>
    </section>
  </div>

</template>

<script setup>
import { getRegularRooms, getAlternativeRooms } from '~/utils/getRooms.js';
const regularRooms=getRegularRooms()
const alternativeRooms = getAlternativeRooms()
</script>