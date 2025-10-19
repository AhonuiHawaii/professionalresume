<template>
  <div class="d-flex ga-4 align-center flex-wrap social-links">
    <a
      v-for="link in socialLinks"
      :key="link.platform"
      :href="link.url"
      :aria-label="link.platform"
      target="_blank"
      rel="noopener noreferrer"
      class="d-inline-flex align-center ga-2 text-decoration-none rounded pa-2 social-link"
    >
      <v-img
        :src="link.icon"
        :alt="`${link.platform} icon`"
        :width="iconSize"
        :height="iconSize"
        class="social-icon"
      />
      <span v-if="showLabels" class="text-body-2 social-label">
        {{ link.platform }}
      </span>
    </a>
  </div>
</template>

<script setup>
/**
 * SocialLinks Component
 * Displays social media icons with links
 * Used in ProfileCard and potentially other sections
 */

const props = defineProps({
  socialLinks: {
    type: Array,
    required: true,
    // Expected format:
    // [{ platform: 'LinkedIn', url: 'https://...', icon: '/path/to/icon.svg' }]
  },
  iconSize: {
    type: [String, Number],
    default: 24,
  },
  iconColor: {
    type: String,
    default: 'icon-default', // References theme color (no longer used with SVGs)
  },
  layout: {
    type: String,
    default: 'horizontal', // 'horizontal' or 'vertical'
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
  showLabels: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
/* Custom classes for hover effects not available in Vuetify */
.social-link {
  transition: all 0.2s ease-in-out;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-link:hover .social-icon {
  opacity: 0.7;
}

.social-link:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

.social-icon {
  transition: opacity 0.2s ease-in-out;
}

.social-label {
  color: rgb(var(--v-theme-text-primary));
  transition: color 0.2s ease-in-out;
}

.social-link:hover .social-label {
  color: rgb(var(--v-theme-primary));
}

/* Vertical layout variant - uses flex-column ga-3 Vuetify classes in template when needed */
</style>
