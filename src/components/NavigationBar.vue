<template>
  <div class="navigation-bar-container">
    <v-card
      elevation="2"
      rounded="lg"
      class="navigation-bar"
    >
      <div class="nav-content">
        <!-- Hamburger Menu Icon -->
        <v-btn
          icon="mdi-menu"
          variant="text"
          size="small"
          @click="drawer = !drawer"
          class="hamburger-btn"
          aria-label="Toggle navigation menu"
        />

        <!-- Site Title -->
        <div class="site-title">
          <span class="text-h6 font-weight-bold">{{ siteTitle }}</span>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="nav-links d-none d-md-flex">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link"
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

<style scoped>
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
  background-color: rgb(var(--v-theme-surface));
  width: 100%;
}

.nav-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
}

.hamburger-btn {
  flex-shrink: 0;
}

.site-title {
  color: rgb(var(--v-theme-text-primary));
  font-family: 'Roboto', sans-serif;
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  gap: 24px;
  margin-left: 24px;
  flex-grow: 1;
  align-items: center;
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

  .nav-content {
    gap: 8px;
    padding: 8px 12px;
  }
}
</style>
