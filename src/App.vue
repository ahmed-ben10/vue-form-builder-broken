<script setup>
import { ref, onMounted } from 'vue'

const builder$ = ref()

onMounted(() => {
  console.log(builder$.value)
})
</script>

<template>
  <div id="app" class="h-screen">
    <VueformBuilder ref="builder$" />
  </div>
</template>

<style>
</style>
