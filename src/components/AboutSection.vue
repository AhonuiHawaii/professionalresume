<template>
  <section
    id="about"
    class="background about-section py-12"
  >
    <v-container>
      <!-- Section Header -->
      <div class="section-header text-center mb-8">
        <h2 class="card-text-colors text-h4 font-weight-bold mb-2">
          {{ sectionTitle }}
        </h2>
        <p v-if="sectionSubtitle" class="text-subtitle-1 text-secondary">
          {{ sectionSubtitle }}
        </p>
      </div>

      <!-- About Content -->
      <div class="section-container">
        <v-card
          elevation="2"
          rounded="lg"
          class="background-surface about-card pa-8"
        >
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
            <p v-if="aboutData.introduction" class="card-text-colors text-body-1 text-line-height-lg mb-4">
              {{ aboutData.introduction }}
            </p>

            <!-- Summary -->
            <p v-if="aboutData.summary" class="card-text-colors text-body-1 text-line-height-lg mb-4">
              {{ aboutData.summary }}
            </p>

            <!-- Additional Paragraphs -->
            <p
              v-for="(paragraph, index) in aboutData.paragraphs"
              :key="index"
              class="card-text-colors text-body-1 text-line-height-lg mb-4"
            >
              {{ paragraph }}
            </p>

            <!-- Highlights/Key Points -->
            <div v-if="aboutData.highlights && aboutData.highlights.length" class="highlights mt-6">
              <h3 class="card-text-colors text-h6 font-weight-medium mb-3">Key Highlights</h3>
              <v-list density="compact" class="list-compact">
                <v-list-item
                  v-for="(highlight, index) in aboutData.highlights"
                  :key="index"
                  class="px-0 py-2"
                >
                  <template #prepend>
                    <v-icon
                      icon="mdi-check-circle"
                      size="small"
                      color="primary"
                    />
                  </template>
                  <v-list-item-title class="card-text-colors text-body-2 text-line-height-md">
                    {{ highlight }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-card>
      </div>
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

<style>
/* Custom classes for specific styling */
.about-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header h2 {
  color: rgb(var(--v-theme-text-primary));
}

.about-image {
  border: 4px solid rgb(var(--v-theme-background));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-text p {
  color: rgb(var(--v-theme-text-primary));
  line-height: 1.8;
}

.about-text h3 {
  color: rgb(var(--v-theme-text-primary));
}

.highlights-list {
  background-color: transparent;
}

.highlights-list .v-list-item {
  min-height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
}

.highlights-list .v-list-item-title {
  line-height: 1.6;
  color: rgb(var(--v-theme-text-primary));
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
