<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseAlert from '@/components/ui/BaseAlert.vue'
import rawSource from '@/components/ui/BaseAlert.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const variant = ref<'info' | 'success' | 'warning' | 'danger'>('info')
const dismissible = ref(true)
const showTitle = ref(true)
const alertKey = ref(0)
const isDismissed = ref(false)

function handleDismiss() {
  isDismissed.value = true
}

function resetAlert() {
  isDismissed.value = false
  alertKey.value += 1
}

const usageCode = computed(() => {
  const attrs: string[] = [`variant="${variant.value}"`]
  if (showTitle.value) attrs.push('title="Alert Title"')
  if (dismissible.value) attrs.push(':dismissible="true"')
  return `<BaseAlert ${attrs.join(' ')}>\n  This is an example alert message providing contextual feedback.\n</BaseAlert>`
})
</script>

<template>
  <ComponentPreview title="Alert" description="Contextual inline feedback banners.">
    <template #preview>
      <div class="w-full max-w-lg">
        <BaseAlert
          v-if="!isDismissed"
          :key="alertKey"
          :variant="variant"
          :title="showTitle ? 'Alert Title' : undefined"
          :dismissible="dismissible"
          @dismiss="handleDismiss"
        >
          This is an example alert message providing contextual feedback.
        </BaseAlert>
        <div v-else class="text-center py-4">
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">Alert dismissed.</p>
          <button
            type="button"
            class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            @click="resetAlert"
          >
            Show alert again
          </button>
        </div>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Variant</label>
          <select
            v-model="variant"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="v in ['info', 'success', 'warning', 'danger']" :key="v" :value="v">
              {{ v }}
            </option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="dismissible" type="checkbox" class="rounded" />
          Dismissible
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showTitle" type="checkbox" class="rounded" />
          Show Title
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseAlert.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-3 max-w-lg">
        <BaseAlert variant="info" title="Information">
          Here is some helpful information for you.
        </BaseAlert>
        <BaseAlert variant="success" title="Success">
          Your changes have been saved successfully.
        </BaseAlert>
        <BaseAlert variant="warning" title="Warning">
          Please review before continuing.
        </BaseAlert>
        <BaseAlert variant="danger" title="Error" :dismissible="true">
          Something went wrong. Please try again.
        </BaseAlert>
      </div>
    </template>
  </ComponentPreview>
</template>
