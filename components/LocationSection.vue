<template>
    <section
      class="relative flex flex-col items-center justify-start text-center h-[100vh] px-[var(--margin-xxlarge)] mb-48"
    >
      <!-- Background ::before replacement -->
      <div
        class="absolute top-0 left-0 w-full h-[75%] z-[-1] bg-fixed bg-no-repeat bg-cover"
        style="
          background-image: linear-gradient(to bottom ,rgba(182, 90, 56,0.4), rgba(0, 0, 0, 0.2)),
            url('https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Ciudad-de-Guanajuato-Capital.jpg');
          background-position: 0% 0%, 0% 10%;
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
        "
      />
  
      <div class="flex flex-col items-center justify-center text-[var(--color-background-text)] w-max">
        <h2
          class="2xl:text-6xl xl:text-4xl mt-5 text-(--blue-light) z-50 font-bold p-4"
        >
          Ubicacion centrica con la mejor vista
        </h2>
        <div class="w-full -translate-y-12 z-10 -translate-x-0 bg-(--blue-dark) 2xl:h-12 xl:h-8"/>
      </div>
  
      <div
        class=" max-w-[1350px] rounded-2xl flex flex-col gap-4 p-6 justify-between align-center mt-[5vh] bg-(--primary-light) w-[90vw] h-[72vh] drop-shadow-lg mb-20"
      >
        <h2 class="text-(--blue-normal) 2xl:text-4xl xl:text-3xl font-semibold ">
          Ubicacion
        </h2>
        <div class="  min-h-[60vh] w-[100%] px-20 mb-15">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3424594010326!2d-101.25430962572737!3d21.0189790881164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b7405e2916d4d%3A0x1e2f1d44f2efbbc3!2sHotel%20Parador%20Del%20Convento!5e0!3m2!1ses-419!2smx!4v1725304160700!5m2!1ses-419!2smx"
            style="border:0; width: 100%; height: 100%"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </template>
  