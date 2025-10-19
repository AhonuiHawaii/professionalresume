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

          <v-card-text v-if="edu.dates || edu.gpa || edu.notes">
            <!-- Dates and GPA -->
            <div v-if="edu.dates || edu.gpa" class="d-flex flex-wrap ga-2 mb-2">
              <v-chip
                v-if="edu.dates"
                size="small"
                variant="tonal"
                color="primary"
              >
                <v-icon
                  icon="mdi-calendar"
                  size="x-small"
                  start
                />
                {{ edu.dates }}
              </v-chip>
              <v-chip
                v-if="edu.gpa"
                size="small"
                variant="tonal"
                color="secondary"
              >
                <v-icon
                  icon="mdi-star"
                  size="x-small"
                  start
                />
                GPA: {{ edu.gpa }}
              </v-chip>
            </div>

            <!-- Notes/Description -->
            <p v-if="edu.notes" class="text-body-2 text-line-height-md mb-0">
              {{ edu.notes }}
            </p>

            <!-- Coursework List (if provided) -->
            <div v-if="edu.coursework && edu.coursework.length" class="d-flex flex-wrap mt-3">
              <p class="text-caption text-secondary mb-2">Relevant Coursework:</p>
              <v-chip
                v-for="course in edu.coursework"
                :key="course"
                size="small"
                variant="outlined"
                class="mr-2 mb-2"
              >
                {{ course }}
              </v-chip>
            </div>
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
 * Supports optional coursework listing
 */

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
    //   school: 'Community College of Hawaii',
    //   program: 'Information Technology Coursework',
    //   dates: '2018 - 2020', (optional)
    //   gpa: '3.8', (optional)
    //   notes: 'Completed coursework in...',
    //   coursework: ['Web Development', 'Database Systems'] (optional)
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
