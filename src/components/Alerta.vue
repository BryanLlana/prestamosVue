<script setup>
defineProps({
  error: {
    type: Boolean
  }
})
</script>

<template>
  <p
    class="py-1 rounded-md mt-4 md:w-[800px] md:mx-auto text-center text-white font-semibold text-md"
    :class="error ? 'bg-red-500' : 'bg-green-500'"
  >
    <slot />
  </p>
</template>