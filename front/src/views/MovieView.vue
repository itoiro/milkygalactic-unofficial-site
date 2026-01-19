<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import DetailLinkButton from '../components/DetailLinkButton.vue'

const emit = defineEmits(['navSelect'])

const handleSelect = (section) => {
  emit('navSelect', section)
}

const highlights = [
  { label: '公開日', value: '2026/02/06'}
]

const perks = [
  'Comming soon...',
]

const events = [
  {
    title: '舞台挨拶',
    date: '2026/02/07 17:50の回（上映後舞台挨拶）／20:15の回（上映前舞台挨拶）',
    place: 'ＴＯＨＯシネマズ 日比谷',
    note: '抽選申し込み期間期間：1/16（金）18:00〜1/29（木）23:59',
    url: 'https://milkygalacticuniverse.com/news/article/?post_id=392',
  }
]

const visitorPerks = [
  { title: '第1弾', start: '2026/02/06', end: '2026/02/19', bonus: '「河野丼先生描き下ろしオリジナルミニ漫画 （全6種）' },
]

const links = [
  { label: '公式サイト', url: 'https://milkygalacticuniverse.com/' }
  ]
</script>

<template>
  <DefaultLayout active-section="movie" @select="handleSelect">
    <section class="space-y-8">
      <div class="movie-hero">
        <div class="movie-hero__badge">劇場版特集</div>
        <h2 class="movie-hero__title">銀河特急 ミルキー★サブウェイ 各駅停車劇場行き</h2>
        <h2 class="movie-hero__title">2月6日(金) 公開！</h2>
        <div class="movie-hero__copy marquee">
          <span class="marquee__text">。*° 。*:゜銀河の底辺、劇場に再集合！暴走列車を食いとめろ！。*° 。*:゜</span>
        </div>
      </div>

      <!-- <div class="panel">
        <h3>基本情報</h3>
        <div class="info-table">
          <div v-for="item in highlights" :key="item.label" class="info-row">
            <div class="info-cell label">{{ item.label }}</div>
            <div class="info-cell value">{{ item.value }}</div>
          </div>
        </div>
        <div class="links mt-4">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.url || undefined"
            class="link-button"
            :class="{ 'link-button--disabled': !link.url }"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ link.label }}
          </a>
        </div>
      </div> -->

      <div class="panel">
        <h3>🌟イベント情報🌟</h3>
        <div class="event-list">
          <div v-for="ev in events" :key="`${ev.title}-${ev.date}`" class="event-card">
            <div class="event-header">
              <span class="event-title">{{ ev.title }}</span>
            </div>
            <div class="event-body">
              <div class="event-row">
                <span class="event-label">日程</span>
                <span class="event-value">{{ ev.date }}</span>
              </div>
              <div class="event-row">
                <span class="event-label">会場</span>
                <span class="event-value">{{ ev.place }}</span>
              </div>
              <div class="event-row" v-if="ev.note">
                <span class="event-label">備考</span>
                <span class="event-note">{{ ev.note }}</span>
              </div>
              <div class="event-link" v-if="ev.url">
                <DetailLinkButton :href="ev.url" :label="'詳細リンク'" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <h3>🌟入場者特典スケジュール🌟</h3>
        <div class="perks-table">
          <div v-for="perk in visitorPerks" :key="perk.title" class="perks-row">
            <div class="perk-header">
              <span class="perk-tag">{{ perk.title }}</span>
              <span class="perk-term">{{ perk.start }} - {{ perk.end }}</span>
            </div>
            <div class="perk-body">
              <span class="perk-label">特典</span>
              <span class="perk-value">{{ perk.bonus }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <h3>🌟グッズ🌟</h3>
        <ul class="bullet-list">
          <li v-for="perk in perks" :key="perk">{{ perk }}</li>
        </ul>
      </div>

      
    </section>
  </DefaultLayout>
</template>

<style scoped>
.movie-hero {
  border: 2px solid var(--foreground);
  background: linear-gradient(135deg, rgba(15, 255, 136, 0.12), rgba(15, 255, 136, 0.02));
  padding: 1.5rem;
  text-align: center;
}

.movie-hero__badge {
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid var(--foreground);
  color: var(--foreground);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.movie-hero__title {
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  color: var(--font-title);
}

.movie-hero__copy {
  color: #fff;
  font-size: 0.95rem;
  overflow: hidden;
  position: relative;
}

.marquee {
  display: flex;
  gap: 2rem;
}

.marquee__text {
  white-space: nowrap;
  display: inline-block;
  min-width: 100%;
  padding-right: 3rem;
  animation: marquee-rtl 18s steps(80) infinite;
}

@keyframes marquee-rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.panel {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-top: 2px solid var(--foreground);
}

.panel + .panel {
  margin-top: 0.5rem;
}

.panel h3 {
  color: var(--foreground);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.info-table {
  display: grid;
  gap: 0.35rem;
}

.info-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 12px;
}

.info-row .label {
  color: var(--muted-foreground);
  font-size: 0.9rem;
}

.info-row .value {
  color: #fff;
  font-weight: 400;
}

.bullet-list {
  list-style: disc;
  padding-left: 1.25rem;
  color: #fff;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link-button {
  padding: 8px 12px;
  border-radius: 9999px;
  border: 1px solid var(--foreground);
  color: var(--foreground);
  transition: background-color 0.15s, color 0.15s, border-color 0.15s;
}

.link-button:hover {
  background: rgba(255, 0, 110, 0.12);
  color: var(--primary);
  border-color: var(--primary);
}

.link-button--disabled {
  opacity: 0.6;
  pointer-events: none;
}

.event-list {
  display: grid;
  gap: 0.75rem;
}

.event-card {
  padding: 0.75rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
}

.event-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.event-title {
  color: var(--foreground);
  font-weight: 400;
}

.event-body {
  display: grid;
  gap: 4px;
}

.event-row {
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 10px;
  align-items: baseline;
}

.event-label {
  color: var(--muted-foreground);
  font-size: 0.9rem;
}

.event-value {
  color: #fff;
}

.event-note {
  color: #fff;
  font-size: 0.9rem;
}

.event-link {
  margin-top: 6px;
}

.perks-table {
  display: grid;
  gap: 0.75rem;
}

.perks-row {
  padding: 0.75rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
}

.perk-header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.perk-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid var(--foreground);
  color: var(--foreground);
  font-weight: 700;
  font-size: 0.9rem;
}

.perk-term {
  color: #fff;
  font-weight: 400;
}

.perk-body {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.perk-label {
  color: var(--muted-foreground);
  font-size: 0.9rem;
}

.perk-value {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 400;
}
</style>
