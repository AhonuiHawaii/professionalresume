<template>
  <v-card
    elevation="2"
    rounded="lg"
    class="project-card"
    :href="project.link"
    :target="project.link ? '_blank' : undefined"
    :rel="project.link ? 'noopener noreferrer' : undefined"
  >
    <!-- Project Image (if provided) -->
    <v-img
      v-if="project.image"
      :src="project.image"
      :alt="`${project.title} screenshot`"
      height="200"
      cover
      class="project-image"
    >
      <!-- Overlay on hover -->
      <div class="project-overlay">
        <v-icon
          icon="mdi-open-in-new"
          size="large"
          color="white"
        />
      </div>
    </v-img>

    <v-card-title>
      <h4 class="text-h6 font-weight-medium">
        {{ project.title }}
      </h4>
    </v-card-title>

    <v-card-text>
      <p class="text-body-2 mb-3">
        {{ project.description }}
      </p>

      <!-- Technologies/Tags -->
      <div v-if="project.technologies && project.technologies.length" class="technologies">
        <v-chip
          v-for="tech in project.technologies"
          :key="tech"
          size="small"
          variant="tonal"
          color="primary"
          class="mr-2 mb-2"
        >
          {{ tech }}
        </v-chip>
      </div>
    </v-card-text>

    <v-card-actions v-if="project.link || project.github">
      <v-spacer />
      <v-btn
        v-if="project.github"
        icon="mdi-github"
        variant="text"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
        @click.stop
      />
      <v-btn
        v-if="project.link"
        icon="mdi-open-in-new"
        variant="text"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project"
        @click.stop
      />
    </v-card-actions>
  </v-card>
</template>

<script setup>
/**
 * ProjectCard Component
 * Displays individual project with title, description, image, and links
 * Used in ProjectsSection to showcase portfolio items
 */

const props = defineProps({
  project: {
    type: Object,
    required: true,
    // Expected format:
    // {
    //   title: 'Shopify Desktop Admin',
    //   description: 'Created a desktop application...',
    //   image: '/path/to/screenshot.png', (optional)
    //   technologies: ['Electron', 'Vue', 'Node.js'], (optional)
    //   link: 'https://...', (optional)
    //   github: 'https://github.com/...', (optional)
    // }
  },
})
</script>

<style scoped lang="scss">
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(var(--v-theme-surface));
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    .project-overlay {
      opacity: 1;
    }
  }

  .v-card-text {
    flex-grow: 1;
  }
}

.project-image {
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

// Responsive adjustments
@media (max-width: 600px) {
  .project-card {
    margin-bottom: 16px;
  }
}
</style>
