<template>
  <v-card
    class="background-surface w-100 profile-card"
    elevation="8"
    rounded="lg"
  >
    <v-card-text class="pa-8">
      <v-row>
        <!-- Left Column: Photo and Social Links -->
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center text-center"
        >
          <!-- Profile Photo -->
          <v-avatar
            :size="avatarSize"
            class="profile-avatar mb-4"
          >
            <v-img
              :src="profileData.photo"
              :alt="`${profileData.name} profile photo`"
              cover
            />
          </v-avatar>

          <!-- Social Media Links -->
          <SocialLinks
            :social-links="profileData.socialLinks"
            :icon-size="24"
            icon-color="icon-default"
            :show-labels="true"
            class="mt-2"
          />
        </v-col>

        <!-- Right Column: Name, Title, Actions, and Personal Info -->
        <v-col
          cols="12"
          md="8"
          class="d-flex flex-column"
        >
          <!-- Name and Title -->
          <div class="text-left profile-header mb-4">
            <h1 class="card-text-colors text-h3 font-weight-bold mb-2">
              {{ profileData.name }}
            </h1>
            <p class="text-subtitle-1 text-secondary mb-0">
              {{ profileData.title }}
            </p>
          </div>

          <div class="d-flex flex-wrap ga-3 mb-6 action-buttons">
            <v-btn
              color="secondary"
              size="large"
              prepend-icon="mdi-download"
              @click="downloadCV"
            >
              Download CV
            </v-btn>
          </div>

          <!-- Personal Information -->
          <v-list
            density="compact"
            class="personal-info"
            bg-color="transparent"
          >
            <v-list-item
              v-for="info in personalInfo"
              :key="info.label"
              class="px-0"
            >
              <template #prepend>
                <v-icon
                  :icon="info.icon"
                  size="small"
                  class="mr-3"
                  color="text-secondary"
                />
              </template>
              <v-list-item-title class="text-body-2">
                <span class="font-weight-medium">{{ info.label }}:</span>
                <span class="text-secondary ml-2">{{ info.value }}</span>
              </v-list-item-title>
            </v-list-item>

            <!-- Current Job with Status Indicator -->
            <v-list-item class="px-0">
              <template #prepend>
                <v-icon
                  icon="mdi-briefcase"
                  size="small"
                  class="mr-3"
                  color="text-secondary"
                />
              </template>
              <v-list-item-title class="text-body-2">
                <span class="font-weight-medium">Current Job:</span>
                <span class="text-secondary ml-2">{{ profileData.currentJob }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import SocialLinks from './SocialLinks.vue'



const props = defineProps({
  profileData: {
    type: Object,
    required: true,

  },
})

const { mobile } = useDisplay()

const avatarSize = computed(() => {
  return mobile.value ? 120 : 300
})

const personalInfo = computed(() => [
  { label: 'Address', value: props.profileData.address, icon: 'mdi-map-marker' },
  { label: 'Email', value: props.profileData.email, icon: 'mdi-email' },
])

const downloadCV = () => {
  console.log('Download CV clicked')
}
</script>

<style>
/* Custom classes needed for specific styling not available in Vuetify */
.profile-card {
  width: 100%;
}

.profile-avatar {
  border: 4px solid rgb(var(--v-theme-surface));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-header {
  text-align: left;
}

.profile-header h1 {
  color: rgb(var(--v-theme-text-primary));
}

.action-buttons .v-btn {
  text-transform: none;
  font-weight: 500;
}

.personal-info .v-list-item {
  min-height: 36px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .profile-card .v-card-text {
    padding: 24px !important;
  }

  .profile-header {
    text-align: center;
    margin-top: 16px;
  }

  .profile-header h1 {
    font-size: 2rem;
  }

  /* .action-buttons justify-content: center; uses justify-center Vuetify class */
}

@media (max-width: 600px) {
  /* .action-buttons flex-direction: column, width: 100%; uses flex-column w-100 Vuetify classes */

  .action-buttons .v-btn {
    /* width: 100%; uses w-100 Vuetify class */
    margin-right: 0 !important; /* Keep for override */
  }
}
</style>
