"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5047],{75821:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(43010),n=s(90887);const r={slug:"/how-to-release"},i="How to Release",o={id:"contributing/how-to-release",title:"How to Release",description:"All Apache projects are required to follow the Apache Release Policy. This guide is intended to help you understand the policy and how to release projects at Apache.",source:"@site/community/contributing/how-to-release.md",sourceDirName:"contributing",slug:"/how-to-release",permalink:"/community/how-to-release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/community/contributing/how-to-release.md",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1724137319,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{slug:"/how-to-release"},sidebar:"community",previous:{title:"Blog Post",permalink:"/community/blog-post"}},l={},c=[{value:"Release process",id:"release-process",level:2},{value:"Prepare all the release artifacts",id:"prepare-all-the-release-artifacts",level:2},{value:"Sign the release artifacts",id:"sign-the-release-artifacts",level:3},{value:"Create the checksums for the release artifacts",id:"create-the-checksums-for-the-release-artifacts",level:3},{value:"Upload the release artifacts to the svn repository",id:"upload-the-release-artifacts-to-the-svn-repository",level:2},{value:"Verify the release artifacts",id:"verify-the-release-artifacts",level:2},{value:"How to verify the signatures",id:"how-to-verify-the-signatures",level:3},{value:"How to verify the checksums",id:"how-to-verify-the-checksums",level:3},{value:"Vote on the release",id:"vote-on-the-release",level:2},{value:"Vote email template",id:"vote-email-template",level:3},{value:"ANNOUNCE email template",id:"announce-email-template",level:3},{value:"Migrating the release artifacts to the release Apache SVN",id:"migrating-the-release-artifacts-to-the-release-apache-svn",level:2},{value:"Note",id:"note",level:2},{value:"RC Tag",id:"rc-tag",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-release",children:"How to Release"}),"\n",(0,a.jsxs)(t.p,{children:["All Apache projects are required to follow the ",(0,a.jsx)(t.a,{href:"https://www.apache.org/legal/release-policy.html",children:"Apache Release Policy"}),". This guide is intended to help you understand the policy and how to release projects at Apache."]}),"\n",(0,a.jsx)(t.h2,{id:"release-process",children:"Release process"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Prepare all the release artifacts."}),"\n",(0,a.jsx)(t.li,{children:"Upload the release artifacts to the svn repository."}),"\n",(0,a.jsx)(t.li,{children:"Verify the release artifacts."}),"\n",(0,a.jsx)(t.li,{children:"Vote on the release."}),"\n",(0,a.jsx)(t.li,{children:"Announce the vote result and release."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"prepare-all-the-release-artifacts",children:"Prepare all the release artifacts"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Create the RC tag in the git repository and write the release notes.","\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["notice 1: Remember to select ",(0,a.jsx)(t.code,{children:"Set as a pre-release"})," before clicking ",(0,a.jsx)(t.code,{children:"Publish release"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["notice 2: Release notes should choose a tag that is not the branch, such as ",(0,a.jsx)(t.code,{children:"v1.2.0-RC1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Build the release artifacts(bundles, source archives, etc)."}),"\n",(0,a.jsx)(t.li,{children:"Sign the release artifacts."}),"\n",(0,a.jsx)(t.li,{children:"Create the checksums for the release artifacts."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"sign-the-release-artifacts",children:"Sign the release artifacts"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a GPG key if you don't have one."}),"\n",(0,a.jsx)(t.li,{children:"Add the GPG key to the KEYS file."}),"\n",(0,a.jsxs)(t.li,{children:["Sign the release artifacts with the GPG key. ",(0,a.jsx)(t.strong,{children:"Be careful to check that the binary file is complete to avoid a size of 0."})]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'# create a GPG key, after executing this command, select the first one RSA \u548c RSA\n$ gpg --full-generate-key\n\n# list the GPG keys\n$ gpg  --keyid-format SHORT --list-keys\n\n# upload the GPG key to the key server, xxx is the GPG key id\n# eg: pub rsa4096/4C21E346 2024-05-06 [SC], 4C21E346 is the GPG key id;\n$ gpg --keyserver keyserver.ubuntu.com --send-key xxx\n\n# append the GPG key to the KEYS file the svn repository\n# [IMPORTANT] Don\'t replace the KEYS file, just append the GPG key to the KEYS file. \n$ svn co https://dist.apache.org/repos/dist/release/incubator/answer/\n$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS \n$ svn ci -m "add gpg key" \n\n# sign the release artifacts, xxxx is xxx@apache.org\n$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done\n'})}),"\n",(0,a.jsx)(t.h3,{id:"create-the-checksums-for-the-release-artifacts",children:"Create the checksums for the release artifacts"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# create the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done\n"})}),"\n",(0,a.jsx)(t.h2,{id:"upload-the-release-artifacts-to-the-svn-repository",children:"Upload the release artifacts to the svn repository"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a directory for the release artifacts in the svn repository."}),"\n",(0,a.jsx)(t.li,{children:"Upload the release artifacts to the svn repository."}),"\n",(0,a.jsx)(t.li,{children:"release-version format: 1.3.1-incubating"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The release artifacts should be uploaded to the ",(0,a.jsx)(t.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}"})," directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'$ svn co https://dist.apache.org/repos/dist/dev/incubator/answer/\n$ cp /path/to/release/artifacts/* ./{release-version}/\n$ svn add ./{release-version}/*\n$ svn commit -m "add Apache Answer release artifacts for {release-version}"\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"IMPORTANT"})," After completion, visit the link ",(0,a.jsx)(t.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}"})," to check whether the file upload is correct."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"correct result",src:s(25409).Z+"",width:"1192",height:"513"})}),"\n",(0,a.jsx)(t.h2,{id:"verify-the-release-artifacts",children:"Verify the release artifacts"}),"\n",(0,a.jsx)(t.p,{children:"Following is the basic check items for the release artifacts."}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Download links are valid."]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Checksums and PGP signatures are valid."]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Source code distributions have correct names matching the current release."]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","LICENSE and NOTICE files are correct for each Apache Answer repo."]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","All files have license headers if necessary."]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","No unlicensed compiled archives bundled in source archive."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-to-verify-the-signatures",children:"How to verify the signatures"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# download KEYS\n$ curl https://dist.apache.org/repos/dist/release/incubator/answer/KEYS > KEYS\n\n# import KEYS and trust the key, please replace the email address with the one you want to trust.\n$ gpg --import KEYS\n$ gpg --edit-key linkinstar@apache.org\ngpg> trust\ngpg> 5\ngpg> y\ngpg> quit\n\n# enter the directory where the release artifacts are located\n$ cd /path/to/release/artifacts\n\n# verify the signature\n$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n\n# if you see 'Good signature' in the output, it means the signature is valid.\n"})}),"\n",(0,a.jsx)(t.h3,{id:"how-to-verify-the-checksums",children:"How to verify the checksums"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# verify the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n"})}),"\n",(0,a.jsx)(t.h2,{id:"vote-on-the-release",children:"Vote on the release"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Send a vote email to the ",(0,a.jsx)(t.a,{href:"mailto:dev@answer.apache.org",children:"dev@answer.apache.org"}),". Incubator need to first do a vote on their dev list and that vote requires at least ",(0,a.jsx)(t.strong,{children:"3 +1s from Apache Answer PPMC members"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Wait for at ",(0,a.jsx)(t.strong,{children:"least 72 hours"})," or until the necessary number of votes are reached."]}),"\n",(0,a.jsx)(t.li,{children:"Announce the result of the vote on the dev list."}),"\n",(0,a.jsxs)(t.li,{children:["If the dev vote passes, send email to the ",(0,a.jsx)(t.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"})," to request a vote on the general list. The incubator vote needs at least ",(0,a.jsx)(t.strong,{children:"3 +1s from Incubator PMC members"}),"\n(binding votes)."]}),"\n",(0,a.jsxs)(t.li,{children:["Wait for at ",(0,a.jsx)(t.strong,{children:"least 72 hours"})," or until the necessary number of votes are reached."]}),"\n",(0,a.jsx)(t.li,{children:"Announce the result of the vote on the general list."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"vote-email-template",children:"Vote email template"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTICE"}),"  Directly copying the email content will cause the format to be incorrect. It is recommended to copy the email to a ",(0,a.jsx)(t.code,{children:".txt"})," file. After writing the content, copy it into the email tool you are using.  ",(0,a.jsx)(t.code,{children:"The vote tread"})," and ",(0,a.jsx)(t.code,{children:"Vote Result"})," is not needed during the first round of voting in dev."]}),"\n",(0,a.jsx)(t.p,{children:"How to get the link to The vote thread:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Find the email you sent from the apache mailing list."}),"\n",(0,a.jsx)(t.li,{children:"Click the link button below the email to get the link you need."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"vote thread link",src:s(63551).Z+"",width:"1118",height:"438"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"[VOTE] Release Apache Answer (Incubating) {release-version}\n\nHello,\n\n    This is a call for vote to release Apache Answer (Incubating) version {release-version}.\n\n    The vote thread:\n        https://lists.apache.org/thread/{id}\n\n    Vote Result:\n        https://lists.apache.org/thread/{id}\n\n    The release candidates:\n        https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}/\n    \n    Release notes:\n        https://github.com/apache/incubator-answer/releases/tag/{release-version}\n\n    Git tag for the release:\n        https://github.com/apache/incubator-answer/releases/tag/{release-version}\n    \n    Git commit id for the release:\n        https://github.com/apache/incubator-answer/commit/{id}\n\n    Keys to verify the Release Candidate:\n        https://downloads.apache.org/incubator/answer/KEYS\n        \n    The vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\n    Please vote accordingly:\n\n    [ ] +1 approve\n    [ ] +0 no opinion\n    [ ] -1 disapprove with the reason\n\n    Checklist for reference:\n\n    [ ] Download links are valid.\n    [ ] Checksums and PGP signatures are valid.\n    [ ] Source code distributions have correct names matching the current release.\n    [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.\n    [ ] All files have license headers if necessary.\n    [ ] No unlicensed compiled archives bundled in source archive.\n\n    To compile from the source, please refer to:\n    \n    https://github.com/apache/incubator-answer#building-from-source\n\nThanks,\n<YOUR NAME>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"announce-email-template",children:"ANNOUNCE email template"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"Hello everyone,\n\nThe Apache Answer (Incubating) {release-version} has been released!\n\nApache Answer is a Q&A platform software for teams at any scale.\nWhether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.\n\nDownload Links: https://downloads.apache.org/incubator/answer/\n\nRelease Notes: https://github.com/apache/incubator-answer/releases/tag/{release-version}\n\nWebsite: https://answer.apache.org/\n\nResources:\n- Issue: https://github.com/apache/incubator-answer/issues\n- Mailing list: dev@answer.apache.org\n\nThanks,\n<YOUR NAME>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"migrating-the-release-artifacts-to-the-release-apache-svn",children:"Migrating the release artifacts to the release Apache SVN"}),"\n",(0,a.jsxs)(t.p,{children:["Before announcing the vote result, you need to migrate the release artifacts from the dev Apache SVN to the release Apache SVN. The release artifacts should be uploaded to the ",(0,a.jsx)(t.code,{children:"https://dist.apache.org/repos/dist/release/incubator/answer/{release-version}"})," directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'$ svn mv https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version} https://dist.apache.org/repos/dist/release/incubator/answer/{release-version} -m "transfer packages for answer {release-version}"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,a.jsx)(t.h3,{id:"rc-tag",children:"RC Tag"}),"\n",(0,a.jsxs)(t.p,{children:["When you want to release a new version, you need to create a new RC tag in the git repository firstly. The tag name should be ",(0,a.jsx)(t.code,{children:"v{release-version}-rc{rc-version}"}),". This has the advantage of avoiding tag deletion."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, if you want to release version ",(0,a.jsx)(t.code,{children:"1.2.0"}),", you need to create a tag named ",(0,a.jsx)(t.code,{children:"v1.2.0-RC1"}),". RC means Release Candidate. After the release vote is passed, you need to create a new tag named ",(0,a.jsx)(t.code,{children:"v1.2.0"})," based on the RC tag. However, if the vote is not passed, you can fix the problems and create a new RC tag such as ",(0,a.jsx)(t.code,{children:"v1.2.0-RC2"})," and start a new vote."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},25409:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/release-2e2cd12d84fafa5c709031f84a415d58.jpeg"},63551:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/vote-tread-link-7e11e55ccea17a72479725b5d9d765ba.jpeg"},90887:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var a=s(85170);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);