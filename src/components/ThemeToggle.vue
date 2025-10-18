<template>
  <v-btn
    :icon="themeIcon"
    variant="text"
    :color="iconColor"
    @click="toggleTheme"
    aria-label="Toggle theme"
    class="theme-toggle"
  >
    <v-icon :icon="themeIcon" />
    <v-tooltip
      activator="parent"
      location="bottom"
    >
      {{ tooltipText }}
    </v-tooltip>
  </v-btn>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

/**
 * ThemeToggle Component
 * Toggles between light and dark themes
 * Uses Vuetify's theme composable and Pinia store for persistence
 */

const theme = useTheme()

const themeIcon = computed(() => {
  return theme.global.name.value === 'dark'
    ? 'mdi-weather-night'
    : 'mdi-weather-sunny'
})

const tooltipText = computed(() => {
  return theme.global.name.value === 'dark'
    ? 'Switch to light mode'
    : 'Switch to dark mode'
})

const iconColor = computed(() => {
  return theme.global.name.value === 'dark' ? 'white' : 'grey-darken-2'
})

function toggleTheme() {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'

  // Persist theme preference to localStorage
  localStorage.setItem('theme', theme.global.name.value)
}

// Initialize theme from localStorage on component mount
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    theme.global.name.value = savedTheme
  }
}
</script>

<style scoped lang="scss">
.theme-toggle {
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: rotate(20deg);
  }
}
</style>
