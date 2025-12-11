<script setup>
import { nextTick, onMounted } from 'vue'

const posts = [
  {
    date: '2025.08.02',
    title: 'サイボーグ=人間 / アンドロイド=人間じゃない',
    url: 'https://twitter.com/maru_turu/status/1951621669338206595',
  },
  {
    date: '2025.08.16',
    title: 'ギャラスピに保護されたばかりのアカネ',
    url: 'https://twitter.com/maru_turu/status/1956677116143308936',
  },
  {
    date: '2025.08.16',
    title: 'アカネはカラコン',
    url: 'https://twitter.com/maru_turu/status/1956686826246381757',
  },
  {
    date: '2025.09.03',
    title: 'なんで発注書もらってないの？',
    url: 'https://twitter.com/maru_turu/status/1963202315990552696',
  },
  {
    date: '2025.09.05',
    title: 'R18',
    url: 'https://twitter.com/maru_turu/status/1963959009494647168',
  },
  {
    date: '2025.09.09',
    title: 'ロボコップ',
    url: 'https://twitter.com/maru_turu/status/1965384278705070565',
  },
  {
    date: '2025.09.07',
    title: '初代総長とあかねちゃんとすみれちゃん',
    url: 'https://twitter.com/maru_turu/status/1964647239017701488',
  },
  {
    date: '2020.09.21',
    title: '過去のカートとマックスらしき人物たち',
    url: 'https://twitter.com/maru_turu/status/1308009054187347969',
  },
]

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
    script.onload = () => window.twttr && window.twttr.widgets && window.twttr.widgets.load()
    document.body.appendChild(script)
  }
}

onMounted(() => {
  nextTick(() => loadTwitterWidgets())
})
</script>

<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-accent border-2 border-foreground flex items-center justify-center">🗒️</div>
      <h2>監督ポスト集</h2>
    </div>

    <p class="text-sm text-muted-foreground mb-6">
      監督・亀山陽平さん（@maru_turu）が X で語った設定メモや裏話ツイートをまとめています。最新の投稿は
      公式アカウントもご確認ください。
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="post in posts" :key="post.url" class="border-2 border-accent bg-card p-4 space-y-2">
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          <span>{{ post.date }}</span>
        </div>
        <div class="text-sm font-semibold">{{ post.title }}</div>
        <div class="tweet-embed">
          <blockquote class="twitter-tweet" data-theme="dark">
            <a :href="post.url">{{ post.url }}</a>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

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
