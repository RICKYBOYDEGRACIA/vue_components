import{d as h,l as w,o as f,g as y,p as $,u as b,j as m,c as B,w as c,a as e,b as l,f as v,v as S,s as g,h as V,e as A,i as x}from"./index-CdapSEgI.js";import{c as C,_,a as P}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const n=h({inheritAttrs:!1,__name:"BaseSkeleton",props:{variant:{default:"text"},width:{},height:{},animated:{type:Boolean,default:!0}},setup(u){const a=u,i=w(),s=m(()=>C("bg-slate-200 dark:bg-slate-700",a.animated&&"animate-pulse",a.variant==="text"&&"rounded h-4",a.variant==="circular"&&"rounded-full",a.variant==="rectangular"&&"rounded-lg",i.class));return(d,p)=>(f(),y("div",$({...b(i),class:void 0},{class:s.value,style:{width:u.width,height:u.height},"aria-hidden":"true"}),null,16))}}),U=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
  animated?: boolean
}

const props = withDefaults(defineProps<BaseSkeletonProps>(), {
  variant: 'text',
  animated: true,
})

const $attrs = useAttrs()

const classes = computed(() =>
  cn(
    'bg-slate-200 dark:bg-slate-700',
    props.animated && 'animate-pulse',
    props.variant === 'text' && 'rounded h-4',
    props.variant === 'circular' && 'rounded-full',
    props.variant === 'rectangular' && 'rounded-lg',
    $attrs.class as string,
  )
)
<\/script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="classes"
    :style="{ width: width, height: height }"
    aria-hidden="true"
  />
</template>
`,D={class:"flex flex-col gap-3"},M={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},N={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},T={class:"space-y-2.5 max-w-sm"},j={class:"max-w-sm space-y-3 p-4 border border-slate-200 dark:border-slate-800 rounded-xl"},H={class:"flex items-center gap-3"},L={class:"flex-1 space-y-2"},W=h({__name:"SkeletonDemo",setup(u){const a=x("text"),i=x(!0),s=x("240px"),d=x("20px"),p=m(()=>a.value==="circular"?s.value:d.value),k=m(()=>{const o=[`variant="${a.value}"`];return s.value&&o.push(`width="${s.value}"`),p.value&&o.push(`height="${p.value}"`),i.value||o.push(':animated="false"'),`<BaseSkeleton ${o.join(" ")} />`});return(o,t)=>(f(),B(P,{title:"Skeleton",description:"Loading placeholders matching content layout."},{preview:c(()=>[l(n,{variant:a.value,width:s.value,height:p.value,animated:i.value},null,8,["variant","width","height","animated"])]),knobs:c(()=>[e("div",D,[e("div",null,[t[6]||(t[6]=e("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),v(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",onChange:t[1]||(t[1]=r=>{a.value==="circular"?(s.value="56px",d.value="56px"):a.value==="rectangular"?(s.value="240px",d.value="96px"):(s.value="240px",d.value="16px")})},[...t[5]||(t[5]=[e("option",{value:"text"},"text",-1),e("option",{value:"circular"},"circular",-1),e("option",{value:"rectangular"},"rectangular",-1)])],544),[[S,a.value]])]),e("div",null,[t[7]||(t[7]=e("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Width",-1)),v(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.value=r),type:"text",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[g,s.value]])]),e("div",null,[t[8]||(t[8]=e("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Height",-1)),v(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>d.value=r),type:"text",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[g,d.value]])]),e("label",M,[v(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>i.value=r),type:"checkbox",class:"rounded"},null,512),[[V,i.value]]),t[9]||(t[9]=A(" Animated pulse ",-1))])])]),code:c(()=>[l(_,{usage:k.value,source:b(U),filename:"BaseSkeleton.vue"},null,8,["usage","source"])]),variants:c(()=>[e("div",N,[e("div",null,[t[10]||(t[10]=e("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Text Lines",-1)),e("div",T,[l(n,{variant:"text",width:"60%"}),l(n,{variant:"text"}),l(n,{variant:"text",width:"80%"})])]),e("div",null,[t[11]||(t[11]=e("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Card Skeleton",-1)),e("div",j,[e("div",H,[l(n,{variant:"circular",width:"40px",height:"40px"}),e("div",L,[l(n,{variant:"text",width:"50%"}),l(n,{variant:"text",width:"30%"})])]),l(n,{variant:"rectangular",height:"120px"}),l(n,{variant:"text"}),l(n,{variant:"text",width:"70%"})])])])]),_:1}))}});export{W as default};
