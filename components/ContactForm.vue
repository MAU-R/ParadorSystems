<template>
    <section
      class="relative flex flex-col items-center justify-start text-center h-[140vh] px-[var(--margin-xxlarge)]"
    >
      <!-- Background ::before replacement -->
      <div
        class="absolute top-0 left-0 w-full h-[55%] z-[-1] bg-fixed bg-no-repeat bg-cover"
        style="
          background-image: linear-gradient(to bottom ,rgba(182, 90, 56,0.4), rgba(0, 0, 0, 0.2)),
            url('https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Ciudad-de-Guanajuato-Capital.jpg');
          background-position: 0% 0%, 0% 10%;
          clip-path: polygon(100% 0, 0 0, 0  80%, 100% 100%);
        "
      />

  
      <div
        class=" max-w-[1500px] rounded-2xl flex flex-col gap-4 p-6 justify-between align-center mt-[20vh] bg-(--primary-light) w-[90vw] h-[76vh] drop-shadow-lg mb-20"
      >
        <h2 class="text-(--blue-normal) 2xl:text-4xl xl:text-3xl font-semibold ">
          Formulario de contacto
        </h2>
        <div class="  min-h-[60vh] w-[100%] px-20 mb-15">
          <FORM></FORM>

        </div>
      </div>
    </section>
  </template>
  
<script setup>

const name=ref('')
const email=ref('')
const number=ref('')

</script>