<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HomeView from './views/HomeView.vue'
import MovieView from './views/MovieView.vue'

const route = ref(window.location.pathname.startsWith('/movie') ? 'movie' : 'home')
const homeSection = ref('home')

const updateFromLocation = () => {
  if (window.location.pathname.startsWith('/movie')) {
    route.value = 'movie'
  } else {
    route.value = 'home'
    homeSection.value = 'home'
  }
}

const pushPath = (path) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path)
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleNavSelect = (section) => {
  if (section === 'movie') {
    route.value = 'movie'
    pushPath('/movie')
    return
  }
  route.value = 'home'
  homeSection.value = section || 'home'
  pushPath('/')
}

const handlePopState = () => {
  updateFromLocation()
}

onMounted(() => {
  window.addEventListener('popstate', handlePopState)
  updateFromLocation()
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<template>
  <MovieView v-if="route === 'movie'" @nav-select="handleNavSelect" />
  <HomeView v-else :active-section="homeSection" @select-section="handleNavSelect" />
</template>
