<template>
    <div v-html="html" />
  </template>
  
  <script setup lang="ts">
import { useAemFragment } from '~/composables/useAemFragment';

  const html = useAemFragment("himalayan-odyssey");
  </script>
  