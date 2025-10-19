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
        :class="['social-icon', { 'social-icon-dark': isDark }]"
      />
      <span v-if="showLabels" class="text-body-2 social-label">
        {{ link.platform }}
      </span>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

defineProps({
  socialLinks: {
    type: Array,
    required: true,
  },
  iconSize: {
    type: [String, Number],
    default: 24,
  },
  iconColor: {
    type: String,
    default: 'icon-default',
  },
  layout: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
  showLabels: {
    type: Boolean,
    default: false,
  },
})

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
</script>

<style>
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
  transition: all 0.2s ease-in-out;
}

.social-icon-dark {
  filter: brightness(0) invert(1);
}

.social-label {
  color: rgb(var(--v-theme-text-primary));
  transition: color 0.2s ease-in-out;
}

.social-link:hover .social-label {
  color: rgb(var(--v-theme-primary));
}
</style>
