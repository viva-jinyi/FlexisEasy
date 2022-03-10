"use strict";(self["webpackChunkflexiseasy"]=self["webpackChunkflexiseasy"]||[]).push([[691],{7691:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"0 min(40px, 5vw)"}},[n("common-header"),n("div",{staticClass:"wrapper"},[n("left-container",{staticClass:"left",attrs:{containerCSS:t.containerCSS,boxCSS:t.boxCSS,boxCnt:t.boxCnt}}),n("right-container",{staticClass:"right",on:{setContainer:t.setContainer,setBox:t.setBox,setBoxCnt:t.setBoxCnt}})],1)],1)},o=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"text-center",staticStyle:{padding:"20px 0 40px",color:"#000"}},[n("h3",{staticClass:"highlight",staticStyle:{"margin-bottom":"8px"}},[n("b",[t._v("FLEX is EASY.")])]),n("h4",{staticStyle:{"margin-bottom":"12px"}},[t._v("Built by Jin Yi 🥾")]),n("a",{staticStyle:{color:"#FFF",background:"none","text-decoration":"underline"},attrs:{href:"https://github.com/viva-jinyi/FLEXisEASY",target:"_blank"}},[t._v("github link")])])}],r={},l=r,c=n(1001),p=(0,c.Z)(l,a,s,!1,null,null,null),m=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paper",staticStyle:{"min-height":"700px"}},[n("button",{staticClass:"containerTag btn-block",style:t.containerCSS},t._l(t.boxCnt,(function(e){return n("button",{staticClass:"boxTag btn-block",style:t.boxCSS},[t._v("Click This!")])})),0),t._m(0)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticStyle:{display:"inline-block",margin:"20px 10px"}},[n("button",{staticClass:"btn-sm"},[t._v("❤")])])}],x={name:"LeftContainter",props:{containerCSS:"",boxCSS:"",boxCnt:0}},u=x,h=(0,c.Z)(u,g,d,!1,null,"295241b9",null),v=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"min-height":"700px",padding:"20px",position:"relative"}},[n("div",{staticStyle:{display:"flex","margin-bottom":"50px"}},[n("h3",{staticClass:"tab plum",class:{highlight:!t.controlBox},staticStyle:{"margin-right":"20px"}},[n("b",{staticStyle:{color:"#FFF"},on:{click:function(e){t.controlBox=!1}}},[t._v("container")])]),n("h3",{staticClass:"tab plum",class:{highlight:t.controlBox}},[n("b",{staticStyle:{color:"#FFF"},on:{click:function(e){t.controlBox=!0}}},[t._v("box")])])]),t.controlBox?n("div",[n("label",{staticStyle:{margin:"0 12px 12px 12px",display:"block","user-select":"none"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.specifyPX,expression:"specifyPX"}],staticStyle:{display:"inline-block","margin-right":"25px"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.specifyPX)?t._i(t.specifyPX,null)>-1:t.specifyPX},on:{change:[function(e){var n=t.specifyPX,i=e.target,o=!!i.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);i.checked?s<0&&(t.specifyPX=n.concat([a])):s>-1&&(t.specifyPX=n.slice(0,s).concat(n.slice(s+1)))}else t.specifyPX=o},t.onEmitBox]}}),n("span",{staticStyle:{color:"#FFF","font-size":"1rem","font-weight":"bold","margin-right":"15px"}},[t._v("I need to specify width / height.")])]),n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("box")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.boxCnt,expression:"boxCnt"}],staticStyle:{"background-color":"#FFF",width:"60px"},attrs:{type:"number",min:"1"},domProps:{value:t.boxCnt},on:{change:t.onEmitBox,input:function(e){e.target.composing||(t.boxCnt=e.target.value)}}})]),t.specifyPX?n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.boxWidth,expression:"boxWidth"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.boxWidth},on:{change:t.onEmitBox,input:function(e){e.target.composing||(t.boxWidth=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" %")])]):t._e(),t.specifyPX?n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("height")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.boxHeight,expression:"boxHeight"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.boxHeight},on:{change:t.onEmitBox,input:function(e){e.target.composing||(t.boxHeight=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" %")])]):t._e(),n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("flex-basis")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.flexBasis,expression:"flexBasis"}],staticStyle:{"background-color":"#FFF","margin-right":"5px"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.flexBasis=e.target.multiple?n:n[0]},t.onEmitBox]}},[n("option",{attrs:{value:"auto"}},[t._v("auto")]),n("option",{attrs:{value:"content"}},[t._v("content")]),n("option",{attrs:{value:"custom"}},[t._v("CUSTOMIZE ✍")])]),"custom"===t.flexBasis?n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.customBasis,expression:"customBasis"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.customBasis},on:{change:t.onEmitBox,input:function(e){e.target.composing||(t.customBasis=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" %")])]):t._e()]),n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("flex-grow")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.flexGrow,expression:"flexGrow"}],staticStyle:{"background-color":"#FFF"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.flexGrow=e.target.multiple?n:n[0]},t.onEmitBox]}},[n("option",{attrs:{value:"0"}},[t._v("0")]),n("option",{attrs:{value:"1"}},[t._v("1")])])])]):n("div",[n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.containerWidth,expression:"containerWidth"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.containerWidth},on:{change:t.onEmitContanier,input:function(e){e.target.composing||(t.containerWidth=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" %")])]),n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("height")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.containerHeight,expression:"containerHeight"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.containerHeight},on:{change:t.onEmitContanier,input:function(e){e.target.composing||(t.containerHeight=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" px")])]),t._l(t.containerSetting,(function(e){return n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v(t._s(e.select))]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"setting.model"}],staticStyle:{"background-color":"#FFF"},on:{change:[function(n){var i=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"model",n.target.multiple?i:i[0])},t.onEmitContanier]}},t._l(e.options,(function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)])})),n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("gap")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.gapY,expression:"gapY"}],staticStyle:{"background-color":"#FFF",width:"80px"},attrs:{type:"number",min:"0"},domProps:{value:t.gapY},on:{change:t.onEmitContanier,input:function(e){e.target.composing||(t.gapY=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" px")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.gapX,expression:"gapX"}],staticStyle:{"background-color":"#FFF",width:"80px","margin-left":"10px"},attrs:{type:"number",min:"0"},domProps:{value:t.gapX},on:{change:t.onEmitContanier,input:function(e){e.target.composing||(t.gapX=e.target.value)}}}),n("span",{staticStyle:{color:"#FFF"}},[t._v(" px")])]),"wrap"===t.containerSetting[2].model?n("div",{staticStyle:{margin:"0 12px 12px 12px"}},[n("span",{staticStyle:{color:"#FFF","font-size":"1.2rem","font-weight":"bold","margin-right":"15px"}},[t._v("align-content")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.alignContent,expression:"alignContent"}],staticStyle:{"background-color":"#FFF"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.alignContent=e.target.multiple?n:n[0]},t.onEmitContanier]}},[n("option",{attrs:{value:"stretch"}},[t._v("stretch")]),n("option",{attrs:{value:"flex-start"}},[t._v("flex-start")]),n("option",{attrs:{value:"flex-end"}},[t._v("flex-end")]),n("option",{attrs:{value:"center"}},[t._v("center")]),n("option",{attrs:{value:"space-between"}},[t._v("space-between")]),n("option",{attrs:{value:"space-around"}},[t._v("space-around")]),n("option",{attrs:{value:"space-evenly"}},[t._v("space-evenly")])])]):t._e()],2),n("label",{staticClass:"paper-btn",staticStyle:{"margin-top":"50px","max-width":"350px","text-align":"center",width:"100%",position:"absolute",bottom:"20px",left:"20px"},attrs:{for:"modal-1"}},[t._v("Get Code 💻")]),n("input",{staticClass:"modal-state",attrs:{id:"modal-1",type:"checkbox"}}),n("div",{staticClass:"modal"},[n("label",{staticClass:"modal-bg",attrs:{for:"modal-1"}}),n("div",{staticClass:"modal-body",staticStyle:{"min-width":"450px"}},[n("label",{staticClass:"btn-close",attrs:{for:"modal-1"}},[t._v("X")]),n("p",{staticClass:"modal-text"}),n("p",{staticStyle:{"line-height":"1.7"}},[t._v(" .container{ "),n("span",{domProps:{innerHTML:t._s(t.css_1)}}),n("br"),t._v(" }"),n("br"),t._v(" .box{"),n("span",{domProps:{innerHTML:t._s(t.css_2)}}),n("br"),t._v(" } ")]),n("label",{staticClass:"paper-btn",attrs:{for:"modal-1"},on:{click:t.copyToClipboard}},[t._v("Copy ❤")])])])])},b=[],y={data(){return{controlBox:!1,containerWidth:90,containerHeight:500,gapY:0,gapX:0,alignContent:"stretch",containerSetting:[{select:"display",options:["flex","inline-flex"],model:"flex"},{select:"flex-direction",options:["row","column","row-reverse","column-reverse"],model:"row"},{select:"flex-wrap",options:["nowrap","wrap","wrap-reverse"],model:"nowrap"},{select:"justify-content",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],model:"flex-start"},{select:"align-items",options:["stretch","flex-start","flex-end","center","baseline"],model:"flex-start"}],boxCnt:3,specifyPX:!1,boxWidth:30,boxHeight:30,flexBasis:"auto",flexGrow:0,customBasis:25,css_1:"",css_2:""}},created(){this.onEmitContanier(),this.onEmitBox()},methods:{onEmitContanier(){if("wrap"===this.containerSetting[2].model){let t=`\n          width: ${this.containerWidth}%;\n          height: ${this.containerHeight}px;\n          display: ${this.containerSetting[0].model};\n          flex-direction: ${this.containerSetting[1].model};\n          flex-wrap: ${this.containerSetting[2].model};\n          justify-content: ${this.containerSetting[3].model};\n          align-items: ${this.containerSetting[4].model};\n          gap: ${this.gapY}px ${this.gapX}px;\n          align-content: ${this.alignContent};`;this.css_1=t.replace(/\n/g,"<br>"),t=t.replace(/\n/g,""),this.$emit("setContainer",t)}else{let t=`\n          width: ${this.containerWidth}%;\n          height: ${this.containerHeight}px;\n          display: ${this.containerSetting[0].model};\n          flex-direction: ${this.containerSetting[1].model};\n          flex-wrap: ${this.containerSetting[2].model};\n          justify-content: ${this.containerSetting[3].model};\n          align-items: ${this.containerSetting[4].model};\n          gap: ${this.gapY}px ${this.gapX}px;`;this.css_1=t.replace(/\n/g,"<br>"),t=t.replace(/\n/g,""),this.$emit("setContainer",t)}const t=/ /gi;this.cssCode=`.container{\n          ${this.css_1.replace(/<br>/gi,"").replace(t,"")}\n        }\n        .box{\n          ${this.css_2.replace(/<br>/gi,"").replace(t,"")}\n        }`},onEmitBox(){let t="custom"===this.flexBasis?`flex-basis: ${this.customBasis}%;`:`flex-basis: ${this.flexBasis};`;if(this.specifyPX){let e=`\n          width: ${this.boxWidth}%;\n          height: ${this.boxHeight}%;\n          flex-grow: ${this.flexGrow};\n        `+t;this.css_2=e.replace(/\n/g,"<br>"),e=e.replace(/\n/g,""),this.$emit("setBox",e),this.$emit("setBoxCnt",Number(this.boxCnt))}else{let e=`\n          flex-grow: ${this.flexGrow};\n        `+t;this.css_2=e.replace(/\n/g,"<br>"),e=e.replace(/\n/g,""),this.$emit("setBox",e),this.$emit("setBoxCnt",Number(this.boxCnt))}},copyToClipboard(){let t=document.createElement("textarea"),e=this.css_1,n=this.css_2;const i=/ /gi;t.value=`.container{\n        ${e.replace(/<br>/gi,"").replace(i,"")}\n      }\n      .box{\n        ${n.replace(/<br>/gi,"").replace(i,"")}\n      }`,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},F=y,S=(0,c.Z)(F,f,b,!1,null,"144eb506",null),_=S.exports,C={components:{CommonHeader:m,LeftContainer:v,RightContainer:_},name:"Main",data(){return{containerCSS:"",boxCSS:"",boxCnt:0}},methods:{setContainer(t){this.containerCSS=t},setBox(t){this.boxCSS=t},setBoxCnt(t){this.boxCnt=t}}},w=C,$=(0,c.Z)(w,i,o,!1,null,"4cd63656",null),B=$.exports}}]);
//# sourceMappingURL=691.b81475ca.js.map