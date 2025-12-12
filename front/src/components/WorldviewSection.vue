<script setup>
import { nextTick, onMounted } from 'vue'

import worldviewPosts from '../data/worldviewPosts.json'

const loadTwitterWidgets = () => {
  if (typeof window === 'undefined') return

  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load()
    return
  }

  const existingScript = document.querySelector('script[data-twitter-widgets]')
  if (!existingScript) {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.setAttribute('data-twitter-widgets', 'true')
    script.onload = () => {
      window.twttr && window.twttr.widgets && window.twttr.widgets.load()
    }
    document.body.appendChild(script)
  }
}

onMounted(() => {
  nextTick(() => {
    loadTwitterWidgets()
  })
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      loadTwitterWidgets()
    }
  })

  if (typeof window !== 'undefined') {
    window.addEventListener('load', loadTwitterWidgets)
  }
})
</script>

<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-secondary border-2 border-foreground flex items-center justify-center">
        📋
      </div>
      <h2>設定資料</h2>
    </div>

    <div class="mb-8">
      <h3 class="mb-4 pb-2 border-b-2 border-secondary">🌍 世界観設定紹介ポスト</h3>
      <div class="space-y-8 px-4">
        <div v-for="tweet in worldviewPosts" :key="tweet.url" class="border-2 border-secondary bg-card p-4 space-y-3 ">
          <div class="flex flex-col gap-1 text-muted-foreground px-1">
            <span class="text-lg font-semibold worldview-title">{{ tweet.label }}</span>
            <span class="text-xs opacity-70">{{ tweet.date }}</span>
          </div>
            <div class="tweet-embed">
                <blockquote class="twitter-tweet" data-theme="dark">
                    <a :href="tweet.url">{{ tweet.url }}</a>
                </blockquote>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.worldview-title {
  color: #00ff88;
}
</style>

<style scoped>
.tweet-embed {
  display: flex;
  justify-content: center;
}

.tweet-embed .twitter-tweet,
.tweet-embed iframe {
  width: 100% !important;
  max-width: 600px !important;
}
</style>
