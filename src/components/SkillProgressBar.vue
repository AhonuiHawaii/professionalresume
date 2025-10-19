<template>
  <div class="mb-5 skill-progress-bar">
    <div class="d-flex justify-space-between align-center mb-2">
      <span class="skill-name text-body-2 font-weight-medium">{{ skillName }}</span>
      <span v-if="skillLevel" class="skill-level text-caption text-secondary font-weight-medium">
        {{ skillLevel }}
      </span>
    </div>
    <v-progress-linear
      :model-value="level"
      :color="barColor"
      :height="height"
      rounded
      class="skill-bar"
    />
  </div>
</template>

<script setup>
/**
 * SkillProgressBar Component
 * Displays a skill name with a visual progress bar indicator
 * Used in SkillsSection for both technical and soft skills
 */

const props = defineProps({
  skillName: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100,
  },
  skillLevel: {
    type: String,
    default: '',
  },
  barColor: {
    type: String,
    default: 'skillBlue', // References theme colors: skillBlue, skillGreen, skillAmber, etc.
  },
  height: {
    type: [String, Number],
    default: 8,
  },
  showPercentage: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
/* Custom classes for specific styling */
.skill-progress-bar:last-child {
  margin-bottom: 0;
}

.skill-name {
  color: rgb(var(--v-theme-text-primary));
}

.skill-percentage,
.skill-level {
  color: rgb(var(--v-theme-text-secondary));
}

.skill-bar {
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .skill-name {
    font-size: 0.875rem;
  }
}
</style>
