<script lang="ts">
export interface DataTableColumn<T> {
  key: keyof T | string
  label: string
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  width?: string
  formatter?: (value: any, row: T) => string
}

export interface BaseDataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]
  rowKey?: keyof T | ((row: T) => string | number)
  loading?: boolean
  selectable?: boolean
  sortable?: boolean
  striped?: boolean
  hoverable?: boolean
  stickyHeader?: boolean
  emptyTitle?: string
  emptyDescription?: string
  manualPagination?: boolean
  manualSorting?: boolean
  page?: number
  pageSize?: number
}
</script>

<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<BaseDataTableProps<T>>(), {
  rowKey: 'id' as any,
  loading: false,
  selectable: false,
  sortable: false,
  striped: false,
  hoverable: true,
  stickyHeader: false,
  emptyTitle: 'No data',
  emptyDescription: 'No records to display.',
  manualPagination: false,
  manualSorting: false,
})

const emit = defineEmits<{
  'row-click': [row: T]
  'sort-change': [{ key: string; direction: 'asc' | 'desc' | null }]
}>()

const selectedKeys = defineModel<Array<string | number>>('selectedKeys', { default: () => [] })
const $attrs = useAttrs()

// Sorting
const sortKey = ref<string | null>(null)
const sortDir = ref<'asc' | 'desc' | null>(null)

function getRowKey(row: T, fallbackIndex = 0): string | number {
  if (typeof props.rowKey === 'function') return props.rowKey(row)
  const val = row[props.rowKey as keyof T]
  return val !== undefined && val !== null ? (val as string | number) : fallbackIndex
}

function getCellValue(row: T, key: string): any {
  return key.split('.').reduce((obj: any, k) => obj?.[k], row)
}

function toggleSort(col: DataTableColumn<T>) {
  if (!col.sortable && !props.sortable) return
  const key = String(col.key)
  if (sortKey.value !== key) {
    sortKey.value = key
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortKey.value = null
    sortDir.value = null
  }
  emit('sort-change', { key: sortKey.value ?? key, direction: sortDir.value })
}

function getAriaSort(col: DataTableColumn<T>): 'ascending' | 'descending' | 'none' | undefined {
  if (!col.sortable && !props.sortable) return undefined
  if (sortKey.value !== String(col.key) || !sortDir.value) return 'none'
  return sortDir.value === 'asc' ? 'ascending' : 'descending'
}

const sortedRows = computed<T[]>(() => {
  if (props.manualSorting || !sortKey.value || !sortDir.value) return props.rows
  const key = sortKey.value
  const dir = sortDir.value
  return [...props.rows].sort((a, b) => {
    const aVal = getCellValue(a, key)
    const bVal = getCellValue(b, key)
    if (aVal == null && bVal == null) return 0
    if (aVal == null) return 1
    if (bVal == null) return -1
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return dir === 'asc' ? aVal - bVal : bVal - aVal
    }
    const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true, sensitivity: 'base' })
    return dir === 'asc' ? cmp : -cmp
  })
})

const displayRows = computed<T[]>(() => {
  if (props.manualPagination || props.page === undefined || props.pageSize === undefined) {
    return sortedRows.value
  }
  const safePage = Math.max(1, props.page)
  const safeSize = Math.max(1, props.pageSize)
  const start = (safePage - 1) * safeSize
  return sortedRows.value.slice(start, start + safeSize)
})

// Selection (operates over currently visible rows)
const visibleKeys = computed(() => displayRows.value.map((row, idx) => getRowKey(row, idx)))
const allSelected = computed(
  () => visibleKeys.value.length > 0 && visibleKeys.value.every((k) => selectedKeys.value.includes(k)),
)
const someSelected = computed(
  () => visibleKeys.value.some((k) => selectedKeys.value.includes(k)) && !allSelected.value,
)

function toggleAll() {
  if (allSelected.value) {
    selectedKeys.value = selectedKeys.value.filter((k) => !visibleKeys.value.includes(k))
  } else {
    selectedKeys.value = [...new Set([...selectedKeys.value, ...visibleKeys.value])]
  }
}

function toggleRow(row: T, index: number) {
  const key = getRowKey(row, index)
  if (selectedKeys.value.includes(key)) {
    selectedKeys.value = selectedKeys.value.filter((k) => k !== key)
  } else {
    selectedKeys.value = [...selectedKeys.value, key]
  }
}

function isRowSelected(row: T, index: number): boolean {
  return selectedKeys.value.includes(getRowKey(row, index))
}

const alignClass: Record<NonNullable<DataTableColumn<T>['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const skeletonWidths = ['72%', '56%', '84%', '64%', '78%']
</script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col', $attrs.class as string)"
  >
    <!-- Toolbar slot -->
    <div v-if="$slots.toolbar" class="mb-3">
      <slot name="toolbar" :selected-keys="selectedKeys" />
    </div>

    <!-- Table wrapper -->
    <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table class="w-full text-sm border-collapse">
        <thead :class="cn(stickyHeader && 'sticky top-0 z-10', 'bg-slate-50 dark:bg-slate-800/60')">
          <tr>
            <!-- Select all checkbox -->
            <th v-if="selectable" class="w-10 px-3 py-3 border-b border-slate-200 dark:border-slate-700">
              <div class="flex items-center justify-center">
                <input
                  type="checkbox"
                  :checked="allSelected"
                  :indeterminate="someSelected"
                  class="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  :aria-label="allSelected ? 'Deselect all' : 'Select all'"
                  @change="toggleAll"
                />
              </div>
            </th>

            <th
              v-for="col in columns"
              :key="String(col.key)"
              :aria-sort="getAriaSort(col)"
              :class="cn(
                'px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700',
                alignClass[col.align ?? 'left'],
                (col.sortable || sortable) && 'cursor-pointer select-none hover:text-slate-700 dark:hover:text-slate-200',
              )"
              :style="col.width ? { width: col.width } : undefined"
              @click="toggleSort(col)"
            >
              <slot :name="`header-${String(col.key)}`" :column="col">
                <span
                  class="inline-flex items-center gap-1"
                  :class="col.align === 'center' ? 'justify-center' : col.align === 'right' ? 'justify-end' : ''"
                >
                  {{ col.label }}
                  <span v-if="col.sortable || sortable" class="ml-0.5" aria-hidden="true">
                    <svg
                      v-if="sortKey === String(col.key) && sortDir === 'asc'"
                      class="h-3.5 w-3.5 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-else-if="sortKey === String(col.key) && sortDir === 'desc'"
                      class="h-3.5 w-3.5 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg v-else class="h-3.5 w-3.5 opacity-30" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 10l5-5 5 5H5zm0 1l5 5 5-5H5z" />
                    </svg>
                  </span>
                </span>
              </slot>
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
          <!-- Loading skeleton rows -->
          <template v-if="loading">
            <tr v-for="i in 5" :key="`skeleton-${i}`">
              <td v-if="selectable" class="px-3 py-3">
                <div class="mx-auto h-4 w-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              </td>
              <td v-for="(col, colIdx) in columns" :key="String(col.key)" class="px-4 py-3">
                <div
                  class="h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"
                  :style="{ width: skeletonWidths[(i + colIdx) % skeletonWidths.length] }"
                />
              </td>
            </tr>
          </template>

          <!-- Empty state -->
          <template v-else-if="!displayRows.length">
            <tr>
              <td :colspan="columns.length + (selectable ? 1 : 0)" class="px-4 py-16 text-center">
                <slot name="empty">
                  <div class="flex flex-col items-center gap-2">
                    <svg
                      class="h-10 w-10 text-slate-300 dark:text-slate-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <p class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ emptyTitle }}</p>
                    <p class="text-xs text-slate-400 dark:text-slate-500">{{ emptyDescription }}</p>
                  </div>
                </slot>
              </td>
            </tr>
          </template>

          <!-- Data rows -->
          <template v-else>
            <tr
              v-for="(row, rowIndex) in displayRows"
              :key="String(getRowKey(row, rowIndex))"
              :class="cn(
                'transition-colors',
                striped && rowIndex % 2 === 1 && 'bg-slate-50/70 dark:bg-slate-800/30',
                hoverable && 'hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer',
                isRowSelected(row, rowIndex) && 'bg-blue-50/60 dark:bg-blue-900/20',
              )"
              @click="emit('row-click', row)"
            >
              <!-- Row select checkbox -->
              <td v-if="selectable" class="px-3 py-3" @click.stop="toggleRow(row, rowIndex)">
                <div class="flex items-center justify-center">
                  <input
                    type="checkbox"
                    :checked="isRowSelected(row, rowIndex)"
                    class="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    :aria-label="`Select row ${rowIndex + 1}`"
                    @change="toggleRow(row, rowIndex)"
                    @click.stop
                  />
                </div>
              </td>

              <td
                v-for="col in columns"
                :key="String(col.key)"
                :class="cn(
                  'px-4 py-3 text-slate-700 dark:text-slate-300',
                  alignClass[col.align ?? 'left'],
                )"
              >
                <slot
                  :name="`cell-${String(col.key)}`"
                  :row="row"
                  :value="getCellValue(row, String(col.key))"
                  :index="rowIndex"
                >
                  {{
                    col.formatter
                      ? col.formatter(getCellValue(row, String(col.key)), row)
                      : getCellValue(row, String(col.key))
                  }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.footer" class="mt-3">
      <slot name="footer" />
    </div>
  </div>
</template>
