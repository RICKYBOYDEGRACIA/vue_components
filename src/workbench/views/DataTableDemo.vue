<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseDataTable, { type DataTableColumn } from '@/components/ui/BaseDataTable.vue'
import rawSource from '@/components/ui/BaseDataTable.vue?raw'
import BasePagination from '@/components/ui/BasePagination.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

interface User {
  id: number
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
  status: 'active' | 'inactive' | 'pending'
  joined: string
}

const sampleNames = [
  'Alice Johnson', 'Bob Smith', 'Carol White', 'David Brown', 'Eve Davis',
  'Frank Wilson', 'Grace Lee', 'Henry Martinez', 'Iris Taylor', 'Jack Thomas',
  'Karen Anderson', 'Liam Jackson', 'Mia Harris', 'Noah Clark', 'Olivia Lewis',
  'Paul Robinson', 'Quinn Walker', 'Rachel Hall', 'Samuel Allen', 'Tina Young',
  'Uma King', 'Victor Wright', 'Wendy Scott', 'Xavier Green', 'Yara Adams',
]

function createInitialUsers(): User[] {
  return sampleNames.map((name, i) => ({
    id: i + 1,
    name,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
    role: (['Admin', 'Editor', 'Viewer'] as const)[i % 3],
    status: (['active', 'inactive', 'pending'] as const)[i % 3],
    joined: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
  }))
}

const rows = ref<User[]>(createInitialUsers())

const columns: DataTableColumn<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'joined', label: 'Joined', sortable: true },
  { key: 'actions', label: 'Actions', align: 'right' },
]

const selectedKeys = ref<Array<string | number>>([])
const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const selectable = ref(true)
const striped = ref(false)
const hoverable = ref(true)
const stickyHeader = ref(false)

const statusVariant: Record<User['status'], 'success' | 'danger' | 'warning'> = {
  active: 'success',
  inactive: 'danger',
  pending: 'warning',
}

function toggleLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}

function deleteRow(id: number) {
  rows.value = rows.value.filter((u) => u.id !== id)
  selectedKeys.value = selectedKeys.value.filter((k) => k !== id)
}

function bulkDelete() {
  if (!selectedKeys.value.length) return
  const keySet = new Set(selectedKeys.value)
  rows.value = rows.value.filter((u) => !keySet.has(u.id))
  selectedKeys.value = []
}

function resetUsers() {
  rows.value = createInitialUsers()
  selectedKeys.value = []
  page.value = 1
}

const usageCode = computed(() => {
  const attrs: string[] = [
    ':columns="columns"',
    ':rows="users"',
    'row-key="id"',
    ':page="page"',
    ':page-size="pageSize"',
  ]
  if (selectable.value) {
    attrs.push(':selectable="true"')
    attrs.push('v-model:selected-keys="selectedKeys"')
  }
  if (striped.value) attrs.push(':striped="true"')
  if (hoverable.value) attrs.push(':hoverable="true"')
  if (stickyHeader.value) attrs.push(':sticky-header="true"')
  if (loading.value) attrs.push(':loading="true"')

  return `<BaseDataTable
  ${attrs.join('\n  ')}
>
  <template #cell-status="{ row }">
    <BaseBadge :variant="statusVariant[row.status]" :dot="true">
      {{ row.status }}
    </BaseBadge>
  </template>

  <template #footer>
    <BasePagination
      v-model:page="page"
      v-model:page-size="pageSize"
      :total-items="users.length"
    />
  </template>
</BaseDataTable>`
})
</script>

<template>
  <ComponentPreview
    title="Data Table"
    description="Generic, sortable, selectable data table with custom cell slots, bulk actions, loading skeletons, and pagination."
  >
    <template #preview>
      <div class="w-full">
        <BaseDataTable
          v-model:selected-keys="selectedKeys"
          :columns="columns"
          :rows="rows"
          row-key="id"
          :loading="loading"
          :selectable="selectable"
          :striped="striped"
          :hoverable="hoverable"
          :sticky-header="stickyHeader"
          :page="page"
          :page-size="pageSize"
        >
          <template #toolbar="{ selectedKeys: keys }">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Users ({{ rows.length }})
                </span>
                <template v-if="keys.length">
                  <BaseBadge variant="primary">{{ keys.length }} selected</BaseBadge>
                  <BaseButton variant="danger" size="xs" @click="bulkDelete">
                    Delete Selected
                  </BaseButton>
                </template>
              </div>
              <div class="flex items-center gap-2">
                <BaseButton
                  v-if="rows.length < 25"
                  variant="ghost"
                  size="sm"
                  @click="resetUsers"
                >
                  Reset 25 Users
                </BaseButton>
                <BaseButton variant="outline" size="sm" @click="toggleLoading">
                  Simulate Loading
                </BaseButton>
              </div>
            </div>
          </template>

          <template #cell-status="{ row }">
            <BaseBadge :variant="statusVariant[row.status]" :dot="true" class="capitalize">
              {{ row.status }}
            </BaseBadge>
          </template>

          <template #cell-actions="{ row }">
            <div class="flex justify-end gap-1" @click.stop>
              <BaseButton
                variant="ghost"
                size="xs"
                class="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                @click="deleteRow(row.id)"
              >
                Delete
              </BaseButton>
            </div>
          </template>

          <template #footer>
            <BasePagination
              v-model:page="page"
              v-model:page-size="pageSize"
              :total-items="rows.length"
              :page-size-options="[5, 10, 25]"
            />
          </template>
        </BaseDataTable>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="selectable" type="checkbox" class="rounded" /> Selectable
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="striped" type="checkbox" class="rounded" /> Striped rows
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="hoverable" type="checkbox" class="rounded" /> Hoverable rows
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="stickyHeader" type="checkbox" class="rounded" /> Sticky header
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="loading" type="checkbox" class="rounded" /> Loading skeleton
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseDataTable.vue" />
    </template>
  </ComponentPreview>
</template>
