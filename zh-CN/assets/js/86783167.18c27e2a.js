"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9017],{76132:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(43010),t=n(90887);const r={slug:"/deploy-subdirectory"},s="Deploy subdirectory",l={id:"guides/deploy-subdirectory",title:"Deploy subdirectory",description:"This function is implemented based on react-router's basename, so it is not applicable to subdirectories implemented through nginx configuration deploy.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/deploy-subdirectory.md",sourceDirName:"guides",slug:"/deploy-subdirectory",permalink:"/zh-CN/docs/deploy-subdirectory",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"Anne",lastUpdatedAt:1721912029,formattedLastUpdatedAt:"2024\u5e747\u670825\u65e5",frontMatter:{slug:"/deploy-subdirectory"},sidebar:"docs",previous:{title:"Reputation",permalink:"/zh-CN/docs/reputation"},next:{title:"Development Guide",permalink:"/zh-CN/docs/development"}},d={},c=[{value:"Steps",id:"steps",level:3},{value:"Configuration file introduction",id:"configuration-file-introduction",level:3},{value:"base_url",id:"base_url",level:3},{value:"public_url",id:"public_url",level:3},{value:"api_url",id:"api_url",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"deploy-subdirectory",children:"Deploy subdirectory"}),"\n",(0,o.jsxs)(i.p,{children:["This function is implemented based on react-router's ",(0,o.jsx)(i.a,{href:"https://reactrouter.com/en/main/router-components/memory-router#basename",children:"basename"}),", so it is not applicable to subdirectories implemented through ",(0,o.jsx)(i.code,{children:"nginx"})," configuration deploy."]}),"\n",(0,o.jsxs)(i.p,{children:["Apache Answer supports subdirectory deployment as of version 1.3.5. This configuration allows you to set a route prefix for your application, e.g., if you have routes ",(0,o.jsx)(i.code,{children:"/"})," and ",(0,o.jsx)(i.code,{children:"/questions"}),", and you set ",(0,o.jsx)(i.code,{children:"base_url"})," to /foo, you can access the previous routes via ",(0,o.jsx)(i.code,{children:"/foo"})," and ",(0,o.jsx)(i.code,{children:"/foo/questions"}),"."]}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsx)(i.p,{children:"The configuration must be set at build time and cannot be changed without a rebuild because the value is inlined in the client package. This means that it is necessary for the user to modify the configuration file and then compile it themselves in order to complete the build of the project."})}),"\n",(0,o.jsx)(i.h3,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Modify the configuration file ",(0,o.jsx)(i.code,{children:"/configs/config.yaml"}),"\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:["Run the command to build the project ",(0,o.jsx)(i.code,{children:"make ui"})," ",(0,o.jsx)(i.code,{children:"make build"}),"\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:["Run the command ",(0,o.jsx)(i.code,{children:"INSTALL_PORT=80 . /answer init -C . /answer-data/"})," Initialize the project, note that you need to add your base_url (",(0,o.jsx)(i.a,{href:"http://localhost:80/%7Bbase_url%7D/install/",children:"http://localhost:80/{base_url}/install/"}),") to the access path here to see if the configuration is successful."]}),"\n",(0,o.jsxs)(i.li,{children:["Packaging into docker or releasing the above binary directly, see ",(0,o.jsx)(i.a,{href:"/docs/plugins#build",children:"here"})]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"configuration-file-introduction",children:"Configuration file introduction"}),"\n",(0,o.jsxs)(i.p,{children:["In order to unify the management of configuration-related variables, starting from v1.3.5, the environment variables in the ui directory are unified into ",(0,o.jsx)(i.code,{children:"/configs/config.yaml"})," in the root directory, and the configurations here will be generated into ",(0,o.jsx)(i.code,{children:"/ui/.env.production"})," by scripts, so as to realize the injection of environment variables."]}),"\n",(0,o.jsxs)(i.p,{children:["Note: This only affects variables in the production environment, for development mode please continue to refer ",(0,o.jsx)(i.a,{href:"/docs/development",children:"here"}),". For more information on configuration files, please refer to ",(0,o.jsx)(i.a,{href:"/docs/configfile",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"...\nui:\n  public_url: '/'\n  api_url: '/'\n  base_url: ''\n\n"})}),"\n",(0,o.jsx)(i.h3,{id:"base_url",children:"base_url"}),"\n",(0,o.jsxs)(i.p,{children:["The path of the subdirectory. The default value is ",(0,o.jsx)(i.code,{children:"''"}),", which means it is deployed in the root directory. If the value is modified, for example ",(0,o.jsx)(i.code,{children:" base_url: '/foo''"}),", all access paths of the page will be added with this prefix."]}),"\n",(0,o.jsxs)(i.p,{children:["Normally, if this value is modified, ",(0,o.jsx)(i.code,{children:"public_url"})," should also remain consistent."]}),"\n",(0,o.jsx)(i.h3,{id:"public_url",children:"public_url"}),"\n",(0,o.jsxs)(i.p,{children:["The path of static resources. The default value is ",(0,o.jsx)(i.code,{children:"'/'"}),". If the website uses CDN to host static resources, this value can be set to the URL of CDN. If ",(0,o.jsx)(i.code,{children:"base_url"})," is modified and CDN is not used, then this value also needs to be Same value as ",(0,o.jsx)(i.code,{children:"base_url"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"api_url",children:"api_url"}),"\n",(0,o.jsxs)(i.p,{children:["The default value is ",(0,o.jsx)(i.code,{children:"''"}),", which is normally not adjusted. However, if your project uses nginx to proxy subpaths, you need to match the value of ",(0,o.jsx)(i.code,{children:"base_url"}),"."]}),"\n",(0,o.jsxs)(i.admonition,{type:"tip",children:[(0,o.jsxs)(i.p,{children:["The KEY written to the ",(0,o.jsx)(i.code,{children:".env"})," file will be converted to:"]}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"PUBLIC_URL=/\nREACT_APP_API_URL=/\nREACT_APP_BASE_URL=\n"})})]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},90887:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var o=n(85170);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);