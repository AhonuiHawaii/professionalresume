<template>
  <div class="position-absolute w-100 navigation-bar-container px-4 px-md-4 px-sm-2">
    <v-card
      elevation="2"
      rounded="lg"
      class="background-surface w-100 navigation-bar"
    >
      <div class="d-flex align-center ga-4 pa-2 px-4">
        <!-- Hamburger Menu Icon -->
        <v-btn
          icon="mdi-menu"
          variant="text"
          size="small"
          @click="drawer = !drawer"
          class="flex-shrink-0"
          aria-label="Toggle navigation menu"
        />

        <!-- Site Title -->
        <div class="flex-shrink-0 site-title">
          <span class="text-h6 font-weight-bold">{{ siteTitle }}</span>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="d-none d-md-flex ga-6 ml-6 flex-grow-1 align-center nav-links">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="text-decoration-none text-body-2 font-weight-regular nav-link"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Theme Toggle -->
        <ThemeToggle />

        <!-- More Options Menu (three dots) -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              icon="mdi-dots-vertical"
              variant="text"
              size="small"
              v-bind="props"
              aria-label="More options"
            />
          </template>
          <v-list>
            <v-list-item
              v-for="option in moreOptions"
              :key="option.title"
              :href="option.href"
              :target="option.external ? '_blank' : undefined"
              :rel="option.external ? 'noopener noreferrer' : undefined"
            >
              <template #prepend>
                <v-icon :icon="option.icon" />
              </template>
              <v-list-item-title>{{ option.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card>
  </div>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="left"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

/**
 * NavigationBar Component
 * Centered navigation bar with limited width
 * White card design overlaying hero section
 */

const props = defineProps({
  siteTitle: {
    type: String,
    default: 'Neill',
  },
  navItems: {
    type: Array,
    default: () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  moreOptions: {
    type: Array,
    default: () => [
      { title: 'Download CV', icon: 'mdi-download', href: '#download' },
      { title: 'Email Me', icon: 'mdi-email', href: 'mailto:neill@example.com' },
    ],
  },
})

const drawer = ref(false)
</script>

<style>
/* Custom classes needed for specific positioning/styling not available in Vuetify */
.navigation-bar-container {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
}

.navigation-bar {
  width: 100%;
}

.site-title {
  color: rgb(var(--v-theme-text-primary));
  font-family: 'Roboto', sans-serif;
}

.nav-link {
  color: rgb(var(--v-theme-text-primary));
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.025em;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .navigation-bar-container {
    max-width: 100%;
    padding: 0 8px;
  }

  .site-title {
    font-size: 1rem;
  }
}
</style>
