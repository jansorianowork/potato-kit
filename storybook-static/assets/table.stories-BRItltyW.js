import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{c as o}from"./utils-CKXzwFwe.js";import"./clsx-B-dksMZM.js";const i=d.forwardRef(({className:s,...l},t)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:t,className:o("w-full caption-bottom text-sm",s),...l})}));i.displayName="Table";const c=d.forwardRef(({className:s,...l},t)=>e.jsx("thead",{ref:t,className:o("[&_tr]:border-b",s),...l}));c.displayName="TableHeader";const b=d.forwardRef(({className:s,...l},t)=>e.jsx("tbody",{ref:t,className:o("[&_tr:last-child]:border-0",s),...l}));b.displayName="TableBody";const p=d.forwardRef(({className:s,...l},t)=>e.jsx("tfoot",{ref:t,className:o("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...l}));p.displayName="TableFooter";const n=d.forwardRef(({className:s,...l},t)=>e.jsx("tr",{ref:t,className:o("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...l}));n.displayName="TableRow";const r=d.forwardRef(({className:s,...l},t)=>e.jsx("th",{ref:t,className:o("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...l}));r.displayName="TableHead";const a=d.forwardRef(({className:s,...l},t)=>e.jsx("td",{ref:t,className:o("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...l}));a.displayName="TableCell";const C=d.forwardRef(({className:s,...l},t)=>e.jsx("caption",{ref:t,className:o("mt-4 text-sm text-muted-foreground",s),...l}));C.displayName="TableCaption";i.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};p.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};a.__docgenInfo={description:"",methods:[],displayName:"TableCell"};C.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const E={title:"Molecules/Table",component:i,tags:["autodocs"],subcomponents:{TableHeader:c,TableBody:b,TableFooter:p,TableHead:r,TableRow:n,TableCell:a,TableCaption:C},parameters:{layout:"centered",docs:{description:{component:`
The **Table** component is used to display data in a structured tabular format. It supports the following features:

- **Flexible Structure**: Use \`TableHeader\`, \`TableBody\`, and \`TableFooter\` to organize data.
- **Customizable Cells**: \`TableHead\` and \`TableCell\` components allow for flexible content and styling.
- **Responsive Design**: Built to be responsive and work across different screen sizes.
- **Accessible**: Follows accessibility best practices for table structures.

### Usage
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
      <TableHead>Column 3</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
      <TableCell>Data 3</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`
        `}}}},T={render:()=>e.jsxs(i,{children:[e.jsx(C,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Invoice"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Method"}),e.jsx(r,{className:"text-right",children:"Amount"})]})}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"INV-001"}),e.jsx(a,{children:"Paid"}),e.jsx(a,{children:"Credit Card"}),e.jsx(a,{className:"text-right",children:"$250.00"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"INV-002"}),e.jsx(a,{children:"Pending"}),e.jsx(a,{children:"Bank Transfer"}),e.jsx(a,{className:"text-right",children:"$150.00"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"INV-003"}),e.jsx(a,{children:"Paid"}),e.jsx(a,{children:"PayPal"}),e.jsx(a,{className:"text-right",children:"$350.00"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"INV-004"}),e.jsx(a,{children:"Cancelled"}),e.jsx(a,{children:"Credit Card"}),e.jsx(a,{className:"text-right",children:"$200.00"})]})]}),e.jsx(p,{children:e.jsxs(n,{children:[e.jsx(a,{colSpan:3,children:"Total"}),e.jsx(a,{className:"text-right",children:"$950.00"})]})})]}),parameters:{docs:{description:{story:"This is the default Table story, showcasing a basic table with header, body, and footer sections containing sample invoice data."}}}},m={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"}),e.jsx(r,{className:"text-right",children:"Join Date"})]})}),e.jsx(b,{children:Array.from({length:10}).map((s,l)=>e.jsxs(n,{children:[e.jsxs(a,{children:["USR-",String(l+1).padStart(3,"0")]}),e.jsxs(a,{children:["User ",l+1]}),e.jsxs(a,{children:["user",l+1,"@example.com"]}),e.jsx(a,{children:l%2===0?"Active":"Inactive"}),e.jsxs(a,{className:"text-right",children:["2024-",String(l+1).padStart(2,"0"),"-15"]})]},l))})]}),parameters:{docs:{description:{story:"This story showcases a table with multiple rows of user data to demonstrate how the table handles larger datasets."}}}},h={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Product"}),e.jsx(r,{children:"Price"})]})}),e.jsx(b,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product A"}),e.jsx(a,{children:"$99.99"})]})})]}),parameters:{docs:{description:{story:"This story showcases a minimal table with just a header and a single row of data."}}}},x={render:()=>e.jsxs(i,{className:"storybook-table",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"}),e.jsx(r,{className:"text-right",children:"Join Date"})]})}),e.jsx(b,{children:Array.from({length:10}).map((s,l)=>e.jsxs(n,{children:[e.jsxs(a,{children:["USR-",String(l+1).padStart(3,"0")]}),e.jsxs(a,{children:["User ",l+1]}),e.jsxs(a,{children:["user",l+1,"@example.com"]}),e.jsx(a,{children:l%2===0?"Active":"Inactive"}),e.jsxs(a,{className:"text-right",children:["2024-",String(l+1).padStart(2,"0"),"-15"]})]},l))})]}),parameters:{docs:{description:{story:"This story showcases a minimal table with just a header and a single row of data."}}}};var j,u,w,g,y;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Table>\r
            <TableCaption>A list of your recent invoices.</TableCaption>\r
            <TableHeader>\r
                <TableRow>\r
                    <TableHead>Invoice</TableHead>\r
                    <TableHead>Status</TableHead>\r
                    <TableHead>Method</TableHead>\r
                    <TableHead className="text-right">Amount</TableHead>\r
                </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
                <TableRow>\r
                    <TableCell>INV-001</TableCell>\r
                    <TableCell>Paid</TableCell>\r
                    <TableCell>Credit Card</TableCell>\r
                    <TableCell className="text-right">$250.00</TableCell>\r
                </TableRow>\r
                <TableRow>\r
                    <TableCell>INV-002</TableCell>\r
                    <TableCell>Pending</TableCell>\r
                    <TableCell>Bank Transfer</TableCell>\r
                    <TableCell className="text-right">$150.00</TableCell>\r
                </TableRow>\r
                <TableRow>\r
                    <TableCell>INV-003</TableCell>\r
                    <TableCell>Paid</TableCell>\r
                    <TableCell>PayPal</TableCell>\r
                    <TableCell className="text-right">$350.00</TableCell>\r
                </TableRow>\r
                <TableRow>\r
                    <TableCell>INV-004</TableCell>\r
                    <TableCell>Cancelled</TableCell>\r
                    <TableCell>Credit Card</TableCell>\r
                    <TableCell className="text-right">$200.00</TableCell>\r
                </TableRow>\r
            </TableBody>\r
            <TableFooter>\r
                <TableRow>\r
                    <TableCell colSpan={3}>Total</TableCell>\r
                    <TableCell className="text-right">$950.00</TableCell>\r
                </TableRow>\r
            </TableFooter>\r
        </Table>,
  parameters: {
    docs: {
      description: {
        story: "This is the default Table story, showcasing a basic table with header, body, and footer sections containing sample invoice data."
      }
    }
  }
}`,...(w=(u=T.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:"Default Table story with sample data.",...(y=(g=T.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var f,N,H,R,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Table>\r
            <TableHeader>\r
                <TableRow>\r
                    <TableHead>ID</TableHead>\r
                    <TableHead>Name</TableHead>\r
                    <TableHead>Email</TableHead>\r
                    <TableHead>Status</TableHead>\r
                    <TableHead className="text-right">Join Date</TableHead>\r
                </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
                {Array.from({
        length: 10
      }).map((_, index) => <TableRow key={index}>\r
                        <TableCell>\r
                            USR-{String(index + 1).padStart(3, "0")}\r
                        </TableCell>\r
                        <TableCell>User {index + 1}</TableCell>\r
                        <TableCell>user{index + 1}@example.com</TableCell>\r
                        <TableCell>\r
                            {index % 2 === 0 ? "Active" : "Inactive"}\r
                        </TableCell>\r
                        <TableCell className="text-right">\r
                            2024-{String(index + 1).padStart(2, "0")}-15\r
                        </TableCell>\r
                    </TableRow>)}\r
            </TableBody>\r
        </Table>,
  parameters: {
    docs: {
      description: {
        story: "This story showcases a table with multiple rows of user data to demonstrate how the table handles larger datasets."
      }
    }
  }
}`,...(H=(N=m.parameters)==null?void 0:N.docs)==null?void 0:H.source},description:{story:"Table story with a large dataset.",...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};var I,_,v,B,D;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Table>\r
            <TableHeader>\r
                <TableRow>\r
                    <TableHead>Product</TableHead>\r
                    <TableHead>Price</TableHead>\r
                </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
                <TableRow>\r
                    <TableCell>Product A</TableCell>\r
                    <TableCell>$99.99</TableCell>\r
                </TableRow>\r
            </TableBody>\r
        </Table>,
  parameters: {
    docs: {
      description: {
        story: "This story showcases a minimal table with just a header and a single row of data."
      }
    }
  }
}`,...(v=(_=h.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:"Table story with minimal data.",...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var P,A,U;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Table className="storybook-table">\r
            <TableHeader>\r
                <TableRow>\r
                    <TableHead>ID</TableHead>\r
                    <TableHead>Name</TableHead>\r
                    <TableHead>Email</TableHead>\r
                    <TableHead>Status</TableHead>\r
                    <TableHead className="text-right">Join Date</TableHead>\r
                </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
                {Array.from({
        length: 10
      }).map((_, index) => <TableRow key={index}>\r
                        <TableCell>\r
                            USR-{String(index + 1).padStart(3, "0")}\r
                        </TableCell>\r
                        <TableCell>User {index + 1}</TableCell>\r
                        <TableCell>user{index + 1}@example.com</TableCell>\r
                        <TableCell>\r
                            {index % 2 === 0 ? "Active" : "Inactive"}\r
                        </TableCell>\r
                        <TableCell className="text-right">\r
                            2024-{String(index + 1).padStart(2, "0")}-15\r
                        </TableCell>\r
                    </TableRow>)}\r
            </TableBody>\r
        </Table>,
  parameters: {
    docs: {
      description: {
        story: "This story showcases a minimal table with just a header and a single row of data."
      }
    }
  }
}`,...(U=(A=x.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const M=["Default","LargeDataset","Minimal","WithUI"];export{T as Default,m as LargeDataset,h as Minimal,x as WithUI,M as __namedExportsOrder,E as default};
