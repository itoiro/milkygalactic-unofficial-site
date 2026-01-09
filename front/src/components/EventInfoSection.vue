<script setup>
import ongoingEvents from '../data/ongoingEvents.json'
</script>

<template>
  <div class="space-y-3">

    <div class="space-y-4">
      <div class="mobile-only space-y-3">
        <div
          v-for="event in ongoingEvents"
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
            <a
              v-if="event.url"
              class="reservation-link inline-flex items-center gap-2 w-full justify-center"
              :href="event.url"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>詳細リンク</span>
              <span aria-hidden="true">↗</span>
            </a>
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
              v-for="event in ongoingEvents"
              :key="event.name"
              class="border-b border-foreground/30 last:border-0"
            >
              <td class="py-4 px-3 font-semibold whitespace-nowrap">{{ event.name }}</td>
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
                <a
                  v-if="event.url"
                  class="reservation-link inline-flex items-center gap-2"
                  :href="event.url"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>詳細リンク</span>
                  <span aria-hidden="true">↗</span>
                </a>
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
.reservation-link {
  padding: 9px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(15, 255, 136, 0.45);
  background: rgba(26, 26, 46, 0.9);
  color: inherit;
  font-size: 0.9rem;
  margin-bottom: 6px;
  transition: color 120ms ease, border-color 120ms ease, background-color 120ms ease;
}

.reservation-link:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(255, 0, 110, 0.12);
}

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
