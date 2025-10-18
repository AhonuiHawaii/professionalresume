<template>
  <div class="resume-main">
    <!-- Navigation Bar -->
    <NavigationBar
      :site-title="resumeData.base?.name || 'Neill Holloman'"
      :nav-items="navItems"
      :more-options="moreOptions"
    />

    <!-- Hero Section with Profile Card -->
    <HeroSection
      :background-image="heroBackground"
      background-alt="Resume hero background"
      :overlay-opacity="0.3"
    >
      <ProfileCard :profile-data="profileData" />
    </HeroSection>

    <!-- Skills Section -->
    <SkillsSection
      :technical-skills="technicalSkills"
      :soft-skills="softSkills"
      section-title="Skills & Expertise"
      section-subtitle="Core competencies and professional capabilities"
    />

    <!-- About Me Section -->
    <AboutSection
      :about-data="aboutData"
      section-title="About Me"
      section-subtitle="Background and professional philosophy"
    />

    <!-- Experience Section -->
    <ExperienceSection
      :experiences="experiences"
      section-title="Work Experience"
      section-subtitle="Professional background and achievements"
      :collapsible-cards="true"
      :expanded-count="0"
    />

    <!-- Projects Section -->
    <ProjectsSection
      :projects="projects"
      section-title="Portfolio"
      section-subtitle="Featured projects and contributions"
    />

    <!-- Education Section -->
    <EducationSection
      :education="education"
      section-title="Education"
      section-subtitle="Academic background and qualifications"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import NavigationBar from './NavigationBar.vue'
import HeroSection from './HeroSection.vue'
import ProfileCard from './ProfileCard.vue'
import SkillsSection from './SkillsSection.vue'
import AboutSection from './AboutSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import ProjectsSection from './ProjectsSection.vue'
import EducationSection from './EducationSection.vue'

/**
 * HelloWorld Component (Replaced with Resume Main)
 * Main component that composes all resume sections
 * Fetches data from public/resume.json and passes to child components
 */

// Navigation configuration
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]

const moreOptions = [
  { title: 'Download CV', icon: 'mdi-download', href: '#download' },
  { title: 'Contact Me', icon: 'mdi-email', href: '#contact' },
]

// Resume data
const resumeData = ref({})
const heroBackground = ref(new URL('@/assets/background.png', import.meta.url).href)

// Computed profile data for ProfileCard
const profileData = computed(() => {
  // Get the most recent job from experience
  const currentExperience = resumeData.value.resumes?.customerService?.experience?.[0]
  const currentJob = currentExperience
    ? `${currentExperience.role} at ${currentExperience.company}`
    : 'Delivery Station Associate at Amazon'

  return {
    name: resumeData.value.base?.name,
    title: resumeData.value.base?.title,
    photo: new URL('@/assets/profileImage.png', import.meta.url).href,
    address: resumeData.value.base?.address,
    email: resumeData.value.base?.email,
    currentJob,
    socialLinks: [
      { platform: 'LinkedIn', url: resumeData.value.base?.social?.linkedin, icon: new URL('@/assets/linkedin.svg', import.meta.url).href },
      { platform: 'GitHub', url: resumeData.value.base?.social?.github, icon: new URL('@/assets/github.svg', import.meta.url).href },
      { platform: 'Portfolio', url: resumeData.value.base?.social?.portfolio, icon: new URL('@/assets/twitter.svg', import.meta.url).href },
    ],
  }
})

// Computed skills data
const technicalSkills = computed(() => {
  const skills = resumeData.value.skills || []
  const colors = ['skillBlue', 'skillGreen', 'skillAmber', 'skillPurple', 'skillTeal']

  // Take first half as technical skills
  return skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => ({
    name: skill.name,
    level: skill.value * 20, // Convert 1-5 scale to percentage (1=20%, 5=100%)
    color: colors[index % colors.length],
  }))
})

const softSkills = computed(() => {
  const skills = resumeData.value.skills || []
  const colors = ['skillBlue', 'skillGreen', 'skillAmber', 'skillPurple', 'skillTeal']

  // Take second half as soft skills
  return skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => ({
    name: skill.name,
    level: skill.value * 20, // Convert 1-5 scale to percentage (1=20%, 5=100%)
    color: colors[index % colors.length],
  }))
})

// Computed experience data
const experiences = computed(() => {
  const customerServiceExp = resumeData.value.resumes?.customerService?.experience || []
  return customerServiceExp
})

// Computed projects data
const projects = computed(() => {
  const projectsData = resumeData.value.projects || []
  return projectsData.map(project => ({
    ...project,
    technologies: ['Vue.js', 'Electron', 'Node.js'], // TODO: Add to resume.json
  }))
})

// Computed education data
const education = computed(() => {
  return resumeData.value.education || []
})

// Computed about data
const aboutData = computed(() => ({
  name: resumeData.value.base?.name || 'Neill Holloman',
  introduction: resumeData.value.base?.summary || '',
}))

// Fetch resume data on mount
onMounted(async () => {
  try {
    const response = await fetch('/resume.json')
    if (response.ok) {
      resumeData.value = await response.json()
    } else {
      console.error('Failed to fetch resume data')
    }
  } catch (error) {
    console.error('Error loading resume data:', error)
  }
})
</script>

<style scoped lang="scss">
.resume-main {
  width: 100%;
}
</style>
