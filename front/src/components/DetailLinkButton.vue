<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'リンク',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <a
    :href="href"
    class="detail-link"
    :class="[{ 'detail-link--full': fullWidth }]"
    target="_blank"
    rel="noreferrer noopener"
  >
    <span>{{ label }}</span>
    <slot name="icon-suffix">
      <span aria-hidden="true">↗</span>
    </slot>
  </a>
</template>

<style scoped>
.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(15, 255, 136, 0.45);
  background: rgba(26, 26, 46, 0.9);
  color: var(--foreground);
  font-size: 0.9rem;
  transition: color 120ms ease, border-color 120ms ease, background-color 120ms ease;
  white-space: nowrap;
}

.detail-link--full {
  width: 100%;
  justify-content: center;
}

.detail-link:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(255, 0, 110, 0.12);
}
</style>
