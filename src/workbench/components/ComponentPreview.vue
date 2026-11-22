<script setup lang="ts">
import CodeViewer from './CodeViewer.vue'

export interface ComponentPreviewProps {
  title: string
  description?: string
  usage?: string
  source?: string
  filename?: string
}

defineProps<ComponentPreviewProps>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h1 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ title }}</h1>
      <p v-if="description" class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {{ description }}
      </p>
    </div>

    <!-- Preview + Knobs layout -->
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Preview area -->
      <div class="flex-1 min-w-0">
        <div class="text-xs font-medium text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
          Preview
        </div>
        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 min-h-36 flex items-center justify-center">
          <slot name="preview" />
        </div>
      </div>

      <!-- Knobs panel -->
      <div v-if="$slots.knobs" class="lg:w-64 shrink-0">
        <div class="text-xs font-medium text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
          Props
        </div>
        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-3">
          <slot name="knobs" />
        </div>
      </div>
    </div>

    <!-- Code viewer -->
    <div v-if="$slots.code || usage">
      <div class="text-xs font-medium text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
        Code
      </div>
      <slot name="code">
        <CodeViewer v-if="usage" :usage="usage" :source="source" :filename="filename" />
      </slot>
    </div>

    <!-- All variants -->
    <div v-if="$slots.variants">
      <div class="text-xs font-medium text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
        All Variants
      </div>
      <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
        <slot name="variants" />
      </div>
    </div>
  </div>
</template>
