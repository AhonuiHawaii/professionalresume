<template>
  <section id="skills" class="background-surface skills-section py-12">
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
        <v-card elevation="2" rounded="lg" class="background h-100 skills-card pa-6">
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
                :skill-level="skill.skillLevel"
                :bar-color="skill.color || getSkillColor(index)"
                :show-percentage="showPercentages"
              />
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SkillProgressBar from './SkillProgressBar.vue'

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
  },
  softSkills: {
    type: Array,
    required: true,
  },
  showPercentages: {
    type: Boolean,
    default: false,
  },
})

const allSkills = computed(() => [...props.technicalSkills, ...props.softSkills])

const skillColors = ['skillBlue', 'skillGreen', 'skillAmber', 'skillPurple', 'skillTeal']

const getSkillColor = (index) => skillColors[index % skillColors.length]
</script>

<style>
.skills-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header h2 {
  color: rgb(var(--v-theme-text-primary));
}

.skills-card {
  height: 100%;
}

.skills-card h3 {
  color: rgb(var(--v-theme-text-primary));
  display: flex;
  align-items: center;
}

@media (max-width: 960px) {
  .skills-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .skills-card {
    margin-bottom: 24px;
  }

  .skills-card:last-child {
    margin-bottom: 0;
  }
}
</style>
