import{d as B,l as _,o as r,g as d,a as t,m as L,n as w,u as l,t as C,k as y,p as V,i as f,j as D,c as $,w as a,b as p,e as o,f as M,F as T,r as S,v as H,h as A}from"./index-CdapSEgI.js";import{c as k,_ as P,a as N}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const E=["role"],U=["innerHTML"],j={class:"flex-1 min-w-0"},F={key:1,class:"mt-3"},h=B({inheritAttrs:!1,__name:"BaseAlert",props:{variant:{default:"info"},title:{},dismissible:{type:Boolean,default:!1}},emits:["dismiss"],setup(g,{emit:u}){const c=g,b=u,x=_(),v=f(!1);function z(){v.value=!0,b("dismiss")}const n=D(()=>({info:{container:"bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800",icon:"text-blue-500 dark:text-blue-400",title:"text-blue-800 dark:text-blue-200",body:"text-blue-700 dark:text-blue-300",role:"status",svg:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>'},success:{container:"bg-green-50 border-green-200 dark:bg-green-950/40 dark:border-green-800",icon:"text-green-500 dark:text-green-400",title:"text-green-800 dark:text-green-200",body:"text-green-700 dark:text-green-300",role:"status",svg:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>'},warning:{container:"bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800",icon:"text-amber-500 dark:text-amber-400",title:"text-amber-800 dark:text-amber-200",body:"text-amber-700 dark:text-amber-300",role:"alert",svg:'<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>'},danger:{container:"bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-800",icon:"text-red-500 dark:text-red-400",title:"text-red-800 dark:text-red-200",body:"text-red-700 dark:text-red-300",role:"alert",svg:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>'}})[c.variant]);return(m,i)=>v.value?y("",!0):(r(),d("div",V({key:0},{...l(x),class:void 0},{class:l(k)("flex gap-3 rounded-lg border p-4",n.value.container,l(x).class),role:n.value.role}),[t("div",{class:w(l(k)("shrink-0 mt-0.5",n.value.icon))},[L(m.$slots,"icon",{},()=>[(r(),d("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",innerHTML:n.value.svg},null,8,U))])],2),t("div",j,[g.title?(r(),d("p",{key:0,class:w(l(k)("text-sm font-semibold mb-1",n.value.title))},C(g.title),3)):y("",!0),t("div",{class:w(l(k)("text-sm",n.value.body))},[L(m.$slots,"default")],2),m.$slots.actions?(r(),d("div",F,[L(m.$slots,"actions")])):y("",!0)]),g.dismissible?(r(),d("button",{key:0,type:"button",class:w(l(k)("shrink-0 p-0.5 rounded-md hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",n.value.icon)),"aria-label":"Dismiss",onClick:z},[...i[0]||(i[0]=[t("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])],2)):y("",!0)],16,E))}}),I=`<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<BaseAlertProps>(), {
  variant: 'info',
  dismissible: false,
})

const emit = defineEmits<{ dismiss: [] }>()

const $attrs = useAttrs()
const dismissed = ref(false)

function handleDismiss() {
  dismissed.value = true
  emit('dismiss')
}

const config = computed(() => ({
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800',
    icon: 'text-blue-500 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-200',
    body: 'text-blue-700 dark:text-blue-300',
    role: 'status' as const,
    svg: \`<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>\`,
  },
  success: {
    container: 'bg-green-50 border-green-200 dark:bg-green-950/40 dark:border-green-800',
    icon: 'text-green-500 dark:text-green-400',
    title: 'text-green-800 dark:text-green-200',
    body: 'text-green-700 dark:text-green-300',
    role: 'status' as const,
    svg: \`<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>\`,
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800',
    icon: 'text-amber-500 dark:text-amber-400',
    title: 'text-amber-800 dark:text-amber-200',
    body: 'text-amber-700 dark:text-amber-300',
    role: 'alert' as const,
    svg: \`<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\`,
  },
  danger: {
    container: 'bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-800',
    icon: 'text-red-500 dark:text-red-400',
    title: 'text-red-800 dark:text-red-200',
    body: 'text-red-700 dark:text-red-300',
    role: 'alert' as const,
    svg: \`<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>\`,
  },
}[props.variant]))
<\/script>

<template>
  <div
    v-if="!dismissed"
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex gap-3 rounded-lg border p-4', config.container, $attrs.class as string)"
    :role="config.role"
  >
    <!-- Icon slot -->
    <div :class="cn('shrink-0 mt-0.5', config.icon)">
      <slot name="icon">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" v-html="config.svg" />
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <p v-if="title" :class="cn('text-sm font-semibold mb-1', config.title)">{{ title }}</p>
      <div :class="cn('text-sm', config.body)">
        <slot />
      </div>
      <div v-if="$slots.actions" class="mt-3">
        <slot name="actions" />
      </div>
    </div>

    <!-- Dismiss button -->
    <button
      v-if="dismissible"
      type="button"
      :class="cn('shrink-0 p-0.5 rounded-md hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1', config.icon)"
      aria-label="Dismiss"
      @click="handleDismiss"
    >
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</template>
`,K={class:"w-full max-w-lg"},O={key:1,class:"text-center py-4"},W={class:"flex flex-col gap-3"},Y=["value"],q={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},G={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},J={class:"flex flex-col gap-3 max-w-lg"},X=B({__name:"AlertDemo",setup(g){const u=f("info"),c=f(!0),b=f(!0),x=f(0),v=f(!1);function z(){v.value=!0}function n(){v.value=!1,x.value+=1}const m=D(()=>{const i=[`variant="${u.value}"`];return b.value&&i.push('title="Alert Title"'),c.value&&i.push(':dismissible="true"'),`<BaseAlert ${i.join(" ")}>
  This is an example alert message providing contextual feedback.
</BaseAlert>`});return(i,e)=>(r(),$(N,{title:"Alert",description:"Contextual inline feedback banners."},{preview:a(()=>[t("div",K,[v.value?(r(),d("div",O,[e[4]||(e[4]=t("p",{class:"text-sm text-slate-500 dark:text-slate-400 mb-2"},"Alert dismissed.",-1)),t("button",{type:"button",class:"text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline",onClick:n}," Show alert again ")])):(r(),$(h,{key:x.value,variant:u.value,title:b.value?"Alert Title":void 0,dismissible:c.value,onDismiss:z},{default:a(()=>[...e[3]||(e[3]=[o(" This is an example alert message providing contextual feedback. ",-1)])]),_:1},8,["variant","title","dismissible"]))])]),knobs:a(()=>[t("div",W,[t("div",null,[e[5]||(e[5]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),M(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(r(),d(T,null,S(["info","success","warning","danger"],s=>t("option",{key:s,value:s},C(s),9,Y)),64))],512),[[H,u.value]])]),t("label",q,[M(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>c.value=s),type:"checkbox",class:"rounded"},null,512),[[A,c.value]]),e[6]||(e[6]=o(" Dismissible ",-1))]),t("label",G,[M(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>b.value=s),type:"checkbox",class:"rounded"},null,512),[[A,b.value]]),e[7]||(e[7]=o(" Show Title ",-1))])])]),code:a(()=>[p(P,{usage:m.value,source:l(I),filename:"BaseAlert.vue"},null,8,["usage","source"])]),variants:a(()=>[t("div",J,[p(h,{variant:"info",title:"Information"},{default:a(()=>[...e[8]||(e[8]=[o(" Here is some helpful information for you. ",-1)])]),_:1}),p(h,{variant:"success",title:"Success"},{default:a(()=>[...e[9]||(e[9]=[o(" Your changes have been saved successfully. ",-1)])]),_:1}),p(h,{variant:"warning",title:"Warning"},{default:a(()=>[...e[10]||(e[10]=[o(" Please review before continuing. ",-1)])]),_:1}),p(h,{variant:"danger",title:"Error",dismissible:!0},{default:a(()=>[...e[11]||(e[11]=[o(" Something went wrong. Please try again. ",-1)])]),_:1})])]),_:1}))}});export{X as default};
