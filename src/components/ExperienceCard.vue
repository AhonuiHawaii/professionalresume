<template>
  <v-card
    elevation="2"
    rounded="lg"
    class="experience-card mb-4"
  >
    <v-card-title class="d-flex align-start">
      <div class="flex-grow-1">
        <h4 class="text-h6 font-weight-medium mb-1">
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
        class="ml-2"
      >
        {{ experience.dates }}
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
      <!-- Summary - Always Visible -->
      <p v-if="experience.summary" class="text-body-2 mb-3">
        {{ experience.summary }}
      </p>

      <!-- Expandable/Collapsible Responsibilities (Highlights) -->
      <v-expand-transition>
        <div v-show="isExpanded">
          <v-list density="compact" class="responsibilities-list">
            <v-list-item
              v-for="(responsibility, index) in experience.responsibilities"
              :key="index"
              class="px-0"
            >
              <template #prepend>
                <v-icon
                  icon="mdi-circle-small"
                  size="small"
                  color="primary"
                />
              </template>
              <v-list-item-title class="text-body-2">
                {{ responsibility }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>

      <!-- Expand/Collapse Button -->
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
import { ref } from 'vue'

/**
 * ExperienceCard Component
 * Displays individual job experience with role, company, dates, location, and responsibilities
 * Supports collapsible view for better space management
 */

const props = defineProps({
  experience: {
    type: Object,
    required: true,
    // Expected format:
    // {
    //   company: 'Amazon Delivery Station',
    //   role: 'Delivery Station Associate',
    //   dates: 'August 2024 – Present',
    //   location: 'Honolulu, HI',
    //   responsibilities: ['...', '...']
    // }
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

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped lang="scss">
.experience-card {
  background-color: rgb(var(--v-theme-surface));
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .v-card-title {
    padding-bottom: 8px;

    h4 {
      color: rgb(var(--v-theme-text-primary));
    }
  }
}

.responsibilities-list {
  background-color: transparent;
  margin-top: 12px;

  .v-list-item {
    min-height: auto;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .v-list-item-title {
    line-height: 1.5;
    color: rgb(var(--v-theme-text-primary));
  }
}

// Responsive adjustments
@media (max-width: 600px) {
  .experience-card {
    .v-card-title {
      flex-direction: column;
      align-items: flex-start !important;

      .v-chip {
        margin-left: 0 !important;
        margin-top: 8px;
      }
    }
  }
}
</style>
