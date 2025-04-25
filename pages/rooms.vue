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

    <section class="h-[60vh] w-full my-32">
      <h2 class="w-full text-center" :class="titleClass" >Habitacion regular</h2>
      <h4 class="text-(--blue-normal)/80 w-full text-center" :class="subtitleClass">Habitaciones con 2 camas matrimoniales y un baño</h4>
      <div class="w-full h-full p-12">
        <article class="rounded-4xl flex w-full md:w-1/2 xl:w-1/3 justify-around align-center p-2 bg-(--primary-light-hover)">
            <button class="">
              <Icon
              name="material-symbols:menu mt-auto mb-auto"
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
            name="material-symbols:search-rounded text-center align-center mt-auto mb-auto"
            style="height: 35px; width: 35px;"
            />
        </article>
        <RoomPaginatorRoomSection/>
      </div>

    </section>
  </div>

</template>

<script setup>
import { textClass, titleClass, subtitleClass } from '~/utils/getClasses';
import { Field } from '@ark-ui/vue/field'

</script>