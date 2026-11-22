import{d as C,o as p,c as z,w as n,a as t,b as a,e as l,u as h,f as b,g,F as k,r as c,t as w,v as y,h as x,n as V,i as v,j as $}from"./index-CdapSEgI.js";import{_ as o}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";import{_ as M,a as S}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const D=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon'
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  block?: boolean
  as?: 'button' | 'a'
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  loading: false,
  disabled: false,
  block: false,
  as: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const $attrs = useAttrs()

const variantClasses: Record<NonNullable<BaseButtonProps['variant']>, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
  outline:
    'border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800',
  ghost:
    'bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:bg-red-500 dark:hover:bg-red-600 shadow-sm',
  link: 'bg-transparent text-blue-600 dark:text-blue-400 hover:underline p-0 h-auto',
}

const sizeClasses: Record<NonNullable<BaseButtonProps['size']>, string> = {
  xs: 'px-2.5 py-1 text-xs rounded-md gap-1',
  sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
  md: 'px-4 py-2 text-sm rounded-lg gap-2',
  lg: 'px-5 py-2.5 text-base rounded-lg gap-2',
  icon: 'p-2 rounded-lg',
}

const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.block && 'w-full',
    (props.disabled || props.loading) && 'opacity-50 pointer-events-none',
    $attrs.class as string,
  )
)

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
<\/script>

<template>
  <component
    :is="as"
    v-bind="{ ...$attrs, class: undefined }"
    :type="as === 'button' ? type : undefined"
    :class="classes"
    :disabled="as === 'button' ? (disabled || loading) : undefined"
    :aria-busy="loading || undefined"
    :aria-disabled="disabled || loading || undefined"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>

    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>
`,j={key:0,class:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},N={key:1},P={class:"flex flex-col gap-3"},L=["value"],E=["value"],U={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},A={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},F={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},H={class:"flex flex-col gap-6"},O={class:"flex flex-wrap items-center gap-3"},R={class:"flex flex-wrap items-center gap-3"},G={class:"flex flex-wrap items-center gap-3"},J=C({__name:"ButtonDemo",setup(I){const d=v("primary"),i=v("md"),m=v(!1),f=v(!1),u=v(!1),B=$(()=>{const r=[];d.value!=="primary"&&r.push(`variant="${d.value}"`),i.value!=="md"&&r.push(`size="${i.value}"`),m.value&&r.push(':loading="true"'),f.value&&r.push(':disabled="true"'),u.value&&r.push(':block="true"');const e=r.length?` ${r.join(" ")}`:"",s=i.value==="icon"?`
  <svg class="h-4 w-4" ... />
`:"Click me";return`<BaseButton${e}>${s}</BaseButton>`});return(r,e)=>(p(),z(S,{title:"Button",description:"Primary trigger for user actions, form submissions, and navigation."},{preview:n(()=>[t("div",{class:V(u.value?"w-full":"")},[a(o,{variant:d.value,size:i.value,loading:m.value,disabled:f.value,block:u.value},{default:n(()=>[i.value==="icon"?(p(),g("svg",j,[...e[5]||(e[5]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1)])])):(p(),g("span",N,"Click me"))]),_:1},8,["variant","size","loading","disabled","block"])],2)]),knobs:n(()=>[t("div",P,[t("div",null,[e[6]||(e[6]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),b(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>d.value=s),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(p(),g(k,null,c(["primary","secondary","outline","ghost","danger","link"],s=>t("option",{key:s,value:s},w(s),9,L)),64))],512),[[y,d.value]])]),t("div",null,[e[7]||(e[7]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Size",-1)),b(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>i.value=s),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(p(),g(k,null,c(["xs","sm","md","lg","icon"],s=>t("option",{key:s,value:s},w(s),9,E)),64))],512),[[y,i.value]])]),t("label",U,[b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),type:"checkbox",class:"rounded"},null,512),[[x,m.value]]),e[8]||(e[8]=l(" Loading ",-1))]),t("label",A,[b(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>f.value=s),type:"checkbox",class:"rounded"},null,512),[[x,f.value]]),e[9]||(e[9]=l(" Disabled ",-1))]),t("label",F,[b(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>u.value=s),type:"checkbox",class:"rounded"},null,512),[[x,u.value]]),e[10]||(e[10]=l(" Full width (block) ",-1))])])]),code:n(()=>[a(M,{usage:B.value,source:h(D),filename:"BaseButton.vue"},null,8,["usage","source"])]),variants:n(()=>[t("div",H,[t("div",null,[e[17]||(e[17]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Variants",-1)),t("div",O,[a(o,{variant:"primary"},{default:n(()=>[...e[11]||(e[11]=[l("Primary",-1)])]),_:1}),a(o,{variant:"secondary"},{default:n(()=>[...e[12]||(e[12]=[l("Secondary",-1)])]),_:1}),a(o,{variant:"outline"},{default:n(()=>[...e[13]||(e[13]=[l("Outline",-1)])]),_:1}),a(o,{variant:"ghost"},{default:n(()=>[...e[14]||(e[14]=[l("Ghost",-1)])]),_:1}),a(o,{variant:"danger"},{default:n(()=>[...e[15]||(e[15]=[l("Danger",-1)])]),_:1}),a(o,{variant:"link"},{default:n(()=>[...e[16]||(e[16]=[l("Link",-1)])]),_:1})])]),t("div",null,[e[23]||(e[23]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Sizes",-1)),t("div",R,[a(o,{size:"xs"},{default:n(()=>[...e[18]||(e[18]=[l("Extra Small",-1)])]),_:1}),a(o,{size:"sm"},{default:n(()=>[...e[19]||(e[19]=[l("Small",-1)])]),_:1}),a(o,{size:"md"},{default:n(()=>[...e[20]||(e[20]=[l("Medium",-1)])]),_:1}),a(o,{size:"lg"},{default:n(()=>[...e[21]||(e[21]=[l("Large",-1)])]),_:1}),a(o,{size:"icon","aria-label":"Add item"},{default:n(()=>[...e[22]||(e[22]=[t("svg",{class:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])]),_:1})])]),t("div",null,[e[30]||(e[30]=t("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"With Icons & States",-1)),t("div",G,[a(o,{variant:"primary"},{prefix:n(()=>[...e[24]||(e[24]=[t("svg",{class:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1)])]),default:n(()=>[e[25]||(e[25]=l(" Download ",-1))]),_:1}),a(o,{variant:"outline"},{suffix:n(()=>[...e[26]||(e[26]=[t("svg",{class:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1)])]),default:n(()=>[e[27]||(e[27]=l(" Continue ",-1))]),_:1}),a(o,{loading:!0},{default:n(()=>[...e[28]||(e[28]=[l("Loading",-1)])]),_:1}),a(o,{disabled:!0},{default:n(()=>[...e[29]||(e[29]=[l("Disabled",-1)])]),_:1})])])])]),_:1}))}});export{J as default};
