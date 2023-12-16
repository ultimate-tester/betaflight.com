"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1438],{25271:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=i(85893),l=i(11151);const r={sidebar_position:21},s="Firmware Flasher Tab",o={id:"wiki/configurator/firmware-flasher-tab",title:"Firmware Flasher Tab",description:"Here you update your firmware and select the features you require for you build.",source:"@site/docs/wiki/configurator/firmware-flasher-tab.md",sourceDirName:"wiki/configurator",slug:"/wiki/configurator/firmware-flasher-tab",permalink:"/docs/wiki/configurator/firmware-flasher-tab",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"wiki",previous:{title:"OSD Tab",permalink:"/docs/wiki/configurator/osd-tab"},next:{title:"CLI Tab",permalink:"/docs/wiki/configurator/cli-tab"}},d={},a=[{value:"Preparation",id:"preparation",level:2},{value:"Flashing",id:"flashing",level:2},{value:"Board Defines",id:"board-defines",level:3},{value:"Radio Protocols",id:"radio-protocols",level:3},{value:"Telemetry Protocols",id:"telemetry-protocols",level:3},{value:"Motor Protocol",id:"motor-protocol",level:3},{value:"Other Options",id:"other-options",level:3},{value:"Troubeshooting",id:"troubeshooting",level:2},{value:"Expert Options",id:"expert-options",level:2},{value:"Custom Defines",id:"custom-defines",level:3},{value:"Commit Field",id:"commit-field",level:3},{value:"Local Flashing",id:"local-flashing",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"firmware-flasher-tab",children:"Firmware Flasher Tab"}),"\n",(0,n.jsx)(t.p,{children:"Here you update your firmware and select the features you require for you build."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The Firmware contains only hardware support. Board configuration defines board specific hardware. With the Build Configuration you can add or remove features you need."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Firmware Flasher tab",src:i(31474).Z+"",width:"1635",height:"782"})}),"\n",(0,n.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Upgrade to the latest Betaflight Configurator."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Before upgrading always save a ",(0,n.jsx)("b",{children:"diff"})," of the current configuration. Using ",(0,n.jsx)("b",{children:"status"})," command you get some info about hardware being used."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can also save a ",(0,n.jsx)("b",{children:"diff"})," using Presets tab using the ",(0,n.jsx)("b",{children:"save backup"})," button."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Except ",(0,n.jsx)("b",{children:"master"})," and ",(0,n.jsx)("b",{children:"profile"})," most settings should be able to migrate from a previous version."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Please follow these steps in order to be able to restore in the event something is not supported.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\nConfigurator only supports Betaflight version 4.0 and newer. Older versions only have access to the firmware flasher tab or CLI."]})}),"\n",(0,n.jsx)(t.h2,{id:"flashing",children:"Flashing"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Version"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Release"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Stable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Candidate"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Preview"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Development"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Test"})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["After selecting a build type select the board using the list or use the ",(0,n.jsx)("b",{children:"Auto-detect"})," button."]}),"\n",(0,n.jsxs)(t.li,{children:["Always use ",(0,n.jsx)("b",{children:"Full Chip Erase"})," unless instructed otherwise."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Using ",(0,n.jsx)("b",{children:"Show Release Candidates"})," with ",(0,n.jsx)("b",{children:"Expert Mode"})," enabled gives access to development builds."]})}),"\n",(0,n.jsx)(t.h3,{id:"board-defines",children:"Board Defines"}),"\n",(0,n.jsxs)(t.p,{children:["We have defines for ",(0,n.jsx)("b",{children:"ACC"}),", ",(0,n.jsx)("b",{children:"BARO"}),", ",(0,n.jsx)("b",{children:"FLASH"}),", ",(0,n.jsx)("b",{children:"GYRO"}),", ",(0,n.jsx)("b",{children:"MAX7456"}),", ",(0,n.jsx)("b",{children:"FLASH"})," or ",(0,n.jsx)("b",{children:"SDCARD"})," in the board configuration."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"If your board pheriperals are not recognized please help us add the required configuration details."}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.p,{children:["Reach out to us on our ",(0,n.jsx)(t.a,{href:"https://discord.betaflight.com/invite",children:"Discord server"})," or create an issue in the Betaflight unified targets repo."]}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:"To get the required information follow this procedure:"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Flash your board with the ",(0,n.jsx)("b",{children:"Core Only"})," switch enabled"]}),"\n"]}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Go to the CLI tab and click the ",(0,n.jsx)("b",{children:"Submit Support Data"})," button."]}),"\n"]}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["With this generated support ",(0,n.jsx)("b",{children:"ID"})," we have all required information to update board configuration files."]}),"\n"]})]}),"\n",(0,n.jsx)(t.h3,{id:"radio-protocols",children:"Radio Protocols"}),"\n",(0,n.jsx)(t.p,{children:"Select the receiver wire protocol used. The most common are:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Protocol"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Receiver"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CRSF"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"TBS Crossfire or ExpressLRS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GHST"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Immersion RC Ghost"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SBUS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FrSky or Futaba"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["EXPRESSLRS (SPI) receivers uses CRSF protocol.",(0,n.jsx)("br",{}),"\nFrSky (SPI) receivers uses SBUS or FPORT protocol depending on the receiver firmware used."]})}),"\n",(0,n.jsx)(t.h3,{id:"telemetry-protocols",children:"Telemetry Protocols"}),"\n",(0,n.jsx)(t.p,{children:"Select the telemetry protocol used. For CRSF, ELRS or GHST protocols this is included by default to ease configuraton."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"ExpressLRS uses CRSF protocol. SPI configuration is done in the board configuration."})}),"\n",(0,n.jsx)(t.h3,{id:"motor-protocol",children:"Motor Protocol"}),"\n",(0,n.jsx)(t.p,{children:"Select ESC protocol being used. DShot is default."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["When needed additional protocols like ",(0,n.jsx)("b",{children:"PWM"})," or ",(0,n.jsx)("b",{children:"SERVOS"})," please add them using Custom Defines."]})}),"\n",(0,n.jsx)(t.h3,{id:"other-options",children:"Other Options"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AKK (SA Fix)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Smartaudio patch for AKK hardware"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Acro Trainer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable Acro Trainer support"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Batt. Continue"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["See ",(0,n.jsx)(t.a,{href:"https://github.com/betaflight/betaflight/pull/11084",children:"#11084"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cam. Control"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable Camera Control"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Dashboard"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable Post-flight overview screen"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"EMFAT (AutoRun, Icon)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable FAT emulation and icon for onboard flash or MSC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ESC Serial (SK) Inc. 4way"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable SimonK and ESC Serial support for flasing via 4way interface"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Flash Storage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable blackbox Flash Tools"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FrSky OSD"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable FrSky OSD support"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GPS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable GPS and GPS_PLUS_CODES"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LED Strip"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable 32 LEDs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LED Strip 64"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable 64 LEDs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Magnetometers"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable magnetometer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"OSD (SD)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable SD OSD (onboard MAX7456 required)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"OSD (HD)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable HD OSD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"PIN IO"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable PINIO"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Servos"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable Servo support"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"VTX"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable VTX"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"troubeshooting",children:"Troubeshooting"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Use a good quality data cable not a power cable."}),"\n",(0,n.jsx)(t.li,{children:"USB hubs or OTG cables are sometimes needed with recent computers and in other cases they can cause issues."}),"\n",(0,n.jsx)(t.li,{children:"Try disconnecting all cables from your PC first, try rebooting, other ports, upgrade system drivers. Remove other USB connections."}),"\n",(0,n.jsxs)(t.li,{children:["Try DFU mode (use boot button on FC while plugging in, use ",(0,n.jsx)("b",{children:"Activate Boot Loader / DFU"})," button in setup tab or use ",(0,n.jsx)("b",{children:"bl"})," command in CLI."]}),"\n",(0,n.jsx)(t.li,{children:"Sometimes peripherals on the flight controller such as receivers or GPS devices can hijack port communication requiring de-soldering."}),"\n",(0,n.jsx)(t.li,{children:"Linux needs configuration to allow flashing."}),"\n",(0,n.jsx)(t.li,{children:"MacOS or Windows do not need any drivers."}),"\n",(0,n.jsx)(t.li,{children:"If it still doesn't work try IRC Driver Fix or Zadig on Windows platform."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"expert-options",children:"Expert Options"}),"\n",(0,n.jsx)(t.h3,{id:"custom-defines",children:"Custom Defines"}),"\n",(0,n.jsxs)(t.p,{children:["This is mostly for development as you can add a custom defines to bake a feature into the build. Please omit the ",(0,n.jsx)(t.strong,{children:"USE_"})," part of a #define.\nTo remove a feature simple add the minus sign before it."]}),"\n",(0,n.jsx)(t.h3,{id:"commit-field",children:"Commit Field"}),"\n",(0,n.jsxs)(t.p,{children:["For development we can choose a specific PR from the list or even build a PR by adding the firmware PR number into the field. Prepend the number with the number ",(0,n.jsx)(t.strong,{children:"#"})," sign."]}),"\n",(0,n.jsx)(t.h3,{id:"local-flashing",children:"Local Flashing"}),"\n",(0,n.jsxs)(t.p,{children:["To flash local development firmware with optional custom configuration use the ",(0,n.jsx)("b",{children:"Load Firmware local"})," button to load board configuration or click ",(0,n.jsx)(t.code,{children:"Auto-detect"})," or when in ",(0,n.jsx)(t.code,{children:"DFU"})," mode select a board manually."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If using a local configuration file use the same button again to load a local hex file."})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},31474:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/betaflight_configurator_firmware_flasher_tab-00b92ebc6860d934b4bd042f68aa8664.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(67294);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);