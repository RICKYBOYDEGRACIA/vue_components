<script setup lang="ts">
import { computed, useAttrs, watch } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BasePaginationProps {
  totalItems: number
  pageSizeOptions?: number[]
  siblingCount?: number
}

const props = withDefaults(defineProps<BasePaginationProps>(), {
  pageSizeOptions: () => [10, 25, 50, 100],
  siblingCount: 1,
})

const page = defineModel<number>('page', { default: 1 })
const pageSize = defineModel<number>('pageSize', { default: 10 })
const $attrs = useAttrs()

const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / Math.max(1, pageSize.value))))

watch(totalPages, (max) => {
  if (page.value > max) {
    page.value = max
  } else if (page.value < 1) {
    page.value = 1
  }
})

const startItem = computed(() =>
  props.totalItems === 0 ? 0 : Math.min((page.value - 1) * pageSize.value + 1, props.totalItems),
)
const endItem = computed(() => Math.min(page.value * pageSize.value, props.totalItems))

const pageNumbers = computed<Array<number | '...'>>(() => {
  const total = totalPages.value
  const current = page.value
  const sibling = props.siblingCount

  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  if (total <= 2 * sibling + 5) return range(1, total)

  const leftSibling = Math.max(current - sibling, 2)
  const rightSibling = Math.min(current + sibling, total - 1)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < total - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 2 + 2 * sibling + 1), '...', total]
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, '...', ...range(total - (2 + 2 * sibling), total)]
  }
  return [1, '...', ...range(leftSibling, rightSibling), '...', total]
})

function goTo(p: number) {
  if (p < 1 || p > totalPages.value) return
  page.value = p
}

function handlePageSizeChange(event: Event) {
  const target = event.target as HTMLSelectElement
  pageSize.value = Number(target.value)
  page.value = 1
}

const btnBase =
  'flex items-center justify-center h-8 min-w-[2rem] px-2 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
const btnActive = 'bg-blue-600 text-white dark:bg-blue-500 font-medium'
const btnInactive =
  'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
const btnDisabled = 'opacity-40 pointer-events-none'
</script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col sm:flex-row items-center justify-between gap-3', $attrs.class as string)"
    aria-label="Pagination"
  >
    <!-- Summary + page size selector -->
    <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
      <span v-if="totalItems > 0">
        Showing
        <strong class="text-slate-900 dark:text-slate-100">{{ startItem }}–{{ endItem }}</strong>
        of
        <strong class="text-slate-900 dark:text-slate-100">{{ totalItems }}</strong>
        results
      </span>
      <span v-else>No results</span>

      <select
        :value="pageSize"
        class="text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-label="Results per page"
        @change="handlePageSizeChange"
      >
        <option v-for="opt in pageSizeOptions" :key="opt" :value="opt">{{ opt }} / page</option>
      </select>
    </div>

    <!-- Page navigation -->
    <nav class="flex items-center gap-1" aria-label="Page navigation">
      <!-- Previous -->
      <button
        type="button"
        :class="cn(btnBase, page <= 1 ? btnDisabled : btnInactive)"
        :disabled="page <= 1"
        aria-label="Previous page"
        @click="goTo(page - 1)"
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Pages -->
      <template v-for="(p, i) in pageNumbers" :key="`${p}-${i}`">
        <span
          v-if="p === '...'"
          class="flex items-center justify-center h-8 w-8 text-sm text-slate-400 dark:text-slate-500 select-none"
          aria-hidden="true"
        >
          …
        </span>
        <button
          v-else
          type="button"
          :class="cn(btnBase, page === p ? btnActive : btnInactive)"
          :aria-label="`Page ${p}`"
          :aria-current="page === p ? 'page' : undefined"
          @click="goTo(p)"
        >
          {{ p }}
        </button>
      </template>

      <!-- Next -->
      <button
        type="button"
        :class="cn(btnBase, page >= totalPages ? btnDisabled : btnInactive)"
        :disabled="page >= totalPages"
        aria-label="Next page"
        @click="goTo(page + 1)"
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>
