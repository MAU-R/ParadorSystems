<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col justify-between">
      <main class="flex-1">
        <slot />
      </main>
      <footer class="foot">
        © 2025 Tu Sitio. Todos los derechos reservados.
      </footer>
    </div>
  </template>
  
  <script setup>

  </script>
 <style scoped>
.foot{
    background-color: var(--blue-dark);
    height: 25vh;
    width: 100%;
    color: var(--primary-light-hover);
}
</style>