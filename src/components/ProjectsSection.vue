<template>
  <section
    id="portfolio"
    class="projects-section py-12"
  >
    <v-container>
      <!-- Section Header -->
      <div class="section-header text-center mb-8">
        <h2 class="text-h4 font-weight-bold mb-2">
          {{ sectionTitle }}
        </h2>
        <p v-if="sectionSubtitle" class="text-subtitle-1 text-secondary">
          {{ sectionSubtitle }}
        </p>
      </div>

      <!-- Projects Grid -->
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <ProjectCard :project="project" />
        </v-col>
      </v-row>

      <!-- Empty State -->
      <div v-if="!projects || projects.length === 0" class="empty-state text-center py-8">
        <v-icon
          icon="mdi-folder-open-outline"
          size="64"
          color="text-secondary"
          class="mb-4"
        />
        <p class="text-body-1 text-secondary">
          No projects to display yet. Check back soon!
        </p>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

/**
 * ProjectsSection Component
 * Displays portfolio/project items in a responsive grid
 * Uses ProjectCard component for individual project display
 */

const props = defineProps({
  sectionTitle: {
    type: String,
    default: 'Portfolio',
  },
  sectionSubtitle: {
    type: String,
    default: '',
  },
  projects: {
    type: Array,
    required: true,
    // Expected format:
    // Array of project objects (see ProjectCard for format)
  },
})
</script>

<style scoped lang="scss">
.projects-section {
  background-color: rgb(var(--v-theme-background));
}

.projects-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header {
  h2 {
    color: rgb(var(--v-theme-text-primary));
  }
}

.empty-state {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

// Responsive adjustments
@media (max-width: 960px) {
  .projects-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>
