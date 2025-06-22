import{j as a}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const p=({items:b})=>{const l=(u,n=0)=>a.jsx("ul",{className:`sidebar-list depth-${n}`,children:u.map((e,g)=>a.jsxs("li",{className:"sidebar-item",children:[e.link?a.jsx("a",{href:e.link,className:"sidebar-link",children:e.label}):a.jsx("span",{className:"sidebar-label",children:e.label}),e.children&&l(e.children,n+1)]},g))});return a.jsx("nav",{className:"sidebar",children:l(b)})};p.__docgenInfo={description:"",methods:[],displayName:"SideBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SidebarItem"}],raw:"SidebarItem[]"},description:""}}};const h=[{label:"Dashboard",link:"/dashboard"},{label:"Settings",children:[{label:"Profile",link:"/settings/profile"},{label:"Security",link:"/settings/security"}]},{label:"Help",link:"/help"}],f={title:"Molecules/SideBar",component:p,tags:["autodocs"],args:{items:h},parameters:{layout:"centered",docs:{description:{component:`
The **SideBar** component is a vertical navigation menu. It supports nested links and is ideal for application navigation.
        `}}}},s={args:{items:h}},r={args:{items:[{label:"Parent",children:[{label:"Child 1",link:"/child-1"},{label:"Child 2",link:"/child-2"}]}]}};var i,t,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Parent",
      children: [{
        label: "Child 1",
        link: "/child-1"
      }, {
        label: "Child 2",
        link: "/child-2"
      }]
    }]
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["Default","NestedOnly"];export{s as Default,r as NestedOnly,x as __namedExportsOrder,f as default};
