<template>
  <section class="position-relative w-100 hero-section">
    <div class="position-relative w-100 hero-wrapper">
      <v-img
        :src="backgroundImage"
        :alt="backgroundAlt"
        cover
        class="position-relative w-100 hero-image"
        :height="heroHeight"
      >
        <!-- Dark overlay for better text contrast -->
        <div class="position-absolute top-0 left-0 w-100 h-100 hero-overlay" />
      </v-img>

      <!-- Content slot for ProfileCard or other hero content -->
      <v-container fluid class="position-absolute w-100 hero-container px-4">
        <slot />
      </v-container>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

/**
 * HeroSection Component
 * Full-width hero background image with optional overlay
 * Provides slot for ProfileCard or other hero content
 */

const props = defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
  backgroundAlt: {
    type: String,
    default: 'Hero background',
  },
  overlayOpacity: {
    type: Number,
    default: 0.3,
    validator: (value) => value >= 0 && value <= 1,
  },
  minHeight: {
    type: String,
    default: '525px',
  },
})

const { mobile } = useDisplay()

// Adjust hero height based on screen size
const heroHeight = computed(() => {
  return mobile.value ? '450px' : props.minHeight
})
</script>

<style>
.hero-section {
  position: relative;
  width: 100%;
  padding-bottom: 150px;
}

.hero-wrapper {
  position: relative;
  width: 100%;
}

.hero-image {
  position: relative;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(150px);
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .hero-container {
    padding-top: 80px;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
