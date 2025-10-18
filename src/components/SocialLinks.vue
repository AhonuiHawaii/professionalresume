<template>
  <div class="social-links">
    <a
      v-for="link in socialLinks"
      :key="link.platform"
      :href="link.url"
      :aria-label="link.platform"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <v-img
        :src="link.icon"
        :alt="`${link.platform} icon`"
        :width="iconSize"
        :height="iconSize"
        class="social-icon"
      />
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
})
</script>

<style scoped lang="scss">
.social-links {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    transform: translateY(-2px);

    .social-icon {
      opacity: 0.7;
    }
  }

  &:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 2px;
  }
}

.social-icon {
  transition: opacity 0.2s ease-in-out;
}

// Vertical layout variant
.social-links[data-layout="vertical"] {
  flex-direction: column;
  gap: 12px;
}
</style>
