<template>
  <div class="skill-progress-bar">
    <div class="skill-header">
      <span class="skill-name text-body-2">{{ skillName }}</span>
      <span v-if="showPercentage" class="skill-percentage text-caption text-secondary">
        {{ level }}%
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

<style scoped lang="scss">
.skill-progress-bar {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 500;
  color: rgb(var(--v-theme-text-primary));
}

.skill-percentage {
  font-weight: 500;
  color: rgb(var(--v-theme-text-secondary));
}

.skill-bar {
  border-radius: 4px;
}

// Responsive adjustments
@media (max-width: 600px) {
  .skill-progress-bar {
    margin-bottom: 16px;
  }

  .skill-name {
    font-size: 0.875rem;
  }
}
</style>
