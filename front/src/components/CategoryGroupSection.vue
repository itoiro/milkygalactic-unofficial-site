<script setup>
import CategoryGroupCard from './CategoryGroupCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: '📚 設定資料集',
  },
  titleClass: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  changeSection: {
    type: Function,
    required: true,
  },
  wrapperVariant: {
    type: String,
    default: 'foreground',
    validator: (value) => ['foreground', 'primary', 'secondary', 'accent'].includes(value),
  },
})

const wrapperVariantClasses = {
  foreground: '',
  primary: '',
  secondary: '',
  accent: '',
}

const handleCardSelect = (item) => {
  if (item.disabled) {
    return
  }
  props.changeSection && props.changeSection(item.target)
}
</script>

<template>
  <div class="section-shell bg-card p-6 mt-4" :class="wrapperVariantClasses[wrapperVariant]">
    <h2 class="mb-4 text-2xl md:text-3xl font-semibold section-title" :class="titleClass">{{ title }}</h2>
    <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CategoryGroupCard
        v-for="item in items"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :variant="item.variant"
        :disabled="item.disabled"
        @select="handleCardSelect(item)"
      />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.section-title {
  color: var(--font-title);
}

.section-shell {
  color: #fff;
}

.title-foreground {
  color: var(--foreground);
}

:deep(th) {
  color: var(--foreground) !important;
}
</style>
