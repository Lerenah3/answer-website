"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5047],{59282:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(43010),n=t(90887);const r={slug:"/how-to-release"},i="How to Release",o={id:"contributing/how-to-release",title:"How to Release",description:"All Apache projects are required to follow the Apache Release Policy. This guide is intended to help you understand the policy and how to release projects at Apache.",source:"@site/community/contributing/how-to-release.md",sourceDirName:"contributing",slug:"/how-to-release",permalink:"/community/how-to-release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/community/contributing/how-to-release.md",tags:[],version:"current",lastUpdatedBy:"Luffy",lastUpdatedAt:1732265052,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{slug:"/how-to-release"},sidebar:"community",previous:{title:"Blog Post",permalink:"/community/blog-post"}},l={},c=[{value:"Release Process",id:"release-process",level:2},{value:"Create a GPG key",id:"create-a-gpg-key",level:2},{value:"Upload the release artifacts to the dev Apache SVN",id:"upload-the-release-artifacts-to-the-dev-apache-svn",level:2},{value:"Create a RC tag",id:"create-a-rc-tag",level:3},{value:"Sign the release artifacts",id:"sign-the-release-artifacts",level:3},{value:"Create the checksums for the release artifacts",id:"create-the-checksums-for-the-release-artifacts",level:3},{value:"Upload to the svn repository",id:"upload-to-the-svn-repository",level:3},{value:"Verify the release artifacts",id:"verify-the-release-artifacts",level:2},{value:"How to verify the signatures",id:"how-to-verify-the-signatures",level:3},{value:"How to verify the checksums",id:"how-to-verify-the-checksums",level:3},{value:"Start a vote",id:"start-a-vote",level:2},{value:"Vote email template",id:"vote-email-template",level:3},{value:"Migration candidate to the release Apache SVN",id:"migration-candidate-to-the-release-apache-svn",level:2},{value:"Create a release",id:"create-a-release",level:2},{value:"Update the Download page",id:"update-the-download-page",level:2},{value:"Announce the vote result and release.",id:"announce-the-vote-result-and-release",level:2},{value:"email template",id:"email-template",level:3}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"how-to-release",children:"How to Release"}),"\n",(0,s.jsxs)(a.p,{children:["All Apache projects are required to follow the ",(0,s.jsx)(a.a,{href:"https://www.apache.org/legal/release-policy.html",children:"Apache Release Policy"}),". This guide is intended to help you understand the policy and how to release projects at Apache."]}),"\n",(0,s.jsx)(a.h2,{id:"release-process",children:"Release Process"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Create a GPG key if you don't have one."}),"\n",(0,s.jsx)(a.li,{children:"Create a RC tag in the git repository and write the release notes."}),"\n",(0,s.jsx)(a.li,{children:"Upload release artifacts to the dev Apache SVN."}),"\n",(0,s.jsx)(a.li,{children:"Verify the release artifacts."}),"\n",(0,s.jsx)(a.li,{children:"Start a vote."}),"\n",(0,s.jsx)(a.li,{children:"Migration candidate to the release Apache SVN."}),"\n",(0,s.jsx)(a.li,{children:"Create a release."}),"\n",(0,s.jsx)(a.li,{children:"Update the Download page."}),"\n",(0,s.jsx)(a.li,{children:"Announce the vote result and release."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"create-a-gpg-key",children:"Create a GPG key"}),"\n",(0,s.jsxs)(a.p,{children:["Create a GPG key if you don't have one. You can follow the instructions ",(0,s.jsx)(a.a,{href:"https://www.apache.org/dev/openpgp.html",children:"here"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'# create a GPG key\n$ gpg --full-generate-key\n\n# list the GPG keys\n$ gpg  --keyid-format SHORT --list-keys\n\n# upload the GPG key to the key server, xxx is the GPG key id\n$ gpg --keyserver keyserver.ubuntu.com --send-key xxx\n\n# append the GPG key to the KEYS file the svn repository\n$ svn co https://dist.apache.org/repos/dist/release/incubator/answer/\n$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS\n$ svn ci -m "add gpg key" \n'})}),"\n",(0,s.jsx)(a.h2,{id:"upload-the-release-artifacts-to-the-dev-apache-svn",children:"Upload the release artifacts to the dev Apache SVN"}),"\n",(0,s.jsx)(a.h3,{id:"create-a-rc-tag",children:"Create a RC tag"}),"\n",(0,s.jsxs)(a.p,{children:["When you want to release a new version, you need to create a new RC tag in the git repository firstly. The tag name should be ",(0,s.jsx)(a.code,{children:"v{release-version}-RC{rc-version}"}),". This has the advantage of avoiding tag deletion."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"release-version: The version you want to release, such as 1.2.0."}),"\n",(0,s.jsx)(a.li,{children:"rc-version: The release candidate version, such as RC1."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'$ git tag -a v{release-version}-RC{rc-version} -m "Release Apache Answer {release-version}"\n$ git push origin v{release-version}-RC{rc-version}\n'})}),"\n",(0,s.jsxs)(a.p,{children:["After pushing the RC tag, CI will automatically generate the release page based on the tag. write the release notes in the release page. remember to select ",(0,s.jsx)(a.code,{children:"Set as a pre-release"})," before clicking ",(0,s.jsx)(a.code,{children:"Publish release"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"release page",src:t(94189).Z+"",width:"586",height:"128"})}),"\n",(0,s.jsxs)(a.p,{children:["The release notes should choose a tag that is not the branch, such as ",(0,s.jsx)(a.code,{children:"v1.2.0-RC1"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"release notes",src:t(11502).Z+"",width:"938",height:"910"})}),"\n",(0,s.jsx)(a.h3,{id:"sign-the-release-artifacts",children:"Sign the release artifacts"}),"\n",(0,s.jsxs)(a.p,{children:["Sign the release artifacts with the GPG key. ",(0,s.jsx)(a.strong,{children:"Be careful to check that the binary file is complete to avoid a size of 0."})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"# sign the release artifacts, xxxx is xxx@apache.org\n$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done\n"})}),"\n",(0,s.jsx)(a.h3,{id:"create-the-checksums-for-the-release-artifacts",children:"Create the checksums for the release artifacts"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"# create the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done\n"})}),"\n",(0,s.jsx)(a.h3,{id:"upload-to-the-svn-repository",children:"Upload to the svn repository"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"NOTICE"})," The repository address where the GPG key is created and the prepository address where the release artifacts are uploaded are not the same. The GPG key is uploaded to the ",(0,s.jsx)(a.code,{children:"https://dist.apache.org/repos/dist/release/incubator/answer/"})," repository, and the release artifacts are uploaded to the ",(0,s.jsx)(a.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/answer/"})," repository."]}),"\n"]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["Create a directory for the release artifacts in the svn repository.","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ svn co https://dist.apache.org/repos/dist/dev/incubator/answer/\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Upload the release artifacts to the svn repository.","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ cp /path/to/release/artifacts/* ./{release-version}/\n$ svn add ./{release-version}/*\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["release-version format: 1.2.0-incubating","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'$ svn commit -m "add Apache Answer release artifacts for {release-version}"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["The release artifacts should be uploaded to the ",(0,s.jsx)(a.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}"})," directory."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"IMPORTANT"})," After completion, visit the link ",(0,s.jsx)(a.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}"})," to check whether the file upload is correct."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"correct result",src:t(56667).Z+"",width:"1192",height:"513"})}),"\n",(0,s.jsx)(a.h2,{id:"verify-the-release-artifacts",children:"Verify the release artifacts"}),"\n",(0,s.jsx)(a.p,{children:"Following is the basic check items for the release artifacts."}),"\n",(0,s.jsxs)(a.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Download links are valid."]}),"\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Checksums and PGP signatures are valid."]}),"\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Source code distributions have correct names matching the current release."]}),"\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","LICENSE and NOTICE files are correct for each Apache Answer repo."]}),"\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","All files have license headers if necessary."]}),"\n",(0,s.jsxs)(a.li,{className:"task-list-item",children:[(0,s.jsx)(a.input,{type:"checkbox",disabled:!0})," ","No unlicensed compiled archives bundled in source archive."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"how-to-verify-the-signatures",children:"How to verify the signatures"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"# download KEYS\n$ curl https://downloads.apache.org/incubator/answer/KEYS > KEYS\n\n# import KEYS and trust the key, please replace the email address with the one you want to trust.\n$ gpg --import KEYS\n$ gpg --edit-key linkinstar@apache.org\ngpg> trust\ngpg> 5\ngpg> y\ngpg> quit\n\n# enter the directory where the release artifacts are located\n$ cd /path/to/release/artifacts\n\n# verify the signature\n$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n\n# if you see 'Good signature' in the output, it means the signature is valid.\n"})}),"\n",(0,s.jsx)(a.h3,{id:"how-to-verify-the-checksums",children:"How to verify the checksums"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"# verify the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n"})}),"\n",(0,s.jsx)(a.h2,{id:"start-a-vote",children:"Start a vote"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["Send a vote email to the ",(0,s.jsx)(a.a,{href:"mailto:dev@answer.apache.org",children:"dev@answer.apache.org"}),". Incubator need to first do a vote on their dev list and that vote requires at least ",(0,s.jsx)(a.strong,{children:"3 +1s from Apache Answer PPMC members"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Wait for at ",(0,s.jsx)(a.strong,{children:"least 72 hours"})," or until the necessary number of votes are reached."]}),"\n",(0,s.jsx)(a.li,{children:"Announce the result of the vote on the dev list."}),"\n",(0,s.jsxs)(a.li,{children:["If the dev vote passes, send email to the ",(0,s.jsx)(a.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"})," to request a vote on the general list. The incubator vote needs at least ",(0,s.jsx)(a.strong,{children:"3 +1s from Incubator PMC members"}),"\n(binding votes)."]}),"\n",(0,s.jsxs)(a.li,{children:["Wait for at ",(0,s.jsx)(a.strong,{children:"least 72 hours"})," or until the necessary number of votes are reached."]}),"\n",(0,s.jsx)(a.li,{children:"Announce the result of the vote on the general list."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"vote-email-template",children:"Vote email template"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"NOTICE"}),"  Directly copying the email content will cause the format to be incorrect. It is recommended to copy the email to a ",(0,s.jsx)(a.code,{children:".txt"})," file. After writing the content, copy it into the email tool you are using.  ",(0,s.jsx)(a.code,{children:"The vote tread"})," and ",(0,s.jsx)(a.code,{children:"Vote Result"})," is not needed during the first round of voting in dev."]}),"\n",(0,s.jsx)(a.p,{children:"How to get the link to The vote thread:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Find the email you sent from the apache mailing list."}),"\n",(0,s.jsx)(a.li,{children:"Click the link button below the email to get the link you need."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"vote thread link",src:t(4743).Z+"",width:"1118",height:"438"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"[VOTE] Release Apache Answer (Incubating) {release-version}\n\nHello,\n\n    This is a call for vote to release Apache Answer (Incubating) version {release-version}.\n\n    The vote thread:\n        https://lists.apache.org/thread/{id}\n\n    Vote Result:\n        https://lists.apache.org/thread/{id}\n\n    The release candidates:\n        https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}/\n    \n    Release notes:\n        https://github.com/apache/incubator-answer/releases/tag/{release-version}\n\n    Git tag for the release:\n        https://github.com/apache/incubator-answer/releases/tag/{release-version}\n    \n    Git commit id for the release:\n        https://github.com/apache/incubator-answer/commit/{id}\n\n    Keys to verify the Release Candidate:\n        https://downloads.apache.org/incubator/answer/KEYS\n        \n    The vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\n    Please vote accordingly:\n\n    [ ] +1 approve\n    [ ] +0 no opinion\n    [ ] -1 disapprove with the reason\n\n    Checklist for reference:\n\n    [ ] Download links are valid.\n    [ ] Checksums and PGP signatures are valid.\n    [ ] Source code distributions have correct names matching the current release.\n    [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.\n    [ ] All files have license headers if necessary.\n    [ ] No unlicensed compiled archives bundled in source archive.\n\n    To compile from the source, please refer to:\n    \n    https://github.com/apache/incubator-answer#building-from-source\n\nThanks,\n<YOUR NAME>\n"})}),"\n",(0,s.jsx)(a.h2,{id:"migration-candidate-to-the-release-apache-svn",children:"Migration candidate to the release Apache SVN"}),"\n",(0,s.jsxs)(a.p,{children:["Before announcing the vote result, you need to migrate the release artifacts from the dev Apache SVN to the release Apache SVN. The release artifacts should be uploaded to the ",(0,s.jsx)(a.code,{children:"https://dist.apache.org/repos/dist/release/incubator/answer/{release-version}"})," directory."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'$ svn mv https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version} https://dist.apache.org/repos/dist/release/incubator/answer/{release-version} -m "transfer packages for answer {release-version}"\n'})}),"\n",(0,s.jsx)(a.h2,{id:"create-a-release",children:"Create a release"}),"\n",(0,s.jsx)(a.p,{children:"After the vote is passed, create a tag without RC, CI will automatically generate the release page based on the tag."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'$ git tag -a v{release-version} -m "Release Apache Answer {release-version}"\n$ git push origin v{release-version}\n'})}),"\n",(0,s.jsx)(a.h2,{id:"update-the-download-page",children:"Update the Download page"}),"\n",(0,s.jsxs)(a.p,{children:["Update the download page with the new release version. The download page is located in the ",(0,s.jsx)(a.code,{children:"src/pages/download.tsx"})," file."]}),"\n",(0,s.jsx)(a.h2,{id:"announce-the-vote-result-and-release",children:"Announce the vote result and release."}),"\n",(0,s.jsxs)(a.p,{children:["After the vote is passed, send an email to the an ",(0,s.jsx)(a.a,{href:"mailto:announce@apache.org",children:"announce@apache.org"})," and cc ",(0,s.jsx)(a.a,{href:"mailto:dev@answer.apache.org",children:"dev@answer.apache.org"}),"\u3001",(0,s.jsx)(a.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"})," to announce the vote result and release."]}),"\n",(0,s.jsx)(a.h3,{id:"email-template",children:"email template"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"Hello everyone,\n\nThe Apache Answer (Incubating) {release-version} has been released!\n\nApache Answer is a Q&A platform software for teams at any scale.\nWhether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.\n\nDownload Links: https://downloads.apache.org/incubator/answer/\n\nRelease Notes: https://github.com/apache/incubator-answer/releases/tag/{release-version}\n\nWebsite: https://answer.apache.org/\n\nResources:\n- Issue: https://github.com/apache/incubator-answer/issues\n- Mailing list: dev@answer.apache.org\n\nThanks,\n<YOUR NAME>\n"})})]})}function d(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94189:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/img-1-cfad18d2c31aee0878e6e74afef26048.jpg"},11502:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/img-2-abb9219a39788da417978f842fd19619.png"},56667:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/release-2e2cd12d84fafa5c709031f84a415d58.jpeg"},4743:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/vote-tread-link-7e11e55ccea17a72479725b5d9d765ba.jpeg"},90887:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>i});var s=t(85170);const n={},r=s.createContext(n);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);