import{d as B,l as V,o as u,g as x,m as c,k as w,n as C,u as h,a as t,p as M,j as S,c as N,w as a,b as p,f as b,F,r as P,t as U,v as A,h as g,e as k,I as D,i as v}from"./index-CdapSEgI.js";import{c as $,_ as H,a as j}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const T={key:0,class:"overflow-hidden rounded-t-xl -mx-0 -mt-0"},f=B({inheritAttrs:!1,__name:"BaseCard",props:{padding:{default:"md"},hoverable:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},setup(m){const o=m,l=V(),d={none:"",sm:"p-3",md:"p-5",lg:"p-8"},n=S(()=>$("bg-white dark:bg-slate-900 rounded-xl",o.bordered&&"border border-slate-200 dark:border-slate-800",o.hoverable&&"transition-shadow hover:shadow-md cursor-pointer",l.class));return(r,y)=>(u(),x("div",M({...h(l),class:void 0},{class:n.value}),[r.$slots.media?(u(),x("div",T,[c(r.$slots,"media")])):w("",!0),r.$slots.header?(u(),x("div",{key:1,class:C(h($)("border-b border-slate-200 dark:border-slate-800",d[m.padding]))},[c(r.$slots,"header")],2)):w("",!0),t("div",{class:C(d[m.padding])},[c(r.$slots,"default")],2),r.$slots.footer?(u(),x("div",{key:2,class:C(h($)("border-t border-slate-200 dark:border-slate-800",d[m.padding]))},[c(r.$slots,"footer")],2)):w("",!0)],16))}}),z=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseCardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<BaseCardProps>(), {
  padding: 'md',
  hoverable: false,
  bordered: true,
})

const $attrs = useAttrs()

const paddingMap: Record<NonNullable<BaseCardProps['padding']>, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

const classes = computed(() =>
  cn(
    'bg-white dark:bg-slate-900 rounded-xl',
    props.bordered && 'border border-slate-200 dark:border-slate-800',
    props.hoverable && 'transition-shadow hover:shadow-md cursor-pointer',
    $attrs.class as string,
  )
)
<\/script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="classes">
    <div v-if="$slots.media" class="overflow-hidden rounded-t-xl -mx-0 -mt-0">
      <slot name="media" />
    </div>
    <div v-if="$slots.header" :class="cn('border-b border-slate-200 dark:border-slate-800', paddingMap[padding])">
      <slot name="header" />
    </div>
    <div :class="paddingMap[padding]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="cn('border-t border-slate-200 dark:border-slate-800', paddingMap[padding])">
      <slot name="footer" />
    </div>
  </div>
</template>
`,L={class:"flex flex-col gap-3"},E=["value"],I={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},O={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},R={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},W={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},q={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},K=B({__name:"CardDemo",setup(m){const o=v("md"),l=v(!1),d=v(!0),n=v(!0),r=v(!1),y=S(()=>{const i=[];o.value!=="md"&&i.push(`padding="${o.value}"`),l.value&&i.push(':hoverable="true"'),d.value||i.push(':bordered="false"');const s=[`<BaseCard${i.length?` ${i.join(" ")}`:""}>`];return n.value&&s.push("  <template #header><h3>Card Title</h3></template>"),s.push("  <p>Card body content goes here.</p>"),r.value&&s.push("  <template #footer><span>Card footer</span></template>"),s.push("</BaseCard>"),s.join(`
`)});return(i,e)=>(u(),N(j,{title:"Card",description:"Flexible surface container for grouping content."},{preview:a(()=>[p(f,{class:"max-w-sm w-full",padding:o.value,hoverable:l.value,bordered:d.value},D({default:a(()=>[e[7]||(e[7]=t("p",{class:"text-slate-600 dark:text-slate-400 text-sm"}," Card body content goes here. Customize padding, borders, and hover states with the knobs. ",-1))]),_:2},[n.value?{name:"header",fn:a(()=>[e[5]||(e[5]=t("h3",{class:"font-semibold text-slate-900 dark:text-slate-100 text-sm"},"Card Title",-1))]),key:"0"}:void 0,r.value?{name:"footer",fn:a(()=>[e[6]||(e[6]=t("span",{class:"text-xs text-slate-400"},"Updated 2 minutes ago",-1))]),key:"1"}:void 0]),1032,["padding","hoverable","bordered"])]),knobs:a(()=>[t("div",L,[t("div",null,[e[8]||(e[8]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Padding",-1)),b(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(u(),x(F,null,P(["none","sm","md","lg"],s=>t("option",{key:s,value:s},U(s),9,E)),64))],512),[[A,o.value]])]),t("label",I,[b(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),type:"checkbox",class:"rounded"},null,512),[[g,l.value]]),e[9]||(e[9]=k(" Hoverable ",-1))]),t("label",O,[b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>d.value=s),type:"checkbox",class:"rounded"},null,512),[[g,d.value]]),e[10]||(e[10]=k(" Bordered ",-1))]),t("label",R,[b(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>n.value=s),type:"checkbox",class:"rounded"},null,512),[[g,n.value]]),e[11]||(e[11]=k(" Show header ",-1))]),t("label",W,[b(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>r.value=s),type:"checkbox",class:"rounded"},null,512),[[g,r.value]]),e[12]||(e[12]=k(" Show footer ",-1))])])]),code:a(()=>[p(H,{usage:y.value,source:h(z),filename:"BaseCard.vue"},null,8,["usage","source"])]),variants:a(()=>[t("div",q,[p(f,null,{header:a(()=>[...e[13]||(e[13]=[t("h3",{class:"font-semibold text-slate-900 dark:text-slate-100 text-sm"},"With Header & Footer",-1)])]),footer:a(()=>[...e[14]||(e[14]=[t("p",{class:"text-xs text-slate-400"},"Footer text",-1)])]),default:a(()=>[e[15]||(e[15]=t("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Card body content with distinct sections.",-1))]),_:1}),p(f,{hoverable:!0},{default:a(()=>[...e[16]||(e[16]=[t("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Hoverable card — hover to see shadow transition.",-1)])]),_:1}),p(f,{padding:"lg"},{default:a(()=>[...e[17]||(e[17]=[t("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Large padding card.",-1)])]),_:1}),p(f,{bordered:!1,class:"shadow-md"},{default:a(()=>[...e[18]||(e[18]=[t("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"No border, elevated with shadow.",-1)])]),_:1})])]),_:1}))}});export{K as default};
