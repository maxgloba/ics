(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{249:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("532d159e",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scrolled:!1}},methods:{play:function(){var t=this;0===this.$refs.audio.currentTime?(this.$refs.audio.play(),this.$refs.audio.volume=.5,this.$refs.audioBtn.classList.add("active")):(this.$refs.audio.pause(),this.$refs.audio.currentTime=0),this.$refs.audio.onpause=function(){t.$refs.audioBtn.classList.remove("active")}}},mounted:function(){var t=this;document.addEventListener("click",(function(e){t.scrolled||(t.scrolled=!0,t.play())}))}},d=(n(252),n(42)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("button",{ref:"audioBtn",staticClass:"audio",on:{click:function(e){return e.preventDefault(),t.play.apply(null,arguments)}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("audio",{ref:"audio",attrs:{controls:""}},[n("source",{attrs:{src:"/audio/neon_skies_by_2050_Artlist.mp3",type:"audio/mpeg"}}),t._v(" "),n("source",{attrs:{src:"/audio/neon_skies_by_2050_Artlist.ogg",type:"audio/ogg"}})]),t._v(" "),n("nav",{staticClass:"header-menu"},[n("a",{attrs:{href:"https://nft-storks.creator-spring.com/"}},[n("svg",{attrs:{width:"27",height:"30",viewBox:"0 0 27 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.471 13.3765C26.2162 15.8931 25.0791 18.4186 22.957 20.7803C21.7209 22.1558 20.3407 23.1324 18.8772 23.7447C18.4272 24.8195 17.7549 25.8649 16.8377 26.8641C14.1675 29.7734 10.7296 30.315 7.74418 29.8552C4.81949 29.4049 2.13815 27.9846 0.473679 26.6374L3.01606 23.4222C4.20759 24.3866 6.23865 25.4585 8.35659 25.7847C10.2425 26.0751 12.0256 25.7652 13.4703 24.4469C10.5129 24.0655 7.78071 22.5445 5.78188 20.7051C4.27323 19.3167 3.04084 17.6283 2.37068 15.8537C1.70296 14.0855 1.52824 12.0185 2.53152 10.1697C3.32516 8.70722 4.50432 7.76377 5.91472 7.36648C7.25744 6.98825 8.62458 7.15502 9.80758 7.51734C12.1406 8.23187 14.3687 9.89097 15.6999 11.4301C16.5964 12.4668 17.7967 14.0263 18.622 15.9149C18.9716 16.7149 19.2635 17.5974 19.431 18.5392C19.6037 18.3759 19.7754 18.1999 19.9456 18.0106C21.572 16.2006 22.2689 14.4732 22.4224 12.9569C22.5766 11.4346 22.199 9.96929 21.4206 8.65862C19.8213 5.96558 16.6429 4.11746 13.633 4.11746V0C18.12 0 22.5993 2.64858 24.9092 6.53807C26.0854 8.51867 26.7252 10.8661 26.471 13.3765ZM15.5109 20.3887C15.5388 19.4577 15.3089 18.5162 14.8997 17.5797C14.3121 16.235 13.4106 15.0359 12.6371 14.1415C11.7191 13.0801 10.1134 11.913 8.6284 11.4582C7.90242 11.2358 7.36455 11.2322 7.00634 11.3331C6.7158 11.4149 6.39809 11.6001 6.09902 12.1513C5.85469 12.6015 5.77288 13.326 6.17247 14.3842C6.56963 15.4359 7.37897 16.6088 8.52037 17.6592C10.5164 19.496 13.1111 20.6096 15.5109 20.3887Z",fill:"#53E09F"}})])]),t._v(" "),n("a",{attrs:{href:"https://medium.com/@nftstorks"}},[n("svg",{attrs:{width:"38",height:"30",viewBox:"0 0 38 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.58676 6.11993C4.63371 5.65605 4.45681 5.19757 4.11043 4.88536L0.582099 0.63492V0H11.5376L20.0056 18.5714L27.4504 0H37.8942V0.63492L34.8775 3.52734C34.6174 3.72558 34.4884 4.05141 34.5423 4.3739V25.6261C34.4884 25.9486 34.6174 26.2744 34.8775 26.4727L37.8237 29.3651V30H23.0047V29.3651L26.0567 26.4021C26.3566 26.1023 26.3566 26.0141 26.3566 25.5556V8.37743L17.8709 29.9295H16.7242L6.84489 8.37743V22.8219C6.76252 23.4292 6.96421 24.0406 7.39178 24.4797L11.3612 29.2945V29.9295H0.105774V29.2945L4.07515 24.4797C4.49961 24.0398 4.68954 23.4244 4.58676 22.8219V6.11993Z",fill:"#7B61FF"}})])]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/nftstorks"}},[n("svg",{attrs:{width:"37",height:"30",viewBox:"0 0 37 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M36.9615 3.46154C35.5769 4.15385 34.1923 4.38462 32.5769 4.61538C34.1923 3.69231 35.3461 2.30769 35.8077 0.461538C34.4231 1.38461 32.8077 1.84615 30.9615 2.30769C29.5769 0.923077 27.5 0 25.4231 0C20.5769 0 16.8846 4.61538 18.0385 9.23077C11.8077 9 6.26922 6 2.34614 1.38462C0.269221 4.84615 1.42307 9.23077 4.65384 11.5385C3.49999 11.5385 2.34614 11.0769 1.1923 10.6154C1.1923 14.0769 3.73076 17.3077 7.1923 18.2308C6.03845 18.4615 4.88461 18.6923 3.73076 18.4615C4.65384 21.4615 7.42307 23.7692 10.8846 23.7692C8.11537 25.8462 3.96153 27 0.0384521 26.5385C3.49999 28.6154 7.42307 30 11.5769 30C25.6538 30 33.5 18.2308 33.0384 7.38461C34.6538 6.46154 36.0385 5.07692 36.9615 3.46154Z",fill:"#4488EE"}})])]),t._v(" "),n("a",{attrs:{href:"https://discord.gg/fqFUdVG894"}},[n("svg",{attrs:{width:"40",height:"30",viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M33.5791 2.51249C31.0466 1.33875 28.3388 0.485722 25.5079 0C25.1602 0.622678 24.754 1.46019 24.474 2.12643C21.4646 1.67811 18.483 1.67811 15.529 2.12643C15.249 1.46019 14.8336 0.622678 14.4828 0C11.6488 0.485722 8.93788 1.34188 6.40544 2.51871C1.2975 10.165 -0.0871831 17.6215 0.605158 24.972C3.99302 27.4782 7.27626 29.0007 10.5041 29.9969C11.3011 28.9104 12.0119 27.7553 12.6242 26.538C11.458 26.099 10.341 25.5573 9.28561 24.9284C9.5656 24.7229 9.83948 24.5081 10.1041 24.287C16.5413 27.2696 23.5355 27.2696 29.8958 24.287C30.1635 24.5081 30.4374 24.7229 30.7143 24.9284C29.6558 25.5604 28.5358 26.1021 27.3696 26.5411C27.9819 27.7553 28.6896 28.9135 29.4896 30C32.7206 29.0037 36.0069 27.4813 39.3947 24.972C40.2071 16.4508 38.007 9.06291 33.5791 2.51249ZM13.5012 20.4515C11.5688 20.4515 9.98406 18.6644 9.98406 16.4882C9.98406 14.312 11.5349 12.5218 13.5012 12.5218C15.4674 12.5218 17.0521 14.3088 17.0183 16.4882C17.0213 18.6644 15.4674 20.4515 13.5012 20.4515ZM26.4987 20.4515C24.5664 20.4515 22.9816 18.6644 22.9816 16.4882C22.9816 14.312 24.5325 12.5218 26.4987 12.5218C28.465 12.5218 30.0497 14.3088 30.0158 16.4882C30.0158 18.6644 28.465 20.4515 26.4987 20.4515Z",fill:"#EC3963"}})])])])])])}),[],!1,null,"bf62943a",null);e.default=component.exports;installComponents(component,{Header:n(251).default})},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){var r=n(104)(!1);r.push([t.i,".header[data-v-bf62943a]{padding:20px 0}@media(min-width:768px){.header[data-v-bf62943a]{padding:30px 0}}.header .container[data-v-bf62943a]{align-items:center;position:relative}.header-menu[data-v-bf62943a],.header .container[data-v-bf62943a]{display:flex;justify-content:space-between}.header-menu a[data-v-bf62943a]{width:55px;height:83px;border:3px solid #2b2b2b;border-radius:60px;display:flex;align-items:center;justify-content:center;transition:border-color .5s ease}@media(min-width:768px){.header-menu a[data-v-bf62943a]{width:73px;height:108px}}.header-menu a[data-v-bf62943a]:not(:first-child){margin-left:10px}@media(min-width:768px){.header-menu a[data-v-bf62943a]:not(:first-child){margin-left:30px}}.header-menu a[data-v-bf62943a]:hover{border-color:#feef00}.header audio[data-v-bf62943a]{position:absolute;left:-1000px;opacity:0}.audio[data-v-bf62943a]{display:flex;background:none;padding:0;border:none;justify-content:space-between;align-items:center}.audio span[data-v-bf62943a]{background:#48e;display:block;width:4px;height:20px;transition:.5s ease;pointer-events:none}.audio span[data-v-bf62943a]:not(:first-child){margin-left:6px}.audio.active span[data-v-bf62943a],.audio:hover span[data-v-bf62943a]{background:#feef00}.audio.active span[data-v-bf62943a]:first-child,.audio:hover span[data-v-bf62943a]:first-child{height:33px}.audio.active span[data-v-bf62943a]:nth-child(2),.audio:hover span[data-v-bf62943a]:nth-child(2){height:45px}.audio.active span[data-v-bf62943a]:nth-child(3),.audio:hover span[data-v-bf62943a]:nth-child(3){height:23px}",""]),t.exports=r},269:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("2e6105c6",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n(269)},276:function(t,e,n){var r=n(104)(!1);r.push([t.i,".header[data-v-521469bc]{padding:20px 0}@media(min-width:768px){.header[data-v-521469bc]{padding:30px 0}}.header .container[data-v-521469bc]{align-items:center;position:relative}.header-menu[data-v-521469bc],.header .container[data-v-521469bc]{display:flex;justify-content:space-between}.header-menu a[data-v-521469bc]{width:55px;height:83px;border:3px solid #2b2b2b;border-radius:60px;display:flex;align-items:center;justify-content:center;transition:border-color .5s ease}@media(min-width:768px){.header-menu a[data-v-521469bc]{width:73px;height:108px}}.header-menu a[data-v-521469bc]:not(:first-child){margin-left:10px}@media(min-width:768px){.header-menu a[data-v-521469bc]:not(:first-child){margin-left:30px}}.header-menu a[data-v-521469bc]:hover{border-color:#feef00}",""]),t.exports=r},281:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},d=(n(275),n(42)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"header-menu"},[n("a",{attrs:{href:"https://nft-storks.creator-spring.com/"}},[n("svg",{attrs:{width:"27",height:"30",viewBox:"0 0 27 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.471 13.3765C26.2162 15.8931 25.0791 18.4186 22.957 20.7803C21.7209 22.1558 20.3407 23.1324 18.8772 23.7447C18.4272 24.8195 17.7549 25.8649 16.8377 26.8641C14.1675 29.7734 10.7296 30.315 7.74418 29.8552C4.81949 29.4049 2.13815 27.9846 0.473679 26.6374L3.01606 23.4222C4.20759 24.3866 6.23865 25.4585 8.35659 25.7847C10.2425 26.0751 12.0256 25.7652 13.4703 24.4469C10.5129 24.0655 7.78071 22.5445 5.78188 20.7051C4.27323 19.3167 3.04084 17.6283 2.37068 15.8537C1.70296 14.0855 1.52824 12.0185 2.53152 10.1697C3.32516 8.70722 4.50432 7.76377 5.91472 7.36648C7.25744 6.98825 8.62458 7.15502 9.80758 7.51734C12.1406 8.23187 14.3687 9.89097 15.6999 11.4301C16.5964 12.4668 17.7967 14.0263 18.622 15.9149C18.9716 16.7149 19.2635 17.5974 19.431 18.5392C19.6037 18.3759 19.7754 18.1999 19.9456 18.0106C21.572 16.2006 22.2689 14.4732 22.4224 12.9569C22.5766 11.4346 22.199 9.96929 21.4206 8.65862C19.8213 5.96558 16.6429 4.11746 13.633 4.11746V0C18.12 0 22.5993 2.64858 24.9092 6.53807C26.0854 8.51867 26.7252 10.8661 26.471 13.3765ZM15.5109 20.3887C15.5388 19.4577 15.3089 18.5162 14.8997 17.5797C14.3121 16.235 13.4106 15.0359 12.6371 14.1415C11.7191 13.0801 10.1134 11.913 8.6284 11.4582C7.90242 11.2358 7.36455 11.2322 7.00634 11.3331C6.7158 11.4149 6.39809 11.6001 6.09902 12.1513C5.85469 12.6015 5.77288 13.326 6.17247 14.3842C6.56963 15.4359 7.37897 16.6088 8.52037 17.6592C10.5164 19.496 13.1111 20.6096 15.5109 20.3887Z",fill:"#53E09F"}})])]),t._v(" "),n("a",{attrs:{href:"https://medium.com/@nftstorks"}},[n("svg",{attrs:{width:"38",height:"30",viewBox:"0 0 38 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.58676 6.11993C4.63371 5.65605 4.45681 5.19757 4.11043 4.88536L0.582099 0.63492V0H11.5376L20.0056 18.5714L27.4504 0H37.8942V0.63492L34.8775 3.52734C34.6174 3.72558 34.4884 4.05141 34.5423 4.3739V25.6261C34.4884 25.9486 34.6174 26.2744 34.8775 26.4727L37.8237 29.3651V30H23.0047V29.3651L26.0567 26.4021C26.3566 26.1023 26.3566 26.0141 26.3566 25.5556V8.37743L17.8709 29.9295H16.7242L6.84489 8.37743V22.8219C6.76252 23.4292 6.96421 24.0406 7.39178 24.4797L11.3612 29.2945V29.9295H0.105774V29.2945L4.07515 24.4797C4.49961 24.0398 4.68954 23.4244 4.58676 22.8219V6.11993Z",fill:"#7B61FF"}})])]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/nftstorks"}},[n("svg",{attrs:{width:"37",height:"30",viewBox:"0 0 37 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M36.9615 3.46154C35.5769 4.15385 34.1923 4.38462 32.5769 4.61538C34.1923 3.69231 35.3461 2.30769 35.8077 0.461538C34.4231 1.38461 32.8077 1.84615 30.9615 2.30769C29.5769 0.923077 27.5 0 25.4231 0C20.5769 0 16.8846 4.61538 18.0385 9.23077C11.8077 9 6.26922 6 2.34614 1.38462C0.269221 4.84615 1.42307 9.23077 4.65384 11.5385C3.49999 11.5385 2.34614 11.0769 1.1923 10.6154C1.1923 14.0769 3.73076 17.3077 7.1923 18.2308C6.03845 18.4615 4.88461 18.6923 3.73076 18.4615C4.65384 21.4615 7.42307 23.7692 10.8846 23.7692C8.11537 25.8462 3.96153 27 0.0384521 26.5385C3.49999 28.6154 7.42307 30 11.5769 30C25.6538 30 33.5 18.2308 33.0384 7.38461C34.6538 6.46154 36.0385 5.07692 36.9615 3.46154Z",fill:"#4488EE"}})])]),t._v(" "),n("a",{attrs:{href:"https://discord.gg/fqFUdVG894"}},[n("svg",{attrs:{width:"40",height:"30",viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M33.5791 2.51249C31.0466 1.33875 28.3388 0.485722 25.5079 0C25.1602 0.622678 24.754 1.46019 24.474 2.12643C21.4646 1.67811 18.483 1.67811 15.529 2.12643C15.249 1.46019 14.8336 0.622678 14.4828 0C11.6488 0.485722 8.93788 1.34188 6.40544 2.51871C1.2975 10.165 -0.0871831 17.6215 0.605158 24.972C3.99302 27.4782 7.27626 29.0007 10.5041 29.9969C11.3011 28.9104 12.0119 27.7553 12.6242 26.538C11.458 26.099 10.341 25.5573 9.28561 24.9284C9.5656 24.7229 9.83948 24.5081 10.1041 24.287C16.5413 27.2696 23.5355 27.2696 29.8958 24.287C30.1635 24.5081 30.4374 24.7229 30.7143 24.9284C29.6558 25.5604 28.5358 26.1021 27.3696 26.5411C27.9819 27.7553 28.6896 28.9135 29.4896 30C32.7206 29.0037 36.0069 27.4813 39.3947 24.972C40.2071 16.4508 38.007 9.06291 33.5791 2.51249ZM13.5012 20.4515C11.5688 20.4515 9.98406 18.6644 9.98406 16.4882C9.98406 14.312 11.5349 12.5218 13.5012 12.5218C15.4674 12.5218 17.0521 14.3088 17.0183 16.4882C17.0213 18.6644 15.4674 20.4515 13.5012 20.4515ZM26.4987 20.4515C24.5664 20.4515 22.9816 18.6644 22.9816 16.4882C22.9816 14.312 24.5325 12.5218 26.4987 12.5218C28.465 12.5218 30.0497 14.3088 30.0158 16.4882C30.0158 18.6644 28.465 20.4515 26.4987 20.4515Z",fill:"#EC3963"}})])])])])])}),[],!1,null,"521469bc",null);e.default=component.exports;installComponents(component,{Header:n(251).default})}}]);