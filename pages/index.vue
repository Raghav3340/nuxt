<template>
  <main class="main-container">
    <RidesAem />
    <HeroBanner />
    <UpcomingRides />
  </main>
</template>

<script setup lang="ts">
import RidesAem from '../components/RidesAem.vue';
import HeroBanner from '../components/HeroBanner.vue';
import UpcomingRides from '../components/UpcomingRides.vue';
</script>

<style scoped>
/* Ensure main container uses full width and height */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center children horizontally */
  gap: 2rem;
  padding: 2rem 1rem;
  background: #000;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

/* Make children responsive and stretch nicely */
.main-container > * {
  width: 100%; /* always full width of container */
  max-width: 1200px; /* limit max width for readability */
  box-sizing: border-box;
  padding: 0 1rem; /* horizontal padding inside each component */
  margin: 0 auto;
}

/* Responsive padding and gap for smaller screens */
@media (max-width: 1024px) {
  .main-container {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
  .main-container > * {
    padding: 0 0.75rem;
  }
}

@media (max-width: 600px) {
  .main-container {
    padding: 1rem 0.5rem;
    gap: 1rem;
  }
  .main-container > * {
    padding: 0 0.5rem;
  }
}
</style>
