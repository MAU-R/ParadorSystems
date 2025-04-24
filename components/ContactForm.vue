<template>
    <section
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
          <div class=" w-full h-full flex items-center justify-center p-4">
    <form @submit.prevent="submitForm" class="w-full ">
      <!-- Fieldset con estilos Tailwind -->
      <fieldset class="p-6 rounded-xl w-full h-full shadow-md border-solid border-2 border-(--primary-light-hover) space-y-6">
        <!-- Leyenda del fieldset -->

        <!-- Campo Nombre -->
        <Field.Root class="text-start">
          <Field.Label class="block text-sm font-semibold text-(--blue-normal)/70 mb-1">
            Nombre completo
          </Field.Label>
          <Field.Input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 border-2 border-(--blue-light-hover) rounded-lg  focus:border-(--blue-darker)/50 transition"
            placeholder="Ej: Juan Pérez"
          />
          <Field.ErrorText class="text-red-500 text-xs mt-1">
            {{ errors.name }}
          </Field.ErrorText>
        </Field.Root>

        <!-- Campo Email -->
        <Field.Root class="text-start">
          <Field.Label class="block text-sm font-semibold text-(--blue-normal)/70 mb-1">
            Correo electrónico
          </Field.Label>
          <Field.Input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 border-2 border-(--blue-light-hover) rounded-lg  focus:border-(--blue-darker)/50 transition"
            placeholder="ejemplo@email.com"
          />
          <Field.HelperText class="text-gray-500 text-xs self-start mt-1">
            Nunca compartiremos tu email
          </Field.HelperText>
          <Field.ErrorText class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </Field.ErrorText>
        </Field.Root>

        <!-- Campo Teléfono -->
        <Field.Root class="text-start">
          <Field.Label class="block text-sm font-semibold text-(--blue-normal)/70 mb-1">
            Teléfono
          </Field.Label>
          <Field.Input
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-2 border-2 border-(--blue-light-hover) rounded-lg  focus:border-(--primary-light-active) transition"
            placeholder="+51 987 654 321"
          />
        </Field.Root>

        <!-- Botón de submit -->
        <button
          type="submit"
          class="w-full mt-6 bg-(--primary-normal) hover:bg-(--primary-normal-hover) text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md"
        >
          Enviar datos
        </button>
      </fieldset>
    </form>
  </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
import { Field } from '@ark-ui/vue'

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