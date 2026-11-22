<script setup lang="ts">
import { ref, onUnmounted, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseTooltipProps {
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
}

const props = withDefaults(defineProps<BaseTooltipProps>(), {
  placement: 'top',
  delay: 200,
})

const $attrs = useAttrs()
const visible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null
const tooltipId = `tooltip-${useId()}`

function show() {
  if (timer) clearTimeout(timer)
  if (props.delay <= 0) {
    visible.value = true
    return
  }
  timer = setTimeout(() => {
    visible.value = true
    timer = null
  }, props.delay)
}

function hide() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  visible.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && visible.value) {
    hide()
  }
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

const placementClasses: Record<NonNullable<BaseTooltipProps['placement']>, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}
</script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('relative inline-flex', $attrs.class as string)"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
    @keydown="handleKeydown"
  >
    <slot :aria-describedby="visible ? tooltipId : undefined" />

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="visible"
        :id="tooltipId"
        role="tooltip"
        :class="cn(
          'absolute z-50 pointer-events-none whitespace-nowrap rounded-md bg-slate-900 dark:bg-slate-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg border border-slate-800 dark:border-slate-600',
          placementClasses[placement],
        )"
      >
        {{ content }}
      </div>
    </Transition>
  </div>
</template>
