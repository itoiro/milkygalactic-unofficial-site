<script setup>
import { computed } from 'vue'
import ongoingEvents from '../data/ongoingEvents.json'
import DetailLinkButton from './DetailLinkButton.vue'

const parseEventDateMs = (value) => {
  if (!value) return Number.POSITIVE_INFINITY
  const text = String(value).trim()
  if (text === '-' || text === '?') return Number.POSITIVE_INFINITY

  if (text.includes('/')) {
    const parts = text.replace(/年|月/g, '/').replace(/日/g, '').split('/').filter(Boolean)
    if (parts.length >= 3) {
      const [year, month, day] = parts.map(Number)
      const dt = new Date(Date.UTC(year, month - 1, day))
      return Number.isFinite(dt.getTime()) ? dt.getTime() : Number.POSITIVE_INFINITY
    }
  }

  const yearMatch = text.match(/(\d{4})/)
  if (!yearMatch) return Number.POSITIVE_INFINITY
  const year = Number(yearMatch[1])
  const rest = text.slice(yearMatch.index + yearMatch[0].length)
  const monthMatch = rest.match(/(\d{1,2})/)
  const month = monthMatch ? Number(monthMatch[1]) : 12
  let day = 28
  if (text.includes('上旬')) day = 5
  else if (text.includes('中旬')) day = 15
  else if (text.includes('下旬')) day = 25

  const dt = new Date(Date.UTC(year, month - 1, day))
  return Number.isFinite(dt.getTime()) ? dt.getTime() : Number.POSITIVE_INFINITY
}

const filteredEvents = computed(() => {
  const now = Date.now()
  return ongoingEvents.filter((event) => {
    const endMs = parseEventDateMs(event.endDate)
    if (Number.isFinite(endMs) && endMs !== Number.POSITIVE_INFINITY) {
      return endMs >= now
    }
    const startMs = parseEventDateMs(event.startDate)
    return startMs >= now
  })
})
</script>

<template>
  <div class="space-y-3">

    <div class="space-y-4">
      <div class="mobile-only space-y-3">
        <div
          v-for="event in filteredEvents"
          :key="`mobile-${event.name}`"
          class="event-card bg-card/80 p-3 space-y-2"
        >
          <div class="font-semibold text-base">{{ event.name }}</div>
          <div class="flex items-center gap-2 text-sm">
            <span class="label-text">開催地</span>
            <span class="value-text">{{ event.location }}</span>
          </div>
          <div class="text-sm flex items-center gap-3 flex-wrap">
            <span class="label-text">会期</span>
            <span class="value-text">{{ event.startDate }} - {{ event.endDate }}</span>
          </div>
          <div class="pt-2">
            <DetailLinkButton v-if="event.url" :href="event.url" :full-width="true" />
            <span v-else class="text-muted-foreground text-sm">—</span>
          </div>
        </div>
      </div>

      <div class="desktop-only overflow-x-auto border border-foreground/50 bg-card/70">
        <table class="w-full text-base md:text-lg border-collapse event-table">
          <thead class="bg-card">
            <tr class="border-b border-foreground/50">
              <th class="py-2 px-3 text-left whitespace-nowrap">イベント名</th>
              <th class="py-2 px-3 text-left whitespace-nowrap">会期</th>
              <th class="py-2 px-3 text-left whitespace-nowrap">開催エリア/会場</th>
              <th class="py-2 px-3 text-left whitespace-nowrap">詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="event in filteredEvents"
              :key="event.name"
              class="border-b border-foreground/30 last:border-0"
            >
              <td class="py-4 px-3 font-semibold event-name">{{ event.name }}</td>
              <td class="py-4 px-3 whitespace-nowrap">
                <div>{{ event.startDate }} - {{ event.endDate }}</div>
              </td>
              <td class="py-4 px-3 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <span class="label-text">開催地</span>
                  <span class="value-text">{{ event.location }}</span>
                </div>
              </td>
              <td class="py-4 px-3">
                <DetailLinkButton v-if="event.url" :href="event.url" />
                <span v-else class="text-muted-foreground">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.event-card + .event-card {
  border-top: 1px solid rgba(15, 255, 136, 0.45);
  padding-top: 14px;
  margin-top: 6px;
}

.event-table :deep(tbody tr:nth-child(odd)) {
  background: rgba(15, 255, 136, 0.06);
}

.event-table :deep(tbody tr:hover) {
  background: rgba(15, 255, 136, 0.12);
}

.event-name {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.mobile-only {
  display: block;
}

.desktop-only {
  display: none;
}

.label-text {
  font-size: 0.78rem;
  color: var(--muted-foreground);
  letter-spacing: 0.01em;
}

.value-text {
  font-size: 0.92rem;
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
