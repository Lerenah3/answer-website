"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3600],{86027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(43010),a=n(90887);const o={slug:"/configfile"},r="Config File",s={id:"getting-started/configfile",title:"Config File",description:"We use yaml configuration file. It will be created automatically after answer init command. The default path is /data/conf/config.yaml",source:"@site/docs/getting-started/configfile.md",sourceDirName:"getting-started",slug:"/configfile",permalink:"/docs/configfile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/getting-started/configfile.md",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1729756578,formattedLastUpdatedAt:"Oct 24, 2024",frontMatter:{slug:"/configfile"},sidebar:"docs",previous:{title:"Command Line",permalink:"/docs/command-line"},next:{title:"Environment Variables",permalink:"/docs/env"}},c={},d=[{value:"config.yaml description",id:"configyaml-description",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"config-file",children:"Config File"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["We use ",(0,i.jsx)(t.code,{children:"yaml"})," configuration file. It will be created automatically after ",(0,i.jsx)(t.code,{children:"answer init"})," command. The default path is ",(0,i.jsx)(t.code,{children:"/data/conf/config.yaml"})]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ui"})," configuration first is used to configure React's environment variables, which generally don't need to be changed unless you want to configure a CDN or deploy the project in a subdirectory."]})]}),"\n",(0,i.jsx)(t.h2,{id:"configyaml-description",children:"config.yaml description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="/data/conf/config.yaml"',children:"server:\n  http:\n    addr: 0.0.0.0:80 # Project access port number\ndata:\n  database:\n    driver: \"mysql\" # Default database driver is mysql\n    connection: root:root@tcp(127.0.0.1:3306)/answer # MySQL database connection address\n  cache:\n    file_path: \"/tmp/cache/cache.db\" # Cache file storage path\ni18n:\n  bundle_dir: \"/data/i18n\" # Internationalized file storage directory\nswaggerui:\n  show: true # Whether to display the swaggerapi documentation, address /swagger/index.html\n  protocol: http # swagger protocol header\n  host: 127.0.0.1 # An accessible IP address or domain name\n  address: ':80'  # accessible port number\nservice_config:\n  upload_path: \"/data/uploads\" # upload directory\nui:\n  public_url: '/' # static resource path\n  api_url: '/' # api url for  ajax requests\n  base_url: ''  # the default deployment is in the root directory, you need to change this value when deploying in a subdirectory\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},90887:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(85170);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);