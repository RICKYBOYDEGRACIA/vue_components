import{d as z,o as i,c,w as s,a as t,b as l,e as n,g as f,F as k,r as w,t as y,k as V,u as N,f as g,v as B,h as S,i as u,j as P}from"./index-CdapSEgI.js";import{_ as r}from"./BaseBadge.vue_vue_type_script_setup_true_lang-ew2DSwq6.js";import{_ as D,a as T}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const A=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseBadgeProps {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  removable?: boolean
}

const props = withDefaults(defineProps<BaseBadgeProps>(), {
  variant: 'neutral',
  size: 'md',
  dot: false,
  removable: false,
})

const emit = defineEmits<{ remove: [] }>()

const $attrs = useAttrs()

const variantClasses: Record<NonNullable<BaseBadgeProps['variant']>, string> = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  success: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  danger: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  outline: 'border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400',
}

const dotColors: Record<NonNullable<BaseBadgeProps['variant']>, string> = {
  neutral: 'bg-slate-500',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  outline: 'bg-slate-400',
}

const sizeClasses: Record<NonNullable<BaseBadgeProps['size']>, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
}

const classes = computed(() =>
  cn(
    'inline-flex items-center gap-1.5 rounded-full font-medium',
    variantClasses[props.variant],
    sizeClasses[props.size],
    $attrs.class as string,
  )
)
<\/script>

<template>
  <span v-bind="{ ...$attrs, class: undefined }" :class="classes">
    <span v-if="dot" :class="cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])" aria-hidden="true" />
    <slot />
    <button
      v-if="removable"
      type="button"
      class="ml-0.5 -mr-1 h-3.5 w-3.5 rounded-full inline-flex items-center justify-center hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
      aria-label="Remove"
      @click.stop="emit('remove')"
    >
      <svg class="h-2.5 w-2.5" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
        <path d="M6.414 5l2.293-2.293a1 1 0 00-1.414-1.414L5 3.586 2.707 1.293a1 1 0 00-1.414 1.414L3.586 5 1.293 7.293a1 1 0 001.414 1.414L5 6.414l2.293 2.293a1 1 0 001.414-1.414L6.414 5z"/>
      </svg>
    </button>
  </span>
</template>
`,L={class:"flex items-center gap-3"},O={class:"flex flex-col gap-3"},U=["value"],j={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},M={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},E={class:"flex flex-col gap-6"},F={class:"flex flex-wrap gap-2"},W={class:"flex flex-wrap gap-2"},I={class:"flex flex-wrap gap-2 items-center"},Q=z({__name:"BadgeDemo",setup(q){const d=u("primary"),m=u("md"),p=u(!1),b=u(!1),x=u(!1),v=u(["Vue 3","TypeScript","Tailwind CSS"]);function C(o){v.value=v.value.filter(e=>e!==o)}function R(){v.value=["Vue 3","TypeScript","Tailwind CSS"]}const $=P(()=>{const o=[];return d.value!=="neutral"&&o.push(`variant="${d.value}"`),m.value!=="md"&&o.push(`size="${m.value}"`),p.value&&o.push(':dot="true"'),b.value&&o.push(':removable="true" @remove="handleRemove"'),`<BaseBadge${o.length?` ${o.join(" ")}`:""}>Status</BaseBadge>`});return(o,e)=>(i(),c(T,{title:"Badge",description:"Status indicators, tags, and counters."},{preview:s(()=>[t("div",L,[x.value?(i(),f("button",{key:1,type:"button",class:"text-xs text-blue-600 dark:text-blue-400 hover:underline",onClick:e[1]||(e[1]=a=>x.value=!1)}," Restore badge ")):(i(),c(r,{key:0,variant:d.value,size:m.value,dot:p.value,removable:b.value,onRemove:e[0]||(e[0]=a=>x.value=!0)},{default:s(()=>[...e[6]||(e[6]=[n(" Status ",-1)])]),_:1},8,["variant","size","dot","removable"]))])]),knobs:s(()=>[t("div",O,[t("div",null,[e[7]||(e[7]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),g(t("select",{"onUpdate:modelValue":e[2]||(e[2]=a=>d.value=a),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(i(),f(k,null,w(["neutral","primary","success","warning","danger","outline"],a=>t("option",{key:a,value:a},y(a),9,U)),64))],512),[[B,d.value]])]),t("div",null,[e[9]||(e[9]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Size",-1)),g(t("select",{"onUpdate:modelValue":e[3]||(e[3]=a=>m.value=a),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[8]||(e[8]=[t("option",{value:"sm"},"sm",-1),t("option",{value:"md"},"md",-1)])],512),[[B,m.value]])]),t("label",j,[g(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>p.value=a),type:"checkbox",class:"rounded"},null,512),[[S,p.value]]),e[10]||(e[10]=n(" Status dot ",-1))]),t("label",M,[g(t("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>b.value=a),type:"checkbox",class:"rounded"},null,512),[[S,b.value]]),e[11]||(e[11]=n(" Removable ",-1))])])]),code:s(()=>[l(D,{usage:$.value,source:N(A),filename:"BaseBadge.vue"},null,8,["usage","source"])]),variants:s(()=>[t("div",E,[t("div",null,[e[18]||(e[18]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"All Variants",-1)),t("div",F,[l(r,{variant:"neutral"},{default:s(()=>[...e[12]||(e[12]=[n("Neutral",-1)])]),_:1}),l(r,{variant:"primary"},{default:s(()=>[...e[13]||(e[13]=[n("Primary",-1)])]),_:1}),l(r,{variant:"success"},{default:s(()=>[...e[14]||(e[14]=[n("Success",-1)])]),_:1}),l(r,{variant:"warning"},{default:s(()=>[...e[15]||(e[15]=[n("Warning",-1)])]),_:1}),l(r,{variant:"danger"},{default:s(()=>[...e[16]||(e[16]=[n("Danger",-1)])]),_:1}),l(r,{variant:"outline"},{default:s(()=>[...e[17]||(e[17]=[n("Outline",-1)])]),_:1})])]),t("div",null,[e[23]||(e[23]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"With Dot",-1)),t("div",W,[l(r,{variant:"success",dot:!0},{default:s(()=>[...e[19]||(e[19]=[n("Online",-1)])]),_:1}),l(r,{variant:"warning",dot:!0},{default:s(()=>[...e[20]||(e[20]=[n("Away",-1)])]),_:1}),l(r,{variant:"danger",dot:!0},{default:s(()=>[...e[21]||(e[21]=[n("Offline",-1)])]),_:1}),l(r,{variant:"primary",dot:!0},{default:s(()=>[...e[22]||(e[22]=[n("In Progress",-1)])]),_:1})])]),t("div",null,[e[24]||(e[24]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Removable Tags",-1)),t("div",I,[(i(!0),f(k,null,w(v.value,a=>(i(),c(r,{key:a,variant:"primary",removable:!0,onRemove:G=>C(a)},{default:s(()=>[n(y(a),1)]),_:2},1032,["onRemove"]))),128)),v.value.length<3?(i(),f("button",{key:0,type:"button",class:"text-xs text-blue-600 dark:text-blue-400 hover:underline",onClick:R}," Reset tags ")):V("",!0)])])])]),_:1}))}});export{Q as default};
