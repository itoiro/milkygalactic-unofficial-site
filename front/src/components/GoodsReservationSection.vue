<script setup>
import goodsReservationGoods from '../data/goodsReservationGoods.json'
import goodsReservationMedia from '../data/goodsReservationMedia.json'
import priseInfo from '../data/priseInfo.json'
import DetailLinkButton from './DetailLinkButton.vue'

const parseDateMs = (value) => {
  const t = new Date(value || '').getTime()
  return Number.isFinite(t) && t > 0 ? t : Number.POSITIVE_INFINITY
}

const buildGrouped = (source) =>
  source
    .flatMap((group) => {
      const variants = (group.variants || [])
        .map((variant) => ({
          ...variant,
          productTitle: group.title,
          url: variant.url || variant.link || '',
          expiresMs: parseDateMs(variant.expiresAt),
        }))
        .filter((variant) => variant.expiresMs === Number.POSITIVE_INFINITY || variant.expiresMs >= Date.now())

      return {
        title: group.title,
        brand: group.brand,
        variants,
      }
    })
    .filter((group) => group.variants.length > 0)

const sections = [
  { key: 'goods', title: 'グッズ予約情報', groups: buildGrouped(goodsReservationGoods) },  
  { key: 'media', title: '映像/書籍予約情報', groups: buildGrouped(goodsReservationMedia) },
  { key: 'prize', title: 'プライズ情報', groups: buildGrouped(priseInfo) }
]
</script>

<template>
  <div class="reservation-section">

    <div class="space-y-6">
      <div class="mt-6" v-for="section in sections" :key="section.key">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-accent flex items-center justify-center">
            ⏱
          </div>
          <h3 class="text-lg md:text-xl font-semibold reservation-title">{{ section.title }}</h3>
          <span v-if="!section.groups.length" class="text-xs text-muted-foreground">現在ありません</span>
        </div>

        <div v-if="section.groups.length" class="space-y-4">
          <div class="mobile-only space-y-3">
            <div
              v-for="group in section.groups"
              :key="`mobile-${group.title}`"
              class="mobile-group-card border border-foreground/50 bg-card/80 p-2 space-y-3 text-sm"
            >
              <div class="flex items-start justify-between gap-2">
                <div>
                  <div class="font-semibold text-base group-title">{{ group.title }}</div>
                  <div v-if="group.brand" class="text-xs text-muted-foreground mt-1">{{ group.brand }}</div>
                </div>
              </div>

              <template v-if="group.variants.length === 1">
                <div class="space-y-2 text-sm">
                  <div v-if="section.key !== 'prize' && group.variants[0].reserveTo" class="flex items-start gap-2">
                    <span class="label-text">予約〆</span>
                    <span class="value-text date-inline">{{ group.variants[0].reserveTo || '—' }}</span>
                  </div>
                  <div v-if="group.variants[0].releaseDate" class="flex items-start gap-2">
                    <span class="label-text">発売日</span>
                    <span class="value-text date-inline">{{ group.variants[0].releaseDate || '—' }}</span>
                  </div>
                  <div v-if="group.variants[0].summary || group.variants[0].note">
                    <div class="label-text">概要/備考</div>
                    <div v-if="group.variants[0].summary" class="value-text">{{ group.variants[0].summary }}</div>
                    <div v-if="group.variants[0].note" class="text-xs text-muted-foreground mt-1">
                      ※{{ group.variants[0].note }}
                    </div>
                  </div>
                  <div class="pt-1">
                    <DetailLinkButton
                      v-if="group.variants[0].url"
                      :href="group.variants[0].url"
                      :full-width="true"
                    />
                    <span v-else class="reservation-placeholder">—</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="space-y-2">
                  <div
                    v-for="variant in group.variants"
                    :key="`${group.title}-${variant.label || variant.url || variant.summary}`"
                    class="variant-card border border-foreground/30 bg-background/60 p-2 space-y-1 text-sm"
                  >
                    <div class="variant-flag">
                      <span class="flag-icon">└ </span>
                      <span class="flag-label">バリエーション</span>
                    </div>
                    <div class="text-sm">
                      <div class="font-semibold text-base mb-1 group-title">
                        {{ variant.variation || variant.label || '通常' }}
                      </div>
                      <div v-if="section.key !== 'prize' && variant.reserveTo" class="flex items-start gap-2">
                        <span class="label-text">予約〆</span>
                        <span class="value-text date-inline">{{ variant.reserveTo || '—' }}</span>
                      </div>
                      <div v-if="variant.releaseDate" class="flex items-start gap-2 mt-1">
                        <span class="label-text">発売日</span>
                        <span class="value-text date-inline">{{ variant.releaseDate || '—' }}</span>
                      </div>
                    </div>
                    <div v-if="variant.summary || variant.note" class="mt-1">
                      <div class="label-text">概要/備考</div>
                      <div v-if="variant.summary" class="value-text">{{ variant.summary }}</div>
                      <div v-if="variant.note" class="text-xs text-muted-foreground mt-1">
                        ※{{ variant.note }}
                      </div>
                    </div>
                    <div class="pt-2">
                      <DetailLinkButton v-if="variant.url" :href="variant.url" :full-width="true" />
                      <span v-else class="reservation-placeholder">—</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="desktop-only overflow-x-auto rounded-lg p-3 bg-card/60">
            <table class="w-full text-base md:text-lg border-collapse">
              <thead class="bg-card">
              <tr class="text-left border-b border-foreground/50">
                <th class="py-2 px-3 whitespace-nowrap">商品概要</th>
                <!-- <th class="py-2 px-3 whitespace-nowrap">予約開始</th> -->
                <th v-if="section.key !== 'prize'" class="py-2 px-3 whitespace-nowrap">予約〆</th>
                <th class="py-2 px-3 whitespace-nowrap">発売日</th>
                <th class="py-2 px-3">概要/備考</th>
                <th class="py-2 px-3 whitespace-nowrap">リンク</th>
              </tr>
            </thead>
              <tbody>
                <template v-for="group in section.groups" :key="group.title">
                  <template v-if="group.variants.length === 1">
                    <tr class="border-b border-muted/40 last:border-b-0 row-equal-height">
                    <td class="py-2 px-3 whitespace-nowrap">
                      <div class="font-semibold">{{ group.title }}</div>
                      <div v-if="group.brand" class="text-xs text-muted-foreground mt-1">{{ group.brand }}</div>
                    </td>
                    <td v-if="section.key !== 'prize'" class="py-2 px-3 whitespace-nowrap">
                      {{ group.variants[0].reserveTo || '—' }}
                    </td>
                    <td class="py-2 px-3 whitespace-nowrap">{{ group.variants[0].releaseDate || '—' }}</td>
                    <td class="py-2 px-3">
                      <div>{{ group.variants[0].summary || '—' }}</div>
                      <div v-if="group.variants[0].note" class="text-xs text-muted-foreground mt-1">
                        {{ group.variants[0].note }}
                      </div>
                    </td>
                    <td class="py-2 px-3 whitespace-nowrap">
                      <DetailLinkButton v-if="group.variants[0].url" :href="group.variants[0].url" />
                      <span v-else class="reservation-placeholder">—</span>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr class="group-row">
                    <td class="py-2 px-3 font-semibold" :colspan="section.key === 'prize' ? 4 : 5">
                      <div class="font-semibold">{{ group.title }}</div>
                      <div v-if="group.brand" class="text-xs text-muted-foreground mt-1">{{ group.brand }}</div>
                    </td>
                  </tr>
                  <tr
                    v-for="variant in group.variants"
                    :key="`${group.title}-${variant.label || variant.url || variant.summary}`"
                    class="child-row row-equal-height"
                  >
                    <td class="py-2 px-3 whitespace-nowrap">
                      <span class="text-muted-foreground mr-2">└ </span>
                      <span>{{ variant.variation || variant.label || '通常' }}</span>
                      <span v-if="group.brand" class="text-xs text-muted-foreground ml-1">/ {{ group.brand }}</span>
                    </td>
                    <td v-if="section.key !== 'prize'" class="py-2 px-3 whitespace-nowrap">{{ variant.reserveTo || '—' }}</td>
                    <td class="py-2 px-3 whitespace-nowrap">{{ variant.releaseDate || '—' }}</td>
                    <td class="py-2 px-3">
                      <div>{{ variant.summary || '—' }}</div>
                      <div v-if="variant.note" class="text-xs text-muted-foreground mt-1">
                        {{ variant.note }}
                      </div>
                    </td>
                    <td class="py-2 px-3 whitespace-nowrap">
                      <DetailLinkButton v-if="variant.url" :href="variant.url" />
                      <span v-else class="reservation-placeholder">—</span>
                    </td>
                  </tr>
                </template>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reservation-section th {
  color: var(--foreground) !important;
}

.reservation-title {
  color: var(--foreground);
}

.group-title {
  color: var(--foreground);
}

.mobile-group-card + .mobile-group-card {
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  padding-top: 12px;
  margin-top: 8px;
}

.variant-card + .variant-card {
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  margin-top: 8px;
  padding-top: 8px;
}

.group-row {
  background: rgba(15, 255, 136, 0.06);
}

.child-row {
  border-bottom: 1px solid rgba(15, 255, 136, 0.65);
  border-top: 1px solid rgba(15, 255, 136, 0.65);
}

.child-row:last-of-type {
  border-bottom: 1px solid rgba(15, 255, 136, 0.9);
}

.row-equal-height td {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.reservation-placeholder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  font-size: 0.8rem;
  color: var(--muted-foreground);
}

.date-inline {
  display: inline-block;
  margin-left: 0.5rem;
  text-align: right;
  white-space: nowrap;
}

.label-text {
  font-size: 0.78rem;
  color: var(--muted-foreground);
  letter-spacing: 0.01em;
}

.value-text {
  font-size: 0.92rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.4;
}

.variant-card {
  border-left: 3px solid rgba(15, 255, 136, 0.6);
}

.variant-flag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  margin-bottom: 4px;
  border-radius: 9999px;
  background: rgba(15, 255, 136, 0.08);
  color: var(--muted-foreground);
  font-size: 11px;
  letter-spacing: 0.02em;
}

.flag-icon {
  color: var(--accent);
  font-weight: 700;
}

.mobile-only {
  display: block;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }
}
</style>
