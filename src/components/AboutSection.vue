<template>
  <section
    id="about"
    class="about-section py-12"
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

      <!-- About Content -->
      <v-card
        elevation="2"
        rounded="lg"
        class="about-card pa-8"
      >
        <div class="about-content">
          <!-- Profile Image (Optional) -->
          <div v-if="aboutData.image" class="about-image-container mb-6">
            <v-img
              :src="aboutData.image"
              :alt="`${aboutData.name} profile`"
              max-width="200"
              class="about-image mx-auto"
              rounded="lg"
            />
          </div>

          <!-- About Text -->
          <div class="about-text">
            <!-- Introduction -->
            <p v-if="aboutData.introduction" class="text-body-1 mb-4">
              {{ aboutData.introduction }}
            </p>

            <!-- Summary -->
            <p v-if="aboutData.summary" class="text-body-1 mb-4">
              {{ aboutData.summary }}
            </p>

            <!-- Additional Paragraphs -->
            <p
              v-for="(paragraph, index) in aboutData.paragraphs"
              :key="index"
              class="text-body-1 mb-4"
            >
              {{ paragraph }}
            </p>

            <!-- Highlights/Key Points -->
            <div v-if="aboutData.highlights && aboutData.highlights.length" class="highlights mt-6">
              <h3 class="text-h6 font-weight-medium mb-3">Key Highlights</h3>
              <v-list density="compact" class="highlights-list">
                <v-list-item
                  v-for="(highlight, index) in aboutData.highlights"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon
                      icon="mdi-check-circle"
                      size="small"
                      color="primary"
                    />
                  </template>
                  <v-list-item-title class="text-body-2">
                    {{ highlight }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
/**
 * AboutSection Component
 * Displays an "About Me" section with introduction, summary, and highlights
 * Separate from the ProfileCard - provides detailed background information
 */

const props = defineProps({
  sectionTitle: {
    type: String,
    default: 'About Me',
  },
  sectionSubtitle: {
    type: String,
    default: '',
  },
  aboutData: {
    type: Object,
    required: true,
    // Expected format:
    // {
    //   name: 'Neill Holloman',
    //   image: '/path/to/image.jpg', (optional)
    //   introduction: 'Opening paragraph...',
    //   summary: 'Additional context...',
    //   paragraphs: ['Paragraph 1...', 'Paragraph 2...'], (optional)
    //   highlights: ['Key point 1', 'Key point 2'] (optional)
    // }
  },
})
</script>

<style scoped>
.about-section {
  background-color: rgb(var(--v-theme-background));
}

.about-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header {
  h2 {
    color: rgb(var(--v-theme-text-primary));
  }
}

.about-card {
  background-color: rgb(var(--v-theme-surface));
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-image {
  border: 4px solid rgb(var(--v-theme-background));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-text {
  p {
    color: rgb(var(--v-theme-text-primary));
    line-height: 1.8;
  }

  h3 {
    color: rgb(var(--v-theme-text-primary));
  }
}

.highlights-list {
  background-color: transparent;

  .v-list-item {
    min-height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-list-item-title {
    line-height: 1.6;
    color: rgb(var(--v-theme-text-primary));
  }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .about-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .about-card {
    padding: 24px !important;
  }
}
</style>
