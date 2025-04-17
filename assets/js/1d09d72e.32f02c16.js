"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7905],{5858:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"ambari-design/stack-and-services/faq","title":"FAQ","description":"[STACK]/[SERVICE]/metainfo.xml","source":"@site/versioned_docs/version-2.7.8/ambari-design/stack-and-services/faq.md","sourceDirName":"ambari-design/stack-and-services","slug":"/ambari-design/stack-and-services/faq","permalink":"/docs/2.7.8/ambari-design/stack-and-services/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.8/ambari-design/stack-and-services/faq.md","tags":[],"version":"2.7.8","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Writing metainfo.xml","permalink":"/docs/2.7.8/ambari-design/stack-and-services/writing-metainfo"},"next":{"title":"Hooks","permalink":"/docs/2.7.8/ambari-design/stack-and-services/hooks"}}');var r=i(74848),s=i(28453);const a={},o="FAQ",c={},d=[{value:"<strong>[STACK]/[SERVICE]/metainfo.xml</strong>",id:"stackservicemetainfoxml",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,r.jsx)(n.h2,{id:"stackservicemetainfoxml",children:(0,r.jsx)(n.strong,{children:"[STACK]/[SERVICE]/metainfo.xml"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If a component exists in the parent stack and is defined again in the child stack with just a few attributes, are these values just to override the parent's values or the whole component definition is replaced? What about other elements in metainfo.xml -- which rules apply?"})}),"\n",(0,r.jsx)(n.p,{children:"Ambari goes property by property and merge them from parent to child. So if you remove a category for example from the child it will be inherited from parent, that goes for pretty much all properties."}),"\n",(0,r.jsx)(n.p,{children:"So, the question is how do we tackle existence of a property in both parent and child. Here, most of the decision still follow same paradigm as take the child value instead of parent and every property in parent, not explicitly deleted from child using a marker like"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For config-dependencies, we take all or nothing approach, if this property exists in child use it and all of its children else take it from parent."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The custom commands are merged based on names, such that merged definition is a union of commands with child commands with same name overriding those fro parent."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cardinality is overwritten by a child or take from the parent if child has not provided one."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You could look at this method for more details: ",(0,r.jsx)(n.code,{children:"org.apache.ambari.server.api.util.StackExtensionHelper#mergeServices"})]}),"\n",(0,r.jsxs)(n.p,{children:["For more information see the ",(0,r.jsx)(n.a,{href:"/docs/2.7.8/ambari-design/stack-and-services/custom-services#service-inheritance",children:"Service Inheritance"})," wiki page."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If a component is missing in the new definition but is present in the parent, does it get inherited?"})}),"\n",(0,r.jsx)(n.p,{children:"Generally yes."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Configuration dependencies for the service -- are they overwritten or merged?"})}),"\n",(0,r.jsx)(n.p,{children:"Overwritten."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);