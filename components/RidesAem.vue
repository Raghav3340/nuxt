<script setup lang="ts">
const { data: html } = await useFetch('/api/aem-fragment');
</script>

<template>
  <div v-html="html" class="aem-fragment" />
</template>
