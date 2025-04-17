"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8107],{28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:t},e.children)}},44328:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ambari-design/metrics/stack-defined-metrics","title":"Stack Defined Metrics","description":"The Ambari Stack definition represents the complete declarative description of Services that are comprised in a cluster.","source":"@site/versioned_docs/version-2.7.8/ambari-design/metrics/stack-defined-metrics.md","sourceDirName":"ambari-design/metrics","slug":"/ambari-design/metrics/stack-defined-metrics","permalink":"/docs/2.7.8/ambari-design/metrics/stack-defined-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.8/ambari-design/metrics/stack-defined-metrics.md","tags":[],"version":"2.7.8","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Ambari Metrics API specification","permalink":"/docs/2.7.8/ambari-design/metrics/metrics-api-specification"},"next":{"title":"Upgrading Ambari Metrics System","permalink":"/docs/2.7.8/ambari-design/metrics/upgrading-ambari-metrics-system"}}');var n=s(74848),r=s(28453);const c={},a="Stack Defined Metrics",d={},o=[];function l(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"stack-defined-metrics",children:"Stack Defined Metrics"})}),"\n",(0,n.jsx)(t.p,{children:"The Ambari Stack definition represents the complete declarative description of Services that are comprised in a cluster."}),"\n",(0,n.jsx)(t.p,{children:"The stack definition also contains a definition file for all metrics that are supported by the Service."}),"\n",(0,n.jsx)(t.p,{children:"Presently the metrics.json describes the mapping between the metrics name requested in the REST API and the metrics name to use for making a call to the Metrics Service."}),"\n",(0,n.jsxs)(t.p,{children:["Location of the ",(0,n.jsx)(t.strong,{children:"metrics.json"})," in the stack:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Level"}),(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cluster & Host"}),(0,n.jsx)(t.td,{children:"ganglia_properties.json"}),(0,n.jsx)(t.td,{children:"Presently, this file defines metrics for Host Component and Service Components as well but these are only used for older versions of stack < 2.0 and unit tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The Cluster and Host sections of this json file drive the Dashboard graphs."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Component & Host Component"}),(0,n.jsx)(t.td,{children:"common-services.<SERVICE_NAME>"}),(0,n.jsx)(t.td,{children:"This file contains definition of metrics mapping for Ambari Metrics (type = ganglia) and JMX."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": The individual stacks that override behavior from common services can redefine the metrics.json file, the inheritance is all-or-nothing, meaning if metrics.json file is present in the child stack, it will override the metrics.json from common-services"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Structure of metrics.json file"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Allowed Values"}),(0,n.jsx)(t.th,{children:"Comments"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:'"ganglia" / "jmx"'}),(0,n.jsx)(t.td,{children:"type = ganglia implies Metrics Service request fulfilled by either a Ganglia (up to version 2.0) or Ambari Metrics (2.0 and above) backend service, this decision is taken by Ambari server at runtime."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Category"}),(0,n.jsx)(t.td,{children:'"default" / "performance" ...'}),(0,n.jsx)(t.td,{children:"This is to group metrics into subsets for better navigability"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Metrics"}),(0,n.jsxs)(t.td,{children:["metricKey : ",(0,n.jsx)(t.code,{children:'{ "metricName": "", "pointInTime": "", "temporal": "" }'})]}),(0,n.jsx)(t.td,{children:"metricKey = Key to be used by REST API. This is unique for a service and identifies the requested metric as well as what endpoint to use for serving the data (AMS vs JMX)"})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"metricName = Name to use for the Metrics Service backend"}),"\n",(0,n.jsx)(t.li,{children:"pointInTime = Get latest value, no time range query allowed"}),"\n",(0,n.jsx)(t.li,{children:"temporal = Time range query supported"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n\n  "NAMENODE": {\n\n    "Component": [\n\n      {\n\n        "type": "ganglia",\n\n        "metrics": {\n\n          "default": {\n\n            "metrics/dfs/FSNamesystem/TotalLoad": {\n\n              "metric": "dfs.FSNamesystem.TotalLoad",\n\n              "pointInTime": false,\n\n              "temporal": true\n\n            }\n\n        } ]\n\n    },\n\n    "HostComponent" : [\n\n         { "type" : "ganglia", ... }\n\n         {  "type" : "jmx", .... }\n\n   ]\n\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Sample API calls to retrieve metric definitions"}),":"]}),"\n",(0,n.jsx)(t.p,{children:"Service metrics:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Template => http://<ambari-server>:<port>/api/v1/stacks/<stackName>/versions/<stackVersion>/services/<serviceName>/artifacts/metrics_descriptor\nExample => http://localhost:8080/api/v1/stacks/HDP/versions/2.3/services/HDFS/artifacts/metrics_descriptor\n"})}),"\n",(0,n.jsx)(t.p,{children:"Cluster & Host metrics:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Template => http://<ambari-server>:<port>/api/v1/stacks/<stackName>/versions/<stackVersion>/artifacts/metrics_descriptor\nExample => http://localhost:8080/api/v1/stacks/HDP/versions/2.3/artifacts/metrics_descriptor\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);