<template>
    <div v-html="html" />
  </template>
  
  <script setup lang="ts">
import { useAemFragment } from '~/composables/useAemFragment';

  const html = useAemFragment("upcoming-rides");
  </script>
  