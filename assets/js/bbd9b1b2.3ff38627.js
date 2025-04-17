"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[621],{19337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"ambari-dev/how-to-contribute","title":"How to Contribute","description":"Contributing code changes","source":"@site/docs/ambari-dev/how-to-contribute.md","sourceDirName":"ambari-dev","slug":"/ambari-dev/how-to-contribute","permalink":"/docs/next/ambari-dev/how-to-contribute","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-dev/how-to-contribute.md","tags":[],"version":"current","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"How to Commit","permalink":"/docs/next/ambari-dev/how-to-commit"},"next":{"title":"Compiling Components for Ambari Bigtop Stack","permalink":"/docs/next/ambari-dev/bigtop-guide"}}');var s=n(74848),r=n(28453);const o={},a="How to Contribute",l={},h=[{value:"Contributing code changes",id:"contributing-code-changes",level:2},{value:"Checkout source code",id:"checkout-source-code",level:3},{value:"Keep your Fork Up to Date",id:"keep-your-fork-up-to-date",level:3},{value:"JIRA",id:"jira",level:3},{value:"Pull Request",id:"pull-request",level:3},{value:"Commit and Push changes",id:"commit-and-push-changes",level:4},{value:"Create Pull Request",id:"create-pull-request",level:4},{value:"Jenkins Job",id:"jenkins-job",level:4},{value:"Repeat",id:"repeat",level:4},{value:"Review Process",id:"review-process",level:2},{value:"Apache Ambari Committers",id:"apache-ambari-committers",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-contribute",children:"How to Contribute"})}),"\n",(0,s.jsx)(t.h2,{id:"contributing-code-changes",children:"Contributing code changes"}),"\n",(0,s.jsx)(t.h3,{id:"checkout-source-code",children:"Checkout source code"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Fork the project from Github at ",(0,s.jsx)(t.a,{href:"https://github.com/apache/ambari",children:"https://github.com/apache/ambari"})," if you haven't already"]}),"\n",(0,s.jsx)(t.li,{children:"Clone this fork:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Replace [forked-repository-url] with your git clone url\ngit clone [forked-repository-url] ambari\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Set upstream remote:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd ambari\ngit remote add upstream https://github.com/apache/ambari.git\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keep-your-fork-up-to-date",children:"Keep your Fork Up to Date"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Fetch from upstream remote\ngit fetch upstream\n# Checkout the branch that needs to sync\ngit checkout trunk\n# Merge with remote\ngit merge upstream/trunk\n"})}),"\n",(0,s.jsx)(t.p,{children:"Repeat these steps for all the branches that needs to be synced with the remote."}),"\n",(0,s.jsx)(t.h3,{id:"jira",children:"JIRA"}),"\n",(0,s.jsx)(t.p,{children:"Apache Ambari uses JIRA to track issues including bugs and improvements, and uses Github pull requests to manage code reviews and code merges. Major design changes are discussed in JIRA and implementation changes are discussed in pull requests after a pull request is created."}),"\n",(0,s.jsx)(t.admonition,{title:"Important Changes to JIRA Registration",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"JIRA registration is currently closed to the public"}),"\n",(0,s.jsxs)(t.li,{children:["To get a JIRA account:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Register on ",(0,s.jsx)(t.a,{href:"https://issues.apache.org/jira",children:"Apache JIRA"})]}),"\n",(0,s.jsx)(t.li,{children:"Contact a PMC member to approve your registration"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Alternatively, you can:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Submit your Pull Request first"}),"\n",(0,s.jsx)(t.li,{children:"Community members will help create the corresponding JIRA ticket for you"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Find an existing Apache JIRA that the change pertains to"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Do not create a new JIRA if the change is minor and relates to an existing JIRA; add to the existing discussion and work instead"}),"\n",(0,s.jsx)(t.li,{children:"Look for existing pull requests that are linked from the JIRA, to understand if someone is already working on the JIRA"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the change is new and you have JIRA access, then create a new JIRA:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Provide a descriptive Title"}),"\n",(0,s.jsx)(t.li,{children:"Write a detailed Description. For bug reports, this should ideally include a short reproduction of the problem. For new features, it may include a design document."}),"\n",(0,s.jsxs)(t.li,{children:["Fill the required fields:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Issue Type. Bug and Task are the most frequently used issue types in Ambari."}),"\n",(0,s.jsxs)(t.li,{children:["Priority. Their meaning is roughly:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Blocker: pointless to release without this change as the release would be unusable to a large minority of users"}),"\n",(0,s.jsx)(t.li,{children:"Critical: a large minority of users are missing important functionality without this, and/or a workaround is difficult"}),"\n",(0,s.jsx)(t.li,{children:"Major: a small minority of users are missing important functionality without this, and there is a workaround"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If you don't have JIRA access:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Submit your Pull Request first"}),"\n",(0,s.jsx)(t.li,{children:"In the PR description, clearly describe the issue or improvement"}),"\n",(0,s.jsx)(t.li,{children:"A community member will create a JIRA ticket and link it to your PR"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"pull-request",children:"Pull Request"}),"\n",(0,s.jsxs)(t.p,{children:["Apache Ambari uses ",(0,s.jsx)(t.a,{href:"https://github.com/apache/ambari/pulls",children:"Github pull requests"})," to review and merge changes to the source code. Before creating a pull request, one must have a fork of apache/ambari checked out. Follow instructions in step 1 to create a fork if you haven't already."]}),"\n",(0,s.jsx)(t.h4,{id:"commit-and-push-changes",children:"Commit and Push changes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a branch AMBARI-XXXXX-branchName before starting to make any code changes. Ex: If the Fix Version of the JIRA you are working on is 2.6.2, then create a branch based on branch-2.6"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git checkout branch-2.6\ngit pull upstream branch-2.6\ngit checkout -b AMBARI-XXXXX-branch-2.6\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Mark the status of the related JIRA as "In Progress" to let others know that you have started working on the JIRA.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make changes to the code and commit them to the newly created branch."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run all the tests that are applicable and make sure that all unit tests pass"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Push your changes. Provide your Github user id and ",(0,s.jsx)(t.a,{href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/",children:"personal access token"})," when asked for user name and password"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git push origin AMBARI-XXXXX-branch-2.6\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"create-pull-request",children:"Create Pull Request"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to your fork in Github and ",(0,s.jsx)(t.a,{href:"https://help.github.com/articles/creating-a-pull-request-from-a-fork/",children:"create a pull request"}),". The pull request needs to be opened against the branch you want the patch to land."]}),"\n",(0,s.jsxs)(t.p,{children:["The pull request title should be of the form ",(0,s.jsx)(t.strong,{children:"[AMBARI-xxxx] Title"}),", where AMBARI-xxxx is the relevant JIRA number"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the pull request is still a work in progress, and so is not ready to be merged, but needs to be pushed to Github to facilitate review, then add ",(0,s.jsx)(t.strong,{children:"[WIP]"})," after the ",(0,s.jsx)(t.strong,{children:"AMBARI-XXXX"})]}),"\n",(0,s.jsx)(t.li,{children:"Consider identifying committers or other contributors who have worked on the code being changed. Find the file(s) in Github and click \u201cBlame\u201d to see a line-by-line annotation of who changed the code last. You can add @username in the PR description or as a comment to request review from a developer."}),"\n",(0,s.jsx)(t.li,{children:'Note: Contributors do not have access to edit or add reviewers in the "Reviewers" widget. Contributors can only @mention to get the attention of committers.'}),"\n",(0,s.jsx)(t.li,{children:'The related JIRA will automatically have a link to the PR as shown below. Mark the status of JIRA as "Patch Available" manually.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(77429).A+"",width:"1862",height:"812"})}),"\n",(0,s.jsx)(t.h4,{id:"jenkins-job",children:"Jenkins Job"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Jenkins Job is configured to be triggered everytime a new pull request is created. The job is configured to perform the following tasks:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Validate the merge"}),"\n",(0,s.jsx)(t.li,{children:"Build Ambari"}),"\n",(0,s.jsx)(t.li,{children:"Run unit tests"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"It reports the outcome of the build as an integrated check in the pull request as shown below."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(81722).A+"",width:"1480",height:"530"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It is the responsibility of the contributor of the pull request to make sure that the build passes. Pull requests should not be merged if the Jenkins job fails to validate the merge."}),"\n",(0,s.jsx)(t.li,{children:'To re-trigger the build job, just comment "retest this please" in the PR. Visit this page to check the latest build jobs.'}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"repeat",children:"Repeat"}),"\n",(0,s.jsx)(t.p,{children:"Repeat the above steps for patches that needs to land in multiple branches. Ex: If a patch needs to be committed to branches branch-2.6 and trunk, then you need to create two branches and open two pull requests by following the above steps."}),"\n",(0,s.jsx)(t.h2,{id:"review-process",children:"Review Process"}),"\n",(0,s.jsxs)(t.p,{children:["Ambari uses Github for code reviews. All committers are required to follow the instructions in this ",(0,s.jsx)(t.a,{href:"https://gitbox.apache.org/setup/",children:"page"})," and link their github accounts with gitbox to gain Merge access to ",(0,s.jsx)(t.a,{href:"https://github.com/apache/ambari",children:"apache/ambari"})," in github."]}),"\n",(0,s.jsxs)(t.p,{children:["To try out the changes locally, you can checkout the pull request locally by following the instructions in this ",(0,s.jsx)(t.a,{href:"https://help.github.com/articles/checking-out-pull-requests-locally/",children:"guide"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Other reviewers, including committers can try out the changes locally and either approve or give their comments as suggestions on the pull request by submitting a review on the pull request. More help can be found here."}),"\n",(0,s.jsx)(t.li,{children:"If more changes are required, reviewers are encouraged to leave their comments on the lines of code that require changes. The author of the pull request can then update the code and push another commit to the same branch to update the pull request and notify the committers."}),"\n",(0,s.jsx)(t.li,{children:'The pull request can be merged if atleast one committer has approved it or commented "LGTM" which means "Looks Good To Me" and the jenkins job validated the merge successfully. If you comment LGTM you will be expected to help with bugs or follow-up issues on the patch. (Remember committers cannot review their own patch. If a committer opens a PR, they should make sure that another committer reviews it.)'}),"\n",(0,s.jsxs)(t.li,{children:["Sometimes, other changes might be merged which conflict with the pull request\u2019s changes. The PR can\u2019t be merged until the conflict is resolved. This can be resolved by running ",(0,s.jsx)(t.strong,{children:"git fetch"})," upstream followed by git rebase ",(0,s.jsx)(t.strong,{children:"upstream/[branch-name]"})," and resolving the conflicts by hand, then pushing the result to your branch."]}),"\n",(0,s.jsx)(t.li,{children:'If a PR is merged, promptly close the PR and resolve the JIRA as "Fixed".'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"apache-ambari-committers",children:"Apache Ambari Committers"}),"\n",(0,s.jsxs)(t.p,{children:["Please read more on Apache Committers at: ",(0,s.jsx)(t.a,{href:"http://www.apache.org/dev/committers.html",children:"http://www.apache.org/dev/committers.html"})]}),"\n",(0,s.jsx)(t.p,{children:"In general a contributor that makes sustained, welcome contributions to the project may be invited to become a committer, though the exact timing of such invitations depends on many factors. Sustained contributions over 6 months is a welcome sign of contributor showing interest in the project. A contributor receptive to feedback and following development guidelines stated above is a good sign for being a committer to the project. We have seen contributors contributing 20-30 patches become committers but again this is very subjective and can vary on the patches submitted to the project. Ultimately it is the Ambari PMC that suggests and votes for committers in the project."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},77429:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pull-request-11e69b4f41b113947410baee635d365a.png"},81722:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/jenkins-job-746391c8fc8fa38c0972eae1f430235e.png"}}]);