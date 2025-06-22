import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{c as d}from"./utils-CKXzwFwe.js";import"./clsx-B-dksMZM.js";const c=t.forwardRef(({className:e,...r},a)=>o.jsx("div",{ref:a,className:d("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));c.displayName="Card";const m=t.forwardRef(({className:e,...r},a)=>o.jsx("div",{ref:a,className:d("flex flex-col space-y-1.5 p-6",e),...r}));m.displayName="CardHeader";const p=t.forwardRef(({className:e,...r},a)=>o.jsx("h3",{ref:a,className:d("text-2xl font-semibold leading-none tracking-tight",e),...r}));p.displayName="CardTitle";const f=t.forwardRef(({className:e,...r},a)=>o.jsx("p",{ref:a,className:d("text-sm text-muted-foreground",e),...r}));f.displayName="CardDescription";const u=t.forwardRef(({className:e,...r},a)=>o.jsx("div",{ref:a,className:d("p-6 pt-0",e),...r}));u.displayName="CardContent";const C=t.forwardRef(({className:e,...r},a)=>o.jsx("div",{ref:a,className:d("flex items-center p-6 pt-0",e),...r}));C.displayName="CardFooter";c.__docgenInfo={description:"",methods:[],displayName:"Card"};m.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};p.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};f.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};u.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const w=t.forwardRef(({className:e="",...r},a)=>o.jsx("div",{ref:a,className:`card ${e}`,...r}));w.displayName="Card";const R=t.forwardRef(({className:e="",...r},a)=>o.jsx("div",{ref:a,className:`card-header ${e}`,...r}));R.displayName="CardHeader";const I=t.forwardRef(({className:e="",...r},a)=>o.jsx("h3",{ref:a,className:`card-title ${e}`,...r}));I.displayName="CardTitle";const D=t.forwardRef(({className:e="",...r},a)=>o.jsx("p",{ref:a,className:`card-description ${e}`,...r}));D.displayName="CardDescription";const T=t.forwardRef(({className:e="",...r},a)=>o.jsx("div",{ref:a,className:`card-content ${e}`,...r}));T.displayName="CardContent";const F=t.forwardRef(({className:e="",...r},a)=>o.jsx("div",{ref:a,className:`card-footer ${e}`,...r}));F.displayName="CardFooter";w.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};R.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};D.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};F.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const L={title:"Molecules/Card",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **Card** component is a flexible container used to display grouped content. It includes optional subcomponents:

- \`CardHeader\` for the title and description.
- \`CardContent\` for the main content.
- \`CardFooter\` for actions or summaries.

Each subcomponent is fully customizable and composable for various use cases.
        `}}}},s={args:{title:"Welcome",description:"This is a basic card component.",content:"You can add any content here — text, form elements, or visuals.",footer:!0,footerButtons:["Cancel","Confirm"]},render:({title:e,description:r,content:a,footer:H,footerButtons:l})=>o.jsxs(c,{children:[(e||r)&&o.jsxs(m,{children:[e&&o.jsx(p,{children:e}),r&&o.jsx(f,{children:r})]}),o.jsx(u,{children:a}),H&&o.jsx(C,{children:l==null?void 0:l.map((S,q)=>o.jsx("button",{children:S},q))})]})},n={args:{title:"Article Summary",description:"Read this short overview of the latest report.",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",footer:!0,footerButtons:["Read More"]},render:s.render},i={args:{content:"Just a simple card with no header or footer.",footer:!1},render:s.render};var h,N,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Welcome",
    description: "This is a basic card component.",
    content: "You can add any content here — text, form elements, or visuals.",
    footer: true,
    footerButtons: ["Cancel", "Confirm"]
  },
  render: ({
    title,
    description,
    content,
    footer,
    footerButtons
  }) => <Card>\r
      {(title || description) && <CardHeader>\r
          {title && <CardTitle>{title}</CardTitle>}\r
          {description && <CardDescription>{description}</CardDescription>}\r
        </CardHeader>}\r
      <CardContent>{content}</CardContent>\r
      {footer && <CardFooter>\r
          {footerButtons?.map((text, idx) => <button key={idx}>{text}</button>)}\r
        </CardFooter>}\r
    </Card>
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var g,y,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Article Summary",
    description: "Read this short overview of the latest report.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    footer: true,
    footerButtons: ["Read More"]
  },
  render: Default.render
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var j,v,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: "Just a simple card with no header or footer.",
    footer: false
  },
  render: Default.render
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const W=["Default","WithLongContent","Minimal"];export{s as Default,i as Minimal,n as WithLongContent,W as __namedExportsOrder,L as default};
