"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[9346],{28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(96540);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}},72472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ambari-dev/index","title":"Ambari Development","description":"Checking out Ambari source","source":"@site/versioned_docs/version-2.7.9/ambari-dev/index.md","sourceDirName":"ambari-dev","slug":"/ambari-dev/","permalink":"/docs/2.7.9/ambari-dev/","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.9/ambari-dev/index.md","tags":[],"version":"2.7.9","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"View Definition","permalink":"/docs/2.7.9/ambari-design/views/view-definition"},"next":{"title":"Development Process for New Major Features","permalink":"/docs/2.7.9/ambari-dev/development-process-for-new-major-features"}}');var s=r(74848),a=r(28453);const t={},l="Ambari Development",c={},o=[{value:"Checking out Ambari source",id:"checking-out-ambari-source",level:2},{value:"Tools needed to build Ambari",id:"tools-needed-to-build-ambari",level:2},{value:"Running Unit Tests",id:"running-unit-tests",level:2},{value:"Generating Findbugs Report",id:"generating-findbugs-report",level:2},{value:"Building Ambari",id:"building-ambari",level:2},{value:"Setting the Version Using Maven",id:"setting-the-version-using-maven",level:2},{value:"Building Ambari Metrics",id:"building-ambari-metrics",level:2},{value:"Running the Ambari Server",id:"running-the-ambari-server",level:2},{value:"Install and Start the Ambari Agent Manually on Each Host in the Cluster",id:"install-and-start-the-ambari-agent-manually-on-each-host-in-the-cluster",level:2},{value:"Setting up Ambari in Eclipse",id:"setting-up-ambari-in-eclipse",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ambari-development",children:"Ambari Development"})}),"\n",(0,s.jsx)(n.h2,{id:"checking-out-ambari-source",children:"Checking out Ambari source"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the instructions under ",(0,s.jsx)(n.a,{href:"/docs/2.7.9/ambari-dev/how-to-contribute",children:"Checkout source code"}),' section of "How to contribute" guide.']}),"\n",(0,s.jsxs)(n.p,{children:['We\'ll refer to the top-level "ambari" directory as ',(0,s.jsx)(n.code,{children:"AMBARI_DIR"})," in this document."]}),"\n",(0,s.jsx)(n.h2,{id:"tools-needed-to-build-ambari",children:"Tools needed to build Ambari"}),"\n",(0,s.jsx)(n.p,{children:"The following tools are needed to build Ambari from source."}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can easily launch a VM that is preconfigured with all the tools that you need. See the ",(0,s.jsx)(n.strong,{children:"Pre-Configured Development Environment"})," section in the ",(0,s.jsx)(n.a,{href:"/docs/2.7.9/quick-start/quick-start-guide",children:"Quick Start Guide"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"xCode (if using Mac - free download from the apple store)"}),"\n",(0,s.jsx)(n.li,{children:"JDK 8 (Ambari 2.6 and below can be compiled with JDK 7, from Ambari 2.7, it can be compiled with at least JDK 8)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://maven.apache.org/download.html",children:"Apache Maven"})," 3.3.9 or later Tip",":In"," order to persist your changes to the JAVA_HOME environment variable and add Maven to your path, create the following files: File: ~/.profile"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n",(0,s.jsx)(n.p,{children:"File: ~/.bashrc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export PATH=/usr/local/apache-maven-3.3.9/bin:$PATH\nexport JAVA_HOME=$(/usr/libexec/java_home)\nexport _JAVA_OPTIONS="-Xmx2048m -XX:MaxPermSize=512m -Djava.awt.headless=true"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python 2.6 (Ambari 2.7 or later require Python 2.7 as minimum supported version)"}),"\n",(0,s.jsxs)(n.li,{children:["Python setuptools: for Python 2.6: D ",(0,s.jsx)(n.a,{href:"http://pypi.python.org/packages/2.6/s/setuptools/setuptools-0.6c11-py2.6.egg#md5=bfa92100bd772d5a213eedd356d64086",children:"ownload"})," setuptools and run:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sh setuptools-0.6c11-py2.6.egg\n"})}),"\n",(0,s.jsxs)(n.p,{children:["for Python 2.7: D ",(0,s.jsx)(n.a,{href:"https://pypi.python.org/packages/2.7/s/setuptools/setuptools-0.6c11-py2.7.egg#md5=fe1f997bc722265116870bc7919059ea",children:"ownload"})," setuptools and run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sh setuptools-0.6c11-py2.7.egg\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rpmbuild (rpm-build package)"}),"\n",(0,s.jsx)(n.li,{children:"g++ (gcc-c++ package)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-unit-tests",children:"Running Unit Tests"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"mvn clean test"})}),"\n",(0,s.jsx)(n.li,{children:"Run unit tests in a single module:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server test\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run only Java tests:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server -DskipPythonTests\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run only specific Java tests:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server -DskipPythonTests -Dtest=AgentHostInfoTest test\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run only Python tests:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server -DskipSurefireTests test\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run only specific Python tests:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server -DskipSurefireTests -Dpython.test.mask=TestUtils.py test\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run only Checkstyle and RAT checks:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn -pl ambari-server -DskipTests test\n"})}),"\n",(0,s.jsx)(n.p,{children:"NOTE: Please make sure you have npm in the path before running the unit tests."}),"\n",(0,s.jsx)(n.h2,{id:"generating-findbugs-report",children:"Generating Findbugs Report"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"mvn clean install"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This will generate xml and html report unders target/findbugs. You can also add flags to skip unit tests to generate report faster."}),"\n",(0,s.jsx)(n.h2,{id:"building-ambari",children:"Building Ambari"}),"\n",(0,s.jsx)(n.p,{children:"Note: if you can an error that too many files are open while building, then run: ulimit -n 10000 (for example)"}),"\n",(0,s.jsx)(n.p,{children:"To build Ambari RPMs, run the following."}),"\n",(0,s.jsxs)(n.p,{children:["Note: Replace ",(0,s.jsx)(n.code,{children:"${AMBARI_VERSION}"})," with a 4-digit version you want the artifacts to be (e.g., -DnewVersion=1.6.1.1)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": If running into errors while compiling the ambari-metrics package due to missing the artifacts of jms, jmxri, jmxtools:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[ERROR] Failed to execute goal on project ambari-metrics-kafka-sink: Could not resolve dependencies for project org.apache.ambari:ambari-metrics-kafka-sink:jar:2.0.0-0: The following artifacts could not be resolved: javax.jms:jms:jar:1.1, com.sun.jdmk:jmxtools:jar:1.2.1, com.sun.jmx:jmxri:jar:1.2.1: Could not transfer artifact javax.jms:jms:jar:1.1 from/to java.net (https://maven-repository.dev.java.net/nonav/repository): No connector available to access repository java.net (https://maven-repository.dev.java.net/nonav/repository) of type legacy using the available factories WagonRepositoryConnectorFactory\n"})}),"\n",(0,s.jsx)(n.p,{children:"The work around is to manually install the three missing artifacts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mvn install:install-file -Dfile=jms-1.1.pom -DgroupId=javax.jms -DartifactId=jms -Dversion=1.1 -Dpackaging=jar\nmvn install:install-file -Dfile=jmxtools-1.2.1.pom -DgroupId=com.sun.jdmk -DartifactId=jmxtools -Dversion=1.2.1 -Dpackaging=jar\nmvn install:install-file -Dfile=jmxri-1.2.1.pom -DgroupId=com.sun.jmx -DartifactId=jmxri -Dversion=1.2.1 -Dpackaging=jar\n\nIf when compiling it seems stuck, and you've already increased Java and Maven heapsize, it could be that Ambari Views has a lot of artifacts, and the rat-check is choking up. In this case, try running\n\ngit clean -df (this will remove untracked files and directories)\nmvn clean package -DskipTests -Drat.ignoreErrors=true\nor\nmvn clean package -DskipTests -Drat.skip\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-the-version-using-maven",children:"Setting the Version Using Maven"}),"\n",(0,s.jsx)(n.p,{children:"Ambari 2.8+ uses a newer method to update the version when building Ambari."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RHEL/CentOS 6"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Update the revision property to the release version\nmvn versions:set-property -Dproperty=revision -DnewVersion=2.8.0.0.0\n\nmvn -B clean install package rpm:rpm -DskipTests -Dpython.ver="python >= 2.6" -Preplaceurl\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SUSE/SLES 11"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Update the revision property to the release version\nmvn versions:set-property -Dproperty=revision -DnewVersion=2.8.0.0.0\n\nmvn -B clean install package rpm:rpm -DskipTests -Psuse11 -Dpython.ver="python >= 2.6" -Preplaceurl\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ubuntu 12"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Update the revision property to the release version\nmvn versions:set-property -Dproperty=revision -DnewVersion=2.8.0.0.0\n\nmvn -B clean install package jdeb:jdeb -DskipTests -Dpython.ver="python >= 2.6" -Preplaceurl\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ambari Server will create following packages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["RPM will be created under ",(0,s.jsx)(n.code,{children:"AMBARI_DIR"}),"/ambari-server/target/rpm/ambari-server/RPMS/noarch."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["DEB will be created under ",(0,s.jsx)(n.code,{children:"AMBARI_DIR"}),"/ambari-server/target/"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ambari Agent will create following packages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["RPM will be created under ",(0,s.jsx)(n.code,{children:"AMBARI_DIR"}),"/ambari-agent/target/rpm/ambari-agent/RPMS/x86_64."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["DEB will be created under ",(0,s.jsx)(n.code,{children:"AMBARI_DIR"}),"/ambari-agent/target"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optional parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"-X -e: add these options for more verbose output by Maven. Useful when debugging Maven issues."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"-DdefaultStackVersion=STACK-VERSION"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sets the default stack and version to be used for installation (e.g., -DdefaultStackVersion=HDP-1.3.0)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"-DenableExperimental=true"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enables experimental features to be available via Ambari Web (default is false)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["All views can be packaged in RPM by adding ",(0,s.jsx)(n.em,{children:"-Dviews"})," parameter"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["mvn -B clean install package rpm",":rpm"," -Dviews -DskipTests"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specific views can be built by adding ",(0,s.jsx)(n.code,{children:"--projects"})," parameter to the ",(0,s.jsx)(n.em,{children:"-Dviews"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["mvn -B clean install package rpm",":rpm"," --projects ambari-web,ambari-project,ambari-views,ambari-admin,contrib/views/files,contrib/views/pig,ambari-server,ambari-agent,ambari-client,ambari-shell -Dviews -DskipTests"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["NOTE: Run everything as ",(0,s.jsx)(n.code,{children:"root"})," below."]})}),"\n",(0,s.jsx)(n.h2,{id:"building-ambari-metrics",children:"Building Ambari Metrics"}),"\n",(0,s.jsx)(n.p,{children:"If you plan on installing the Ambari Metrics service, you will also need to build the Ambari Metrics project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ambari-metrics\nmvn clean package -Dbuild-rpm -DskipTests\n\nFor Ubuntu:\ncd ambari-metrics\nmvn clean package -Dbuild-deb -DskipTests\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),"\n",(0,s.jsx)(n.p,{children:"The metrics rpms will be found at: ambari-metrics-assembly/target/. These would be need for installing the Ambari Metrics service."}),"\n",(0,s.jsx)(n.h2,{id:"running-the-ambari-server",children:"Running the Ambari Server"}),"\n",(0,s.jsx)(n.p,{children:"First, install the Ambari Server RPM."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On RHEL/CentOS:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum install ambari-server/target/rpm/ambari-server/RPMS/noarch/ambari-server-*.noarch.rpm\n"})}),"\n",(0,s.jsx)(n.p,{children:"On SUSE/SLES:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"zypper install ambari-server/target/rpm/ambari-server/RPMS/noarch/ambari-server-*.noarch.rpm\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu 12:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg --install ambari-server/target/ambari-server-*.deb          # Will fail with missing dependencies errors\napt-get update                                                   # Update locations of dependencies\napt-get install -f                                               # Install all failed dependencies\ndpkg --install ambari-server/target/ambari-server-*.deb          # Will succeed\n"})}),"\n",(0,s.jsx)(n.p,{children:"Initialize Ambari Server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ambari-server setup\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start up Ambari Server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ambari-server start\n"})}),"\n",(0,s.jsx)(n.p,{children:"See Ambari Server log:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail -f /var/log/ambari-server/ambari-server.log\n"})}),"\n",(0,s.jsx)(n.p,{children:"To access Ambari, go to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://{ambari-server-hostname}:8080\n"})}),"\n",(0,s.jsxs)(n.p,{children:["from your web browser and log in with username ",(0,s.jsx)(n.em,{children:"admin"})," and password ",(0,s.jsx)(n.em,{children:"admin"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"install-and-start-the-ambari-agent-manually-on-each-host-in-the-cluster",children:"Install and Start the Ambari Agent Manually on Each Host in the Cluster"}),"\n",(0,s.jsx)(n.p,{children:"Install the Ambari Agent RPM."}),"\n",(0,s.jsx)(n.p,{children:"On RHEL/CentOS:"}),"\n",(0,s.jsx)(n.p,{children:"SUSE/SLES:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"zypper install ambari-agent/target/rpm/ambari-agent/RPMS/x86_64/ambari-agent-*.rpm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ubuntu12:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg --install ambari-agent/target/ambari-agent-*.deb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Edit the location of Ambari Server in /etc/ambari-agent/conf/ambari-agent.ini by editing the ",(0,s.jsx)(n.em,{children:"hostname"})," line."]}),"\n",(0,s.jsx)(n.p,{children:"Start Ambari Agent:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ambari-agent start\n"})}),"\n",(0,s.jsx)(n.p,{children:"See Ambari Agent log:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail -f /var/log/ambari-agent/ambari-agent.log\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-ambari-in-eclipse",children:"Setting up Ambari in Eclipse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ mvn clean eclipse:eclipse\n"})}),"\n",(0,s.jsx)(n.p,{children:'After doing the above you should be able to import the project via Eclipse "Import > Maven > Existing Maven Project". Choose the root directory where you cloned the git repository. You should be able to see the following projects on eclipse:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ambari\n|\n|- ambari-project\n|- ambari-server\n|- ambari-agent\n|- ambari-web\n"})}),"\n",(0,s.jsx)(n.p,{children:'Select the top-level "ambari pom.xml" and click Finish.'})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);