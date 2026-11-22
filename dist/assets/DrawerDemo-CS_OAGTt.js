import{d as R,x as j,l as N,J as U,B as V,C as O,A as q,D as z,o as k,c as P,q as H,b as u,w as l,g,a as t,G as S,p as K,u as h,m as B,k as w,z as X,i as x,t as $,f as I,v as G,h as J,e as f,j as Q}from"./index-CdapSEgI.js";import{c as W,_ as Y,a as Z}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as b}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";const ee=["aria-labelledby","aria-describedby"],te={class:"flex items-start justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"},ne={class:"flex-1 overflow-y-auto px-5 py-4"},ae={key:0,class:"shrink-0 px-5 py-4 border-t border-slate-200 dark:border-slate-800"},se=R({inheritAttrs:!1,__name:"BaseDrawer",props:X({title:{},description:{},side:{default:"right"},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(o){const v=o,a=j(o,"open"),p=N(),i=x(null),m=x(null),d=x(!1);let e=null,n=!1;const C=U(),D=`drawer-title-${C}`,L=`drawer-desc-${C}`,E={right:{panel:"inset-y-0 right-0 w-full max-w-md border-l",enterFrom:"translate-x-full",leaveTo:"translate-x-full"},left:{panel:"inset-y-0 left-0 w-full max-w-md border-r",enterFrom:"-translate-x-full",leaveTo:"-translate-x-full"},top:{panel:"inset-x-0 top-0 w-full max-h-[80vh] border-b",enterFrom:"-translate-y-full",leaveTo:"-translate-y-full"},bottom:{panel:"inset-x-0 bottom-0 w-full max-h-[80vh] border-t",enterFrom:"translate-y-full",leaveTo:"translate-y-full"}};function A(){e&&clearTimeout(e),d.value=!1,O(()=>{d.value=!0,e=setTimeout(()=>{d.value=!1,e=null},450)})}function T(){if(v.persistent){A();return}a.value=!1}function F(s){s.key==="Escape"&&a.value&&v.closeOnEsc&&T()}function M(s){if(!i.value||!a.value||s.key!=="Tab")return;const r=i.value.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!r.length)return;const c=r[0],y=r[r.length-1];s.shiftKey?(document.activeElement===c||!i.value.contains(document.activeElement))&&(s.preventDefault(),y==null||y.focus()):(document.activeElement===y||!i.value.contains(document.activeElement))&&(s.preventDefault(),c==null||c.focus())}return V(a,async s=>{var r;if(s){m.value=document.activeElement,document.body.style.overflow="hidden",n=!0,await O();const c=(r=i.value)==null?void 0:r.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');c==null||c.focus()}else n&&(document.body.style.overflow="",n=!1),m.value instanceof HTMLElement&&m.value.focus(),m.value=null}),q(()=>{document.addEventListener("keydown",F),document.addEventListener("keydown",M)}),z(()=>{document.removeEventListener("keydown",F),document.removeEventListener("keydown",M),e&&clearTimeout(e),n&&(document.body.style.overflow="",n=!1)}),(s,r)=>(k(),P(H,{to:"body"},[u(S,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[a.value?(k(),g("div",{key:0,class:"fixed inset-0 z-50",role:"dialog","aria-modal":"true","aria-labelledby":o.title?D:void 0,"aria-describedby":o.description?L:void 0},[t("div",{class:"absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm",onClick:r[0]||(r[0]=c=>o.closeOnBackdrop&&T())}),u(S,{appear:"","enter-active-class":"transition ease-out duration-300","enter-from-class":E[o.side].enterFrom,"enter-to-class":"translate-x-0 translate-y-0","leave-active-class":"transition ease-in duration-200","leave-from-class":"translate-x-0 translate-y-0","leave-to-class":E[o.side].leaveTo},{default:l(()=>[a.value?(k(),g("div",K({key:0,ref_key:"drawerRef",ref:i,class:h(W)("absolute bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl flex flex-col overflow-hidden",E[o.side].panel,d.value&&"animate-shake",h(p).class)},{...h(p),class:void 0}),[t("div",te,[B(s.$slots,"header",{},()=>[t("div",null,[t("h2",{id:D,class:"text-base font-semibold text-slate-900 dark:text-slate-100"},$(o.title),1),o.description?(k(),g("p",{key:0,id:L,class:"text-sm text-slate-500 dark:text-slate-400 mt-0.5"},$(o.description),1)):w("",!0)])],!0),t("button",{type:"button",class:"shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-0.5","aria-label":"Close drawer",onClick:T},[...r[1]||(r[1]=[t("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])]),t("div",ne,[B(s.$slots,"default",{},void 0,!0)]),s.$slots.footer?(k(),g("div",ae,[B(s.$slots,"footer",{},void 0,!0)])):w("",!0)],16)):w("",!0)]),_:3},8,["enter-from-class","leave-to-class"])],8,ee)):w("",!0)]),_:3})]))}}),le=_(se,[["__scopeId","data-v-f23b7457"]]),oe=`<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseDrawerProps {
  title?: string
  description?: string
  side?: 'left' | 'right' | 'top' | 'bottom'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<BaseDrawerProps>(), {
  side: 'right',
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
})

const open = defineModel<boolean>('open', { default: false })
const $attrs = useAttrs()

const drawerRef = ref<HTMLDivElement | null>(null)
const triggerEl = ref<Element | null>(null)
const shaking = ref(false)
let shakeTimer: ReturnType<typeof setTimeout> | null = null
let lockedBody = false

const uid = useId()
const titleId = \`drawer-title-\${uid}\`
const descId = \`drawer-desc-\${uid}\`

const sideClasses: Record<
  NonNullable<BaseDrawerProps['side']>,
  { panel: string; enterFrom: string; leaveTo: string }
> = {
  right: {
    panel: 'inset-y-0 right-0 w-full max-w-md border-l',
    enterFrom: 'translate-x-full',
    leaveTo: 'translate-x-full',
  },
  left: {
    panel: 'inset-y-0 left-0 w-full max-w-md border-r',
    enterFrom: '-translate-x-full',
    leaveTo: '-translate-x-full',
  },
  top: {
    panel: 'inset-x-0 top-0 w-full max-h-[80vh] border-b',
    enterFrom: '-translate-y-full',
    leaveTo: '-translate-y-full',
  },
  bottom: {
    panel: 'inset-x-0 bottom-0 w-full max-h-[80vh] border-t',
    enterFrom: 'translate-y-full',
    leaveTo: 'translate-y-full',
  },
}

function triggerShake() {
  if (shakeTimer) clearTimeout(shakeTimer)
  shaking.value = false
  nextTick(() => {
    shaking.value = true
    shakeTimer = setTimeout(() => {
      shaking.value = false
      shakeTimer = null
    }, 450)
  })
}

function attemptClose() {
  if (props.persistent) {
    triggerShake()
    return
  }
  open.value = false
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value && props.closeOnEsc) {
    attemptClose()
  }
}

function trapFocus(e: KeyboardEvent) {
  if (!drawerRef.value || !open.value || e.key !== 'Tab') return
  const focusableEls = drawerRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )
  if (!focusableEls.length) return
  const first = focusableEls[0]
  const last = focusableEls[focusableEls.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first || !drawerRef.value.contains(document.activeElement)) {
      e.preventDefault()
      last?.focus()
    }
  } else {
    if (document.activeElement === last || !drawerRef.value.contains(document.activeElement)) {
      e.preventDefault()
      first?.focus()
    }
  }
}

watch(open, async (val) => {
  if (val) {
    triggerEl.value = document.activeElement
    document.body.style.overflow = 'hidden'
    lockedBody = true
    await nextTick()
    const firstFocusable = drawerRef.value?.querySelector<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    firstFocusable?.focus()
  } else {
    if (lockedBody) {
      document.body.style.overflow = ''
      lockedBody = false
    }
    if (triggerEl.value instanceof HTMLElement) {
      triggerEl.value.focus()
    }
    triggerEl.value = null
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  document.addEventListener('keydown', trapFocus)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
  document.removeEventListener('keydown', trapFocus)
  if (shakeTimer) clearTimeout(shakeTimer)
  if (lockedBody) {
    document.body.style.overflow = ''
    lockedBody = false
  }
})
<\/script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? titleId : undefined"
        :aria-describedby="description ? descId : undefined"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
          @click="closeOnBackdrop && attemptClose()"
        />

        <!-- Panel -->
        <Transition
          appear
          enter-active-class="transition ease-out duration-300"
          :enter-from-class="sideClasses[side].enterFrom"
          enter-to-class="translate-x-0 translate-y-0"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="translate-x-0 translate-y-0"
          :leave-to-class="sideClasses[side].leaveTo"
        >
          <div
            v-if="open"
            ref="drawerRef"
            :class="cn(
              'absolute bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl flex flex-col overflow-hidden',
              sideClasses[side].panel,
              shaking && 'animate-shake',
              $attrs.class as string,
            )"
            v-bind="{ ...$attrs, class: undefined }"
          >
            <div
              class="flex items-start justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"
            >
              <slot name="header">
                <div>
                  <h2 :id="titleId" class="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {{ title }}
                  </h2>
                  <p v-if="description" :id="descId" class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {{ description }}
                  </p>
                </div>
              </slot>
              <button
                type="button"
                class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-0.5"
                aria-label="Close drawer"
                @click="attemptClose"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-1 overflow-y-auto px-5 py-4">
              <slot />
            </div>

            <div
              v-if="$slots.footer"
              class="shrink-0 px-5 py-4 border-t border-slate-200 dark:border-slate-800"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-6px);
  }
  40%,
  80% {
    transform: translateX(6px);
  }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}
</style>
`,re={class:"flex flex-wrap justify-center gap-3"},ie={class:"space-y-3 text-sm text-slate-600 dark:text-slate-400"},de={class:"text-slate-900 dark:text-slate-100"},ue={class:"flex justify-end gap-2"},ce={class:"flex flex-col gap-3"},fe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},ke=R({__name:"DrawerDemo",setup(o){const v=x(!1),a=x("right"),p=x(!1);function i(d){a.value=d,v.value=!0}const m=Q(()=>{const d=['v-model:open="open"','title="Drawer Panel"'];return a.value!=="right"&&d.push(`side="${a.value}"`),p.value&&d.push(':persistent="true"'),`<BaseDrawer ${d.join(" ")}>
  <p>Drawer content slides in from the ${a.value}.</p>
  <template #footer>
    <BaseButton @click="open = false">Done</BaseButton>
  </template>
</BaseDrawer>`});return(d,e)=>(k(),P(Z,{title:"Drawer",description:"Slide-over panel anchored to any edge of the viewport."},{preview:l(()=>[t("div",re,[u(b,{onClick:e[0]||(e[0]=n=>i("right"))},{default:l(()=>[...e[9]||(e[9]=[f("Open Right",-1)])]),_:1}),u(b,{variant:"outline",onClick:e[1]||(e[1]=n=>i("left"))},{default:l(()=>[...e[10]||(e[10]=[f("Open Left",-1)])]),_:1}),u(b,{variant:"outline",onClick:e[2]||(e[2]=n=>i("top"))},{default:l(()=>[...e[11]||(e[11]=[f("Open Top",-1)])]),_:1}),u(b,{variant:"outline",onClick:e[3]||(e[3]=n=>i("bottom"))},{default:l(()=>[...e[12]||(e[12]=[f("Open Bottom",-1)])]),_:1})]),u(le,{open:v.value,"onUpdate:open":e[6]||(e[6]=n=>v.value=n),side:a.value,persistent:p.value,title:"Drawer Panel",description:"Secondary workflow or contextual details."},{footer:l(()=>[t("div",ue,[u(b,{variant:"outline",onClick:e[4]||(e[4]=n=>v.value=!1)},{default:l(()=>[...e[16]||(e[16]=[f("Cancel",-1)])]),_:1}),u(b,{onClick:e[5]||(e[5]=n=>v.value=!1)},{default:l(()=>[...e[17]||(e[17]=[f("Save Changes",-1)])]),_:1})])]),default:l(()=>[t("div",ie,[t("p",null,[e[13]||(e[13]=f("Drawer content slides smoothly in from the ",-1)),t("strong",de,$(a.value),1),e[14]||(e[14]=f(" edge.",-1))]),e[15]||(e[15]=t("p",null,"Focus is trapped inside the panel while open and restored to the trigger button upon closing.",-1))])]),_:1},8,["open","side","persistent"])]),knobs:l(()=>[t("div",ce,[t("div",null,[e[19]||(e[19]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Side",-1)),I(t("select",{"onUpdate:modelValue":e[7]||(e[7]=n=>a.value=n),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[18]||(e[18]=[t("option",{value:"right"},"right",-1),t("option",{value:"left"},"left",-1),t("option",{value:"top"},"top",-1),t("option",{value:"bottom"},"bottom",-1)])],512),[[G,a.value]])]),t("label",fe,[I(t("input",{"onUpdate:modelValue":e[8]||(e[8]=n=>p.value=n),type:"checkbox",class:"rounded"},null,512),[[J,p.value]]),e[20]||(e[20]=f(" Persistent (shake) ",-1))])])]),code:l(()=>[u(Y,{usage:m.value,source:h(oe),filename:"BaseDrawer.vue"},null,8,["usage","source"])]),_:1}))}});export{ke as default};
