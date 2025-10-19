<template>
  <section id="experience" class="background experience-section py-12">
    <v-container>
      <div class="section-header text-center mb-8">
        <h2 class="card-text-colors text-h4 font-weight-bold mb-2">
          {{ sectionTitle }}
        </h2>
        <p v-if="sectionSubtitle" class="text-subtitle-1 text-secondary">
          {{ sectionSubtitle }}
        </p>
      </div>

      <div class="section-container">
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="index"
          :experience="exp"
          :collapsible="collapsibleCards"
          :initially-expanded="index < expandedCount"
        />
      </div>

      <div v-if="experiences.length > maxVisible && showToggle" class="text-center mt-4">
        <v-btn variant="outlined" color="primary" @click="toggleShowAll">
          {{ showingAll ? 'Show Less' : `Show All ${experiences.length} Experiences` }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ExperienceCard from './ExperienceCard.vue'

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
  },
  collapsibleCards: {
    type: Boolean,
    default: true,
  },
  expandedCount: {
    type: Number,
    default: 3,
  },
  maxVisible: {
    type: Number,
    default: 5,
  },
  showToggle: {
    type: Boolean,
    default: false,
  },
})

const showingAll = ref(false)

const visibleExperiences = computed(() =>
  showingAll.value || !props.showToggle
    ? props.experiences
    : props.experiences.slice(0, props.maxVisible)
)

const toggleShowAll = () => showingAll.value = !showingAll.value
</script>

<style>
.experience-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header h2 {
  color: rgb(var(--v-theme-text-primary));
}

@media (max-width: 960px) {
  .experience-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>
