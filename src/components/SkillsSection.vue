<template>
  <section
    id="skills"
    class="skills-section py-12"
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

      <!-- Single Skills Card -->
      <v-card
        elevation="2"
        rounded="lg"
        class="skills-card pa-6"
      >
        <v-row>
          <v-col
            v-for="(skill, index) in allSkills"
            :key="`skill-${index}`"
            cols="12"
            sm="6"
            md="4"
          >
            <SkillProgressBar
              :skill-name="skill.name"
              :level="skill.level"
              :bar-color="skill.color || getSkillColor(index)"
              :show-percentage="showPercentages"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SkillProgressBar from './SkillProgressBar.vue'

/**
 * SkillsSection Component
 * Single card layout displaying all skills in a responsive grid
 * Uses SkillProgressBar component for visual skill indicators
 */

const props = defineProps({
  sectionTitle: {
    type: String,
    default: 'Skills',
  },
  sectionSubtitle: {
    type: String,
    default: '',
  },
  technicalSkills: {
    type: Array,
    required: true,
    // Expected format:
    // [{ name: 'JavaScript', level: 90, color: 'skillBlue' }]
  },
  softSkills: {
    type: Array,
    required: true,
    // Expected format:
    // [{ name: 'Communication', level: 85, color: 'skillGreen' }]
  },
  showPercentages: {
    type: Boolean,
    default: false,
  },
})

// Combine all skills into one array
const allSkills = computed(() => {
  return [...props.technicalSkills, ...props.softSkills]
})

// Cycle through theme skill colors for variety
const skillColors = ['skillBlue', 'skillGreen', 'skillAmber', 'skillPurple', 'skillTeal']

function getSkillColor(index) {
  return skillColors[index % skillColors.length]
}
</script>

<style scoped lang="scss">
.skills-section {
  background-color: rgb(var(--v-theme-background));
}

.skills-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header {
  h2 {
    color: rgb(var(--v-theme-text-primary));
  }
}

.skills-card {
  height: 100%;
  background-color: rgb(var(--v-theme-surface));

  h3 {
    color: rgb(var(--v-theme-text-primary));
    display: flex;
    align-items: center;
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
}

// Responsive adjustments
@media (max-width: 960px) {
  .skills-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .skills-card {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
