<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroSection from '../components/HeroSection.vue'
import WorldviewSection from '../components/WorldviewSection.vue'
import DirectorPostsSection from '../components/DirectorPostsSection.vue'
import CategoryGroupSection from '../components/CategoryGroupSection.vue'
import EventInfoSection from '../components/EventInfoSection.vue'
import GoodsReservationSection from '../components/GoodsReservationSection.vue'
import InterviewsSection from '../components/InterviewsSection.vue'
import MagazinesSection from '../components/MagazinesSection.vue'
import CalendarEmbedSection from '../components/CalendarEmbedSection.vue'
import TerminalConsole from '../components/TerminalConsole.vue'
import SectionSeparator from '../components/SectionSeparator.vue'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'home',
  },
})

const emit = defineEmits(['selectSection'])

const changeSection = (section) => {
  emit('selectSection', section)
}

const collectionItems = [
  {
    icon: '📋',
    title: '設定資料集',
    description: '未登場キャラクター、世界観に関する資料',
    target: 'worldview',
    variant: 'secondary',
  },
  {
    icon: '📋',
    title: '監督ポスト集',
    description: '監督による解説や、関連しそうな作品のポストまとめ',
    target: 'directorPosts',
    variant: 'accent',
  },
  {
    icon: '📚',
    title: 'キャラクター情報',
    description: 'Coming soon...',
    target: '',
    variant: 'primary',
    disabled: true,
  },
]

const mediaItems = [
  {
    icon: '🎤',
    title: 'インタビュー',
    description: 'Web掲載のインタビュー記事をチェックできます。',
    target: 'interviews',
    variant: 'accent',
  },
  {
    icon: '📖',
    title: '雑誌掲載情報',
    description: '特集やインタビューの掲載された雑誌の一覧をチェックできます。',
    target: 'magazines',
    variant: 'secondary',
  },
]

</script>

<template>
  <DefaultLayout :active-section="activeSection" @select="changeSection">
    <section v-if="activeSection === 'home'" class="space-y-8">
      <HeroSection />

      <button class="feature-banner feature-banner--clickable" type="button" @click="changeSection('movie')">
        <span class="feature-label">劇場版特集</span>
        <span class="feature-subtext">★特典やグッズ情報はこちら★</span>
      </button>

      <SectionSeparator />
      <CategoryGroupSection
        :items="collectionItems"
        :change-section="changeSection"
        title="📚 設定資料集"
        wrapper-variant="foreground"
      />

      <SectionSeparator />
      <CategoryGroupSection
        :items="mediaItems"
        :change-section="changeSection"
        title="📺 メディア情報"
        wrapper-variant="accent"
      />

      <SectionSeparator />
      <CategoryGroupSection
        :items="[]"
        :change-section="changeSection"
        title="🌟 イベント情報"
        wrapper-variant="accent"
      >
        <EventInfoSection />
      </CategoryGroupSection>

      <SectionSeparator />
      <CategoryGroupSection
        :items="[]"
        :change-section="changeSection"
        title="🎈 商品情報"
        wrapper-variant="accent"
        title-class="title-foreground"
      >
        <!-- <GoodsSection /> -->
        <div class="mt-6">
          <GoodsReservationSection />
        </div>
      </CategoryGroupSection>

      <!--
      <SectionSeparator />
      <CategoryGroupSection
        :items="[]"
        :change-section="changeSection"
        title="📅 カレンダー"
        wrapper-variant="foreground"
      >
        <CalendarEmbedSection />
      </CategoryGroupSection>
      -->

      <TerminalConsole />
    </section>

    <WorldviewSection v-else-if="activeSection === 'worldview'" />
    <InterviewsSection v-else-if="activeSection === 'interviews'" />
    <MagazinesSection v-else-if="activeSection === 'magazines'" />
    <DirectorPostsSection v-else-if="activeSection === 'directorPosts'" />
  </DefaultLayout>
</template>

<style scoped>
.feature-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  padding: 0.75rem 1rem;
  border: 2px solid var(--foreground);
  background: rgba(15, 255, 136, 0.08);
  color: var(--foreground);
  font-weight: 700;
  letter-spacing: 0.08em;
  width: 100%;
  max-width: 100%;
}

.feature-label {
  font-size: 1rem;
  display: block;
  width: 100%;
  text-align: center;
}

.feature-subtext {
  font-size: 0.9rem;
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 400;
  color: var(--font-title);
}

.feature-banner--clickable {
  cursor: pointer;
}

.feature-banner--clickable:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
