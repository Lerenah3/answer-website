"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9835],{13054:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(43010),a=t(90887);const o={slug:"/configfile"},r="\u914d\u7f6e\u6587\u4ef6",c={id:"getting-started/configfile",title:"\u914d\u7f6e\u6587\u4ef6",description:"\u6211\u4eec\u4f7f\u7528 yaml \u914d\u7f6e\u6587\u4ef6\u3002\u5b83\u4f1a\u5728\u6267\u884c answer init \u547d\u4ee4\u540e\u81ea\u52a8\u521b\u5efa\u3002\u9ed8\u8ba4\u8def\u5f84\u4e3a /data/conf/config.yaml\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/configfile.md",sourceDirName:"getting-started",slug:"/configfile",permalink:"/zh-CN/docs/configfile",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1736737922,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",frontMatter:{slug:"/configfile"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u6307\u5357",permalink:"/zh-CN/docs/command-line"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/zh-CN/docs/env"}},s={},d=[{value:"config.yaml \u63cf\u8ff0",id:"configyaml-\u63cf\u8ff0",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"yaml"})," \u914d\u7f6e\u6587\u4ef6\u3002\u5b83\u4f1a\u5728\u6267\u884c ",(0,i.jsx)(e.code,{children:"answer init"})," \u547d\u4ee4\u540e\u81ea\u52a8\u521b\u5efa\u3002\u9ed8\u8ba4\u8def\u5f84\u4e3a ",(0,i.jsx)(e.code,{children:"/data/conf/config.yaml"}),"\u3002"]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ui"})," \u914d\u7f6e\u7528\u4e8e\u8bbe\u7f6e React \u7684\u73af\u5883\u53d8\u91cf\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u65e0\u9700\u66f4\u6539\uff0c\u9664\u975e\u4f60\u9700\u8981\u914d\u7f6e CDN \u6216\u5c06\u9879\u76ee\u90e8\u7f72\u5230\u5b50\u76ee\u5f55\u4e0b\u3002"]})]}),"\n",(0,i.jsx)(e.h2,{id:"configyaml-\u63cf\u8ff0",children:"config.yaml \u63cf\u8ff0"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",metastring:'title="/data/conf/config.yaml"',children:"server:\n  http:\n    addr: 0.0.0.0:80 # \u9879\u76ee\u8bbf\u95ee\u7aef\u53e3\u53f7\ndata:\n  database:\n    driver: \"mysql\" # \u9ed8\u8ba4\u6570\u636e\u5e93\u9a71\u52a8\u4e3a mysql\n    connection: root:root@tcp(127.0.0.1:3306)/answer # MySQL \u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740\n  cache:\n    file_path: \"/tmp/cache/cache.db\" # \u7f13\u5b58\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\ni18n:\n  bundle_dir: \"/data/i18n\" # \u56fd\u9645\u5316\u6587\u4ef6\u5b58\u50a8\u76ee\u5f55\nswaggerui:\n  show: true # \u662f\u5426\u663e\u793a swaggerapi \u6587\u6863\uff0c\u5730\u5740\u4e3a /swagger/index.html\n  protocol: http # swagger \u534f\u8bae\u5934\n  host: 127.0.0.1 # \u53ef\u8bbf\u95ee\u7684 IP \u5730\u5740\u6216\u57df\u540d\n  address: ':80'  # \u53ef\u8bbf\u95ee\u7684\u7aef\u53e3\u53f7\nservice_config:\n  upload_path: \"/data/uploads\" # \u4e0a\u4f20\u76ee\u5f55\nui:\n  public_url: '/' # \u9759\u6001\u8d44\u6e90\u8def\u5f84\n  api_url: '/' # ajax \u8bf7\u6c42\u7684 api url\n  base_url: ''  # \u9ed8\u8ba4\u90e8\u7f72\u5728\u6839\u76ee\u5f55\u4e0b\uff0c\u5f53\u90e8\u7f72\u5728\u5b50\u76ee\u5f55\u65f6\u9700\u8981\u4fee\u6539\u6b64\u503c\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},90887:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var i=t(85170);const a={},o=i.createContext(a);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);