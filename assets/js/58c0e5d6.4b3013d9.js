"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[9597],{22795:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"ambari-design/blueprints/blueprint-ranger","title":"Blueprint support for Ranger","description":"Starting from HDP2.3 Ranger can be deployed using Blueprints in two ways either using stack advisor or setting all the needed properties in the Blueprint.","source":"@site/versioned_docs/version-2.7.9/ambari-design/blueprints/blueprint-ranger.md","sourceDirName":"ambari-design/blueprints","slug":"/ambari-design/blueprints/blueprint-ranger","permalink":"/docs/2.7.9/ambari-design/blueprints/blueprint-ranger","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.9/ambari-design/blueprints/blueprint-ranger.md","tags":[],"version":"2.7.9","frontMatter":{"title":"Blueprint support for Ranger"},"sidebar":"ambariSidebar","previous":{"title":"Blueprint Support for HA Clusters","permalink":"/docs/2.7.9/ambari-design/blueprints/blueprint-ha"},"next":{"title":"Enhanced Configs","permalink":"/docs/2.7.9/ambari-design/enhanced-configs/"}}');var s=r(74848),t=r(28453);const i={title:"Blueprint support for Ranger"},o=void 0,d={},l=[{value:"Deploy Ranger with the use of stack advisor",id:"deploy-ranger-with-the-use-of-stack-advisor",level:2},{value:"Deploy Ranger without the use of stack advisor",id:"deploy-ranger-without-the-use-of-stack-advisor",level:2},{value:"Deploy Ranger in HA mode",id:"deploy-ranger-in-ha-mode",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Starting from HDP2.3 Ranger can be deployed using Blueprints in two ways either using stack advisor or setting all the needed properties in the Blueprint."}),"\n",(0,s.jsx)(n.h2,{id:"deploy-ranger-with-the-use-of-stack-advisor",children:"Deploy Ranger with the use of stack advisor"}),"\n",(0,s.jsx)(n.p,{children:"Stack advisor makes simple the deployment of Ranger as it sets automatically the needed properties thus the user has to provided only a minimal set of configurations. The configurations properties that must be provided in either the Blueprint or cluster creation template are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"admin-properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DB_FLAVOR - the default is MYSQL. No need to provide this if MYSQL is to be used the database server for Ranger databases. Consult Ranger documentation for supported database servers. Also ensure the ambari-server has the appropriate jdbc driver installed for the selected database server type (e.g.: ambari-server setup --jdbc-driver)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["db_host - set the host",":port"," of the database server that Ranger Admin will use"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_root_user - the db user with root access that will be used during deployment to create the databases used by Ranger. By default root is used if this property is not specified."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_root_password - the password for root user"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_password - the password that will be used access the Ranger database"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"audit_db_password - the password that will be used to access the Ranger Audit db"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ranger-env"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ranger_admin_password - this is the Ambari user password created for creating repositories and policies in Ranger Admin for each plugin"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ranger-yarn-plugin-enabled - Enable/Disable YARN Ranger plugin. The default is Disable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ranger-hdfs-plugin-enabled - Enable/Disable HDFS Ranger plugin. The default is Disable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ranger-hbase-plugin-enabled -Enable/Disable HBase Ranger plugin. The default is Disable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"... - check Ranger documentation for the list of supported ranger plugins"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"kms-properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DB_FLAVOR - the default is MYSQL. No need to provide this if MYSQL is to be used the database server for Ranger databases. Consult Ranger KMS documentation for supported database servers. Also ensure the ambari-server has the appropriate jdbc driver installed for the selected database server type (e.g.: ambari-server setup --jdbc-driver)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SQL_CONNECTOR_JAR - the default is /usr/share/java/mysql-connector-java.jar"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"KMS_MASTER_KEY_PASSWD"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["db_host - the host",":port"," of the database server that Ranger KMS will use"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_root_user - the db user with root access that will be used during deployment to create the databases used by Ranger KMS. By default root is used if this property is not specified."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_root_password - database password for root user"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"db_password - database password for the Ranger KMS schema"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"hadoop-env"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"keyserver_port - Port number where Key Management Server is available"}),"\n",(0,s.jsx)(n.li,{children:"keyserver_host - Hostnames where Key Management Server is installed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-ranger-without-the-use-of-stack-advisor",children:"Deploy Ranger without the use of stack advisor"}),"\n",(0,s.jsx)(n.p,{children:"Without stack advisor all the configs related to Ranger, Ranger KMS and ranger plugins that don't have default values must be set in the Blueprint or cluster creation template. Consult Ranger and ranger plugin plugins documentation for all properties."}),"\n",(0,s.jsx)(n.p,{children:"An example of such Blueprint where everything is set manually (note that this just covers a subset of currently supported configuration properties and ranger plugins):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "configurations" : [\n    {\n      "admin-properties" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "DB_FLAVOR" : "MYSQL",\n          "audit_db_name" : "ranger_audit",\n          "db_name" : "ranger",\n          "audit_db_user" : "rangerlogger",\n          "SQL_CONNECTOR_JAR" : "/usr/share/java/mysql-connector-java.jar",\n          "db_user" : "rangeradmin",\n          "policymgr_external_url" : "http://%HOSTGROUP::host_group_1%:6080",\n          "db_host" : "172.17.0.9:3306",\n          "db_root_user" : "root"\n        }\n      }\n    },\n    {\n      "ranger-kms-security" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.plugin.kms.policy.source.impl" : "org.apache.ranger.admin.client.RangerAdminRESTClient",\n          "ranger.plugin.kms.service.name" : "{{repo_name}}",\n          "ranger.plugin.kms.policy.rest.url" : "{{policymgr_mgr_url}}"\n        }\n      }\n    },\n    {\n      "kms-site" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "hadoop.kms.security.authorization.manager" : "org.apache.ranger.authorization.kms.authorizer.RangerKmsAuthorizer",\n          "hadoop.kms.key.provider.uri" : "dbks://http@localhost:9292/kms"\n        }\n      }\n    },\n    {\n      "ranger-hdfs-plugin-properties" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "REPOSITORY_CONFIG_USERNAME" : "hadoop",\n          "ranger-hdfs-plugin-enabled" : "Yes",\n          "common.name.for.certificate" : "",\n          "policy_user" : "ambari-qa",\n          "hadoop.rpc.protection" : ""\n        }\n      }\n    },\n    {\n      "ranger-admin-site" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.ldap.group.searchfilter" : "{{ranger_ug_ldap_group_searchfilter}}",\n          "ranger.ldap.group.searchbase" : "{{ranger_ug_ldap_group_searchbase}}",\n          "ranger.sso.enabled" : "false",\n          "ranger.externalurl" : "{{ranger_external_url}}",\n          "ranger.sso.browser.useragent" : "Mozilla,chrome",\n          "ranger.service.https.attrib.ssl.enabled" : "false",\n          "ranger.ldap.ad.referral" : "ignore",\n          "ranger.jpa.jdbc.url" : "jdbc:mysql://172.17.0.9:3306/ranger",\n          "ranger.https.attrib.keystore.file" : "/etc/ranger/admin/conf/ranger-admin-keystore.jks",\n          "ranger.ldap.user.searchfilter" : "{{ranger_ug_ldap_user_searchfilter}}",\n          "ranger.jpa.jdbc.driver" : "com.mysql.jdbc.Driver",\n          "ranger.authentication.method" : "UNIX",\n          "ranger.service.host" : "{{ranger_host}}",\n          "ranger.jpa.audit.jdbc.user" : "{{ranger_audit_db_user}}",\n          "ranger.ldap.referral" : "ignore",\n          "ranger.jpa.audit.jdbc.credential.alias" : "rangeraudit",\n          "ranger.service.https.attrib.keystore.pass" : "SECRET:ranger-admin-site:2:ranger.service.https.attrib.keystore.pass",\n          "ranger.audit.solr.username" : "ranger_solr",\n          "ranger.sso.query.param.originalurl" : "originalUrl",\n          "ranger.service.http.enabled" : "true",\n          "ranger.audit.source.type" : "solr",\n          "ranger.ldap.url" : "{{ranger_ug_ldap_url}}",\n          "ranger.service.https.attrib.clientAuth" : "want",\n          "ranger.ldap.ad.domain" : "",\n          "ranger.ldap.ad.bind.dn" : "{{ranger_ug_ldap_bind_dn}}",\n          "ranger.credential.provider.path" : "/etc/ranger/admin/rangeradmin.jceks",\n          "ranger.jpa.audit.jdbc.driver" : "{{ranger_jdbc_driver}}",\n          "ranger.audit.solr.urls" : "",\n          "ranger.sso.publicKey" : "",\n          "ranger.ldap.bind.dn" : "{{ranger_ug_ldap_bind_dn}}",\n          "ranger.unixauth.service.port" : "5151",\n          "ranger.ldap.group.roleattribute" : "cn",\n          "ranger.jpa.jdbc.dialect" : "{{jdbc_dialect}}",\n          "ranger.sso.cookiename" : "hadoop-jwt",\n          "ranger.service.https.attrib.keystore.keyalias" : "rangeradmin",\n          "ranger.audit.solr.zookeepers" : "NONE",\n          "ranger.jpa.jdbc.user" : "{{ranger_db_user}}",\n          "ranger.jpa.jdbc.credential.alias" : "rangeradmin",\n          "ranger.ldap.ad.user.searchfilter" : "{{ranger_ug_ldap_user_searchfilter}}",\n          "ranger.ldap.user.dnpattern" : "uid={0},ou=users,dc=xasecure,dc=net",\n          "ranger.ldap.base.dn" : "dc=example,dc=com",\n          "ranger.service.http.port" : "6080",\n          "ranger.jpa.audit.jdbc.url" : "{{audit_jdbc_url}}",\n          "ranger.service.https.port" : "6182",\n          "ranger.sso.providerurl" : "",\n          "ranger.ldap.ad.url" : "{{ranger_ug_ldap_url}}",\n          "ranger.jpa.audit.jdbc.dialect" : "{{jdbc_dialect}}",\n          "ranger.unixauth.remote.login.enabled" : "true",\n          "ranger.ldap.ad.base.dn" : "dc=example,dc=com",\n          "ranger.unixauth.service.hostname" : "{{ugsync_host}}"\n        }\n      }\n    },\n    {\n      "dbks-site" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.ks.jpa.jdbc.url" : "jdbc:mysql://172.17.0.9:3306/rangerkms",\n          "hadoop.kms.blacklist.DECRYPT_EEK" : "hdfs",\n          "ranger.ks.jpa.jdbc.dialect" : "{{jdbc_dialect}}",\n          "ranger.ks.jdbc.sqlconnectorjar" : "{{ews_lib_jar_path}}",\n          "ranger.ks.jpa.jdbc.user" : "{{db_user}}",\n          "ranger.ks.jpa.jdbc.credential.alias" : "ranger.ks.jdbc.password",\n          "ranger.ks.jpa.jdbc.credential.provider.path" : "/etc/ranger/kms/rangerkms.jceks",\n          "ranger.ks.masterkey.credential.alias" : "ranger.ks.masterkey.password",\n          "ranger.ks.jpa.jdbc.driver" : "com.mysql.jdbc.Driver"\n        }\n      }\n    },\n    {\n      "kms-env" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "kms_log_dir" : "/var/log/ranger/kms",\n          "create_db_user" : "true",\n          "kms_group" : "kms",\n          "kms_user" : "kms",\n          "kms_port" : "9292"\n        }\n      }\n    },\n    {\n      "ranger-hdfs-security" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.plugin.hdfs.policy.source.impl" : "org.apache.ranger.admin.client.RangerAdminRESTClient"\n        }\n      }\n    },\n\n    {\n      "ranger-env" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "xml_configurations_supported" : "true",\n          "ranger_user" : "ranger",\n          "xasecure.audit.destination.hdfs.dir" : "hdfs://ambari-agent-1.node.dc1.consul:8020/ranger/audit",\n          "create_db_dbuser" : "true",\n          "ranger-hdfs-plugin-enabled" : "Yes",\n          "ranger_privelege_user_jdbc_url" : "jdbc:mysql://172.17.0.9:3306",\n          "ranger-knox-plugin-enabled" : "No",\n          "is_solrCloud_enabled" : "false",\n          "bind_anonymous" : "false",\n          "ranger-yarn-plugin-enabled" : "Yes",\n          "ranger-kafka-plugin-enabled" : "No",\n          "xasecure.audit.destination.hdfs" : "true",\n          "ranger-hive-plugin-enabled" : "No",\n          "xasecure.audit.destination.solr" : "false",\n          "xasecure.audit.destination.db" : "true",\n          "ranger_group" : "ranger",\n          "ranger_admin_username" : "amb_ranger_admin",\n          "ranger-hbase-plugin-enabled" : "Yes",\n          "admin_username" : "admin"\n        }\n      }\n    },\n\n    {\n      "kms-properties" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "REPOSITORY_CONFIG_USERNAME" : "keyadmin",\n          "KMS_MASTER_KEY_PASSWD" : "SECRET:kms-properties:1:KMS_MASTER_KEY_PASSWD",\n          "DB_FLAVOR" : "MYSQL",\n          "db_name" : "rangerkms",\n          "SQL_CONNECTOR_JAR" : "/usr/share/java/mysql-connector-java.jar",\n          "db_user" : "rangerkms",\n          "db_host" : "172.17.0.9:3306",\n          "db_root_user" : "root"\n        }\n      }\n    },\n\n    {\n      "ranger-yarn-security" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.plugin.yarn.policy.source.impl" : "org.apache.ranger.admin.client.RangerAdminRESTClient"\n        }\n      }\n    },\n\n    {\n      "usersync-properties" : {\n        "properties_attributes" : { },\n        "properties" : { }\n      }\n    },\n\n    {\n      "ranger-hbase-security" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "ranger.plugin.hbase.policy.source.impl" : "org.apache.ranger.admin.client.RangerAdminRESTClient"\n        }\n      }\n    },\n    {\n      "hdfs-site" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "dfs.encryption.key.provider.uri" : "kms://http@%HOSTGROUP::host_group_1%:9292/kms",\n          "dfs.namenode.inode.attributes.provider.class" : "org.apache.ranger.authorization.hadoop.RangerHdfsAuthorizer"\n        }\n      }\n    },\n    {\n      "ranger-yarn-plugin-properties" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "REPOSITORY_CONFIG_USERNAME" : "yarn",\n          "common.name.for.certificate" : "",\n          "ranger-yarn-plugin-enabled" : "Yes",\n          "policy_user" : "ambari-qa",\n          "hadoop.rpc.protection" : ""\n        }\n      }\n    },\n    {\n      "ranger-hbase-plugin-properties" : {\n        "properties_attributes" : { },\n        "properties" : {\n          "REPOSITORY_CONFIG_USERNAME" : "hbase",\n          "common.name.for.certificate" : "",\n          "ranger-hbase-plugin-enabled" : "Yes",\n          "policy_user" : "ambari-qa"\n        }\n      }\n    }\n  ],\n  "host_groups" : [\n    {\n      "name" : "host_group_1",\n      "configurations" : [ ],\n      "components" : [\n        {\n          "name" : "ZOOKEEPER_CLIENT"\n        },\n        {\n          "name" : "ZOOKEEPER_SERVER"\n        },\n        {\n          "name" : "RANGER_ADMIN"\n        },\n        {\n          "name" : "HBASE_REGIONSERVER"\n        },\n        {\n          "name" : "HBASE_CLIENT"\n        },\n        {\n          "name" : "HBASE_MASTER"\n        },\n        {\n          "name" : "RANGER_USERSYNC"\n        },\n        {\n          "name" : "NAMENODE"\n        },\n        {\n          "name" : "NODEMANAGER"\n        },\n        {\n          "name" : "HDFS_CLIENT"\n        },\n        {\n          "name" : "YARN_CLIENT"\n        },\n        {\n          "name" : "MAPREDUCE2_CLIENT"\n        },\n        {\n          "name" : "DATANODE"\n        },\n        {\n          "name" : "RANGER_KMS_SERVER"\n        }\n      ],\n      "cardinality" : "1"\n    },\n    {\n      "name" : "host_group_2",\n      "configurations" : [ ],\n      "components" : [\n        {\n          "name" : "ZOOKEEPER_SERVER"\n        },\n        {\n          "name" : "HISTORYSERVER"\n        },\n        {\n          "name" : "HBASE_REGIONSERVER"\n        },\n        {\n          "name" : "APP_TIMELINE_SERVER"\n        },\n        {\n          "name" : "HDFS_CLIENT"\n        },\n        {\n          "name" : "NODEMANAGER"\n        },\n        {\n          "name" : "SECONDARY_NAMENODE"\n        },\n        {\n          "name" : "DATANODE"\n        },\n        {\n          "name" : "RESOURCEMANAGER"\n        }\n      ],\n      "cardinality" : "1"\n    },\n    {\n      "name" : "host_group_3",\n      "configurations" : [ ],\n      "components" : [\n        {\n          "name" : "ZOOKEEPER_CLIENT"\n        },\n        {\n          "name" : "ZOOKEEPER_SERVER"\n        },\n        {\n          "name" : "HBASE_REGIONSERVER"\n        },\n        {\n          "name" : "HBASE_CLIENT"\n        },\n        {\n          "name" : "HDFS_CLIENT"\n        },\n        {\n          "name" : "NODEMANAGER"\n        },\n        {\n          "name" : "YARN_CLIENT"\n        },\n        {\n          "name" : "MAPREDUCE2_CLIENT"\n        },\n        {\n          "name" : "DATANODE"\n        }\n      ],\n      "cardinality" : "1"\n    }\n  ],\n  "Blueprints" : {\n    "stack_name" : "HDP",\n    "stack_version" : "2.3"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"deploy-ranger-in-ha-mode",children:"Deploy Ranger in HA mode"}),"\n",(0,s.jsx)(n.p,{children:"The difference from deploying Ranger in non-HA mode is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy RANGER_ADMIN component to multiple host"}),"\n",(0,s.jsxs)(n.li,{children:["Setup a load balancer and configure it to front all RANGER_ADMIN instances (The URL of a Ranger Admin instance is ",(0,s.jsxs)(n.a,{href:"http://hostport",children:["http://host",":port"]})," (default port 6080) )"]}),"\n",(0,s.jsxs)(n.li,{children:["admin-properties","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"policymgr_external_url - override the value of this configuration property with the URL of the load balancer. Each component interacting with Ranger is using the value of this property to connect to Ranger thus these will connect via the balancer."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var a=r(96540);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);