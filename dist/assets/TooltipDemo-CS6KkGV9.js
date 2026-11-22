import{d as _,l as I,J as D,D as V,o as c,g as v,m as A,b as u,w as s,n as N,u as d,t as x,k as P,G as U,p as z,i as f,c as K,a as n,F as g,r as w,e as k,f as y,s as E,v as h,j as F}from"./index-CdapSEgI.js";import{c as T,_ as M,a as S}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";import{_ as $}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";const B=_({inheritAttrs:!1,__name:"BaseTooltip",props:{content:{},placement:{default:"top"},delay:{default:200}},setup(p){const i=p,o=I(),l=f(!1);let a=null;const m=`tooltip-${D()}`;function r(){if(a&&clearTimeout(a),i.delay<=0){l.value=!0;return}a=setTimeout(()=>{l.value=!0,a=null},i.delay)}function e(){a&&(clearTimeout(a),a=null),l.value=!1}function t(b){b.key==="Escape"&&l.value&&e()}V(()=>{a&&clearTimeout(a)});const C={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"};return(b,L)=>(c(),v("div",z({...d(o),class:void 0},{class:d(T)("relative inline-flex",d(o).class),onMouseenter:r,onMouseleave:e,onFocusin:r,onFocusout:e,onKeydown:t}),[A(b.$slots,"default",{ariaDescribedby:l.value?m:void 0}),u(U,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:s(()=>[l.value?(c(),v("div",{key:0,id:m,role:"tooltip",class:N(d(T)("absolute z-50 pointer-events-none whitespace-nowrap rounded-md bg-slate-900 dark:bg-slate-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg border border-slate-800 dark:border-slate-600",C[p.placement]))},x(p.content),3)):P("",!0)]),_:1})],16))}}),j=`<script setup lang="ts">
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
const tooltipId = \`tooltip-\${useId()}\`

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
<\/script>

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
`,H={class:"py-6"},R={class:"flex flex-col gap-3"},G=["value"],J={class:"flex flex-wrap justify-center gap-6 py-8"},W=_({__name:"TooltipDemo",setup(p){const i=f("Helpful contextual tooltip!"),o=f("top"),l=f(200),a=["top","right","bottom","left"],m=F(()=>{const r=[`content="${i.value}"`];return o.value!=="top"&&r.push(`placement="${o.value}"`),l.value!==200&&r.push(`:delay="${l.value}"`),`<BaseTooltip ${r.join(" ")}>
  <BaseButton variant="outline">Hover or focus me</BaseButton>
</BaseTooltip>`});return(r,e)=>(c(),K(S,{title:"Tooltip",description:"Accessible hover and keyboard-focus tooltip with configurable placement and show delay."},{preview:s(()=>[n("div",H,[u(B,{content:i.value,placement:o.value,delay:l.value},{default:s(()=>[u($,{variant:"outline"},{default:s(()=>[...e[3]||(e[3]=[k("Hover or focus me",-1)])]),_:1})]),_:1},8,["content","placement","delay"])])]),knobs:s(()=>[n("div",R,[n("div",null,[e[4]||(e[4]=n("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Content",-1)),y(n("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),type:"text",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[E,i.value]])]),n("div",null,[e[5]||(e[5]=n("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Placement",-1)),y(n("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(c(),v(g,null,w(a,t=>n("option",{key:t,value:t},x(t),9,G)),64))],512),[[h,o.value]])]),n("div",null,[e[7]||(e[7]=n("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Delay (ms)",-1)),y(n("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[6]||(e[6]=[n("option",{value:0},"0ms (Instant)",-1),n("option",{value:200},"200ms",-1),n("option",{value:500},"500ms",-1)])],512),[[h,l.value,void 0,{number:!0}]])])])]),code:s(()=>[u(M,{usage:m.value,source:d(j),filename:"BaseTooltip.vue"},null,8,["usage","source"])]),variants:s(()=>[n("div",J,[(c(),v(g,null,w(a,t=>u(B,{key:t,content:`${t} tooltip`,placement:t,delay:100},{default:s(()=>[u($,{variant:"outline",size:"sm",class:"capitalize"},{default:s(()=>[k(x(t),1)]),_:2},1024)]),_:2},1032,["content","placement"])),64))])]),_:1}))}});export{W as default};
