<template>
  <v-card
    elevation="2"
    rounded="lg"
    class="background-surface card-hover mb-4"
  >
    <v-card-title class="d-flex flex-column flex-sm-row align-start">
      <div class="flex-grow-1">
        <h4 class="card-text-colors text-h6 font-weight-medium mb-1">
          {{ experience.role }}
        </h4>
        <p class="text-subtitle-2 text-secondary mb-0">
          <v-icon
            icon="mdi-office-building"
            size="small"
            class="mr-1"
          />
          {{ experience.company }}
        </p>
      </div>
      <v-chip
        size="small"
        color="primary"
        variant="tonal"
        class="ml-sm-2 mt-2 mt-sm-0"
      >
        {{ formattedDates }}
      </v-chip>
    </v-card-title>

    <v-card-subtitle v-if="experience.location" class="pb-0">
      <v-icon
        icon="mdi-map-marker"
        size="small"
        class="mr-1"
      />
      {{ experience.location }}
    </v-card-subtitle>

    <v-card-text>
      <p v-if="experience.summary" class="text-body-2 text-line-height-md mb-3">
        {{ experience.summary }}
      </p>

      <v-expand-transition>
        <div v-show="isExpanded">
          <v-list density="compact" class="list-compact">
            <v-list-item
              v-for="(responsibility, index) in experience.responsibilities"
              :key="index"
              class="px-0 py-2"
            >
              <template #prepend>
                <v-icon icon="mdi-circle-small" size="small" color="primary" />
              </template>
              <v-list-item-title class="text-body-2 text-line-height-md text-wrap">
                {{ responsibility }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>

      <v-btn
        v-if="collapsible"
        variant="text"
        size="small"
        :prepend-icon="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        class="mt-2"
        @click="toggleExpand"
      >
        {{ isExpanded ? 'Show Less' : 'Show More' }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
  collapsible: {
    type: Boolean,
    default: true,
  },
  initiallyExpanded: {
    type: Boolean,
    default: false,
  },
})

const isExpanded = ref(props.initiallyExpanded)

const formatDate = (dateStr) => {
  // Parse date in HST timezone to ensure accurate display
  const [year, month] = dateStr.split('-')
  const date = new Date(year, month - 1) // month is 0-indexed
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Pacific/Honolulu'
  })
}

const formattedDates = computed(() => {
  const { startDate, endDate } = props.experience
  if (!startDate) return ''
  const startFormatted = formatDate(startDate)
  const endFormatted = endDate ? formatDate(endDate) : 'Present'
  return `${startFormatted} – ${endFormatted}`
})

const toggleExpand = () => isExpanded.value = !isExpanded.value
</script>

<style>
.experience-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.experience-card .v-card-title {
  padding-bottom: 8px;
}

.experience-card .v-card-title h4 {
  color: rgb(var(--v-theme-text-primary));
}

.responsibilities-list {
  background-color: transparent;
  margin-top: 12px;
}

.responsibilities-list .v-list-item {
  min-height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
}

.responsibilities-list .v-list-item-title {
  line-height: 1.5;
  color: rgb(var(--v-theme-text-primary));
}

@media (max-width: 600px) {
  .experience-card .v-card-title {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .experience-card .v-card-title .v-chip {
    margin-left: 0 !important;
    margin-top: 8px;
  }
}
</style>
