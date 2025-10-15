/**
 * Unified Pinia Store
 *
 * Handles lightweight UI state for the resume app:
 * - theme: Controls Vuetify's light/dark mode
 * - selectedResume: Determines which resume focus to display
 *
 * All resume content data lives in resume.json (not in state)
 */

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAppStore = defineStore('app', () => {
  // Theme state: 'light' or 'dark'
  // Initialize from localStorage or default to 'light'
  const theme = ref(localStorage.getItem('theme') || 'light')

  // Selected resume focus: 'customerService', 'itSupport', or 'frontendDeveloper'
  // Initialize from localStorage or default to 'frontendDeveloper'
  const selectedResume = ref(localStorage.getItem('selectedResume') || 'frontendDeveloper')

  // Persist theme to localStorage whenever it changes
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })

  // Persist selectedResume to localStorage whenever it changes
  watch(selectedResume, (newResume) => {
    localStorage.setItem('selectedResume', newResume)
  })

  // Action to toggle between light and dark themes
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // Action to set the selected resume focus
  function setSelectedResume(resumeType) {
    if (['customerService', 'itSupport', 'frontendDeveloper'].includes(resumeType)) {
      selectedResume.value = resumeType
    } else {
      console.warn(`Invalid resume type: ${resumeType}`)
    }
  }

  return {
    // State
    theme,
    selectedResume,

    // Actions
    toggleTheme,
    setSelectedResume,
  }
})
