<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<template>
  <div>
    <RouterView class="router-view" data-testid="router-view" />
  </div>
</template>

<style scoped lang="scss"></style>
