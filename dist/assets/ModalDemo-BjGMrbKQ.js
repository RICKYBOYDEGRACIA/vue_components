import{d as D,x as U,l as V,J as j,B as H,C as S,A as N,D as q,o as p,c as A,q as K,b as k,w as d,g as y,a as t,G as R,p as X,u as w,m as T,k as g,z as G,i as v,t as $,f as E,F as J,r as Q,v as W,h as M,e as f,j as Y}from"./index-CdapSEgI.js";import{c as Z,_,a as ee}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";const ne=["aria-labelledby","aria-describedby"],se={key:0,class:"flex items-start justify-between gap-4 px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"},ae={class:"flex-1 overflow-y-auto px-6 py-5"},le={key:1,class:"shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800"},oe=D({inheritAttrs:!1,__name:"BaseModal",props:G({title:{},description:{},size:{default:"md"},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(i){const m=i,l=U(i,"open"),b=V(),r=v(null),c=v(null),x=v(!1);let a=null,e=!1;const n=j(),L=`modal-title-${n}`,z=`modal-desc-${n}`,F={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-2xl",full:"max-w-full mx-4"};function P(){a&&clearTimeout(a),x.value=!1,S(()=>{x.value=!0,a=setTimeout(()=>{x.value=!1,a=null},450)})}function B(){if(m.persistent){P();return}l.value=!1}function O(s){s.key==="Escape"&&l.value&&m.closeOnEsc&&B()}function I(s){if(!r.value||!l.value||s.key!=="Tab")return;const o=r.value.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!o.length)return;const u=o[0],h=o[o.length-1];s.shiftKey?(document.activeElement===u||!r.value.contains(document.activeElement))&&(s.preventDefault(),h==null||h.focus()):(document.activeElement===h||!r.value.contains(document.activeElement))&&(s.preventDefault(),u==null||u.focus())}return H(l,async s=>{var o;if(s){c.value=document.activeElement,document.body.style.overflow="hidden",e=!0,await S();const u=(o=r.value)==null?void 0:o.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');u==null||u.focus()}else e&&(document.body.style.overflow="",e=!1),c.value instanceof HTMLElement&&c.value.focus(),c.value=null}),N(()=>{document.addEventListener("keydown",O),document.addEventListener("keydown",I)}),q(()=>{document.removeEventListener("keydown",O),document.removeEventListener("keydown",I),a&&clearTimeout(a),e&&(document.body.style.overflow="",e=!1)}),(s,o)=>(p(),A(K,{to:"body"},[k(R,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:d(()=>[l.value?(p(),y("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4","aria-modal":"true",role:"dialog","aria-labelledby":i.title?L:void 0,"aria-describedby":i.description?z:void 0},[t("div",{class:"absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm",onClick:o[0]||(o[0]=u=>i.closeOnBackdrop&&B())}),k(R,{appear:"","enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:d(()=>[l.value?(p(),y("div",X({key:0,ref_key:"modalRef",ref:r,class:w(Z)("relative z-10 w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]",F[i.size],x.value&&"animate-shake",w(b).class)},{...w(b),class:void 0}),[i.title||s.$slots.header?(p(),y("div",se,[T(s.$slots,"header",{},()=>[t("div",null,[t("h2",{id:L,class:"text-base font-semibold text-slate-900 dark:text-slate-100"},$(i.title),1),i.description?(p(),y("p",{key:0,id:z,class:"text-sm text-slate-500 dark:text-slate-400 mt-0.5"},$(i.description),1)):g("",!0)])],!0),t("button",{type:"button",class:"shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-0.5","aria-label":"Close dialog",onClick:B},[...o[1]||(o[1]=[t("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])])):g("",!0),t("div",ae,[T(s.$slots,"default",{},void 0,!0)]),s.$slots.footer?(p(),y("div",le,[T(s.$slots,"footer",{},void 0,!0)])):g("",!0)],16)):g("",!0)]),_:3})],8,ne)):g("",!0)]),_:3})]))}}),ie=te(oe,[["__scopeId","data-v-ced56ec8"]]),re=`<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseModalProps {
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<BaseModalProps>(), {
  size: 'md',
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
})

const open = defineModel<boolean>('open', { default: false })
const $attrs = useAttrs()

const modalRef = ref<HTMLDivElement | null>(null)
const triggerEl = ref<Element | null>(null)
const shaking = ref(false)
let shakeTimer: ReturnType<typeof setTimeout> | null = null
let lockedBody = false

const uid = useId()
const titleId = \`modal-title-\${uid}\`
const descId = \`modal-desc-\${uid}\`

const sizeClasses: Record<NonNullable<BaseModalProps['size']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
  full: 'max-w-full mx-4',
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
  if (!modalRef.value || !open.value || e.key !== 'Tab') return
  const focusableEls = modalRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )
  if (!focusableEls.length) return
  const first = focusableEls[0]
  const last = focusableEls[focusableEls.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first || !modalRef.value.contains(document.activeElement)) {
      e.preventDefault()
      last?.focus()
    }
  } else {
    if (document.activeElement === last || !modalRef.value.contains(document.activeElement)) {
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
    const firstFocusable = modalRef.value?.querySelector<HTMLElement>(
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
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
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
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            ref="modalRef"
            :class="cn(
              'relative z-10 w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]',
              sizeClasses[size],
              shaking && 'animate-shake',
              $attrs.class as string,
            )"
            v-bind="{ ...$attrs, class: undefined }"
          >
            <!-- Header -->
            <div
              v-if="title || $slots.header"
              class="flex items-start justify-between gap-4 px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"
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
                aria-label="Close dialog"
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

            <!-- Body -->
            <div class="flex-1 overflow-y-auto px-6 py-5">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800"
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
`,de={class:"flex justify-end gap-2"},ce={class:"flex flex-col gap-3"},ue=["value"],fe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},me={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},pe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},ye=D({__name:"ModalDemo",setup(i){const m=v(!1),l=v("md"),b=v(!1),r=v(!0),c=v(!0),x=Y(()=>{const a=['v-model:open="open"','title="Example Modal"','description="This is a sample modal dialog."'];return l.value!=="md"&&a.push(`size="${l.value}"`),b.value&&a.push(':persistent="true"'),r.value||a.push(':close-on-backdrop="false"'),c.value||a.push(':close-on-esc="false"'),`<BaseModal
  ${a.join(`
  `)}
>
  <p>Modal content goes here.</p>
  <template #footer>
    <BaseButton variant="outline" @click="open = false">Cancel</BaseButton>
    <BaseButton @click="open = false">Confirm</BaseButton>
  </template>
</BaseModal>`});return(a,e)=>(p(),A(ee,{title:"Modal",description:"Accessible dialog with focus trap, scroll lock, keyboard Escape support, and persistent shake feedback."},{preview:d(()=>[k(C,{onClick:e[0]||(e[0]=n=>m.value=!0)},{default:d(()=>[...e[8]||(e[8]=[f("Open Modal",-1)])]),_:1}),k(ie,{open:m.value,"onUpdate:open":e[3]||(e[3]=n=>m.value=n),title:"Example Modal",description:"This is a sample modal dialog.",size:l.value,persistent:b.value,"close-on-backdrop":r.value,"close-on-esc":c.value},{footer:d(()=>[t("div",de,[k(C,{variant:"outline",onClick:e[1]||(e[1]=n=>m.value=!1)},{default:d(()=>[...e[9]||(e[9]=[f("Cancel",-1)])]),_:1}),k(C,{onClick:e[2]||(e[2]=n=>m.value=!1)},{default:d(()=>[...e[10]||(e[10]=[f("Confirm",-1)])]),_:1})])]),default:d(()=>[e[11]||(e[11]=t("p",{class:"text-sm text-slate-600 dark:text-slate-400"},[f(" Modal content goes here. Try pressing "),t("kbd",{class:"px-1.5 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"},"Tab"),f(" to test the focus trap, or enable "),t("strong",null,"Persistent"),f(" to see the shake animation on outside click. ")],-1))]),_:1},8,["open","size","persistent","close-on-backdrop","close-on-esc"])]),knobs:d(()=>[t("div",ce,[t("div",null,[e[12]||(e[12]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Size",-1)),E(t("select",{"onUpdate:modelValue":e[4]||(e[4]=n=>l.value=n),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(p(),y(J,null,Q(["sm","md","lg","xl","full"],n=>t("option",{key:n,value:n},$(n),9,ue)),64))],512),[[W,l.value]])]),t("label",fe,[E(t("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>b.value=n),type:"checkbox",class:"rounded"},null,512),[[M,b.value]]),e[13]||(e[13]=f(" Persistent (shake) ",-1))]),t("label",me,[E(t("input",{"onUpdate:modelValue":e[6]||(e[6]=n=>r.value=n),type:"checkbox",class:"rounded"},null,512),[[M,r.value]]),e[14]||(e[14]=f(" Close on backdrop ",-1))]),t("label",pe,[E(t("input",{"onUpdate:modelValue":e[7]||(e[7]=n=>c.value=n),type:"checkbox",class:"rounded"},null,512),[[M,c.value]]),e[15]||(e[15]=f(" Close on Escape ",-1))])])]),code:d(()=>[k(_,{usage:x.value,source:w(re),filename:"BaseModal.vue"},null,8,["usage","source"])]),_:1}))}});export{ye as default};
