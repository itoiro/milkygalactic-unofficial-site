<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HomeView from './views/HomeView.vue'
import MovieView from './views/MovieView.vue'

const baseUrl = import.meta.env.BASE_URL || '/'
const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
const stripBase = (pathname) => {
  if (normalizedBase === '/') {
    return pathname
  }
  if (pathname.startsWith(normalizedBase)) {
    const rest = pathname.slice(normalizedBase.length)
    return `/${rest}`
  }
  return pathname
}

const route = ref(stripBase(window.location.pathname).startsWith('/movie') ? 'movie' : 'home')
const homeSection = ref('home')

const updateFromLocation = () => {
  if (stripBase(window.location.pathname).startsWith('/movie')) {
    route.value = 'movie'
  } else {
    route.value = 'home'
    homeSection.value = 'home'
  }
}

const pushPath = (path) => {
  const trimmed = path.startsWith('/') ? path.slice(1) : path
  const target = normalizedBase === '/' ? `/${trimmed}` : `${normalizedBase}${trimmed}`
  if (window.location.pathname !== target) {
    window.history.pushState({}, '', target)
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
