<template>
  <section id="education" class="background education-section py-12">
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

      <!-- Education Items -->
      <div class="section-container">
        <v-card
          v-for="(edu, index) in education"
          :key="index"
          elevation="2"
          rounded="lg"
          class="background-surface card-hover mb-4"
        >
          <v-card-title>
            <div class="d-flex align-center">
              <v-icon
                icon="mdi-school"
                size="large"
                color="primary"
                class="mr-3"
              />
              <div>
                <h4 class="card-text-colors text-h6 font-weight-medium">
                  {{ edu.school }}
                </h4>
                <p class="text-subtitle-2 text-secondary mb-0">
                  {{ edu.program }}
                </p>
              </div>
            </div>
          </v-card-title>

          <v-card-text>
            <!-- Dates -->
            <div v-if="edu.startDate || edu.endDate" class="mb-3">
              <v-chip
                size="small"
                variant="tonal"
                color="primary"
              >
                <v-icon
                  icon="mdi-calendar"
                  size="x-small"
                  start
                />
                {{ formatDateRange(edu.startDate, edu.endDate) }}
              </v-chip>
            </div>

            <!-- Notes/Description -->
            <p v-if="edu.notes" class="text-body-2 text-line-height-md mb-0 card-text-colors">
              {{ edu.notes }}
            </p>
          </v-card-text>
        </v-card>
      </div>

      <!-- Empty State -->
      <div v-if="!education || education.length === 0" class="d-flex flex-column align-center justify-center text-center py-8 empty-state">
        <v-icon
          icon="mdi-school-outline"
          size="64"
          color="text-secondary"
          class="mb-4"
        />
        <p class="text-body-1 text-secondary">
          No education information available.
        </p>
      </div>
    </v-container>
  </section>
</template>

<script setup>
/**
 * EducationSection Component
 * Displays educational background with schools, programs, dates, and notes
 */

/**
 * Format date range from ISO dates
 */
const formatDateRange = (startDate, endDate) => {
  if (!startDate && !endDate) return ''

  const formatYear = (dateString) => {
    if (!dateString) return ''
    // Extract year directly from ISO string to avoid timezone issues
    return dateString.split('-')[0]
  }

  const start = formatYear(startDate)
  const end = formatYear(endDate)

  if (start && end) {
    return start === end ? start : `${start} - ${end}`
  }
  return start || end
}

const props = defineProps({
  sectionTitle: {
    type: String,
    default: 'Education',
  },
  sectionSubtitle: {
    type: String,
    default: '',
  },
  education: {
    type: Array,
    required: true,
    // Expected format:
    // [{
    //   school: 'Azalea Garden Christian School',
    //   program: 'High School Coursework',
    //   startDate: '1995-01-01',
    //   endDate: '1996-12-31',
    //   notes: 'Completed two years of high school coursework...'
    // }]
  },
})
</script>

<style>
/* Custom classes for specific styling */
.education-section :deep(.v-container) {
  max-width: 1200px;
}

.section-header h2 {
  color: rgb(var(--v-theme-text-primary));
}

.education-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.education-card .v-card-title h4 {
  color: rgb(var(--v-theme-text-primary));
}

.empty-state {
  min-height: 200px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .education-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>
