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
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const currentTheme = computed(() => theme.global.current.value.dark ? 'dark' : 'light')

const themeIcon = computed(() =>
  currentTheme.value === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'
)

const tooltipText = computed(() =>
  currentTheme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
)

const iconColor = computed(() =>
  currentTheme.value === 'dark' ? 'white' : 'grey-darken-2'
)

const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    theme.global.name.value = savedTheme
  }
})
</script>

<style>
.theme-toggle {
  transition: transform 0.2s ease-in-out;
}

.theme-toggle:hover {
  transform: rotate(20deg);
}
</style>
