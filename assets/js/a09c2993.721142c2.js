"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[5899],{28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var i=n(96540);const s={},t=i.createContext(s);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:r},e.children)}},47974:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"introduction","title":"Introduction","description":"The Apache Ambari project is aimed at making Hadoop management simpler by developing software for provisioning, managing, and monitoring Apache Hadoop clusters. Ambari provides an intuitive, easy-to-use Hadoop management web UI backed by its RESTful APIs.","source":"@site/docs/introduction.md","sourceDirName":".","slug":"/introduction","permalink":"/docs/next/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/docs/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ambariSidebar","next":{"title":"Apache Ambari 3.0.0 Release Notes","permalink":"/docs/next/release-notes"}}');var s=n(74848),t=n(28453);const d={sidebar_position:1},l="Introduction",o={},c=[{value:"Getting Started with Ambari",id:"getting-started-with-ambari",level:2},{value:"Version Information",id:"version-information",level:2},{value:"Ambari 3.0.0",id:"ambari-300",level:3},{value:"Bigtop Stack 3.3.0",id:"bigtop-stack-330",level:3},{value:"Get Involved",id:"get-involved",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(r.p,{children:"The Apache Ambari project is aimed at making Hadoop management simpler by developing software for provisioning, managing, and monitoring Apache Hadoop clusters. Ambari provides an intuitive, easy-to-use Hadoop management web UI backed by its RESTful APIs."}),"\n",(0,s.jsx)(r.p,{children:"Ambari enables System Administrators to:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Provision a Hadoop Cluster"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Ambari provides a step-by-step wizard for installing Hadoop services across any number of hosts."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Ambari handles configuration of Hadoop services for the cluster."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Manage a Hadoop Cluster"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Ambari provides central management for starting, stopping, and reconfiguring Hadoop services across the entire cluster."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Monitor a Hadoop Cluster"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Ambari provides a dashboard for monitoring health and status of the Hadoop cluster."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Ambari leverages ",(0,s.jsx)(r.a,{href:"https://issues.apache.org/jira/browse/AMBARI-5707",children:"Ambari Metrics System"})," for metrics collection."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Ambari leverages ",(0,s.jsx)(r.a,{href:"https://issues.apache.org/jira/browse/AMBARI-6354",children:"Ambari Alert Framework"})," for system alerting and will notify you when your attention is needed (e.g., a node goes down, remaining disk space is low, etc)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Ambari enables Application Developers and System Integrators to:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Easily integrate Hadoop provisioning, management, and monitoring capabilities to their own applications with the ",(0,s.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/docs/api/v1/index.md",children:"Ambari REST APIs"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"getting-started-with-ambari",children:"Getting Started with Ambari"}),"\n",(0,s.jsxs)(r.p,{children:["Follow the ",(0,s.jsx)(r.a,{href:"/docs/next/quick-start/quick-start-guide",children:"quick start guide for Ambari 3.0.0"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Note: Ambari currently supports the 64-bit version of the following Operating Systems:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Rocky Linux 8"}),"\n",(0,s.jsx)(r.li,{children:"Rocky Linux 9"}),"\n",(0,s.jsx)(r.li,{children:"OpenEuler 22"}),"\n",(0,s.jsx)(r.li,{children:"Other operating systems will be supported in future releases."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"version-information",children:"Version Information"}),"\n",(0,s.jsx)(r.h3,{id:"ambari-300",children:"Ambari 3.0.0"}),"\n",(0,s.jsx)(r.p,{children:"The core components of Apache Ambari for cluster management and monitoring:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Component"}),(0,s.jsx)(r.th,{children:"CPU"}),(0,s.jsx)(r.th,{children:"OS"}),(0,s.jsx)(r.th,{children:"Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ambari-agent"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"ambari-agent-3.0.0.0-0.x86_64.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ambari-server"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"ambari-server-3.0.0.0-0.x86_64.rpm"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"bigtop-stack-330",children:"Bigtop Stack 3.3.0"}),"\n",(0,s.jsx)(r.p,{children:"Apache Bigtop provides a complete Hadoop ecosystem with the following components:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Component"}),(0,s.jsx)(r.th,{children:"CPU"}),(0,s.jsx)(r.th,{children:"OS"}),(0,s.jsx)(r.th,{children:"Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"alluxio"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"alluxio_3_3_0-2.9.3-1.el9.x86_64.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bigtop-groovy"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"bigtop-groovy-2.5.4-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bigtop-jsvc"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"bigtop-jsvc-1.2.4-1.el9.x86_64.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bigtop-select"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"bigtop-select-3.3.0-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bigtop-utils"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"bigtop-utils-3.3.0-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"flink"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"flink_3_3_0-1.16.2-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hadoop"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsxs)(r.td,{children:["hadoop_3_3_0-3.3.6-1.el9.x86_64.rpm ",(0,s.jsx)("br",{})," hadoop_3_3_0-yarn-3.3.6-1.el9.x86_64.rpm"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hbase"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"hbase_3_3_0-2.4.17-1.el9.x86_64.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hive"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"hive_3_3_0-3.1.3-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"kafka"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"kafka_3_3_0-2.8.2-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"livy"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"livy_3_3_0-0.8.0-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ranger"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsxs)(r.td,{children:["ranger_3_3_0-admin-2.4.0-1.el9.x86_64.rpm          ",(0,s.jsx)("br",{}),"ranger_3_3_0-atlas-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-elasticsearch-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-hbase-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-hdfs-plugin-2.4.0-1.el9.x86_64.rpm    ",(0,s.jsx)("br",{}),"ranger_3_3_0-hive-plugin-2.4.0-1.el9.x86_64.rpm    ",(0,s.jsx)("br",{}),"ranger_3_3_0-kafka-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-kms-2.4.0-1.el9.x86_64.rpm            ",(0,s.jsx)("br",{}),"ranger_3_3_0-knox-plugin-2.4.0-1.el9.x86_64.rpm    ",(0,s.jsx)("br",{}),"ranger_3_3_0-kylin-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-presto-plugin-2.4.0-1.el9.x86_64.rpm  ",(0,s.jsx)("br",{}),"ranger_3_3_0-solr-plugin-2.4.0-1.el9.x86_64.rpm    ",(0,s.jsx)("br",{}),"ranger_3_3_0-sqoop-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-storm-plugin-2.4.0-1.el9.x86_64.rpm   ",(0,s.jsx)("br",{}),"ranger_3_3_0-tagsync-2.4.0-1.el9.x86_64.rpm        ",(0,s.jsx)("br",{}),"ranger_3_3_0-usersync-2.4.0-1.el9.x86_64.rpm       ",(0,s.jsx)("br",{}),"ranger_3_3_0-yarn-plugin-2.4.0-1.el9.x86_64.rpm"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"solr"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"solr_3_3_0-8.11.2-2.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spark"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"spark_3_3_0-3.3.4-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tez"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"tez_3_3_0-0.10.2-1.el9.noarch.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zeppelin"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"zeppelin_3_3_0-0.11.0-1.el9.x86_64.rpm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeper"}),(0,s.jsx)(r.td,{children:"x86_64"}),(0,s.jsx)(r.td,{children:"Rocky Linux 9"}),(0,s.jsx)(r.td,{children:"zookeeper_3_3_0-3.7.2-1.el9.x86_64.rpm"})]})]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Note: The above tables show Rocky Linux 9 packages. For other supported operating systems and complete package listings, please visit the ",(0,s.jsx)(r.a,{href:"/docs/next/quick-start/download",children:"Download Page"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"get-involved",children:"Get Involved"}),"\n",(0,s.jsxs)(r.p,{children:["Visit the ",(0,s.jsx)(r.a,{href:"https://cwiki.apache.org/confluence/display/AMBARI/Ambari",children:"Ambari Wiki"})," for design documents, roadmap, development guidelines, etc."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group",children:"Join the Ambari User Meetup Group"}),". You can see the slides from ",(0,s.jsx)(r.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/109316812/",children:"April 2, 2013"}),", ",(0,s.jsx)(r.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/119184782/",children:"June 25, 2013"}),", and ",(0,s.jsx)(r.a,{href:"http://www.meetup.com/Apache-Ambari-User-Group/events/134373312/",children:"September 25, 2013"})," meetups."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);