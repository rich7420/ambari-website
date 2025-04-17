"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7588],{23965:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"ambari-design/blueprints/blueprint-ha","title":"Blueprint Support for HA Clusters","description":"Summary","source":"@site/versioned_docs/version-2.7.8/ambari-design/blueprints/blueprint-ha.md","sourceDirName":"ambari-design/blueprints","slug":"/ambari-design/blueprints/blueprint-ha","permalink":"/docs/2.7.8/ambari-design/blueprints/blueprint-ha","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.8/ambari-design/blueprints/blueprint-ha.md","tags":[],"version":"2.7.8","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Blueprints","permalink":"/docs/2.7.8/blueprints"},"next":{"title":"Blueprint support for Ranger","permalink":"/docs/2.7.8/ambari-design/blueprints/blueprint-ranger"}}');var a=r(74848),s=r(28453);const i={},o="Blueprint Support for HA Clusters",l={},h=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:3},{value:"Compatibility with Ambari UI\xa0",id:"compatibility-with-ambari-ui",level:4},{value:"Supported Stack Versions",id:"supported-stack-versions",level:4},{value:"Examples",id:"examples",level:3},{value:"Blueprint Example: HDFS NameNode HA Cluster",id:"blueprint-example-hdfs-namenode-ha-cluster",level:4},{value:"How",id:"how",level:4},{value:"Configuring Active and Standby NameNodes",id:"configuring-active-and-standby-namenodes",level:4},{value:"Example Blueprint",id:"example-blueprint",level:4},{value:"HostName Topology Substitution in Configuration Property Values",id:"hostname-topology-substitution-in-configuration-property-values",level:4},{value:"Register Blueprint with Ambari Server \xa0",id:"register-blueprint-with-ambari-server-",level:4},{value:"Example Cluster Creation Template",id:"example-cluster-creation-template",level:4},{value:"Create Cluster Instance",id:"create-cluster-instance",level:4},{value:"Blueprint Example: Yarn ResourceManager HA Cluster",id:"blueprint-example-yarn-resourcemanager-ha-cluster",level:3},{value:"Summary",id:"summary-1",level:4},{value:"Initial setup of Active and Standby ResourceManagers",id:"initial-setup-of-active-and-standby-resourcemanagers",level:4},{value:"Example Blueprint",id:"example-blueprint-1",level:4},{value:"Register Blueprint with Ambari Server",id:"register-blueprint-with-ambari-server",level:4},{value:"Example Cluster Creation Template",id:"example-cluster-creation-template-1",level:4},{value:"Create Cluster Instance",id:"create-cluster-instance-1",level:4},{value:"Blueprint Example: HBase RegionServer HA Cluster",id:"blueprint-example-hbase-regionserver-ha-cluster",level:3},{value:"Summary",id:"summary-2",level:4},{value:"Example Blueprint",id:"example-blueprint-2",level:4},{value:"Register Blueprint with Ambari Server",id:"register-blueprint-with-ambari-server-1",level:4},{value:"Example Cluster Creation Template",id:"example-cluster-creation-template-2",level:4},{value:"Create Cluster Instance",id:"create-cluster-instance-2",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"blueprint-support-for-ha-clusters",children:"Blueprint Support for HA Clusters"})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"As of Ambari 2.0, Blueprints are able to deploy the following components with HA:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\xa0HDFS NameNode HA"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YARN ResourceManager HA"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"HBase RegionServers HA"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"As of Ambari 2.1, Blueprints are able to deploy the following components with HA:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Hive Components (",(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI-10489",children:"AMBARI-10489"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Storm Nimbus (",(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI-11087",children:"AMBARI-11087"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Oozie Server (",(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI-6683",children:"AMBARI-6683"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This functionality currently requires providing fine-grained configurations. This document provides examples."}),"\n",(0,a.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(n.h4,{id:"compatibility-with-ambari-ui",children:"Compatibility with Ambari UI\xa0"}),"\n",(0,a.jsx)(n.p,{children:"While this feature does not require the Ambari UI to function, the Blueprints HA feature is completely compatible with the Ambari UI. \xa0An HA cluster created via Blueprints can be monitored and configured via the Ambari UI, just as any other Blueprints cluster would function. \xa0\xa0\xa0"}),"\n",(0,a.jsx)(n.h4,{id:"supported-stack-versions",children:"Supported Stack Versions"}),"\n",(0,a.jsx)(n.p,{children:"This feature is supported as of HDP 2.1 and newer releases. Previous versions of HDP have not been tested with this feature. \xa0"}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h4,{id:"blueprint-example-hdfs-namenode-ha-cluster",children:"Blueprint Example: HDFS NameNode HA Cluster"}),"\n",(0,a.jsx)(n.p,{children:"HDFS NameNode HA allows a cluster to be configured such that a NameNode is not a single point of failure."}),"\n",(0,a.jsxs)(n.p,{children:["For more details on\xa0",(0,a.jsx)(n.a,{href:"http://hadoop.apache.org/docs/r2.3.0/hadoop-yarn/hadoop-yarn-site/HDFSHighAvailabilityWithQJM.html",children:"HDFS NameNode HA see the Apache Hadoop documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In an Ambari-deployed HDFS NameNode HA cluster:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"2 NameNodes are deployed: an \u201cactive\u201d and a \u201cpassive\u201d namenode."}),"\n",(0,a.jsx)(n.li,{children:"If the active NameNode should stop functioning properly, the passive node\u2019s Zookeeper client will detect this case, and the passive node will become the new active node."}),"\n",(0,a.jsx)(n.li,{children:"HDFS relies on Zookeeper to manage the details of failover in these cases."}),"\n",(0,a.jsx)(n.li,{children:"The Blueprints HA feature will automatically invoke all required commands and setup steps for an HDFS NameNode HA cluster, provided that the correct configuration is provided in the Blueprint. \xa0The shared edit logs of each NameNode are managed by the Quorum Journal Manager, rather than NFS shared storage. \xa0The use of NFS shared storage in an HDFS HA setup is not supported by Ambari Blueprints, and is generally not encouraged. \xa0"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"how",children:"How"}),"\n",(0,a.jsx)(n.p,{children:"The Blueprints HA feature will automatically invoke all required commands and setup steps for an HDFS NameNode HA cluster, provided that the correct configuration is provided in the Blueprint. \xa0The shared edit logs of each NameNode are managed by the Quorum Journal Manager, rather than NFS shared storage. \xa0The use of NFS shared storage in an HDFS HA setup is not supported by Ambari Blueprints, and is generally not encouraged. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"The following HDFS stack components should be included in any host group in a Blueprint that supports an HA HDFS NameNode:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"NAMENODE"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ZKFC"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ZOOKEEPER_SERVER"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JOURNALNODE"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"configuring-active-and-standby-namenodes",children:"Configuring Active and Standby NameNodes"}),"\n",(0,a.jsx)(n.p,{children:"The HDFS \u201cNAMENODE\u201d component must be assigned to two servers, either via two separate host groups, or to a host group that maps to two physical servers in the Cluster Creation Template for this cluster. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"By default, the Blueprint processor will assign the \u201cactive\u201d NameNode to one host, and the \u201cstandby\u201d NameNode to another. \xa0The user of an HA Blueprint does not need to configure the initial status of each NameNode, since this can be assigned automatically. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"If desired, the user can configure the initial state of each NameNode by adding the following configuration properties in the \u201chadoop-env\u201d namespace:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"dfs_ha_initial_namenode_active - This property should contain the hostname for the \u201cactive\u201d NameNode in this cluster."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"dfs_ha_initial_namenode_standby - This property should contain the host name for the \u201cpassive\u201d NameNode in this cluster."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"These properties should only be used when the initial state of the active or standby NameNodes needs to be configured to a specific node. \xa0This setting is only guaranteed to be accurate in the initial state of the cluster. \xa0Over time, the active/standby state of each NameNode may change as failover events occur in the cluster."}),(0,a.jsx)(n.p,{children:"The active or standby status of a NameNode is not recorded or expressed when an HDFS HA Cluster is being exported to a Blueprint, using the Blueprint REST API endpoint. \xa0Since clusters change over time, this state is only accurate in the initial startup of the cluster."}),(0,a.jsx)(n.p,{children:"Generally, it is assumed that most users will not need to choose the active or standby status of each NameNode, so the default behavior in Blueprints HA is to assign the status of each node automatically."})]}),"\n",(0,a.jsx)(n.h4,{id:"example-blueprint",children:"Example Blueprint"}),"\n",(0,a.jsxs)(n.p,{children:["This is a minimal blueprint with HDFS HA:\xa0",(0,a.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/download/attachments/55151584/hdfs_ha_blueprint.json?version=4&modificationDate=1434548806000&api=v2",children:"hdfs_ha_blueprint.json"}),"\xa0"]}),"\n",(0,a.jsx)(n.p,{children:"These are the base configurations required. See the blueprint above for more details:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'  "configurations": \n    { "core-site": {\n        "properties" : {\n          "fs.defaultFS" : "hdfs://mycluster",\n          "ha.zookeeper.quorum" : "%HOSTGROUP::master_1%:2181,%HOSTGROUP::master_2%:2181,%HOSTGROUP::master_3%:2181"\n      }}\n    },\n    { "hdfs-site": {\n        "properties" : {\n          "dfs.client.failover.proxy.provider.mycluster" : "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n          "dfs.ha.automatic-failover.enabled" : "true",\n          "dfs.ha.fencing.methods" : "shell(/bin/true)",\n          "dfs.ha.namenodes.mycluster" : "nn1,nn2",\n          "dfs.namenode.http-address" : "%HOSTGROUP::master_1%:50070",\n          "dfs.namenode.http-address.mycluster.nn1" : "%HOSTGROUP::master_1%:50070",\n          "dfs.namenode.http-address.mycluster.nn2" : "%HOSTGROUP::master_3%:50070",\n          "dfs.namenode.https-address" : "%HOSTGROUP::master_1%:50470",\n          "dfs.namenode.https-address.mycluster.nn1" : "%HOSTGROUP::master_1%:50470",\n          "dfs.namenode.https-address.mycluster.nn2" : "%HOSTGROUP::master_3%:50470",\n          "dfs.namenode.rpc-address.mycluster.nn1" : "%HOSTGROUP::master_1%:8020",\n          "dfs.namenode.rpc-address.mycluster.nn2" : "%HOSTGROUP::master_3%:8020",\n          "dfs.namenode.shared.edits.dir" : "qjournal://%HOSTGROUP::master_1%:8485;%HOSTGROUP::master_2%:8485;%HOSTGROUP::master_3%:8485/mycluster",\n          "dfs.nameservices" : "mycluster"\n      }}\n    }\n  ]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"hostname-topology-substitution-in-configuration-property-values",children:"HostName Topology Substitution in Configuration Property Values"}),"\n",(0,a.jsx)(n.p,{children:"The host-related properties should be set using the \u201cHOSTGROUP\u201d syntax to refer to a given Blueprint\u2019s host group, in order to map each NameNode\u2019s actual host (defined in the Cluster Creation Template) to the properties in hdfs-site that require these host mappings. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"The syntax for these properties should be:"}),"\n",(0,a.jsxs)(n.p,{children:["\u201c%HOSTGROUP::HOST_GROUP_NAME%",":PORT","\u201d\u201d"]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following property from the snippet above:"}),"\n",(0,a.jsx)(n.p,{children:'"dfs.namenode.http-address.mycluster.nn1":'}),"\n",(0,a.jsx)(n.p,{children:'"%HOSTGROUP::master_1%:50070"'}),"\n",(0,a.jsx)(n.p,{children:"This property value is interpreted by the Blueprint processor to refer to the host that maps to the \u201cmaster_1\u201d host group, which should include a \u201cNAMENODE\u201d among its list of components. \xa0The address property listed above should map to the host for \u201cmaster_1\u201d, at the port \u201c50070\u201d. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"Using this syntax is the most portable way to define host-specific properties within a Blueprint, since no direct host name references are used. \xa0This will allow a Blueprint to be applied in a wider variety of cluster deployments, and not be tied to a specific set of hostnames. \xa0"}),"\n",(0,a.jsx)(n.h4,{id:"register-blueprint-with-ambari-server-",children:"Register Blueprint with Ambari Server \xa0"}),"\n",(0,a.jsx)(n.p,{children:'Post the blueprint to the "blueprint-hdfs-ha" resource to the Ambari Server.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"POST /api/v1/blueprints/blueprint-hdfs-ha\n \n...\n[ Request Body is the example blueprint defined above ]\n...\n \n201 - Created\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-cluster-creation-template",children:"Example Cluster Creation Template"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "blueprint": "blueprint-hdfs-ha",\n  "default_password": "changethis",\n  "host_groups": [\n    { "hosts": [\n        { "fqdn": "c6401.ambari.apache.org" }\n      ], "name": "gateway"\n    },\n    { "hosts": [\n        { "fqdn": "c6402.ambari.apache.org" }\n      ], "name": "master_1"\n    },\n    { "hosts": [\n        { "fqdn": "c6403.ambari.apache.org" }\n      ], "name": "master_2"\n    },\n    { "hosts": [\n        { "fqdn": "c6404.ambari.apache.org" }\n      ], "name": "master_3"\n    },\n    { "hosts": [\n        { "fqdn": "c6405.ambari.apache.org" }\n      ],\n      "name": "slave_1"     \n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-cluster-instance",children:"Create Cluster Instance"}),"\n",(0,a.jsx)(n.p,{children:"Post the cluster to the Ambari Server to provision the cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /api/v1/clusters/my-hdfs-ha-cluster\n \n...\n[ Request Body is above Cluster Creation Template ]\n...\n \n202 - Accepted\n{\n  "href" : "http://c6401.ambari.apache.org:8080/api/v1/clusters/my-hdfs-ha-cluster/requests/1",\n  "Requests" : {\n    "id" : 1,\n    "status" : "InProgress"\n  }\n}\n\xa0\n...\n[ Client can then monitor the URL in the 202 response to check the status of the cluster deployment. ]\n...\n'})}),"\n",(0,a.jsx)(n.h3,{id:"blueprint-example-yarn-resourcemanager-ha-cluster",children:"Blueprint Example: Yarn ResourceManager HA Cluster"}),"\n",(0,a.jsx)(n.h4,{id:"summary-1",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"Yarn ResourceManager High Availability (HA) adds support for deploying two Yarn ResourceManagers in a given Yarn cluster. \xa0This support removes the single point of failure that occurs when single ResourceManager is used. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"The Yarn ResourceManager support for HA is somewhat similar to HDFS NameNode HA in that an \u201cactive/standby\u201d architecture is adopted, with Zookeeper used to handle the failover scenarios between the two ResourceManager instances. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"The following Apache Hadoop documentation describes the steps required in order to setup Yarn ResourceManager HA manually:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ResourceManagerHA.html",children:"http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ResourceManagerHA.html"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Ambari Blueprints will handle much of the details of server setup listed in this documentation, but the user of Ambari will need to define the various configuration properties listed in this article (yarn.resourcemanager.ha.enabled, yarn.resourcemanager.hostname.$NAME_OF_RESOURCE_MANAGER, etc). \xa0The example Blueprints listed below will demonstrate the configuration properties that must be included in the Blueprint for this feature to startup the HA cluster properly."})}),"\n",(0,a.jsx)(n.p,{children:"\xa0\xa0The following stack components should be included in any host group in a Blueprint that supports an HA Yarn ResourceManager"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"RESOURCEMANAGER"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ZOOKEEPER_SERVER"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"initial-setup-of-active-and-standby-resourcemanagers",children:"Initial setup of Active and Standby ResourceManagers"}),"\n",(0,a.jsx)(n.p,{children:"The Yarn ResourceManager HA feature depends upon Zookeeper in order to manage the details of \xa0the \u201cactive\u201d or \u201cstandby\u201d status of a given ResourceManager. \xa0When the two ResourceManagers are starting up initially, the first ResourceManager instance to acquire a Zookeeper lock, called a \u201cznode\u201d, will become the \u201cactive\u201d ResourceManager for the cluster, with the other instance assuming the role of the \u201cstandby\u201d ResourceManager. \xa0"}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"The Blueprints HA feature does not support configuring the initial \u201cactive\u201d or \u201cstandby\u201d status of the ResourceManagers deployed in a Yarn HA cluster. \xa0The first instance to obtain the Zookeeper lock will become the \u201cactive\u201d node. \xa0This allows the user to specify the host groups that contain the 2 ResourceManager instances, but also shields the user from the need to select the first \u201cactive\u201d node."}),(0,a.jsx)(n.p,{children:"After the cluster has started up initially, the state of the \u201cactive\u201d and \u201cstandby\u201d ResourceManagers may change over time. \xa0The initial \u201cactive\u201d server is not guaranteed to remain the \u201cactive\u201d node over the lifetime of the cluster. \xa0During a failover event, the \u201cstandby\u201d node may be required to fulfill the role of the \u201cactive\u201d server."}),(0,a.jsx)(n.p,{children:"The active or standby status of a ResourceManager is not recorded or expressed when a Yarn cluster is being exported to a Blueprint, using the Blueprint REST API endpoint. \xa0Since clusters change over time, this state is only accurate in the initial startup of the cluster."})]}),"\n",(0,a.jsx)(n.h4,{id:"example-blueprint-1",children:"Example Blueprint"}),"\n",(0,a.jsx)(n.p,{children:"The following link includes an example Blueprint for a 3-node Yarn ResourceManager HA Cluster:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/download/attachments/55151584/yarn_ha_blueprint.json?version=2&modificationDate=1432208770000&api=v2",children:"yarn_ha_blueprint.json"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "Blueprints": {\n    "stack_name": "HDP",\n    "stack_version": "2.2"\n  },\n  "host_groups": [\n    {\n      "name": "gateway",\n      "cardinality" : "1",\n      "components": [\n        { "name": "HDFS_CLIENT" },\n        { "name": "MAPREDUCE2_CLIENT" },\n        { "name": "METRICS_COLLECTOR" },\n        { "name": "METRICS_MONITOR" },\n        { "name": "TEZ_CLIENT" },\n        { "name": "YARN_CLIENT" },\n        { "name": "ZOOKEEPER_CLIENT" }\n      ]\n    },\n    {\n      "name": "master_1",\n      "cardinality" : "1",\n      "components": [\n        { "name": "HISTORYSERVER" },\n        { "name": "JOURNALNODE" },\n        { "name": "METRICS_MONITOR" },\n        { "name": "NAMENODE" },\n        { "name": "ZOOKEEPER_SERVER" }\n      ]\n    },\n    {\n      "name": "master_2",\n      "cardinality" : "1",\n      "components": [\n        { "name": "APP_TIMELINE_SERVER" },\n        { "name": "JOURNALNODE" },\n        { "name": "METRICS_MONITOR" },\n        { "name": "RESOURCEMANAGER" },\n        { "name": "ZOOKEEPER_SERVER" }\n      ]\n    },\n    {\n      "name": "master_3",\n      "cardinality" : "1",\n      "components": [\n        { "name": "JOURNALNODE" },\n        { "name": "METRICS_MONITOR" },\n        { "name": "RESOURCEMANAGER" },\n        { "name": "SECONDARY_NAMENODE" },\n        { "name": "ZOOKEEPER_SERVER" }\n      ]\n    },\n    {\n      "name": "slave_1",\n      "components": [\n        { "name": "DATANODE" },\n        { "name": "METRICS_MONITOR" },\n        { "name": "NODEMANAGER" }\n      ]\n    }\n  ],\n  "configurations": [\n    {\n      "core-site": {\n        "properties" : {\n          "fs.defaultFS" : "hdfs://%HOSTGROUP::master_1%:8020"\n      }}\n    },{\n      "yarn-site" : {\n        "properties" : {\n          "hadoop.registry.rm.enabled" : "false",\n          "hadoop.registry.zk.quorum" : "%HOSTGROUP::master_3%:2181,%HOSTGROUP::master_2%:2181,%HOSTGROUP::master_1%:2181",\n          "yarn.log.server.url" : "http://%HOSTGROUP::master_2%:19888/jobhistory/logs",\n          "yarn.resourcemanager.address" : "%HOSTGROUP::master_2%:8050",\n          "yarn.resourcemanager.admin.address" : "%HOSTGROUP::master_2%:8141",\n          "yarn.resourcemanager.cluster-id" : "yarn-cluster",\n          "yarn.resourcemanager.ha.automatic-failover.zk-base-path" : "/yarn-leader-election",\n          "yarn.resourcemanager.ha.enabled" : "true",\n          "yarn.resourcemanager.ha.rm-ids" : "rm1,rm2",\n          "yarn.resourcemanager.hostname" : "%HOSTGROUP::master_2%",\n          "yarn.resourcemanager.recovery.enabled" : "true",\n          "yarn.resourcemanager.resource-tracker.address" : "%HOSTGROUP::master_2%:8025",\n          "yarn.resourcemanager.scheduler.address" : "%HOSTGROUP::master_2%:8030",\n          "yarn.resourcemanager.store.class" : "org.apache.hadoop.yarn.server.resourcemanager.recovery.ZKRMStateStore",\n          "yarn.resourcemanager.webapp.address" : "%HOSTGROUP::master_2%:8088",\n          "yarn.resourcemanager.webapp.https.address" : "%HOSTGROUP::master_2%:8090",\n          "yarn.timeline-service.address" : "%HOSTGROUP::master_2%:10200",\n          "yarn.timeline-service.webapp.address" : "%HOSTGROUP::master_2%:8188",\n          "yarn.timeline-service.webapp.https.address" : "%HOSTGROUP::master_2%:8190"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"register-blueprint-with-ambari-server",children:"Register Blueprint with Ambari Server"}),"\n",(0,a.jsx)(n.p,{children:'Post the blueprint to the "blueprint-yarn-ha" resource to the Ambari Server.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"POST /api/v1/blueprints/blueprint-yarn-ha\n \n...\n[ Request Body is the example blueprint defined above ]\n...\n \n201 - Created\n\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-cluster-creation-template-1",children:"Example Cluster Creation Template"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "blueprint": "blueprint-yarn-ha",\n  "default_password": "changethis",\n  "configurations": [\n    { "yarn-site" : {\n        "yarn.resourcemanager.zk-address" : "c6402.ambari.apache.org:2181,c6403.ambari.apache.org:2181,c6404.ambari.apache.org:2181\u201d,\n        \u201dyarn.resourcemanager.hostname.rm1" : "c6403.ambari.apache.org",\n        "yarn.resourcemanager.hostname.rm2" : "c6404.ambari.apache.org"\n     }}\n  ],\n  "host_groups": [\n    { "hosts": [\n        { "fqdn": "c6401.ambari.apache.org" }\n      ], "name": "gateway"\n    },\n    { "hosts": [\n        { "fqdn": "c6402.ambari.apache.org" }\n      ], "name": "master_1"\n    },\n    { "hosts": [\n        { "fqdn": "c6403.ambari.apache.org" }\n      ], "name": "master_2"\n    },\n    { "hosts": [\n        { "fqdn": "c6404.ambari.apache.org" }\n      ], "name": "master_3"\n    },\n    { "hosts": [\n        { "fqdn": "c6405.ambari.apache.org" }\n      ],\n      "name": "slave_1"     \n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-cluster-instance-1",children:"Create Cluster Instance"}),"\n",(0,a.jsx)(n.p,{children:"Post the cluster to the Ambari Server to provision the cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /api/v1/clusters/my-yarn-ha-cluster\n \n...\n[ Request Body is above Cluster Creation Template ]\n...\n \n202 - Accepted\n{\n  "href" : "http://c6401.ambari.apache.org:8080/api/v1/clusters/my-yarn-ha-cluster/requests/1",\n  "Requests" : {\n    "id" : 1,\n    "status" : "InProgress"\n  }\n}\n \n...\n[ Client can then monitor the URL in the 202 response to check the status of the cluster deployment. ]\n...\n'})}),"\n",(0,a.jsx)(n.h3,{id:"blueprint-example-hbase-regionserver-ha-cluster",children:"Blueprint Example: HBase RegionServer HA Cluster"}),"\n",(0,a.jsx)(n.h4,{id:"summary-2",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"HBase provides a High Availability feature for reads across HBase Region Servers. \xa0"}),"\n",(0,a.jsx)(n.p,{children:"The following link to the Apache HBase documentation provides more information on HA support in HBase:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://hbase.apache.org/book.html#arch.timelineconsistent.reads",children:"http://hbase.apache.org/book.html#arch.timelineconsistent.reads"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The documentation listed here explains how to deploy an HBase RegionServer HA cluster via a Blueprint, but there are separate application-specific steps that must be taken in order to enable this feature for a specific table in HBase. \xa0A table must be created with replication enabled, so that multiple Region Servers can handle the keys for this table."})}),"\n",(0,a.jsx)(n.p,{children:"For more information on how to define an HBase table with replication enabled (after the cluster has been created), please refer to the following HBase documentation:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://hbase.apache.org/book.html#_creating_a_table_with_region_replication",children:"http://hbase.apache.org/book.html#_creating_a_table_with_region_replication"})}),"\n",(0,a.jsx)(n.p,{children:"The following stack components should be included in any host group in a Blueprint that supports an HA HBase RegionServer:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"HBASE_REGIONSERVER"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"At least two \u201cHBASE_REGIONSERVER\u201d components must be deployed in order to enable this feature, so that table information can be replicated across more than one Region Server. \xa0"}),"\n",(0,a.jsx)(n.h4,{id:"example-blueprint-2",children:"Example Blueprint"}),"\n",(0,a.jsx)(n.p,{children:"The following link includes an example Blueprint for a 2-node HBase RegionServer HA Cluster:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/download/attachments/55151584/hbase_rs_ha_blueprint.json?version=1&modificationDate=1427136904000&api=v2",children:"hbase_rs_ha_blueprint.json"})}),"\n",(0,a.jsx)(n.p,{children:"The following JSON snippet includes the \u201chbase-site\u201d configuration typically required for a cluster that utilizes the HBase RegionServer HA feature: \xa0"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "configurations" : [\n    {\n      "hbase-site" : {\n         ... \n        "hbase.regionserver.global.memstore.lowerLimit" : "0.38",\n        "hbase.regionserver.global.memstore.upperLimit" : "0.4",\n        "hbase.regionserver.handler.count" : "60",\n        "hbase.regionserver.info.port" : "60030",\n        "hbase.regionserver.storefile.refresh.period" : "20",\n        "hbase.rootdir" : "hdfs://%HOSTGROUP::host_group_1%:8020/apps/hbase/data",\n        "hbase.security.authentication" : "simple",\n        "hbase.security.authorization" : "false",\n        "hbase.superuser" : "hbase",\n        "hbase.tmp.dir" : "/hadoop/hbase",\n        "hbase.zookeeper.property.clientPort" : "2181",\n        "hbase.zookeeper.quorum" : "%HOSTGROUP::host_group_1%,%HOSTGROUP::host_group_2%",\n        "hbase.zookeeper.useMulti" : "true",\n        "hfile.block.cache.size" : "0.40",\n        "zookeeper.session.timeout" : "30000",\n        "zookeeper.znode.parent" : "/hbase-unsecure"\n      }\n\n    }\n   ]\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The JSON example above is not a complete set of \u201chbase-site\u201d configurations, but rather shows the configuration settings that are relevant to HBase RegionServer HA. \xa0In particular, the \u201chbase.regionserver.storefile.refresh.period\u201d setting is the most relevant to HBase RegionServer HA, since this property must be set to a value greater than zero in order for the HA feature to be enabled."})}),"\n",(0,a.jsx)(n.h4,{id:"register-blueprint-with-ambari-server-1",children:"Register Blueprint with Ambari Server"}),"\n",(0,a.jsx)(n.p,{children:'Post the blueprint to the "blueprint-hbase-rs-ha" resource to the Ambari Server.'}),"\n",(0,a.jsx)(n.p,{children:"POST /api/v1/blueprints/blueprint-hbase-rs-ha"}),"\n",(0,a.jsx)(n.p,{children:"...\n[ Request Body is the example blueprint defined above ]\n..."}),"\n",(0,a.jsx)(n.p,{children:"201 - Created"}),"\n",(0,a.jsx)(n.h4,{id:"example-cluster-creation-template-2",children:"Example Cluster Creation Template"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "blueprint" : "blueprint-hbase-rs-ha",\n  "default_password" : "default",\n  "host_groups" :[\n    {\n      "name" : "host_group_1", \n      "hosts" : [         \n        {\n          "fqdn" : "c6401.ambari.apache.org"\n        }\n      ]\n    },\n    {\n      "name" : "host_group_2", \n      "hosts" : [         \n        {\n          "fqdn" : "c6402.ambari.apache.org"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-cluster-instance-2",children:"Create Cluster Instance"}),"\n",(0,a.jsx)(n.p,{children:"Post the cluster to the Ambari Server to provision the cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /api/v1/clusters/my-hbase-rs-ha-cluster\n \n...\n[ Request Body is above Cluster Creation Template ]\n...\n \n202 - Accepted\n{\n  "href" : "http://c6401.ambari.apache.org:8080/api/v1/clusters/my-hbase-rs-ha-cluster/requests/1",\n  "Requests" : {\n    "id" : 1,\n    "status" : "InProgress"\n  }\n}\n \n...\n[ Client can then monitor the URL in the 202 response to check the status of the cluster deployment. ]\n...\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);