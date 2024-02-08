<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-[#44487D] py-6 md:py-3">
    <div class="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
      <h1 class="text-4xl uppercase font-bold text-[#F1EFCC] text-center md:text-left">
        Préstamos <span>Elsa</span>
      </h1>
      <div class="flex flex-col md:flex-row items-center gap-6">
        <nav class="flex flex-row gap-7 items-center">
          <RouterLink
            class="text-lg text-[#F1EFCC] font-semibold"
            :to="{ name: 'customers' }"
          >Clientes  
          </RouterLink>
          <RouterLink
            class="text-lg text-[#F1EFCC] font-semibold"
            :to="{ name: 'loans' }"
          >Préstamos  
          </RouterLink>
          <RouterLink
            class="text-lg text-[#F1EFCC] font-semibold"
            :to="{ name: 'payments-of-day' }"
          >Pagos  
          </RouterLink>
        </nav>
        <button
          type="button"
          class="bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md text-[#F1EFCC] font-semibold"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  </header>
</template>