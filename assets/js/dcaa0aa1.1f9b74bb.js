"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8385],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},67784:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"introduction","title":"Introduction","description":"The Apache Ambari project is aimed at making Hadoop management simpler by developing software for provisioning, managing, and monitoring Apache Hadoop clusters. Ambari provides an intuitive, easy-to-use Hadoop management web UI backed by its RESTful APIs.","source":"@site/versioned_docs/version-2.7.8/introduction.md","sourceDirName":".","slug":"/introduction","permalink":"/docs/2.7.8/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.8/introduction.md","tags":[],"version":"2.7.8","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ambariSidebar","next":{"title":"Quick Start Guide","permalink":"/docs/2.7.8/quick-start/quick-start-guide"}}');var t=i(74848),s=i(28453);const a={sidebar_position:1},o="Introduction",d={},l=[{value:"Getting Started with Ambari",id:"getting-started-with-ambari",level:2},{value:"Get Involved",id:"get-involved",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.p,{children:"The Apache Ambari project is aimed at making Hadoop management simpler by developing software for provisioning, managing, and monitoring Apache Hadoop clusters. Ambari provides an intuitive, easy-to-use Hadoop management web UI backed by its RESTful APIs."}),"\n",(0,t.jsx)(n.p,{children:"Ambari enables System Administrators to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Provision a Hadoop Cluster"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ambari provides a step-by-step wizard for installing Hadoop services across any number of hosts."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ambari handles configuration of Hadoop services for the cluster."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Manage a Hadoop Cluster"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ambari provides central management for starting, stopping, and reconfiguring Hadoop services across the entire cluster."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monitor a Hadoop Cluster"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ambari provides a dashboard for monitoring health and status of the Hadoop cluster."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ambari leverages ",(0,t.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI-5707",children:"Ambari Metrics System"})," for metrics collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ambari leverages ",(0,t.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI-6354",children:"Ambari Alert Framework"})," for system alerting and will notify you when your attention is needed (e.g., a node goes down, remaining disk space is low, etc)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ambari enables Application Developers and System Integrators to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Easily integrate Hadoop provisioning, management, and monitoring capabilities to their own applications with the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/docs/api/v1/index.md",children:"Ambari REST APIs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-with-ambari",children:"Getting Started with Ambari"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/AMBARI/Installation+Guide+for+Ambari+2.7.8",children:"installation guide for Ambari 2.7.8"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Note: Ambari currently supports the 64-bit version of the following Operating Systems:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RHEL (Redhat Enterprise Linux) 7.4, 7.3, 7.2"}),"\n",(0,t.jsx)(n.li,{children:"CentOS 7.4, 7.3, 7.2"}),"\n",(0,t.jsx)(n.li,{children:"OEL (Oracle Enterprise Linux) 7.4, 7.3, 7.2"}),"\n",(0,t.jsx)(n.li,{children:"Amazon Linux 2"}),"\n",(0,t.jsx)(n.li,{children:"SLES (SuSE Linux Enterprise Server) 12 SP3, 12 SP2"}),"\n",(0,t.jsx)(n.li,{children:"Ubuntu 14 and 16"}),"\n",(0,t.jsx)(n.li,{children:"Debian 9"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-involved",children:"Get Involved"}),"\n",(0,t.jsxs)(n.p,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/AMBARI/Ambari",children:"Ambari Wiki"})," for design documents, roadmap, development guidelines, etc."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group",children:"Join the Ambari User Meetup Group"}),". You can see the slides from ",(0,t.jsx)(n.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/109316812/",children:"April 2, 2013"}),", ",(0,t.jsx)(n.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/119184782/",children:"June 25, 2013"}),", and ",(0,t.jsx)(n.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/134373312/",children:"September 25, 2013"})," meetups."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);