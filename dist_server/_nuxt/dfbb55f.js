(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{249:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("ab744c9a",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("5a3a8d70",content,!0,{sourceMap:!1})},251:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("b7793f1e",content,!0,{sourceMap:!1})},252:function(t,e,n){var map={"./img-1.png":253,"./img-10.png":254,"./img-11.png":255,"./img-2.png":256,"./img-3.png":257,"./img-4.png":258,"./img-5.png":259,"./img-6.png":260,"./img-7.png":261,"./img-8.png":262,"./img-9.png":263};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=252},253:function(t,e,n){t.exports=n.p+"img/img-1.20e9287.png"},254:function(t,e,n){t.exports=n.p+"img/img-10.085b1c2.png"},255:function(t,e,n){t.exports=n.p+"img/img-11.3c9cd87.png"},256:function(t,e,n){t.exports=n.p+"img/img-2.c6cc420.png"},257:function(t,e,n){t.exports=n.p+"img/img-3.35654bb.png"},258:function(t,e,n){t.exports=n.p+"img/img-4.0b00a82.png"},259:function(t,e,n){t.exports=n.p+"img/img-5.d1d7e74.png"},260:function(t,e,n){t.exports=n.p+"img/img-6.27a513a.png"},261:function(t,e,n){t.exports=n.p+"img/img-7.b151a73.png"},262:function(t,e,n){t.exports=n.p+"img/img-8.f70b15d.png"},263:function(t,e,n){t.exports=n.p+"img/img-9.822acf9.png"},264:function(t,e,n){"use strict";n(249)},265:function(t,e,n){var o=n(104)(!1);o.push([t.i,".slider .tns-ovh{overflow:visible}.slider .tns-item{transition:transform .5s ease;position:relative;z-index:1;transform:scale(.95)}@media(min-width:768px){.slider .tns-item{transform:scale(.8)}}.slider .tns-slide-active{box-shadow:0 -10px 70px rgba(0,0,0,.4);z-index:2;transform:scale(1)}@media(min-width:768px){.slider .tns-slide-active{transform:scale(.9)}.slider .tns-slide-active+.tns-slide-active{transform:scale(1);box-shadow:0 -10px 70px rgba(0,0,0,.4);z-index:2}.slider .tns-slide-active+.tns-slide-active+.tns-slide-active{transform:scale(.9);box-shadow:none;z-index:1}}",""]),t.exports=o},266:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("52f65312",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tinySliderOptions:{mouseDrag:!0,items:1,loop:!0,autoplay:!1,controls:!1,nav:!1,autoplayButtonOutput:!1,responsive:{768:{items:3,center:!0}}}}}},r=(n(264),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"slider"},[o("div",{staticClass:"container"},[o("vue-tiny-slider",t._b({},"vue-tiny-slider",t.tinySliderOptions,!1),t._l(11,(function(i){return o("img",{attrs:{src:n(252)("./img-"+i+".png")}})})),0)],1)])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{scrolled:!1}},methods:{play:function(){var t=this;0===this.$refs.audio.currentTime?(this.$refs.audio.play(),this.$refs.audio.volume=.5,this.$refs.audioBtn.classList.add("active")):(this.$refs.audio.pause(),this.$refs.audio.currentTime=0),this.$refs.audio.onpause=function(){t.$refs.audioBtn.classList.remove("active")}}},mounted:function(){var t=this;document.addEventListener("click",(function(e){t.scrolled||(t.scrolled=!0,t.play())}))}},r=(n(270),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("button",{ref:"audioBtn",staticClass:"audio",on:{click:function(e){return e.preventDefault(),t.play.apply(null,arguments)}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("audio",{ref:"audio",attrs:{controls:""}},[n("source",{attrs:{src:"http://nftstorks.com/audio/drums.mp3",type:"audio/mpeg"}}),t._v(" "),n("source",{attrs:{src:"http://nftstorks.com/audio/drums.ogg",type:"audio/ogg"}})]),t._v(" "),n("nav",{staticClass:"header-menu"},[n("nuxt-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"41",height:"24",viewBox:"0 0 41 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.9478 0H0.5V24H21.097L14.0434 14.6935C16.6199 13.4811 18.4104 10.8023 18.4104 7.69231C18.4104 3.44411 15.0693 0 10.9478 0Z",fill:"#53E09F"}}),t._v(" "),n("path",{attrs:{d:"M37.0835 10.8026C38.0935 9.65535 38.709 8.13251 38.709 6.46154C38.709 2.89303 35.9024 0 32.4403 0H21.9925V24H33.6343C37.4261 24 40.5 20.8314 40.5 16.9231C40.5 14.3107 39.1266 12.0285 37.0835 10.8026Z",fill:"#53E09F"}})])]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"18",height:"30",viewBox:"0 0 18 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.66146 30H11.3847V16.9459H15.9157L16.8696 11.5323H11.6231V8.00221C11.6231 6.59006 12.3386 5.1779 14.7233 5.1779H17.1081V0.470718C17.1081 0.470718 14.9618 0 12.8155 0C8.52319 0 5.66146 2.58921 5.66146 7.29587V11.5323H0.891907V16.9459H5.66146V30Z",fill:"#7B61FF"}})])]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"37",height:"30",viewBox:"0 0 37 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M36.9615 3.46154C35.5769 4.15385 34.1923 4.38462 32.5769 4.61538C34.1923 3.69231 35.3461 2.30769 35.8077 0.461538C34.4231 1.38461 32.8077 1.84615 30.9615 2.30769C29.5769 0.923077 27.5 0 25.4231 0C20.5769 0 16.8846 4.61538 18.0385 9.23077C11.8077 9 6.26922 6 2.34614 1.38462C0.269221 4.84615 1.42307 9.23077 4.65384 11.5385C3.49999 11.5385 2.34614 11.0769 1.1923 10.6154C1.1923 14.0769 3.73076 17.3077 7.1923 18.2308C6.03845 18.4615 4.88461 18.6923 3.73076 18.4615C4.65384 21.4615 7.42307 23.7692 10.8846 23.7692C8.11537 25.8462 3.96153 27 0.0384521 26.5385C3.49999 28.6154 7.42307 30 11.5769 30C25.6538 30 33.5 18.2308 33.0384 7.38461C34.6538 6.46154 36.0385 5.07692 36.9615 3.46154Z",fill:"#4488EE"}})])]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15 2.71084C18.9759 2.71084 19.5181 2.71084 21.1446 2.71084C22.5904 2.71084 23.3133 3.07229 23.8554 3.25301C24.5783 3.61446 25.1205 3.79518 25.6627 4.33735C26.2048 4.87952 26.5663 5.42169 26.747 6.14458C26.9277 6.68675 27.1084 7.40964 27.2892 8.85542C27.2892 10.4819 27.2892 10.8434 27.2892 15C27.2892 19.1566 27.2892 19.5181 27.2892 21.1446C27.2892 22.5904 26.9277 23.3133 26.747 23.8554C26.3855 24.5783 26.2048 25.1205 25.6627 25.6627C25.1205 26.2048 24.5783 26.5663 23.8554 26.747C23.3133 26.9277 22.5904 27.1084 21.1446 27.2892C19.5181 27.2892 19.1566 27.2892 15 27.2892C10.8434 27.2892 10.4819 27.2892 8.85542 27.2892C7.40964 27.2892 6.68675 26.9277 6.14458 26.747C5.42169 26.3855 4.87952 26.2048 4.33735 25.6627C3.79518 25.1205 3.43374 24.5783 3.25301 23.8554C3.07229 23.3133 2.89157 22.5904 2.71084 21.1446C2.71084 19.5181 2.71084 19.1566 2.71084 15C2.71084 10.8434 2.71084 10.4819 2.71084 8.85542C2.71084 7.40964 3.07229 6.68675 3.25301 6.14458C3.61446 5.42169 3.79518 4.87952 4.33735 4.33735C4.87952 3.79518 5.42169 3.43374 6.14458 3.25301C6.68675 3.07229 7.40964 2.89157 8.85542 2.71084C10.4819 2.71084 11.0241 2.71084 15 2.71084ZM15 0C10.8434 0 10.4819 0 8.85542 0C7.22892 0 6.14458 0.361447 5.24097 0.722893C4.33735 1.08434 3.43374 1.62651 2.53012 2.53012C1.62651 3.43374 1.26506 4.15663 0.722893 5.24097C0.361447 6.14458 0.180723 7.22892 0 8.85542C0 10.4819 0 11.0241 0 15C0 19.1566 0 19.5181 0 21.1446C0 22.7711 0.361447 23.8554 0.722893 24.759C1.08434 25.6627 1.62651 26.5663 2.53012 27.4699C3.43374 28.3735 4.15663 28.7349 5.24097 29.2771C6.14458 29.6386 7.22892 29.8193 8.85542 30C10.4819 30 11.0241 30 15 30C18.9759 30 19.5181 30 21.1446 30C22.7711 30 23.8554 29.6386 24.759 29.2771C25.6627 28.9157 26.5663 28.3735 27.4699 27.4699C28.3735 26.5663 28.7349 25.8434 29.2771 24.759C29.6386 23.8554 29.8193 22.7711 30 21.1446C30 19.5181 30 18.9759 30 15C30 11.0241 30 10.4819 30 8.85542C30 7.22892 29.6386 6.14458 29.2771 5.24097C28.9157 4.33735 28.3735 3.43374 27.4699 2.53012C26.5663 1.62651 25.8434 1.26506 24.759 0.722893C23.8554 0.361447 22.7711 0.180723 21.1446 0C19.5181 0 19.1566 0 15 0Z",fill:"#EC3963"}}),t._v(" "),n("path",{attrs:{d:"M15 7.22892C10.6627 7.22892 7.22892 10.6627 7.22892 15C7.22892 19.3374 10.6627 22.7711 15 22.7711C19.3374 22.7711 22.7711 19.3374 22.7711 15C22.7711 10.6627 19.3374 7.22892 15 7.22892ZM15 20.0602C12.2892 20.0602 9.93976 17.8916 9.93976 15C9.93976 12.2892 12.1084 9.93976 15 9.93976C17.7108 9.93976 20.0602 12.1084 20.0602 15C20.0602 17.7108 17.7108 20.0602 15 20.0602Z",fill:"#EC3963"}}),t._v(" "),n("path",{attrs:{d:"M22.9518 8.85542C23.9499 8.85542 24.759 8.0463 24.759 7.04819C24.759 6.05009 23.9499 5.24097 22.9518 5.24097C21.9537 5.24097 21.1446 6.05009 21.1446 7.04819C21.1446 8.0463 21.9537 8.85542 22.9518 8.85542Z",fill:"#EC3963"}})])])],1)])])}),[],!1,null,"0be176a6",null);e.default=component.exports;installComponents(component,{Header:n(268).default})},269:function(t,e,n){"use strict";n.r(e);var o={},r=(n(274),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("svg",{staticClass:"footer-logo",attrs:{width:"137",height:"59",viewBox:"0 0 137 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("ellipse",{attrs:{cx:"42.7206",cy:"33.2529",rx:"3.84651",ry:"4.32733",fill:"#FEEF00"}}),t._v(" "),n("ellipse",{attrs:{cx:"27.7716",cy:"33.2529",rx:"3.84651",ry:"4.32733",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M35.1762 56.8127C47.265 56.8127 57.4336 48.6304 60.3949 37.5273C60.6804 37.5622 60.9712 37.5801 61.2662 37.5801C65.1797 37.5801 68.3523 34.4229 68.3523 30.5282C68.3523 26.6335 65.1797 23.4762 61.2662 23.4762C60.9114 23.4762 60.5626 23.5022 60.2218 23.5523C57.0539 12.7648 47.0397 4.88477 35.1762 4.88477C23.3126 4.88477 13.2985 12.7648 10.1305 23.5523C9.78967 23.5022 9.44097 23.4762 9.08617 23.4762C5.17259 23.4762 2 26.6335 2 30.5282C2 34.4229 5.17259 37.5801 9.08617 37.5801C9.38114 37.5801 9.6719 37.5622 9.9574 37.5273C12.9187 48.6304 23.0873 56.8127 35.1762 56.8127Z",stroke:"#4488EE","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M35.657 17.386C39.9057 17.386 43.35 13.9418 43.35 9.69302C43.35 5.44428 39.9057 2 35.657 2",stroke:"#FEEF00","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M42.3883 44.3115C40.2564 45.5363 37.7961 46.2348 35.1761 46.2348C32.5562 46.2348 30.0959 45.5363 27.9639 44.3115",stroke:"#FEEF00","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M83.9731 30.1437V14.3521H87.2464V18.2487H93.4507C94.0212 18.2487 94.5418 18.3854 95.0124 18.6589C95.4831 18.9323 95.8539 19.2946 96.1249 19.7458C96.4102 20.197 96.5528 20.6892 96.5528 21.2225V27.17C96.5528 27.7032 96.4102 28.1954 96.1249 28.6466C95.8539 29.0978 95.4831 29.4601 95.0124 29.7336C94.5418 30.007 94.0212 30.1437 93.4507 30.1437H83.9731ZM87.2464 27.0059H93.2795V21.3865H87.2464V27.0059Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M101.281 30.1437C100.724 30.1437 100.211 30.007 99.7403 29.7336C99.2697 29.4601 98.8917 29.0978 98.6065 28.6466C98.3212 28.1954 98.1786 27.7032 98.1786 27.17V21.2225C98.1786 20.6892 98.3212 20.197 98.6065 19.7458C98.8917 19.2946 99.2697 18.9323 99.7403 18.6589C100.211 18.3854 100.724 18.2487 101.281 18.2487H107.656C108.227 18.2487 108.747 18.3854 109.218 18.6589C109.689 18.9323 110.059 19.2946 110.33 19.7458C110.616 20.197 110.758 20.6892 110.758 21.2225V27.17C110.758 27.7032 110.616 28.1954 110.33 28.6466C110.059 29.0978 109.689 29.4601 109.218 29.7336C108.747 30.007 108.227 30.1437 107.656 30.1437H101.281ZM101.452 27.0059H107.485V21.3865H101.452V27.0059Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M112.449 30.1437V21.2225C112.449 20.6892 112.591 20.197 112.877 19.7458C113.162 19.2946 113.54 18.9323 114.011 18.6589C114.481 18.3854 115.002 18.2487 115.572 18.2487H122.418V21.3865H115.722V30.1437H112.449Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M124.171 30.1437V18.2487H133.648C134.219 18.2487 134.739 18.3854 135.21 18.6589C135.681 18.9323 136.051 19.2946 136.322 19.7458C136.608 20.197 136.75 20.6892 136.75 21.2225V30.1437H133.477V21.3865H127.444V30.1437H124.171Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M83.9731 44.6707V32.7757H87.2649V44.6707H83.9731Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M89.7941 44.6707V32.7757H99.3254C99.8991 32.7757 100.423 32.9124 100.896 33.1859C101.369 33.4593 101.742 33.8216 102.015 34.2728C102.302 34.724 102.445 35.2162 102.445 35.7494V44.6707H99.1533V35.9135H93.086V44.6707H89.7941Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M112.175 44.6709C111.599 44.6709 111.073 44.5347 110.598 44.2624C110.123 43.9902 109.741 43.6294 109.453 43.1802C109.179 42.7309 109.042 42.2408 109.042 41.7099V32.8271H112.348V41.5465H118.442V32.8271H121.748V41.7099C121.748 42.2408 121.604 42.7309 121.316 43.1802C121.042 43.6294 120.667 43.9902 120.192 44.2624C119.717 44.5347 119.191 44.6709 118.615 44.6709H112.175Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M127.178 44.6709C126.602 44.6709 126.076 44.5347 125.601 44.2624C125.125 43.9902 124.743 43.6294 124.455 43.1802C124.182 42.7309 124.045 42.2408 124.045 41.7099V37.1766H133.444V35.9514H124.045V32.8271H133.617C134.193 32.8271 134.719 32.9632 135.194 33.2355C135.67 33.5078 136.044 33.8685 136.318 34.3178C136.606 34.767 136.75 35.2571 136.75 35.788V44.6709H127.178ZM127.351 41.5465H133.444V39.9129H127.351V41.5465Z",fill:"#FEEF00"}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[t._v("© 2022 CryptoLibertyStorks "),n("span",[t._v("All Rights Reserved.")])])}],!1,null,"0855b8bc",null);e.default=component.exports;installComponents(component,{Footer:n(269).default})},270:function(t,e,n){"use strict";n(250)},271:function(t,e,n){var o=n(104)(!1);o.push([t.i,".header[data-v-0be176a6]{padding:20px 0}@media(min-width:768px){.header[data-v-0be176a6]{padding:30px 0}}.header .container[data-v-0be176a6]{align-items:center;position:relative}.header-menu[data-v-0be176a6],.header .container[data-v-0be176a6]{display:flex;justify-content:space-between}.header-menu a[data-v-0be176a6]{width:55px;height:83px;border:3px solid #2b2b2b;border-radius:60px;display:flex;align-items:center;justify-content:center;transition:border-color .5s ease}@media(min-width:768px){.header-menu a[data-v-0be176a6]{width:73px;height:108px}}.header-menu a[data-v-0be176a6]:not(:first-child){margin-left:10px}@media(min-width:768px){.header-menu a[data-v-0be176a6]:not(:first-child){margin-left:30px}}.header-menu a[data-v-0be176a6]:hover{border-color:#feef00}.header audio[data-v-0be176a6]{position:absolute;left:-1000px;opacity:0}.audio[data-v-0be176a6]{display:flex;background:none;padding:0;border:none;justify-content:space-between;align-items:center}.audio span[data-v-0be176a6]{background:#48e;display:block;width:4px;height:20px;transition:.5s ease;pointer-events:none}.audio span[data-v-0be176a6]:not(:first-child){margin-left:6px}.audio.active span[data-v-0be176a6],.audio:hover span[data-v-0be176a6]{background:#feef00}.audio.active span[data-v-0be176a6]:first-child,.audio:hover span[data-v-0be176a6]:first-child{height:33px}.audio.active span[data-v-0be176a6]:nth-child(2),.audio:hover span[data-v-0be176a6]:nth-child(2){height:45px}.audio.active span[data-v-0be176a6]:nth-child(3),.audio:hover span[data-v-0be176a6]:nth-child(3){height:23px}",""]),t.exports=o},272:function(t,e,n){"use strict";n(251)},273:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap);"]),o.push([t.i,'@media(min-width:768px){.content[data-v-735c0d4e]{padding:0 0 30px}}.content .btn[data-v-735c0d4e]{font-family:"Orbitron",sans-serif;font-weight:900;font-size:20px;text-align:center;color:#0b0b0b;text-transform:uppercase;border-radius:80px;border:none;padding:18px 20px;margin:10px 0;width:100%;transition:background .5s ease}@media(min-width:768px){.content .btn[data-v-735c0d4e]{width:calc(50% - 15px);font-size:30px;padding:0 45px;line-height:100px;height:100px}}.content .btn-yellow[data-v-735c0d4e]{background:#feef00}.content .btn-violet[data-v-735c0d4e]{background:#ab8bfd}@media(max-width:767px){.content .btn-violet[data-v-735c0d4e]{order:2}}.content .btn[data-v-735c0d4e]:hover{background:#48e}.content .container[data-v-735c0d4e]{display:flex;justify-content:space-between;flex-wrap:wrap}.content-desc[data-v-735c0d4e]{font-weight:300;font-size:18px;line-height:22px;color:#fff;border:3px solid #2b2b2b;border-radius:30px;padding:20px;width:100%;margin:10px 0}@media(min-width:768px){.content-desc[data-v-735c0d4e]{font-size:21px;line-height:25px;width:calc(100% - 390px)}}.content-disc[data-v-735c0d4e]{margin:10px 0;font-weight:400;font-size:18px;line-height:22px;color:#fff;width:360px;word-break:break-word;padding:20px 0}@media(max-width:767px){.content-disc[data-v-735c0d4e]{order:2}}@media(min-width:768px){.content-disc[data-v-735c0d4e]{font-size:21px;line-height:25px}}.content-disc span[data-v-735c0d4e]{display:block}@media(min-width:768px){.content-disc span[data-v-735c0d4e]{font-weight:700}}.content-disc .yellow[data-v-735c0d4e]{color:#feef00;margin-bottom:10px}.content-disc .blue[data-v-735c0d4e]{color:#48e}',""]),t.exports=o},274:function(t,e,n){"use strict";n(266)},275:function(t,e,n){var o=n(104)(!1);o.push([t.i,".footer[data-v-0855b8bc]{padding:20px 0}@media(min-width:768px){.footer[data-v-0855b8bc]{padding:30px 0}}.footer .container[data-v-0855b8bc]{display:flex;justify-content:space-between;align-items:center}.footer small[data-v-0855b8bc]{font-weight:300;font-size:18px;line-height:22px;color:#fff}@media(max-width:767px){.footer small[data-v-0855b8bc]{width:150px;font-size:16px;line-height:19px}}.footer small span[data-v-0855b8bc]{color:#feef00}@media(max-width:767px){.footer small span[data-v-0855b8bc]{display:block}}.footer-logo[data-v-0855b8bc]{display:block;height:auto;width:137px}@media(max-width:767px){.footer-logo[data-v-0855b8bc]{order:2;width:120px}}",""]),t.exports=o},276:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("28f1127f",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},r=(n(272),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container"},[n("button",{staticClass:"btn btn-yellow"},[t._v("CryptoLibertyStorks")]),t._v(" "),n("button",{staticClass:"btn btn-violet"},[t._v("view opensea")]),t._v(" "),t._m(0),t._v(" "),t.winWidth<768?n("Slider"):t._e(),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-desc"},[t._v("Evil spirits bringing pain and terror attack a prosperous country where free and happy storks live. Storks of different professions and views stood up to defend their homes to give a worthy resistance to evil. "),n("br"),n("br"),n("b",[t._v("Eternal memory and glory to the Heroes!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-disc"},[n("span",{staticClass:"yellow"},[t._v("50%-100% of the received funds are directed for charity.")]),t._v(" "),n("span",{staticClass:"blue"},[t._v("ETH cryptocurrency donate")]),t._v("\n      0x8E37E680b4016F9454Be64a2639Ea132dbdd3398\n    ")])}],!1,null,"735c0d4e",null);e.default=component.exports;installComponents(component,{Slider:n(267).default})},278:function(t,e,n){"use strict";n(276)},279:function(t,e,n){var o=n(104)(!1);o.push([t.i,"main{background:#0b0b0b;min-height:100vh;overflow:hidden}.container,main{position:relative}.container{width:100%;padding-left:10px;padding-right:10px;margin-left:auto;margin-right:auto;z-index:2}@media(min-width:768px){.container{max-width:768px}}@media(min-width:992px){.container{max-width:992px}}@media(min-width:1200px){.container{max-width:1200px}}",""]),t.exports=o},280:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},r=(n(278),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header"),t._v(" "),n("Content"),t._v(" "),t.winWidth>768?n("Slider"):t._e(),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(268).default,Content:n(277).default,Slider:n(267).default,Footer:n(269).default})}}]);