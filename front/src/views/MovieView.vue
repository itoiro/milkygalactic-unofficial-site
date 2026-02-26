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
    note: '抽選申し込み期間：1/16（金）18:00〜1/29（木）23:59',
    url: 'https://milkygalacticuniverse.com/news/article/?post_id=392',
  },
  {
    title: 'シープラ映画予告放映',
    date: '2026/01/23	~ 2026/02/28',
    place: '全国のシープラ（一部店舗）',
    note: '',
    url: 'https://x.com/toshinhokkaido/status/2014533556027203919?s=20',
  },
  {
    title: '銀河特急ミルキー☆サブウェイ 銀河の果てまでいってきました！展 出張所 in 渋谷シネクイント',
    date: '2026/02/06	~ 2026/03/05',
    place: '渋谷シネクイント',
    note: '銀河の果てまでいってきました！展出張開催',
    url: 'https://art.parco.jp/otherspace/detail/?id=1861',
  },
  {
    title: '亀山陽平監督トークイベント付き上映',
    date: '2026/02/21	1回目：ＴＯＨＯシネマズ 日比谷　12:00の回（上映後トークイベント）/ 2回目：シネクイント　14:40の回（上映後トークイベント）',
    place: 'ＴＯＨＯシネマズ 日比谷 または 渋谷シネクイント',
    note: '抽選申込期間： 1/30（金）21:00〜2/12（木）23:59',
    url: 'https://art.parco.jp/otherspace/detail/?id=1861',
  }
]

const visitorPerks = [
  { title: '第1弾', start: '2026/02/06', end: '2026/02/19', bonus: '「河野丼先生描き下ろしオリジナルミニ漫画 （全6種）' },
  { title: '第2弾', start: '2026/02/20', end: '2026/02/26', bonus: 'アナザービジュアルステッカー' },
  { title: '第3弾', start: '2026/02/27', end: '2026/03/05', bonus: '亀山陽平監督描き下ろしミニ色紙' },
]

const otherItems = [
  {
    title: 'アナザービジュアル公開！',
    description: 'ヨロコヴ氏によるアナザービジュアルが解禁しました。',
    url: 'https://www.animatetimes.com/news/details.php?id=1768976983&utm_source=twitter&utm_medium=social',
  },
  {
    title: '上映館拡大決定！',
    description: '3/6（金）より75館の追加上映館が決定！',
    url: 'https://eigakan.org/theaterpage/schedule.php?t=milkygalacticuniverse',
  },
]

const goodsItems = [
  {
    title: '劇場版グッズ',
    description: 'アクスタなど',
    url: 'https://x.com/MGUJapan/status/2015620711063130504?s=20',
  },
  {
    title: '劇場版グッズ通販：シンエイ ONLINE STORE',
    description: '3/3(火)12:00～3/22(日)昼11:59',
    url: 'https://t.co/GyHVLpGaK9',
  },
  {
    title: '劇場版グッズ通販：A-on STORE',
    description: '3/3(火)12:00～3/22(日)昼11:59',
    url: 'https://t.co/itJUQGyeOf',
  },
  {
    title: '劇場版パンフレット',
    description: 'B5サイズ／44ページ　クリアファイル付',
    url: 'https://x.com/MGUJapan/status/2017115560409202828?s=20',
  },
  {
    title: 'ポッピーくんドリンクカップホルダー',
    description: 'ストロー部分にポッピーくんフィギュア付き。',
    url: 'https://www.tops-jp.com/movie/milkysubway/drinkcupholder/',
  },
  {
    title: 'オリジナルポップコーン袋＆オーロラ☆アクリルキーホルダー（全8種・ランダム）',
    description: 'オーロラ☆アクリルキーホルダー（全8種・ランダム：チハル、マキナ、カナタ、アカネ、カート、マックス、リョーコ、アサミ）',
    url: 'https://tjoy.co.jp/news/info/642',
  },
  {
    title: 'シネクイントコラボドリンク',
    description: 'レモンスカッシュ。コースター付き（全４種・ランダム：チハルとマキナ、カナタとアカネ、カートとマックス、リョーコとアサミとハガー）',
    url: 'https://x.com/cinequinto/status/2018248028121903117?s=20',
  },
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
                <DetailLinkButton :href="ev.url" :label="'リンク'" />
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
        <div class="panel-divider"></div>
        <div class="event-list goods-list">
          <div v-for="item in goodsItems" :key="item.title" class="event-card">
            <div class="event-body">
              <span class="event-value panel-title--green">{{ item.title }}</span>
              <span class="event-note">{{ item.description || '—' }}</span>
              <div class="event-link" v-if="item.url">
                <DetailLinkButton :href="item.url" :label="'リンク'" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <h3 class="panel-title--green">🌟その他🌟</h3>
        <div class="panel-divider"></div>
        <div class="event-list other-list">
          <div v-for="item in otherItems" :key="item.title" class="event-card">
            <div class="event-body">
              <span class="event-value panel-title--green">{{ item.title }}</span>
              <span class="event-note">{{ item.description }}</span>
              <div class="event-link" v-if="item.url">
                <DetailLinkButton :href="item.url" :label="'リンク'" />
              </div>
            </div>
          </div>
        </div>
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

.panel-title--green {
  color: var(--foreground);
}

.panel-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  margin-bottom: 0.75rem;
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

.goods-list .event-card:first-child {
  border-top: none;
  padding-top: 0;
}

.other-list .event-card:first-child {
  border-top: none;
  padding-top: 0;
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

.event-value.panel-title--green {
  color: var(--foreground);
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
