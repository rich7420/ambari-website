"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[2565],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},45825:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ambari-design/stack-and-services/hooks","title":"Hooks","description":"A stack can add during the following points in Ambari actions:","source":"@site/docs/ambari-design/stack-and-services/hooks.md","sourceDirName":"ambari-design/stack-and-services","slug":"/ambari-design/stack-and-services/hooks","permalink":"/docs/next/ambari-design/stack-and-services/hooks","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-design/stack-and-services/hooks.md","tags":[],"version":"current","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"FAQ","permalink":"/docs/next/ambari-design/stack-and-services/faq"},"next":{"title":"Version functions: conf-select and stack-select","permalink":"/docs/next/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select"}}');var t=s(74848),r=s(28453);const o={},a="Hooks",c={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hooks",children:"Hooks"})}),"\n",(0,t.jsx)(n.p,{children:"A stack can add during the following points in Ambari actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"before ANY"}),"\n",(0,t.jsx)(n.li,{children:"before and after INSTALL"}),"\n",(0,t.jsx)(n.li,{children:"before RESTART"}),"\n",(0,t.jsx)(n.li,{children:"before START"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned in ",(0,t.jsx)(n.a,{href:"/docs/next/ambari-design/stack-and-services/stack-inheritance",children:"Stack Inheritance"}),", the hooks directory if defined in the current stack version replace those from the parent stack version. This means the files included in those directories at the parent level will not be inherited. You will need to copy all the files you wish to keep from that directory structure."]}),"\n",(0,t.jsx)(n.p,{children:"The hooks directory should have 5 sub-directories:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"after-INSTALL"}),"\n",(0,t.jsx)(n.li,{children:"before-ANY"}),"\n",(0,t.jsx)(n.li,{children:"before-INSTALL"}),"\n",(0,t.jsx)(n.li,{children:"before-RESTART"}),"\n",(0,t.jsx)(n.li,{children:"before-START"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each hook directory can have 3 sub-directories:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"files"}),"\n",(0,t.jsx)(n.li,{children:"scripts"}),"\n",(0,t.jsx)(n.li,{children:"templates"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The scripts directory is the main directory and must be supplied. This must contain a hook.py file. It may contain other python scripts which initialize variables (like a params.py file) or other utility files contain functions used in the hook.py file."}),"\n",(0,t.jsx)(n.p,{children:"The files directory can any non-python files such as scripts, jar or properties files."}),"\n",(0,t.jsx)(n.p,{children:"The templates folder can contain any required j2 files that are used to set up properties files."}),"\n",(0,t.jsx)(n.p,{children:"The hook.py file should extend the Hook class defined in resource_management/libraries/script/hook.py. The naming convention is to name the hook class after the hook folder such as AfterInstallHook if the class is in the after-INSTALL folder. The hook.py file must define the hook(self, env) function. Here is an example hook:"}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'from resource_management.libraries.script.hook import Hook\n \nclass AfterInstallHook(Hook):\n \n  def hook(self, env):\n    import params\n    env.set_params(params)\n    # Call any functions to set up the stack after install\n \nif __name__ == "__main__":\n  AfterInstallHook().execute()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);