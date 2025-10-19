
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

import { themeConfig } from './theme'

export default createVuetify({
  theme: themeConfig,

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


  defaults: {
    global: {
      ripple: true,
    },
    VBtn: {
      style: 'text-transform: none;', 
    },
  },
})
