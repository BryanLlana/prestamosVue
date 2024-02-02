<script setup>
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Editar Cliente</h1>
      <RouterLink :to="{ name: 'customers' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <form action="#" method="POST" class="mt-10 md:w-[800px] md:mx-auto">
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
        <input
          type="text"
          id="nombre"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su nombre"
        >
      </div>

      <div class="mb-4">
        <label for="apellidos" class="block text-gray-700 text-sm font-bold mb-2">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese sus apellidos"
        >
      </div>

      <div class="mb-4">
        <label for="direccion" class="block text-gray-700 text-sm font-bold mb-2">Dirección:</label>
        <input
          type="text"
          id="direccion"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su dirección"
        >
      </div>

      <div class="mb-4">
        <label for="celular" class="block text-gray-700 text-sm font-bold mb-2">Celular:</label>
        <input
          type="tel"
          id="celular"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su número de celular"
        >
      </div>

      <div class="mb-4">
        <label for="referencia" class="block text-gray-700 text-sm font-bold mb-2">Referencia:</label>
        <textarea
          id="referencia"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese una referencia"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-[#44487D] text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
      >Modificar Cliente
      </button>
    </form>
  </div>
</template>