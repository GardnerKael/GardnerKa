(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},n=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0c79":function(e,t,r){},"1c1d":function(e,t,r){},3663:function(e,t,r){},4678:function(e,t,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",{attrs:{id:"header"}},[r("h1",[e._v("Photo Bomb")]),r("nav",[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"fas fa-home"})]),r("router-link",{attrs:{to:"/dashboard"}},[r("i",{staticClass:"fas fa-user"})])],1)]),r("router-view")],1)},n=[],o=(r("034f"),r("2877")),i={},c=Object(o["a"])(i,a,n,!1,null,null,null),u=c.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("br"),r("br"),r("br"),r("image-gallery",{attrs:{photos:e.photos}}),e.error?r("p",[e._v(e._s(e.error))]):e._e()],1)},p=[],m=(r("96cf"),r("1da1")),f=r("bc3a"),h=r.n(f),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"image-gallery"},e._l(e.photos,(function(t){return r("div",{key:t._id,staticClass:"image zoom"},[r("router-link",{attrs:{to:{name:"photo",params:{id:t._id}}}},[r("img",{attrs:{src:t.path}})]),r("div",{staticClass:"photoInfo"},[r("p",{staticClass:"photoTitle"},[e._v(e._s(t.title))]),r("p",{staticClass:"photoName"},[e._v(" "+e._s(t.user.firstName)+" "+e._s(t.user.lastName)+" ")])]),r("p",{staticClass:"photoDate"},[e._v(e._s(e.formatDate(t.created)))])],1)})),0)])},v=[],g=r("c1df"),j=r.n(g),w={name:"ImageGallery",props:{photos:Array},methods:{formatDate:function(e){return j()(e).diff(Date.now(),"days")<15?j()(e).fromNow():j()(e).format("d MMMM YYYY")}}},_=w,k=(r("9c1b"),Object(o["a"])(_,b,v,!1,null,"f26e8774",null)),x=k.exports,y={name:"Home",components:{ImageGallery:x},data:function(){return{photos:[],error:""}},created:function(){this.getPhotos()},methods:{getPhotos:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos/all");case 3:r=t.sent,e.photos=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},C=y,N=Object(o["a"])(C,d,p,!1,null,null,null),$=N.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard"},[e.user?r("MyPhotos"):r("Login")],1)},P=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"menu"},[r("p",[r("a",{on:{click:e.toggleUpload}},[r("i",{staticClass:"fas fa-image"})])]),r("h2",[e._v(" "+e._s(e.user.firstName)+" "+e._s(e.user.lastName)+" "),r("a",{on:{click:e.logout}},[r("i",{staticClass:"fas fa-sign-out-alt"})])]),r("uploader",{attrs:{show:e.show},on:{close:e.close,uploadFinished:e.uploadFinished}})],1),r("image-gallery",{attrs:{photos:e.photos}}),e.error?r("p",[e._v(e._s(e.error))]):e._e()],1)},R=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-container"},[r("form",{staticClass:"pure-form",on:{submit:function(t){return t.preventDefault(),e.upload(t)}}},[r("legend",[e._v("Upload a picture")]),r("fieldset",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),r("fieldset",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),r("fieldset",[r("div",{staticClass:"imageInput",on:{click:e.chooseImage}},[e.url?r("img",{attrs:{src:e.url}}):e._e(),e.url?e._e():r("div",{staticClass:"placeholder"},[e._v("Choose an Image")]),r("input",{ref:"fileInput",staticClass:"fileInput",attrs:{type:"file"},on:{input:e.fileChanged}})]),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()]),r("fieldset",{staticClass:"buttons"},[r("button",{staticClass:"pure-button",attrs:{type:"button"},on:{click:e.close}},[e._v(" Close ")]),r("button",{staticClass:"pure-button pure-button-primary right",attrs:{type:"submit"}},[e._v(" Upload ")])])])])])]):e._e()},D=[],M=(r("a4d3"),r("e01a"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),{name:"Uploader",props:{show:Boolean},data:function(){return{title:"",description:"",url:"",file:null,error:""}},methods:{fileChanged:function(e){this.file=e.target.files[0],this.url=URL.createObjectURL(this.file)},close:function(){this.$emit("close")},chooseImage:function(){this.$refs.fileInput.click()},upload:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,r.append("photo",e.file,e.file.name),r.append("title",e.title),r.append("description",e.description),t.next=7,h.a.post("/api/photos",r);case 7:e.file=null,e.url="",e.title="",e.description="",e.$emit("uploadFinished"),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.error="Error: "+t.t0.response.data.message;case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}}),E=M,I=(r("76d1"),Object(o["a"])(E,z,D,!1,null,"75b5042c",null)),T=I.exports,S={name:"MyPhotos",components:{Uploader:T,ImageGallery:x},data:function(){return{show:!1,photos:[],error:""}},created:function(){this.getPhotos()},computed:{user:function(){return this.$root.$data.user}},methods:{logout:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.delete("/api/users");case 3:e.$root.$data.user=null,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$root.$data.user=null;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getPhotos:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos");case 3:e.response=t.sent,e.photos=e.response.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},close:function(){this.show=!1},toggleUpload:function(){this.show=!0},uploadFinished:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.show=!1,e.getPhotos();case 2:case"end":return t.stop()}}),t)})))()}}},U=S,Y=(r("e8d2"),Object(o["a"])(U,L,R,!1,null,"0096f3ec",null)),F=Y.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero"},[r("div",{staticClass:"heroBox"},[r("form",{staticClass:"pure-form"},[r("fieldset",[r("legend",[e._v("Register for an account")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{placeholder:"first name"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{placeholder:"last name"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),r("fieldset",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("fieldset",[r("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.register(t)}}},[e._v(" Register ")])])]),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("form",{staticClass:"pure-form space-above"},[r("fieldset",[r("legend",[e._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameLogin,expression:"usernameLogin"}],attrs:{placeholder:"username"},domProps:{value:e.usernameLogin},on:{input:function(t){t.target.composing||(e.usernameLogin=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordLogin,expression:"passwordLogin"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.passwordLogin},on:{input:function(t){t.target.composing||(e.passwordLogin=t.target.value)}}})]),r("fieldset",[r("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v(" Login ")])])]),e.errorLogin?r("p",{staticClass:"error"},[e._v(e._s(e.errorLogin))]):e._e()])])},H=[],G={name:"HomePage",data:function(){return{firstName:"",lastName:"",username:"",password:"",usernameLogin:"",passwordLogin:"",error:"",errorLogin:""}},methods:{register:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error="",e.errorLogin="",e.firstName&&e.lastName&&e.username&&e.password){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,h.a.post("/api/users",{firstName:e.firstName,lastName:e.lastName,username:e.username,password:e.password});case 7:r=t.sent,e.$root.$data.user=r.data.user,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),e.error=t.t0.response.data.message,e.$root.$data.user=null;case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()},login:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error="",e.errorLogin="",e.usernameLogin&&e.passwordLogin){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,h.a.post("/api/users/login",{username:e.usernameLogin,password:e.passwordLogin});case 7:r=t.sent,e.$root.$data.user=r.data.user,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),e.errorLogin="Error: "+t.t0.response.data.message,e.$root.$data.user=null;case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}},q=G,A=(r("f233"),Object(o["a"])(q,B,H,!1,null,"7b83dc4f",null)),J=A.exports,X={name:"dashboard",components:{MyPhotos:F,Login:J},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/users");case 3:r=t.sent,e.$root.$data.user=r.data.user,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$root.$data.user=null;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{user:function(){return this.$root.$data.user}}},K=X,Q=(r("79b8"),Object(o["a"])(K,O,P,!1,null,"44659884",null)),V=Q.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("br"),r("br"),r("br"),r("imagesview",{attrs:{photo:e.photo,reload:e.getPhotos}}),e.error?r("p",[e._v(e._s(e.error))]):e._e()],1)},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"pure-u-1-1"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:e.photo.data.path}}),r("div",{staticClass:"flex"},[r("p",{staticClass:"userName pure-u-1-2"},[e._v(" "+e._s(e.photo.data.user.firstName)+" "+e._s(e.photo.data.user.lastName)+" ")]),r("div",{staticClass:"left pure-u-1-12"},[r("p",{staticClass:"photoDate"},[e._v(e._s(e.formatDate(e.photo.data.created)))])])])]),r("small",[e._v(" TITLE: ")]),r("br"),r("h1",{staticClass:"photoTitle"},[e._v(e._s(e.photo.data.title))]),r("div",{staticClass:"description"},[r("small",[e._v(" DESCRIPTION: ")]),r("br"),r("br"),e._v(" "+e._s(e.photo.data.description)+" ")]),r("hr"),e._l(e.photo.comments,(function(t){return r("div",{key:t._id,staticClass:"description"},[r("div",{staticClass:"flex"},[r("small",{staticClass:"userName pure-u-1-2"},[e._v(" "+e._s(t.user.firstName)+" "+e._s(t.user.lastName)+" ")]),r("div",{staticClass:"left pure-u-1-12"},[r("small",{staticClass:"photoDate"},[e._v(e._s(e.formatDate(t.created)))])])]),r("br"),r("div",{staticClass:"description2"},[e._v(" "+e._s(t.comment)+" ")])])})),e.user?r("div",{staticClass:"description"},[r("small",[e._v(" COMMENT BOX: ")]),r("div",{staticClass:"form"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"pure-u-1",attrs:{placeholder:"Comment here......."},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})]),r("div",{staticClass:"left"},[r("button",{staticClass:"pure-button pure-button-active",on:{click:function(t){return e.commentSubmit()}}},[e._v(" Submit ")])])]):e._e()],2)])},te=[],re={name:"Images",props:{photo:Array,reload:{type:Function}},data:function(){return{comment:"",message:null,error:null}},methods:{formatDate:function(e){return j()(e).diff(Date.now(),"days")<15?j()(e).fromNow():j()(e).format("d MMMM YYYY")},commentSubmit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=!e.comment){t.next=13;break}return t.prev=1,t.next=4,h.a.post("/api/photos/comment",{photo:e.photo.data._id,user:e.photo.data.user._id,comment:e.comment});case 4:r=t.sent,e.message=r.data,e.comment="",e.reload(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/users");case 3:r=t.sent,e.$root.$data.user=r.data.user,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$root.$data.user=null;case 10:console.log(e.photo.data);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{user:function(){return this.$root.$data.user}}},se=re,ae=(r("c34c"),Object(o["a"])(se,ee,te,!1,null,"984fe7f0",null)),ne=ae.exports,oe={name:"Home",components:{imagesview:ne},data:function(){return{photo:"",error:""}},created:function(){this.getPhotos()},methods:{getPhotos:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos/"+e.$route.params.id);case 3:r=t.sent,e.photo=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},ie=oe,ce=Object(o["a"])(ie,W,Z,!1,null,null,null),ue=ce.exports;s["a"].use(l["a"]);var le=[{path:"/",name:"Home",component:$},{path:"/dashboard",name:"Dashboard",component:V},{path:"/photo/:id",name:"photo",component:ue}],de=new l["a"]({mode:"history",base:"/",routes:le}),pe=de,me=r("2f62");s["a"].use(me["a"]);var fe=new me["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1;var he={user:null};new s["a"]({data:he,router:pe,store:fe,render:function(e){return e(u)}}).$mount("#app")},"76d1":function(e,t,r){"use strict";r("3663")},"79b8":function(e,t,r){"use strict";r("e8d9")},"85ec":function(e,t,r){},"8c48":function(e,t,r){},"9c1b":function(e,t,r){"use strict";r("8c48")},bc70:function(e,t,r){},c34c:function(e,t,r){"use strict";r("0c79")},e8d2:function(e,t,r){"use strict";r("bc70")},e8d9:function(e,t,r){},f233:function(e,t,r){"use strict";r("1c1d")}});
//# sourceMappingURL=app.ca928fe1.js.map