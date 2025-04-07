<template>
    <section
      class="relative flex flex-col items-center justify-start text-center h-[140vh] px-[var(--margin-xxlarge)]"
    >
      <!-- Background ::before replacement -->
      <div
        class="absolute top-0 left-0 w-full h-[55%] z-[-1] bg-fixed bg-no-repeat bg-cover"
        style="
          background-image: linear-gradient(to bottom ,rgba(204, 77, 0,0.3), rgba(0, 0, 0, 0.1)),
            url('https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Ciudad-de-Guanajuato-Capital.jpg');
          background-position: 0% 0%, 0% 10%;
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
        "
      />
  
      <div class="flex flex-col items-center justify-center text-[var(--color-background-text)]">
        <h2
          class="relative z-[100] mb-[var(--margin-large)] text-[var(--color-background-text)] before:content-[''] before:absolute before:top-[60%] before:h-1/2 before:w-full before:bg-[var(--primary-color)] before:-z-10"
        >
          Ubicacion centrica con la mejor vista
        </h2>
        <p
          class="text-[var(--color-background-text)] mb-[var(--margin-medium)] max-w-[600px]"
        >
          Ubicado en el centro de guanajuato a 5 minutos caminando de la basílica y la plaza de la paz
        </p>
        <a
          href="#"
          class="text-[var(--text-primary)] px-[var(--margin-medium)] text-shadow-sm"
          style="text-shadow: 1px 2px 10px var(--primary-color)"
        >
          Ver en mapa
        </a>
      </div>
  
      <div
        class="flex flex-col justify-between mt-auto px-[var(--margin-xlarge)] bg-[var(--color-background-text)] w-[90vw] h-[80%]"
      >
        <h2 class="text-[var(--font-main-heading)]">
          Ubicacion
        </h2>
        <div class="h-[90%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3424594010326!2d-101.25430962572737!3d21.0189790881164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b7405e2916d4d%3A0x1e2f1d44f2efbbc3!2sHotel%20Parador%20Del%20Convento!5e0!3m2!1ses-419!2smx!4v1725304160700!5m2!1ses-419!2smx"
            style="border:0; width: 90%; height: 80%"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </template>
  