<template>
    <section
    id="contacto"
      class="relative flex flex-col items-center justify-start text-center h-[110vh] px-[var(--margin-xxlarge)]"
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
      <form class="max-w-3xl mx-auto space-y-6 text-left text-[#1B365D] h-full flex flex-col justify-center">
      <!-- Fila: Nombre y Teléfono -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col">
          <label for="nombre" class="text-sm mb-1" :class="textClass">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            class="px-4 py-2  border-solid border-1 rounded-xl border-(--blue-normal)/20 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
          >
        </div>
        <div class="flex flex-col">
          <label for="telefono" class="text-sm mb-1" :class="textClass">Número de teléfono</label>
          <input
            id="telefono"
            type="tel"
            placeholder="Tu número"
            class="px-4 py-2 border-solid border-1 rounded-xl border-(--blue-normal)/20 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
          >
        </div>
      </div>

      <!-- Selector de cuarto -->
      <div class="flex flex-col">
        <label for="nombre" class="text-sm mb-1" :class="textClass">Correo electronico</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu correo electronico"
            class="px-4 py-2  border-solid border-1 rounded-xl border-(--blue-normal)/20 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
          >
      </div>
      <div class="flex flex-col">
        <label for="cuarto" class="text-sm mb-1">Selecciona el cuarto</label>
        <select
          id="cuarto"
          class="px-4 py-2  border-solid border-1 rounded-xl border-(--blue-normal)/20 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
        >
          <option value="">Elige una opción</option>
          <option value="estandar">Cuarto Estándar</option>
          <option value="deluxe">Cuarto Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <!-- Texto informativo -->


      <!-- Botón -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-[#b65630] text-white font-medium px-6 py-3 rounded-full hover:bg-[#a84d2b] transition"
        >
          Enviar mensaje
        </button>
      </div>
    </form>

        </div>
      </div>
    </section>
  </template>
  
<script setup>


const form = reactive({
  name: '',
  email: '',
  phone: ''
})

const errors = reactive({
  name: '',
  email: ''
})

const submitForm = () => {
  // Reset errors
  errors.name = ''
  errors.email = ''

  // Validaciones
  if (!form.name.trim()) errors.name = 'El nombre es obligatorio'
  if (!form.email.includes('@')) errors.email = 'Ingresa un email válido'

  // Si no hay errores
  if (!errors.name && !errors.email) {
    alert(`Datos enviados:\nNombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}`)
  }
}

</script>