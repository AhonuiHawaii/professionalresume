/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Theme Configuration
import { themeConfig } from './theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: themeConfig,

  // Display configuration
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // Typography defaults
  // Uses Roboto font family configured in vite.config.mjs
  // Weights available: 100, 300, 400, 500, 700, 900
  defaults: {
    global: {
      ripple: true,
    },
    VBtn: {
      style: 'text-transform: none;', // Prevents all-caps buttons
    },
  },
})
