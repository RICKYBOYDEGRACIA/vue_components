import{d as I,l as $,o as l,c as B,a as i,b as u,T as L,w as d,g as c,F as z,r as A,n as w,u as o,t as h,k as _,p as D,q as P,i as T,f as y,v as C,e as v,j as V}from"./index-CdapSEgI.js";import{c as k,u as S,_ as N,a as H}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";import{_ as f}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";const O=["aria-label","onMouseenter","onMouseleave"],E={class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},F={key:0,"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},G={key:1,"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"},R={key:2,"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"},j={key:3,"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"},U={class:"flex-1 min-w-0"},W={key:0,class:"text-sm font-semibold text-slate-900 dark:text-slate-100"},Y={class:"text-sm text-slate-600 dark:text-slate-400"},q=["onClick"],g=T([]),m=new Map;function M(s){const e=m.get(s);!e||e.remaining<=0||(e.timerId&&clearTimeout(e.timerId),e.startedAt=Date.now(),e.paused=!1,e.timerId=setTimeout(()=>{x(s)},e.remaining))}function J(s){const e=m.get(s);if(!e||e.paused||!e.timerId)return;clearTimeout(e.timerId),e.timerId=null;const n=Date.now()-e.startedAt;e.remaining=Math.max(0,e.remaining-n),e.paused=!0}function K(s){const e=m.get(s);if(!(!e||!e.paused)){if(e.remaining<=0){x(s);return}M(s)}}function x(s){const e=m.get(s);e!=null&&e.timerId&&clearTimeout(e.timerId),m.delete(s);const n=g.value.findIndex(a=>a.id===s);n>=0&&g.value.splice(n,1)}function Q(){for(const s of m.values())s.timerId&&clearTimeout(s.timerId);m.clear(),g.value=[]}function X(){function s(e){const n=S("toast"),a=e.duration??5e3,b={...e,duration:a,id:n};return g.value.push(b),a>0&&(m.set(n,{timerId:null,remaining:a,startedAt:Date.now(),paused:!1}),M(n)),n}return{add:s,success:(e,n,a=5e3)=>s({variant:"success",message:e,title:n,duration:a}),error:(e,n,a=5e3)=>s({variant:"error",message:e,title:n,duration:a}),info:(e,n,a=5e3)=>s({variant:"info",message:e,title:n,duration:a}),warning:(e,n,a=5e3)=>s({variant:"warning",message:e,title:n,duration:a}),dismiss:x,clear:Q}}const Z=I({inheritAttrs:!1,__name:"BaseToastContainer",props:{position:{default:"top-right"}},setup(s){const e=$(),n={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4"},a={success:{container:"border-green-200 dark:border-green-800 bg-white dark:bg-slate-900",icon:"text-green-500 dark:text-green-400"},error:{container:"border-red-200 dark:border-red-800 bg-white dark:bg-slate-900",icon:"text-red-500 dark:text-red-400"},info:{container:"border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900",icon:"text-blue-500 dark:text-blue-400"},warning:{container:"border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900",icon:"text-amber-500 dark:text-amber-400"}};return(b,p)=>(l(),B(P,{to:"body"},[i("div",D({...o(e),class:void 0},{class:o(k)("fixed z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none",n[s.position],o(e).class),"aria-live":"polite","aria-label":"Notifications"}),[u(L,{"enter-active-class":"transition ease-out duration-300","enter-from-class":"opacity-0 translate-y-2 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 scale-95","move-class":"transition-all duration-300",tag:"div",class:"flex flex-col gap-2"},{default:d(()=>[(l(!0),c(z,null,A(g.value,t=>(l(),c("div",{key:t.id,class:w(o(k)("pointer-events-auto flex gap-3 items-start rounded-xl border p-4 shadow-lg",a[t.variant].container)),role:"status","aria-label":t.title||t.message,onMouseenter:r=>J(t.id),onMouseleave:r=>K(t.id)},[i("div",{class:w(o(k)("shrink-0 mt-0.5",a[t.variant].icon))},[(l(),c("svg",E,[t.variant==="success"?(l(),c("path",F)):t.variant==="error"?(l(),c("path",G)):t.variant==="info"?(l(),c("path",R)):(l(),c("path",j))]))],2),i("div",U,[t.title?(l(),c("p",W,h(t.title),1)):_("",!0),i("p",Y,h(t.message),1)]),i("button",{type:"button",class:"shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500","aria-label":"Dismiss notification",onClick:r=>x(t.id)},[...p[0]||(p[0]=[i("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])],8,q)],42,O))),128))]),_:1})],16)]))}}),tt=`<script lang="ts">
import { ref } from 'vue'
import { useId } from '@/lib/utils'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface Toast {
  id: string
  variant: ToastVariant
  title?: string
  message: string
  duration: number
}

export type ToastOptions = Omit<Toast, 'id' | 'duration'> & Partial<Pick<Toast, 'duration'>>

interface ToastTimerState {
  timerId: ReturnType<typeof setTimeout> | null
  remaining: number
  startedAt: number
  paused: boolean
}

const toasts = ref<Toast[]>([])
const timers = new Map<string, ToastTimerState>()

function startTimer(id: string) {
  const state = timers.get(id)
  if (!state || state.remaining <= 0) return
  if (state.timerId) clearTimeout(state.timerId)
  state.startedAt = Date.now()
  state.paused = false
  state.timerId = setTimeout(() => {
    dismiss(id)
  }, state.remaining)
}

function pauseTimer(id: string) {
  const state = timers.get(id)
  if (!state || state.paused || !state.timerId) return
  clearTimeout(state.timerId)
  state.timerId = null
  const elapsed = Date.now() - state.startedAt
  state.remaining = Math.max(0, state.remaining - elapsed)
  state.paused = true
}

function resumeTimer(id: string) {
  const state = timers.get(id)
  if (!state || !state.paused) return
  if (state.remaining <= 0) {
    dismiss(id)
    return
  }
  startTimer(id)
}

function dismiss(id: string) {
  const state = timers.get(id)
  if (state?.timerId) {
    clearTimeout(state.timerId)
  }
  timers.delete(id)
  const idx = toasts.value.findIndex((t) => t.id === id)
  if (idx >= 0) toasts.value.splice(idx, 1)
}

function clear() {
  for (const state of timers.values()) {
    if (state.timerId) clearTimeout(state.timerId)
  }
  timers.clear()
  toasts.value = []
}

export function useToast() {
  function add(options: ToastOptions): string {
    const id = useId('toast')
    const duration = options.duration ?? 5000
    const toast: Toast = { ...options, duration, id }
    toasts.value.push(toast)

    if (duration > 0) {
      timers.set(id, {
        timerId: null,
        remaining: duration,
        startedAt: Date.now(),
        paused: false,
      })
      startTimer(id)
    }

    return id
  }

  return {
    add,
    success: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'success', message, title, duration }),
    error: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'error', message, title, duration }),
    info: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'info', message, title, duration }),
    warning: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'warning', message, title, duration }),
    dismiss,
    clear,
  }
}
export interface BaseToastContainerProps {
  position?: ToastPosition
}
<\/script>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

withDefaults(defineProps<BaseToastContainerProps>(), {
  position: 'top-right',
})

const $attrs = useAttrs()

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
}

const variantConfig: Record<ToastVariant, { container: string; icon: string }> = {
  success: {
    container: 'border-green-200 dark:border-green-800 bg-white dark:bg-slate-900',
    icon: 'text-green-500 dark:text-green-400',
  },
  error: {
    container: 'border-red-200 dark:border-red-800 bg-white dark:bg-slate-900',
    icon: 'text-red-500 dark:text-red-400',
  },
  info: {
    container: 'border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900',
    icon: 'text-blue-500 dark:text-blue-400',
  },
  warning: {
    container: 'border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900',
    icon: 'text-amber-500 dark:text-amber-400',
  },
}
<\/script>

<template>
  <Teleport to="body">
    <div
      v-bind="{ ...$attrs, class: undefined }"
      :class="cn(
        'fixed z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none',
        positionClasses[position],
        $attrs.class as string,
      )"
      aria-live="polite"
      aria-label="Notifications"
    >
      <TransitionGroup
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 scale-95"
        move-class="transition-all duration-300"
        tag="div"
        class="flex flex-col gap-2"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="cn(
            'pointer-events-auto flex gap-3 items-start rounded-xl border p-4 shadow-lg',
            variantConfig[toast.variant].container,
          )"
          role="status"
          :aria-label="toast.title || toast.message"
          @mouseenter="pauseTimer(toast.id)"
          @mouseleave="resumeTimer(toast.id)"
        >
          <div :class="cn('shrink-0 mt-0.5', variantConfig[toast.variant].icon)">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                v-if="toast.variant === 'success'"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
              <path
                v-else-if="toast.variant === 'error'"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
              <path
                v-else-if="toast.variant === 'info'"
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
              <path
                v-else
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p v-if="toast.title" class="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {{ toast.title }}
            </p>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ toast.message }}</p>
          </div>
          <button
            type="button"
            class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Dismiss notification"
            @click="dismiss(toast.id)"
          >
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
`,et={class:"flex flex-wrap justify-center gap-3"},nt={class:"flex flex-col gap-3"},rt=I({__name:"ToastDemo",setup(s){const e=X(),n=T("top-right"),a=T(5e3),b=V(()=>{const p=n.value!=="top-right"?` position="${n.value}"`:"";return`<script setup lang="ts">
import BaseToastContainer, { useToast } from '@/components/ui/BaseToastContainer.vue'

const toast = useToast()
function notify() {
  toast.success('Changes saved!', 'Success'${a.value!==5e3?`, ${a.value}`:""})
}
<\/script>

<template>
  <BaseButton @click="notify">Show Toast</BaseButton>
  <BaseToastContainer${p} />
</template>`});return(p,t)=>(l(),c(z,null,[u(H,{title:"Toast",description:"Non-blocking ephemeral notifications with hover pause and configurable positioning."},{preview:d(()=>[i("div",et,[u(f,{variant:"primary",onClick:t[0]||(t[0]=r=>o(e).success("Your changes have been saved.","Success",a.value))},{default:d(()=>[...t[7]||(t[7]=[v(" Success Toast ",-1)])]),_:1}),u(f,{variant:"danger",onClick:t[1]||(t[1]=r=>o(e).error("Failed to save changes. Please retry.","Error",a.value))},{default:d(()=>[...t[8]||(t[8]=[v(" Error Toast ",-1)])]),_:1}),u(f,{variant:"outline",onClick:t[2]||(t[2]=r=>o(e).info("A new software update is available.","Info",a.value))},{default:d(()=>[...t[9]||(t[9]=[v(" Info Toast ",-1)])]),_:1}),u(f,{variant:"secondary",onClick:t[3]||(t[3]=r=>o(e).warning("Your session will expire in 5 minutes.","Warning",a.value))},{default:d(()=>[...t[10]||(t[10]=[v(" Warning Toast ",-1)])]),_:1}),u(f,{variant:"ghost",onClick:t[4]||(t[4]=r=>o(e).clear())},{default:d(()=>[...t[11]||(t[11]=[v(" Clear All ",-1)])]),_:1})])]),knobs:d(()=>[i("div",nt,[i("div",null,[t[13]||(t[13]=i("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Position",-1)),y(i("select",{"onUpdate:modelValue":t[5]||(t[5]=r=>n.value=r),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...t[12]||(t[12]=[i("option",{value:"top-right"},"top-right",-1),i("option",{value:"top-left"},"top-left",-1),i("option",{value:"bottom-right"},"bottom-right",-1),i("option",{value:"bottom-left"},"bottom-left",-1)])],512),[[C,n.value]])]),i("div",null,[t[15]||(t[15]=i("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"}," Auto-dismiss (ms) ",-1)),y(i("select",{"onUpdate:modelValue":t[6]||(t[6]=r=>a.value=r),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...t[14]||(t[14]=[i("option",{value:2e3},"2000ms (2s)",-1),i("option",{value:5e3},"5000ms (5s)",-1),i("option",{value:8e3},"8000ms (8s)",-1),i("option",{value:0},"0ms (Persistent)",-1)])],512),[[C,a.value,void 0,{number:!0}]])])])]),code:d(()=>[u(N,{usage:b.value,source:o(tt),filename:"BaseToastContainer.vue"},null,8,["usage","source"])]),variants:d(()=>[...t[16]||(t[16]=[i("p",{class:"text-sm text-slate-600 dark:text-slate-400"}," Click any button in the preview above to trigger stacked toasts. Hovering over a toast pauses its auto-dismiss timer until your cursor leaves. ",-1)])]),_:1}),u(Z,{position:n.value},null,8,["position"])],64))}});export{rt as default};
