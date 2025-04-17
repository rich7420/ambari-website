"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[4645],{14460:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/widget-browser-603bd739e713b2ac5e16c9dfba2510ba.png"},28102:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/create-widget-5562f4970ac860e8c49a98ac2b504e77.png"},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(96540);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}},43797:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"ambari-design/service-dashboard/index","title":"Enhanced Service Dashboard","description":"This feature was first introduced in Ambari 2.1.0 release. Any Ambari release before 2.1.0 does not support this feature. Cluster is required to be upgraded to Ambari 2.1.0 or above to use this feature.","source":"@site/versioned_docs/version-3.0.0/ambari-design/service-dashboard/index.mdx","sourceDirName":"ambari-design/service-dashboard","slug":"/ambari-design/service-dashboard/","permalink":"/docs/3.0.0/ambari-design/service-dashboard/","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-3.0.0/ambari-design/service-dashboard/index.mdx","tags":[],"version":"3.0.0","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Enhanced Configs","permalink":"/docs/3.0.0/ambari-design/enhanced-configs/"},"next":{"title":"Metrics","permalink":"/docs/3.0.0/ambari-design/metrics/"}}');var s=n(74848),r=n(28453);const a={},o="Enhanced Service Dashboard",d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Service Dashboard Widgets",id:"service-dashboard-widgets",level:2},{value:"Graph",id:"graph",level:3},{value:"Graph Widget Definition",id:"graph-widget-definition",level:3},{value:"Gauge",id:"gauge",level:3},{value:"Number",id:"number",level:3},{value:"Template",id:"template",level:3},{value:"Widget Operations:",id:"widget-operations",level:2},{value:"Widget Browser",id:"widget-browser",level:2},{value:"Create Widget Wizard",id:"create-widget-wizard",level:3},{value:"Using Enhanced Service Dashboard feature",id:"using-enhanced-service-dashboard-feature",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"enhanced-service-dashboard",children:"Enhanced Service Dashboard"})}),"\n",(0,s.jsx)(i.p,{children:"This feature was first introduced in Ambari 2.1.0 release. Any Ambari release before 2.1.0 does not support this feature. Cluster is required to be upgraded to Ambari 2.1.0 or above to use this feature."}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsxs)(i.p,{children:["This document assumes that the service metrics are being exposed via Ambari. If this is not the case then please refer to ",(0,s.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/AMBARI/Metrics",children:"Metrics "})," document for more related information."]})}),"\n",(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"The term Enhanced Service Dashboard is used for being able to seamlessly add new widgets to the service summary page and heatmap page. This feature enables stack service to be packaged with the widget definitions in the JSON format. These widget definitions will appear as default widgets on the service summary page and heatmap page on service installation. In addition new widgets for the service can be created any time on the deployed cluster."}),"\n",(0,s.jsx)(i.p,{children:"Displaying default service dashboard widgets on service installation is a 3 step process:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Push service metrics to Ambari Metric Collector."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Declare service metrics in service's metrics.json file of Ambari. This step is required to expose metrics via Ambari RESTful API."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Define service widgets in the widgets.jsonfile."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"Widget gets the data to be charted from the service metrics. It is important to validate that the required service metrics are being exposed from Ambari metrics endpoint before defining a widget."})}),"\n",(0,s.jsx)(i.h2,{id:"service-dashboard-widgets",children:"Service Dashboard Widgets"}),"\n",(0,s.jsx)(i.p,{children:"Ambari supports 4 widget types:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Graph"}),"\n",(0,s.jsx)(i.li,{children:"Gauge"}),"\n",(0,s.jsx)(i.li,{children:"Number"}),"\n",(0,s.jsx)(i.li,{children:"Template"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"graph",children:"Graph"}),"\n",(0,s.jsxs)(i.p,{children:["A widget to display line or area graphs that are derived from one or more than one service metrics value over a range of time.\n",(0,s.jsx)(i.img,{src:n(59656).A+"",title:"Graphs",width:"989",height:"177"})]}),"\n",(0,s.jsx)(i.h3,{id:"graph-widget-definition",children:"Graph Widget Definition"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n "widget_name": "Memory Utilization",\n "description": "Percentage of total memory allocated to containers running in the cluster.",\n "widget_type": "GRAPH",\n "is_visible": true,\n "metrics": [\n   {\n     "name": "yarn.QueueMetrics.Queue=root.AllocatedMB",\n     "metric_path": "metrics/yarn/Queue/root/AllocatedMB",\n     "service_name": "YARN",\n     "component_name": "RESOURCEMANAGER",\n     "host_component_criteria": "host_components/HostRoles/ha_state=ACTIVE"\n   },\n   {\n     "name": "yarn.QueueMetrics.Queue=root.AvailableMB",\n     "metric_path": "metrics/yarn/Queue/root/AvailableMB",\n     "service_name": "YARN",\n     "component_name": "RESOURCEMANAGER",\n     "host_component_criteria": "host_components/HostRoles/ha_state=ACTIVE"\n   }\n ],\n "values": [\n   {\n     "name": "Memory Utilization",\n     "value": "${(yarn.QueueMetrics.Queue=root.AllocatedMB / (yarn.QueueMetrics.Queue=root.AllocatedMB + yarn.QueueMetrics.Queue=root.AvailableMB)) * 100}"\n   }\n ],\n "properties": {\n   "display_unit": "%",\n   "graph_type": "LINE",\n   "time_range": "1"\n }\n}\n'})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"widget_name:"})," This is the name that will be displayed in the UI for the widget."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"**description:**Description for the widget that will be displayed in the UI."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"**widget_type:**This information is used by the widget to create the widget from the metric data."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"is_visible:"})," This boolean decides if the widget is shown on the service summary page by default or not."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"metrics:"})," This is an array that includes all metrics definitions comprising the widget."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"metrics/name:"})," Actual n ame of the metric as being pushed to the sink or emitted as JMX property by the service."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"metrics/metric_path"})," ",(0,s.jsx)(i.strong,{children:":"})," This is the path to which above mentioned metrics/name is mapped in metrics.json file for the service. Metric value will be exposed in the metrics attribute of the service component or host component endpoint of the Ambari API at the same path."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"**metrics/service_name:**Name of the service containing the component emitting the metric."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"**metrics/component_name:**Name of the component emitting the metric."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"**metrics/host_component_criteria:**This is an optional field. Presence of this field means that the metric is host component metric and not a service component metric. If a metric is intended to be queried on host component endpoint then the criteria for choosing the host component needs to be specified over here. If this is left as a single space string then the first found host component will be queried for the metric."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"values:"})," This is an array of datasets for the Graph widget. For other widget types this array always has one element."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"values/name:"})," This field is used only for Graph widget type. This shows up as a label name in the legend for the dataset shown in a Graph widget type."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"values/value:"})," This is the expression from which the value for the dataset is calculated. Expression contains references to the declared metric name and constant numbers which acts as valid operands. Expression also contains a valid set of operators (",(0,s.jsx)(i.code,{children:"+"}),", ",(0,s.jsx)(i.code,{children:"-"}),", ",(0,s.jsx)(i.code,{children:"*"}),", ",(0,s.jsx)(i.code,{children:"/"}),") that can be used along with valid operands. Parentheses are also permitted in the expression."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"properties:"})," These contains set of properties specific to the widget type. For Graph widget type it contains display_unit, graph_type and time_range. time_range field is currently not honored in the UI."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"gauge",children:"Gauge"}),"\n",(0,s.jsxs)(i.p,{children:["A widget to display percentage calculated from current value of a metric or current values of more than one metric.\n",(0,s.jsx)(i.img,{src:n(93534).A+"",title:"Gauge",width:"206",height:"165"})]}),"\n",(0,s.jsx)(i.h3,{id:"number",children:"Number"}),"\n",(0,s.jsx)(i.p,{children:"A widget to display a number optionally with a unit that can be calculated from the current value of a metric or current values of more than one metric."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(90900).A+"",title:"Number",width:"391",height:"178"})}),"\n",(0,s.jsx)(i.h3,{id:"template",children:"Template"}),"\n",(0,s.jsx)(i.p,{children:"A widget to display one or more numbers calculated from current value of a metric or current values of more than one metric along with the embedded string."}),"\n",(0,s.jsx)(i.p,{children:"Aggregator function for the Metric"}),"\n",(0,s.jsx)(i.p,{children:"Aggregator function are related to only service component level metrics and are not supported for host component level metrics."}),"\n",(0,s.jsx)(i.p,{children:"Ambari Metrics System supports 4 type of aggregation:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"max"}),": Maximum value of the metric across all host components"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"min"}),": Minimum value of the metric across all host components"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"avg"}),": Average value of the metric across all host components"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"sum"}),": Sum of metric value recorded for each host components"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By default Ambari Metrics System uses the average aggregator function while computing value for a service component metric but this behavior can be overridden by suffixing metric name with the aggregator function name (._max ,._min ,._avg and ._sum )."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n "widget_name": "Blocked Updates",\n "description": "Number of milliseconds updates have been blocked so the memstore can be flushed.",\n "default_section_name": "HBASE_SUMMARY",\n "widget_type": "GRAPH",\n "is_visible": true,\n "metrics": [\n   {\n     "name": "regionserver.Server.updatesBlockedTime._sum",\n     "metric_path": "metrics/hbase/regionserver/Server/updatesBlockedTime._sum",\n     "service_name": "HBASE",\n     "component_name": "HBASE_REGIONSERVER"\n   }\n ],\n "values": [\n   {\n     "name": "Updates Blocked Time",\n     "value": "${regionserver.Server.updatesBlockedTime._sum}"\n   }\n ],\n "properties": {\n   "display_unit": "ms",\n   "graph_type": "LINE",\n   "time_range": "1"\n }\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"widget-operations",children:"Widget Operations:"}),"\n",(0,s.jsx)(i.p,{children:"A Service that has widgets.json and metrics.json file will also be provided with following abilities:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Widget Browser"})," for performing widget related operations."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Create widget wizard"})," for creating new desired service widgets in a cluster."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Edit widget wizard"})," for editing service widgets post creation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"widget-browser",children:"Widget Browser"}),"\n",(0,s.jsxs)(i.p,{children:["Widget Browser is the place from which actions can be performed on widgets like adding/removing a widget from the dashboard, sharing widget with other users and deleting a widget.While creating new widget, user can choose to share the widget with other users or not. All widgets that are created by the user + shared with the user + defined in the stack as default service widgets will be available in the widget browser of a user.\n",(0,s.jsx)(i.img,{src:n(14460).A+"",title:"Widget Browser",width:"1716",height:"1146"})]}),"\n",(0,s.jsx)(i.h3,{id:"create-widget-wizard",children:"Create Widget Wizard"}),"\n",(0,s.jsxs)(i.p,{children:["A custom desired widget can be created from the exposed service metrics using 3 step Create Widget wizard.\n",(0,s.jsx)(i.img,{src:n(28102).A+"",title:"Create Widget",width:"1154",height:"480"})]}),"\n",(0,s.jsx)(i.h2,{id:"using-enhanced-service-dashboard-feature",children:"Using Enhanced Service Dashboard feature"}),"\n",(0,s.jsx)(i.p,{children:"If the existing service in Ambari is pushing the metrics to Ambari metrics collector then minimal work needs to be done. This includes adding metrics.json and widgets.json file for the service, and might include making changes to metainfo.xml file."}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/AMBARI-9910",children:"AMBARI-9910"})," added widgets to Accumulo service page. This work can be referred as an example to use Enhanced Service Dashboard feature."]})})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59656:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/graphs-769c406c2ace47265ad7f0a0fb2ab122.png"},90900:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/number-0084f036ea8ce9a13ce1b2652b8e2044.png"},93534:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gauge-39820bee06f707d0e80caa8a195541f3.png"}}]);