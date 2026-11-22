<script setup lang="ts">
import { ref, computed } from 'vue'

export interface CodeViewerProps {
  usage: string
  source?: string
  filename?: string
}

const props = defineProps<CodeViewerProps>()

const activeTab = ref<'usage' | 'source'>('usage')
const copied = ref(false)
let copyTimeout: ReturnType<typeof setTimeout> | null = null

const activeCode = computed(() =>
  activeTab.value === 'usage' ? props.usage : (props.source ?? '')
)

const copyLabel = computed(() => {
  if (copied.value) return 'Copied!'
  return activeTab.value === 'source' ? 'Copy Component File' : 'Copy Snippet'
})

async function copy() {
  const text = activeCode.value
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
  copied.value = true
  if (copyTimeout) clearTimeout(copyTimeout)
  copyTimeout = setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-950 shadow-sm">
    <!-- Tabs + copy button -->
    <div class="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-3 py-2 border-b border-slate-800">
      <div class="flex items-center gap-1" role="tablist">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'usage'"
          :class="[
            'px-3 py-1 text-xs font-medium rounded-md transition-colors',
            activeTab === 'usage'
              ? 'bg-slate-700 text-slate-100 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800',
          ]"
          @click="activeTab = 'usage'"
        >
          Usage Snippet
        </button>
        <button
          v-if="source"
          type="button"
          role="tab"
          :aria-selected="activeTab === 'source'"
          :class="[
            'px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5',
            activeTab === 'source'
              ? 'bg-slate-700 text-slate-100 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800',
          ]"
          @click="activeTab = 'source'"
        >
          <span>Component Source</span>
          <span
            v-if="filename"
            class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300"
          >
            {{ filename }}
          </span>
        </button>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
        @click="copy"
      >
        <svg
          v-if="copied"
          class="h-3.5 w-3.5 text-emerald-400 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
          class="h-3.5 w-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
        </svg>
        <span>{{ copyLabel }}</span>
      </button>
    </div>

    <!-- Code content -->
    <div class="bg-slate-950 p-4 overflow-auto max-h-[460px]">
      <pre class="text-xs sm:text-sm leading-relaxed font-mono text-slate-300"><code>{{ activeCode }}</code></pre>
    </div>
  </div>
</template>
