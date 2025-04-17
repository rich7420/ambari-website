"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[4647],{18218:(e,r,s)=>{s.d(r,{A:()=>a});const a=s.p+"assets/images/stacks-properties-3130770d4091a02de6005b047a03ac2c.png"},24061:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"ambari-design/stack-and-services/stack-properties","title":"Stack Properties","description":"Similar to stack configurations, most properties are defined at the service level, however there are global properties which can be defined at the stack-version level affecting across all services.","source":"@site/versioned_docs/version-2.7.9/ambari-design/stack-and-services/stack-properties.md","sourceDirName":"ambari-design/stack-and-services","slug":"/ambari-design/stack-and-services/stack-properties","permalink":"/docs/2.7.9/ambari-design/stack-and-services/stack-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.9/ambari-design/stack-and-services/stack-properties.md","tags":[],"version":"2.7.9","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Stack Inheritance","permalink":"/docs/2.7.9/ambari-design/stack-and-services/stack-inheritance"},"next":{"title":"Writing metainfo.xml","permalink":"/docs/2.7.9/ambari-design/stack-and-services/writing-metainfo"}}');var n=s(74848),t=s(28453);const i={},o="Stack Properties",c={},p=[];function l(e){const r={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"stack-properties",children:"Stack Properties"})}),"\n",(0,n.jsx)(r.p,{children:"Similar to stack configurations, most properties are defined at the service level, however there are global properties which can be defined at the stack-version level affecting across all services."}),"\n",(0,n.jsxs)(r.p,{children:["Some examples are: ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/properties/stack_tools.json#L2",children:"stack-selector and conf-selector"})," specific names or what ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/properties/stack_features.json#L5",children:"stack versions certain stack features"})," are supported by. Most of these properties were introduced in Ambari 2.4 version in the effort of parameterize stack information and facilitate the reuse of common-services code by other distributions."]}),"\n",(0,n.jsxs)(r.p,{children:["Such properties can be defined in .json format in the ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/tree/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/properties",children:"properties folder"})," of the stack."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:s(18218).A+"",width:"216",height:"188"})}),"\n",(0,n.jsx)(r.h1,{id:"stack-features",children:"Stack features"}),"\n",(0,n.jsx)(r.p,{children:"Stacks can support different features depending on their version, for example: upgrade support, NFS support, support for specific new components (such as Ranger, Phoenix )..."}),"\n",(0,n.jsxs)(r.p,{children:["Stack featurization was added as part of the HDP stack configurations on ",(0,n.jsx)(r.a,{href:"http://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/configuration/cluster-env.xml",children:"HDP/2.0.6/configuration/cluster-env.xml"}),", introducing a new stack_features property which value is processed in the stack engine from an external property file."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'\x3c!-- Define stack_features property in the base stack. DO NOT override this property for each stack version --\x3e\n<property>\n  <name>stack_features</name>\n  <value/>\n  <description>List of features supported by the stack</description>\n  <property-type>VALUE_FROM_PROPERTY_FILE</property-type>\n  <value-attributes>\n    <property-file-name>stack_features.json</property-file-name>\n    <property-file-type>json</property-file-type>\n    <read-only>true</read-only>\n    <overridable>false</overridable>\n    <visible>false</visible>\n  </value-attributes>\n  <on-ambari-upgrade add="true"/>\n</property>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Stack Features properties are defined in ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/properties/stack_features.json",children:"stack_features.json"})," file under /HDP/2.0.6/properties. These features support is now available for access at service-level code to change certain service behaviors or configurations. This is an example of features described in stack_features.jon file:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'"stack_features": [\n    {\n      "name": "snappy",\n      "description": "Snappy compressor/decompressor support",\n      "min_version": "2.0.0.0",\n      "max_version": "2.2.0.0"\n    },\n    {\n      "name": "lzo",\n      "description": "LZO libraries support",\n      "min_version": "2.2.1.0"\n    },\n    {\n      "name": "express_upgrade",\n      "description": "Express upgrade support",\n      "min_version": "2.1.0.0"\n    },\n    {\n      "name": "rolling_upgrade",\n      "description": "Rolling upgrade support",\n      "min_version": "2.2.0.0"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"where min_version/max_version are optional constraints."}),"\n",(0,n.jsxs)(r.p,{children:['Feature constants, matching features names, such has ROLLING_UPGRADE = "rolling_upgrade" has been added to a new StackFeature class in ',(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-common/src/main/python/resource_management/libraries/functions/constants.py#L38",children:"resource_management/libraries/functions/constants.py"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'class StackFeature:\n"""\n  Stack Feature supported\n"""\n  SNAPPY = "snappy"\n  LZO = "lzo"\n  EXPRESS_UPGRADE = "express_upgrade"\n  ROLLING_UPGRADE = "rolling_upgrade"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Additionally, corresponding helper functions has been introduced in ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-common/src/main/python/resource_management/libraries/functions/stack_features.py",children:"resource_management/libraries/functions/stack_fetaures.py"})," to parse the .json file content and called from service code to check if the stack supports the specific feature."]}),"\n",(0,n.jsx)(r.p,{children:"This is an example where the new stack featurization design is used in service code:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'if params.version and check_stack_feature(StackFeature.ROLLING_UPGRADE, params.version):\n      conf_select.select(params.stack_name, "hive", params.version)\n      stack_select.select("hive-server2", params.version)\n'})}),"\n",(0,n.jsx)(r.h1,{id:"stack-tools",children:"Stack Tools"}),"\n",(0,n.jsxs)(r.p,{children:["Similar to stack features, stack-selector and conf-selector tools are now stack-driven instead of hardcoding hdp-select and conf-select. They are defined in ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/properties/stack_tools.json",children:"stack_tools.json"})," file under /HDP/2.0.6/properties"]}),"\n",(0,n.jsxs)(r.p,{children:["And declared as part of the HDP stack configurations as a new property on ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.0.6/configuration/cluster-env.xml",children:"/HDP/2.0.6/configuration/cluster-env.xml"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'\x3c!-- Define stack_tools property in the base stack. DO NOT override this property for each stack version --\x3e\n<property>\n  <name>stack_tools</name>\n  <value/>\n  <description>Stack specific tools</description>\n  <property-type>VALUE_FROM_PROPERTY_FILE</property-type>\n  <value-attributes>\n    <property-file-name>stack_tools.json</property-file-name>\n    <property-file-type>json</property-file-type>\n    <read-only>true</read-only>\n    <overridable>false</overridable>\n    <visible>false</visible>\n  </value-attributes>\n  <on-ambari-upgrade add="true"/>\n</property>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Corresponding helper functions have been added in ",(0,n.jsx)(r.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-common/src/main/python/resource_management/libraries/functions/stack_tools.py",children:"resource_management/libraries/functions/stack_tools.py"}),". These helper functions are used to remove hardcodings in resource_management library."]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var a=s(96540);const n={},t=a.createContext(n);function i(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);