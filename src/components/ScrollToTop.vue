<template>
  <v-btn
    v-show="visible"
    icon="mdi-chevron-up"
    color="primary"
    size="large"
    class="scroll-to-top"
    elevation="6"
    @click="scrollToTop"
    aria-label="Scroll to top"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(true)

const handleScroll = () => {
  visible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.scroll-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.scroll-to-top:hover {
  transform: translateY(-4px);
}

@media (max-width: 600px) {
  .scroll-to-top {
    bottom: 16px;
    right: 16px;
  }
}
</style>
