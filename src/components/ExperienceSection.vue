<template>
  <section
    id="experience"
    class="experience-section py-12"
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

      <!-- Experience Timeline -->
      <div class="experience-timeline">
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="index"
          :experience="exp"
          :collapsible="collapsibleCards"
          :initially-expanded="index < expandedCount"
        />
      </div>

      <!-- Show All/Show Less Toggle -->
      <div v-if="experiences.length > maxVisible && showToggle" class="text-center mt-4">
        <v-btn
          variant="outlined"
          color="primary"
          @click="toggleShowAll"
        >
          {{ showingAll ? 'Show Less' : `Show All ${experiences.length} Experiences` }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ExperienceCard from './ExperienceCard.vue'

/**
 * ExperienceSection Component
 * Displays work history using ExperienceCard components
 * Supports limiting visible cards and toggling show all/less
 */

const props = defineProps({
  sectionTitle: {
    type: String,
    default: 'Work Experience',
  },
  sectionSubtitle: {
    type: String,
    default: '',
  },
  experiences: {
    type: Array,
    required: true,
    // Expected format:
    // Array of experience objects (see ExperienceCard for format)
  },
  collapsibleCards: {
    type: Boolean,
    default: true,
  },
  expandedCount: {
    type: Number,
    default: 3, // Number of cards initially expanded
  },
  maxVisible: {
    type: Number,
    default: 5, // Max visible cards before "Show All" button
  },
  showToggle: {
    type: Boolean,
    default: false, // Set to true to enable Show All/Less toggle
  },
})

const showingAll = ref(false)

const visibleExperiences = computed(() => {
  if (showingAll.value || !props.showToggle) {
    return props.experiences
  }
  return props.experiences.slice(0, props.maxVisible)
})

function toggleShowAll() {
  showingAll.value = !showingAll.value
}
</script>

<style scoped lang="scss">
.experience-section {
  background-color: rgb(var(--v-theme-surface));
}

.experience-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header {
  h2 {
    color: rgb(var(--v-theme-text-primary));
  }
}

.experience-timeline {
  max-width: 1200px;
  margin: 0 auto;
}

// Responsive adjustments
@media (max-width: 960px) {
  .experience-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>
