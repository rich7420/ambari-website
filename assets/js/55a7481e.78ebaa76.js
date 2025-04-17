"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[5691],{8816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"ambari-design/index","title":"Ambari Design","description":"Ambari Architecture//issues.apache.org/jira/secure/attachment/12559939/Ambari_Architecture.pdf","source":"@site/versioned_docs/version-2.7.9/ambari-design/index.md","sourceDirName":"ambari-design","slug":"/ambari-design/","permalink":"/docs/2.7.9/ambari-design/","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.9/ambari-design/index.md","tags":[],"version":"2.7.9","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Quick Start for New VM Users","permalink":"/docs/2.7.9/quick-start/quick-start-for-new-vm-users"},"next":{"title":"Alerts","permalink":"/docs/2.7.9/ambari-design/alerts"}}');var i=r(74848),s=r(28453),a=r(17473);const o={},c="Ambari Design",l={},d=[];function h(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ambari-design",children:"Ambari Design"})}),"\n",(0,i.jsxs)(t.p,{children:["Ambari Architecture: ",(0,i.jsx)(t.a,{href:"https://issues.apache.org/jira/secure/attachment/12559939/Ambari_Architecture.pdf",children:"https://issues.apache.org/jira/secure/attachment/12559939/Ambari_Architecture.pdf"})]}),"\n",(0,i.jsxs)(t.p,{children:["Ambari Server-Agent Registration Flow: ",(0,i.jsx)(t.a,{href:"http://www.slideshare.net/hortonworks/ambari-agentregistrationflow-17041261",children:"http://www.slideshare.net/hortonworks/ambari-agentregistrationflow-17041261"})]}),"\n",(0,i.jsxs)(t.p,{children:["Ambari Local Repository Setup: ",(0,i.jsx)(t.a,{href:"http://www.slideshare.net/hortonworks/ambari-using-a-local-repository",children:"http://www.slideshare.net/hortonworks/ambari-using-a-local-repository"})]}),"\n",(0,i.jsxs)(t.p,{children:["API Documentation: ",(0,i.jsx)(t.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/docs/api/v1/index.md",children:"https://github.com/apache/ambari/blob/trunk/ambari-server/docs/api/v1/index.md"})]}),"\n",(0,i.jsxs)(t.p,{children:["Technology Stack: ",(0,i.jsx)(t.a,{href:"/docs/2.7.9/ambari-design/technology-stack",children:"Technology Stack"})]}),"\n",(0,i.jsxs)(t.p,{children:["Integration: ",(0,i.jsx)(t.a,{href:"http://developer.teradata.com/viewpoint/articles/viewpoint-integration-with-apache-ambari-for-hadoop-monitoring",children:"http://developer.teradata.com/viewpoint/articles/viewpoint-integration-with-apache-ambari-for-hadoop-monitoring"})]}),"\n","\n",(0,i.jsx)(a.A,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},17473:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),i=r(34164),s=r(30102),a=r(56289),o=r(40797);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function u(){const e=h();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),s=r.pluralForms.indexOf(i);return n[Math.min(s,n.length-1)]}(r,t,e)}}var m=r(22887),p=r(50539),f=r(9303);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var b=r(74848);function x(e){let{href:t,children:r}=e;return(0,b.jsx)(a.A,{href:t,className:(0,i.A)("card padding--lg",g.cardContainer),children:r})}function w(e){let{href:t,icon:r,title:n,description:s}=e;return(0,b.jsxs)(x,{href:t,children:[(0,b.jsxs)(f.A,{as:"h2",className:(0,i.A)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),s&&(0,b.jsx)("p",{className:(0,i.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=u();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,b.jsx)(w,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function v(e){let{item:t}=e;const r=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,b.jsx)(w,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function A(e){let{item:t}=e;switch(t.type){case"link":return(0,b.jsx)(v,{item:t});case"category":return(0,b.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,s.$S)();return(0,b.jsx)(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return(0,b.jsx)(k,{...e});const n=(0,s.d1)(t);return(0,b.jsx)("section",{className:(0,i.A)("row",r),children:n.map(((e,t)=>(0,b.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,b.jsx)(A,{item:e})},t)))})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);