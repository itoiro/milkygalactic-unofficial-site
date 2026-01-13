<script setup>
import { ref } from 'vue'
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

const activeSection = ref('home')
const changeSection = (section) => {
  activeSection.value = section
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

      <CategoryGroupSection
        :items="collectionItems"
        :change-section="changeSection"
        title="📚 設定資料集"
        wrapper-variant="foreground"
      />

      <CategoryGroupSection
        :items="mediaItems"
        :change-section="changeSection"
        title="📺 メディア情報"
        wrapper-variant="accent"
      />

      <CategoryGroupSection
        :items="[]"
        :change-section="changeSection"
        title="🌟 イベント情報"
        wrapper-variant="accent"
      >
        <EventInfoSection />
      </CategoryGroupSection>

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

      <CategoryGroupSection
        :items="[]"
        :change-section="changeSection"
        title="📅 カレンダー"
        wrapper-variant="foreground"
      >
        <CalendarEmbedSection />
      </CategoryGroupSection>

      <TerminalConsole />
    </section>

    <GoodsSection v-else-if="activeSection === 'goods'" />
    <MoviesSection v-else-if="activeSection === 'movies'" />
    <ComicsSection v-else-if="activeSection === 'comics'" />
    <EventsSection v-else-if="activeSection === 'events'" />
    <WorldviewSection v-else-if="activeSection === 'worldview'" />
    <InterviewsSection v-else-if="activeSection === 'interviews'" />
    <MagazinesSection v-else-if="activeSection === 'magazines'" />
    <DirectorPostsSection v-else-if="activeSection === 'directorPosts'" />
  </DefaultLayout>
</template>
