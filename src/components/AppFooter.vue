<template>
  <v-footer
    class="app-footer py-6"
    color="surface"
  >
    <v-container>
      <v-row align="center">
        <!-- Social Links -->
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-left"
        >
          <SocialLinks
            v-if="socialLinks && socialLinks.length"
            :social-links="socialLinks"
            :icon-size="20"
            icon-color="icon-default"
          />
        </v-col>

        <!-- Copyright -->
        <v-col
          cols="12"
          md="4"
          class="text-center"
        >
          <div class="text-caption text-secondary">
            &copy; {{ currentYear }} {{ copyrightName }}. All rights reserved.
          </div>
        </v-col>

        <!-- Additional Links -->
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-right"
        >
          <div class="d-flex ga-4 justify-center flex-wrap footer-links">
            <a
              v-for="link in footerLinks"
              :key="link.title"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="text-caption text-secondary text-decoration-none footer-link"
            >
              {{ link.title }}
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue'
import SocialLinks from './SocialLinks.vue'

/**
 * AppFooter Component
 * Footer with social links, copyright, and additional links
 */

const props = defineProps({
  copyrightName: {
    type: String,
    default: 'Neill Holloman',
  },
  socialLinks: {
    type: Array,
    default: () => [],
    // Expected format:
    // [{ platform: 'LinkedIn', url: 'https://...', icon: 'mdi-linkedin' }]
  },
  footerLinks: {
    type: Array,
    default: () => [
      { title: 'Privacy', href: '#privacy', external: false },
      { title: 'Terms', href: '#terms', external: false },
    ],
  },
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Custom classes for specific styling */
.app-footer {
  padding: 24px 0;
  background-color: rgb(var(--v-theme-surface));
  border-top: 1px solid rgba(var(--v-theme-text-secondary), 0.12);
}

@media (min-width: 960px) {
  .footer-links {
    justify-content: flex-end;
  }
}

.footer-link {
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .app-footer .v-col {
    margin-bottom: 16px;
  }

  .app-footer .v-col:last-child {
    margin-bottom: 0;
  }
}
</style>
