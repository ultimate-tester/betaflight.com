"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2326],{29070:(e,i,M)=>{M.r(i),M.d(i,{assets:()=>g,contentTitle:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>N,toc:()=>c});var t=M(85893),n=M(11151);const r={},o="Multicopter Spazzing Out?",N={id:"wiki/guides/current/Multirotor-Spazzing-Out",title:"Multicopter Spazzing Out?",description:"Since I've run into this issue so often on various facebook threads and /r/multicopter posts, I decided it would be worthwhile to compile a (written) checklist for to diagnose your quad",source:"@site/docs/wiki/guides/current/Multirotor-Spazzing-Out.md",sourceDirName:"wiki/guides/current",slug:"/wiki/guides/current/Multirotor-Spazzing-Out",permalink:"/docs/wiki/guides/current/Multirotor-Spazzing-Out",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Mixer Types",permalink:"/docs/wiki/guides/current/Mixer-Types"},next:{title:"OSD Font Upload Problem",permalink:"/docs/wiki/guides/current/OSD-Font-Upload-Problem"}},g={},c=[{value:"Flight Controller Orientation.",id:"flight-controller-orientation",level:2},{value:"Prop Direction.",id:"prop-direction",level:2},{value:"YOU MUST REMOVE PROPELLERS BEFORE FOLLOWING ANY OF THE INSTRUCTIONS BELOW!",id:"you-must-remove-propellers-before-following-any-of-the-instructions-below",level:5},{value:"Motor Direction.",id:"motor-direction",level:2},{value:"Motor Order.",id:"motor-order",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"multicopter-spazzing-out",children:"Multicopter Spazzing Out?"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Since I've run into this issue so often on various facebook threads and /r/multicopter posts, I decided it would be worthwhile to compile a (written) checklist for to diagnose your quad"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"This is prior to Anti-taz (Runaway takeoff prevention) being implemented"})}),"\n",(0,t.jsx)(i.p,{children:"When you attempt to arm your multirotor, does it?...."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Spin around"}),"\n",(0,t.jsx)(i.li,{children:"Flip itself around"}),"\n",(0,t.jsx)(i.li,{children:"Attack you and your family"}),"\n",(0,t.jsx)(i.li,{children:"Behave in an unexpected manner"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Then this guide might be for you."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h1,{id:"4-main-items-to-check",children:"4 main items to check:"}),"\n",(0,t.jsx)(i.h2,{id:"flight-controller-orientation",children:"Flight Controller Orientation."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Remove your props!"})}),"\n",(0,t.jsx)(i.li,{children:"Plug your multirotor into your computer"}),"\n",(0,t.jsx)(i.li,{children:"Navigate to the Betaflight configurator"}),"\n",(0,t.jsxs)(i.li,{children:["In the ",(0,t.jsx)(i.em,{children:"Setup"})," tab, you should see a 3D model of a quadcopter"]}),"\n",(0,t.jsx)(i.li,{children:"Move your model around in your hand, verifying that each movement correctly corresponds to whats shown on the screen (with the arrow aligning with what is supposed to be the front of your quad)"}),"\n",(0,t.jsxs)(i.li,{children:["If this is ",(0,t.jsx)(i.strong,{children:"NOT"})," correct:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.em,{children:"Configuration"})," tab"]}),"\n",(0,t.jsx)(i.li,{children:'Depending on which way the board was misaligned, offset the angle under "Board and Sensor Alignment"'}),"\n",(0,t.jsx)(i.li,{children:'Normally this means, "Yaw Degrees" gets set to "-90" or "90", or whatever angle your board is offset by'}),"\n",(0,t.jsxs)(i.li,{children:["Save and reboot, verify direction in ",(0,t.jsx)(i.em,{children:"Setup"})," and repeat as needed"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Board alignment should be indicated by an silkscreen arrow, but always use BF for reference."}),"\n",(0,t.jsx)(i.li,{children:"There is no need to plug in the battery for this check, and if you do, make sure to remove props"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"prop-direction",children:"Prop Direction."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"According the the motor direction reference image at the bottom, look at each individual prop"}),"\n",(0,t.jsx)(i.li,{children:"If you spin the appropriate motor in the correct direction, the higher (leading edge) of the prop should be forwards in the direction of travel."}),"\n",(0,t.jsx)(i.li,{children:"Opposing motor corners in a quad must have the same direction propeller."}),"\n",(0,t.jsxs)(i.li,{children:["If this is ",(0,t.jsx)(i.strong,{children:"NOT"})," correct:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Change the props to be appropriate, verify once again before powering."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"NEVER ATTEMPT TO CHECK PROP DIRECTION WHILE PLUGGED IN"}),"\n",(0,t.jsx)(i.li,{children:"In normal configuration, this means the front two motors should spin inside towards the front and vice versa"}),"\n",(0,t.jsx)(i.li,{children:"Once again, running reversed props, everything should spin in the opposite direction (Towards the sides)"}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h5,{id:"you-must-remove-propellers-before-following-any-of-the-instructions-below",children:"YOU MUST REMOVE PROPELLERS BEFORE FOLLOWING ANY OF THE INSTRUCTIONS BELOW!"}),"\n",(0,t.jsx)(i.h2,{id:"motor-direction",children:"Motor Direction."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Remove your props!"})}),"\n",(0,t.jsx)(i.li,{children:"Plug your multirotor into your computer"}),"\n",(0,t.jsx)(i.li,{children:"Navigate to the Betaflight configurator"}),"\n",(0,t.jsx)(i.li,{children:"Plug in your LiPo (PROPS OFF)"}),"\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.em,{children:"Motors"})," tab"]}),"\n",(0,t.jsx)(i.li,{children:"Click the checkbox verifying that you've taken off your props"}),"\n",(0,t.jsx)(i.li,{children:"Slowly raise the master slider until all 4 motors are just barely spinning smoothly"}),"\n",(0,t.jsx)(i.li,{children:"Take your finger and make sure that they follow the direction indicated by the reference image at the bottom"}),"\n",(0,t.jsxs)(i.li,{children:["If this is ",(0,t.jsx)(i.strong,{children:"NOT"})," correct:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Make note of the corresponding motor numbers that are spinning the wrong way"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Option 1"}),":","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Disconnect from betaflight and open the BLHeli configurator (Must have supported ESCs)"}),"\n",(0,t.jsx)(i.li,{children:'Click "Read Setup"'}),"\n",(0,t.jsx)(i.li,{children:'For "Motor Direction" select "Reversed" for the motor numbers that need it'}),"\n",(0,t.jsx)(i.li,{children:'Click "Write Setup"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Option 2"}),":","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Reverse any 2 of the 3 motor wires on your ESC by resoldering them"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If you are running reversed props, everything should spin in the opposite direction and you must have turned it on in the configuration tab)"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"motor-order",children:"Motor Order."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Remove your props"})}),"\n",(0,t.jsx)(i.li,{children:"Plug your multirotor into your computer"}),"\n",(0,t.jsx)(i.li,{children:"Navigate to the Betaflight configurator"}),"\n",(0,t.jsx)(i.li,{children:"Plug in your LiPo (PROPS OFF)"}),"\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.em,{children:"Motors"})," tab"]}),"\n",(0,t.jsx)(i.li,{children:"Click the checkbox verifying that you've taken off your props"}),"\n",(0,t.jsx)(i.li,{children:"Raise each slider one by one"}),"\n",(0,t.jsx)(i.li,{children:"The number on the slider should be the same as the motor that it is spinning, according the the reference image below (or the image in the configurator)"}),"\n",(0,t.jsxs)(i.li,{children:["If this is ",(0,t.jsx)(i.strong,{children:"NOT"})," correct","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Grab a peice of paper and make a chart for any that differ"}),"\n",(0,t.jsx)(i.li,{children:"|| Slider thats being moved ||VS|| The motor number that actually spins ||"}),"\n",(0,t.jsxs)(i.li,{children:["Open CLI","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Type ",(0,t.jsx)(i.code,{children:"resource"})]}),"\n",(0,t.jsxs)(i.li,{children:["Scroll up find the list that looks like ",(0,t.jsx)(i.code,{children:"resource MOTOR 1 ___"})]}),"\n",(0,t.jsxs)(i.li,{children:["type ",(0,t.jsx)(i.code,{children:'resource MOTOR "The motor number that actually spins" "the letter-number combo next to the original slider #"'})]}),"\n",(0,t.jsx)(i.li,{children:"For example, if I moved slider 1 and motor 2 spun up, then when I typed resource, I saw:"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"resource MOTOR 1 A03"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"resource MOTOR 2 B00"})}),"\n",(0,t.jsxs)(i.li,{children:["I'd type ",(0,t.jsx)(i.code,{children:"resource MOTOR 2 A03"})," and hit enter"]}),"\n",(0,t.jsxs)(i.li,{children:["Continue this until all motors are remaped, than type ",(0,t.jsx)(i.code,{children:"save"})," to save the configuration"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=z5aO-3_n-Hs",children:"https://www.youtube.com/watch?v=z5aO-3_n-Hs"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Reference Image (this is the Betaflight default):"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Motor Direction",src:M(87516).Z+"",width:"267",height:"267"})})]})}function j(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},87516:(e,i,M)=>{M.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBQdWJsaWMgZG9tYWluIChDQy1CWS1TQSBpZiB5b3Ugb3IgeW91ciBsYXdzIGluc2lzdCksIGdlbmVyYXRlZCBieSBKb25hdGhhbiBIdWRzb24ncyBzdmdfbW9kZWxfbW90b3JzLnJiIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDBwdCIgaGVpZ2h0PSIyMDBwdCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHZlcnNpb249IjEuMSI+CjxkZWZzPgo8Zz4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0wIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iIi8+Cjwvc3ltYm9sPgo8c3ltYm9sIG92ZXJmbG93PSJ2aXNpYmxlIiBpZD0iZ2x5cGgwLTEiPgo8cGF0aCBzdHlsZT0ic3Ryb2tlOm5vbmU7IiBkPSJNIDIuNjc5Njg4IC0xMy44NjMyODEgTCAyLjY3OTY4OCAtMTUuNzUgQyA0LjQ1NzAzMSAtMTUuOTIxODc1IDUuNjk1MzEyIC0xNi4yMTA5MzggNi4zOTg0MzggLTE2LjYxNzE4OCBDIDcuMTAxNTYyIC0xNy4wMjM0MzggNy42MjUgLTE3Ljk4NDM3NSA3Ljk2ODc1IC0xOS40OTYwOTQgTCA5LjkxNDA2MiAtMTkuNDk2MDk0IEwgOS45MTQwNjIgMCBMIDcuMjg5MDYyIDAgTCA3LjI4OTA2MiAtMTMuODYzMjgxIFogTSAyLjY3OTY4OCAtMTMuODYzMjgxICIvPgo8L3N5bWJvbD4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0yIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iTSAxLjkyMTg3NSAtNC40MDIzNDQgQyAyLjUyNzM0NCAtNS42NTIzNDQgMy43MTA5MzggLTYuNzg1MTU2IDUuNDY4NzUgLTcuODA0Njg4IEwgOC4wOTM3NSAtOS4zMjQyMTkgQyA5LjI2OTUzMSAtMTAuMDA3ODEyIDEwLjA5Mzc1IC0xMC41ODk4NDQgMTAuNTcwMzEyIC0xMS4wNzQyMTkgQyAxMS4zMTY0MDYgLTExLjgzMjAzMSAxMS42ODc1IC0xMi42OTUzMTIgMTEuNjg3NSAtMTMuNjcxODc1IEMgMTEuNjg3NSAtMTQuODEyNSAxMS4zNDc2NTYgLTE1LjcxNDg0NCAxMC42NjQwNjIgLTE2LjM4NjcxOSBDIDkuOTgwNDY5IC0xNy4wNTQ2ODggOS4wNzAzMTIgLTE3LjM5MDYyNSA3LjkyOTY4OCAtMTcuMzkwNjI1IEMgNi4yNDIxODggLTE3LjM5MDYyNSA1LjA3ODEyNSAtMTYuNzUzOTA2IDQuNDI5Njg4IC0xNS40NzY1NjIgQyA0LjA4MjAzMSAtMTQuNzkyOTY5IDMuODkwNjI1IC0xMy44NDM3NSAzLjg1NTQ2OSAtMTIuNjMyODEyIEwgMS4zNTE1NjIgLTEyLjYzMjgxMiBDIDEuMzc4OTA2IC0xNC4zMzU5MzggMS42OTUzMTIgLTE1LjcyNjU2MiAyLjI5Njg3NSAtMTYuODA0Njg4IEMgMy4zNjMyODEgLTE4LjY5OTIxOSA1LjI0NjA5NCAtMTkuNjQ4NDM4IDcuOTQ1MzEyIC0xOS42NDg0MzggQyAxMC4xODc1IC0xOS42NDg0MzggMTEuODI0MjE5IC0xOS4wMzkwNjIgMTIuODU5Mzc1IC0xNy44MjgxMjUgQyAxMy44OTQ1MzEgLTE2LjYxNzE4OCAxNC40MTAxNTYgLTE1LjI2NTYyNSAxNC40MTAxNTYgLTEzLjc4MTI1IEMgMTQuNDEwMTU2IC0xMi4yMTQ4NDQgMTMuODU5Mzc1IC0xMC44NzUgMTIuNzU3ODEyIC05Ljc2MTcxOSBDIDEyLjExNzE4OCAtOS4xMTMyODEgMTAuOTcyNjU2IC04LjMzMjAzMSA5LjMyNDIxOSAtNy40MTAxNTYgTCA3LjQ1MzEyNSAtNi4zNzEwOTQgQyA2LjU1ODU5NCAtNS44Nzg5MDYgNS44NTU0NjkgLTUuNDEwMTU2IDUuMzQzNzUgLTQuOTYwOTM4IEMgNC40MzM1OTQgLTQuMTY3OTY5IDMuODU5Mzc1IC0zLjI4OTA2MiAzLjYyNSAtMi4zMjQyMTkgTCAxNC4zMTI1IC0yLjMyNDIxOSBMIDE0LjMxMjUgMCBMIDAuODc1IDAgQyAwLjk2NDg0NCAtMS42ODc1IDEuMzE2NDA2IC0zLjE1MjM0NCAxLjkyMTg3NSAtNC40MDIzNDQgWiBNIDEuOTIxODc1IC00LjQwMjM0NCAiLz4KPC9zeW1ib2w+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtMyI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gMi4yMzQzNzUgLTEuMzc1IEMgMS4xOTE0MDYgLTIuNjQ0NTMxIDAuNjcxODc1IC00LjE5MTQwNiAwLjY3MTg3NSAtNi4wMTU2MjUgTCAzLjI0MjE4OCAtNi4wMTU2MjUgQyAzLjM1MTU2MiAtNC43NSAzLjU4NTkzOCAtMy44MjgxMjUgMy45NTMxMjUgLTMuMjUzOTA2IEMgNC41ODk4NDQgLTIuMjIyNjU2IDUuNzQyMTg4IC0xLjcxMDkzOCA3LjQxMDE1NiAtMS43MTA5MzggQyA4LjcwMzEyNSAtMS43MTA5MzggOS43NDIxODggLTIuMDU0Njg4IDEwLjUyNzM0NCAtMi43NSBDIDExLjMxMjUgLTMuNDQxNDA2IDExLjcwMzEyNSAtNC4zMzU5MzggMTEuNzAzMTI1IC01LjQyOTY4OCBDIDExLjcwMzEyNSAtNi43NzczNDQgMTEuMjg5MDYyIC03LjcxODc1IDEwLjQ2NDg0NCAtOC4yNTc4MTIgQyA5LjY0MDYyNSAtOC43OTY4NzUgOC40OTYwOTQgLTkuMDYyNSA3LjAyNzM0NCAtOS4wNjI1IEMgNi44NjMyODEgLTkuMDYyNSA2LjY5NTMxMiAtOS4wNjI1IDYuNTI3MzQ0IC05LjA1ODU5NCBDIDYuMzU5Mzc1IC05LjA1NDY4OCA2LjE4NzUgLTkuMDQ2ODc1IDYuMDE1NjI1IC05LjAzOTA2MiBMIDYuMDE1NjI1IC0xMS4yMTA5MzggQyA2LjI2OTUzMSAtMTEuMTgzNTk0IDYuNDg0Mzc1IC0xMS4xNjQwNjIgNi42NTYyNSAtMTEuMTU2MjUgQyA2LjgzMjAzMSAtMTEuMTQ4NDM4IDcuMDE5NTMxIC0xMS4xNDA2MjUgNy4yMTg3NSAtMTEuMTQwNjI1IEMgOC4xNDA2MjUgLTExLjE0MDYyNSA4Ljg5NDUzMSAtMTEuMjg5MDYyIDkuNDg4MjgxIC0xMS41NzgxMjUgQyAxMC41MjczNDQgLTEyLjA4OTg0NCAxMS4wNDY4NzUgLTEzIDExLjA0Njg3NSAtMTQuMzEyNSBDIDExLjA0Njg3NSAtMTUuMjg5MDYyIDEwLjY5OTIxOSAtMTYuMDQyOTY5IDEwLjAwNzgxMiAtMTYuNTcwMzEyIEMgOS4zMTY0MDYgLTE3LjA5NzY1NiA4LjUwNzgxMiAtMTcuMzYzMjgxIDcuNTg1OTM4IC0xNy4zNjMyODEgQyA1Ljk0NTMxMiAtMTcuMzYzMjgxIDQuODEyNSAtMTYuODE2NDA2IDQuMTgzNTk0IC0xNS43MjI2NTYgQyAzLjgzNTkzOCAtMTUuMTIxMDk0IDMuNjQwNjI1IC0xNC4yNjU2MjUgMy41OTM3NSAtMTMuMTUyMzQ0IEwgMS4xNjQwNjIgLTEzLjE1MjM0NCBDIDEuMTY0MDYyIC0xNC42MDkzNzUgMS40NTMxMjUgLTE1Ljg1MTU2MiAyLjAzOTA2MiAtMTYuODcxMDk0IEMgMy4wMzkwNjIgLTE4LjY5NTMxMiA0LjgwNDY4OCAtMTkuNjA1NDY5IDcuMzI4MTI1IC0xOS42MDU0NjkgQyA5LjMyNDIxOSAtMTkuNjA1NDY5IDEwLjg2NzE4OCAtMTkuMTYwMTU2IDExLjk2MDkzOCAtMTguMjczNDM4IEMgMTMuMDU0Njg4IC0xNy4zODI4MTIgMTMuNjAxNTYyIC0xNi4wOTc2NTYgMTMuNjAxNTYyIC0xNC40MTAxNTYgQyAxMy42MDE1NjIgLTEzLjIwNzAzMSAxMy4yODEyNSAtMTIuMjMwNDY5IDEyLjYzMjgxMiAtMTEuNDg0Mzc1IEMgMTIuMjMwNDY5IC0xMS4wMTk1MzEgMTEuNzEwOTM4IC0xMC42NTYyNSAxMS4wNzQyMTkgLTEwLjM5MDYyNSBDIDEyLjEwNTQ2OSAtMTAuMTA5Mzc1IDEyLjkxMDE1NiAtOS41NjI1IDEzLjQ4ODI4MSAtOC43NTc4MTIgQyAxNC4wNjY0MDYgLTcuOTQ5MjE5IDE0LjM1NTQ2OSAtNi45NjQ4NDQgMTQuMzU1NDY5IC01Ljc5Njg3NSBDIDE0LjM1NTQ2OSAtMy45Mjk2ODggMTMuNzQyMTg4IC0yLjQwNjI1IDEyLjUwNzgxMiAtMS4yMzA0NjkgQyAxMS4yNzczNDQgLTAuMDU0Njg3NSA5LjUzNTE1NiAwLjUzMTI1IDcuMjczNDM4IDAuNTMxMjUgQyA0Ljk1NzAzMSAwLjUzMTI1IDMuMjc3MzQ0IC0wLjEwMTU2MiAyLjIzNDM3NSAtMS4zNzUgWiBNIDIuMjM0Mzc1IC0xLjM3NSAiLz4KPC9zeW1ib2w+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtNCI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gOS4yNTc4MTIgLTYuOTI5Njg4IEwgOS4yNTc4MTIgLTE1LjgwNDY4OCBMIDIuOTgwNDY5IC02LjkyOTY4OCBaIE0gOS4yOTY4NzUgMCBMIDkuMjk2ODc1IC00Ljc4NTE1NiBMIDAuNzEwOTM4IC00Ljc4NTE1NiBMIDAuNzEwOTM4IC03LjE5MTQwNiBMIDkuNjc5Njg4IC0xOS42MzI4MTIgTCAxMS43NTc4MTIgLTE5LjYzMjgxMiBMIDExLjc1NzgxMiAtNi45Mjk2ODggTCAxNC42NDA2MjUgLTYuOTI5Njg4IEwgMTQuNjQwNjI1IC00Ljc4NTE1NiBMIDExLjc1NzgxMiAtNC43ODUxNTYgTCAxMS43NTc4MTIgMCBaIE0gOS4yOTY4NzUgMCAiLz4KPC9zeW1ib2w+CjwvZz4KPC9kZWZzPgo8ZyBpZD0ic3VyZmFjZTExIj4KPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6Mjg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoNzIuOTQxMTc2JSw3Mi45NDExNzYlLDcyLjk0MTE3NiUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDQwIDQwIEwgMTYwIDE2MCBNIDQwIDE2MCBMIDE2MCA0MCAiLz4KPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDI1NSwxODcsMCk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMTg4IDE2MCBDIDE4OCAxNzUuNDY0ODQ0IDE3NS40NjQ4NDQgMTg4IDE2MCAxODggQyAxNDQuNTM1MTU2IDE4OCAxMzIgMTc1LjQ2NDg0NCAxMzIgMTYwIEMgMTMyIDE0NC41MzUxNTYgMTQ0LjUzNTE1NiAxMzIgMTYwIDEzMiBDIDE3NS40NjQ4NDQgMTMyIDE4OCAxNDQuNTM1MTU2IDE4OCAxNjAgTSAxNzkuODAwNzgxIDE3OS44MDA3ODEgTCAxNzcuNzg1MTU2IDE2MyBNIDE3OS44MDA3ODEgMTc5LjgwMDc4MSBMIDE5Ni42MDE1NjIgMTc5LjgwMDc4MSAiLz4KPGcgc3R5bGU9ImZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiPgogIDx1c2UgeGxpbms6aHJlZj0iI2dseXBoMC0xIiB4PSIxNTMiIHk9IjE2NyIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigyNTUsMTg3LDApO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDE4OCA0MCBDIDE4OCA1NS40NjQ4NDQgMTc1LjQ2NDg0NCA2OCAxNjAgNjggQyAxNDQuNTM1MTU2IDY4IDEzMiA1NS40NjQ4NDQgMTMyIDQwIEMgMTMyIDI0LjUzNTE1NiAxNDQuNTM1MTU2IDEyIDE2MCAxMiBDIDE3NS40NjQ4NDQgMTIgMTg4IDI0LjUzNTE1NiAxODggNDAgTSAxNzkuODAwNzgxIDIwLjE5OTIxOSBMIDE3Ny43ODUxNTYgMzcgTSAxNzkuODAwNzgxIDIwLjE5OTIxOSBMIDE5Ni42MDE1NjIgMjAuMTk5MjE5ICIvPgo8ZyBzdHlsZT0iZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyI+CiAgPHVzZSB4bGluazpocmVmPSIjZ2x5cGgwLTIiIHg9IjE1MyIgeT0iNDciLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMjU1LDE4NywwKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSA2OCAxNjAgQyA2OCAxNzUuNDY0ODQ0IDU1LjQ2NDg0NCAxODggNDAgMTg4IEMgMjQuNTM1MTU2IDE4OCAxMiAxNzUuNDY0ODQ0IDEyIDE2MCBDIDEyIDE0NC41MzUxNTYgMjQuNTM1MTU2IDEzMiA0MCAxMzIgQyA1NS40NjQ4NDQgMTMyIDY4IDE0NC41MzUxNTYgNjggMTYwIE0gMjAuMTk5MjE5IDE3OS44MDA3ODEgTCAyMi4yMTQ4NDQgMTYzIE0gMjAuMTk5MjE5IDE3OS44MDA3ODEgTCAzLjM5ODQzOCAxNzkuODAwNzgxICIvPgo8ZyBzdHlsZT0iZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyI+CiAgPHVzZSB4bGluazpocmVmPSIjZ2x5cGgwLTMiIHg9IjMzIiB5PSIxNjciLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMjU1LDE4NywwKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSA2OCA0MCBDIDY4IDU1LjQ2NDg0NCA1NS40NjQ4NDQgNjggNDAgNjggQyAyNC41MzUxNTYgNjggMTIgNTUuNDY0ODQ0IDEyIDQwIEMgMTIgMjQuNTM1MTU2IDI0LjUzNTE1NiAxMiA0MCAxMiBDIDU1LjQ2NDg0NCAxMiA2OCAyNC41MzUxNTYgNjggNDAgTSAyMC4xOTkyMTkgMjAuMTk5MjE5IEwgMjIuMjE0ODQ0IDM3IE0gMjAuMTk5MjE5IDIwLjE5OTIxOSBMIDMuMzk4NDM4IDIwLjE5OTIxOSAiLz4KPGcgc3R5bGU9ImZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiPgogIDx1c2UgeGxpbms6aHJlZj0iI2dseXBoMC00IiB4PSIzMyIgeT0iNDciLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpiZXZlbDtzdHJva2U6cmdiKDk4LjAzOTIxNiUsMi43NDUwOTglLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAxMDAgODAgTCAxMDAgMTIwICIvPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDk4LjAzOTIxNiUsMi43NDUwOTglLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTAwIDc1IEwgODUgOTAgTCAxMTUgOTAgTCAxMDAgNzUgIi8+CjwvZz4KPC9zdmc+Cg=="},11151:(e,i,M)=>{M.d(i,{Z:()=>N,a:()=>o});var t=M(67294);const n={},r=t.createContext(n);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function N(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);