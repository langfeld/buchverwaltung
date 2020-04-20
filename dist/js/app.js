(function(t){function e(e){for(var s,a,r=e[0],o=e[1],c=e[2],h=0,d=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),l()}function l(){for(var t,e=0;e<n.length;e++){for(var l=n[e],s=!0,r=1;r<l.length;r++){var o=l[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=l[0]))}return t}var s={},i={app:0},n=[];function a(e){if(s[e])return s[e].exports;var l=s[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=t,a.c=s,a.d=function(t,e,l){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(l,s,function(e){return t[e]}.bind(null,s));return l},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="http://localhost/web/buchverwaltung/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"56d7":function(t,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var s=l("2b0e"),i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("app-header"),l("router-view")],1)},n=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"bg-blue-500"},[l("h1",{staticClass:"text-white text-center font-hairline text-2xl p-4 md:p-6 md:text-4xl"},[t._v("Bücherei Langfeld")])])])}],o={},c=o,u=l("2877"),h=Object(u["a"])(c,a,r,!1,null,null,null),d=h.exports,b={name:"App",components:{"app-header":d}},p=b,x=Object(u["a"])(p,i,n,!1,null,null,null),f=x.exports,m=(l("c898"),l("43b2"),l("bc3a")),g=l.n(m),v=l("2f62");s["a"].use(v["a"]);var w=new v["a"].Store({state:{flacheliste:!1,admin:!0},mutations:{ansichtUmschalten:function(t,e){t.flacheliste=e.flacheliste}}}),_=l("8c4f"),C=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("app-suche"),Array.isArray(t.buchlisteFiltered)&&t.buchlisteFiltered.length<1?l("div",{staticClass:"w-full px-10 lg:px-20 mt-16 text-2xl"},[t._v(" Es sind leider keine Bücher vorhanden. ")]):t._e(),t.flacheliste?l("div",{staticClass:"p-6 grid grid-cols-1 lg:justify-center lg:p-16"},[t._l(t.buchlisteFiltered,(function(e,s){return[l("app-buch2",{key:s,attrs:{buch:e,suchwort:t.suchwort}})]}))],2):t._e(),t.flacheliste?t._e():l("div",{staticClass:"p-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 lg:justify-center lg:p-16"},[t._l(t.buchlisteFiltered,(function(e,s){return[l("app-buch",{key:s,attrs:{buch:e,suchwort:t.suchwort}})]}))],2),l("div",{staticClass:"absolute top-0 left-0 m-5 text-white lg:m-6 flex items-center cursor-pointer hover:text-teal-200",attrs:{title:"Anzeige-Layout wechseln"},on:{click:t.ansichtUmschalten}},[t.flacheliste?l("i",{staticClass:"las la-table text-3xl lg:text-5xl"}):t._e(),t.flacheliste?t._e():l("i",{staticClass:"las la-list text-3xl lg:text-5xl"})]),t.admin?l("div",{staticClass:"fixed bottom-0 right-0 mb-5 text-white flex items-center bg-purple-500 p-5 rounded-l-full"},[l("router-link",{staticClass:"cursor-pointer no-underline flex items-center ml-3 mr-5 text-white hover:text-teal-200",attrs:{to:"/add",title:"Buch hinzufügen"}},[l("i",{staticClass:"las la-plus-circle text-3xl lg:text-5xl"})])],1):t._e()],1)},y=[],k=(l("4de4"),l("c975"),function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full px-10 lg:px-20 mt-16"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.suchwort,expression:"suchwort"}],staticClass:"shadow border rounded w-full py-2 px-8 text-2xl text-gray-700 focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Suchbegriff"},domProps:{value:t.suchwort},on:{keyup:t.search,input:function(e){e.target.composing||(t.suchwort=e.target.value)}}})])}),j=[],$=(l("ac1f"),l("841c"),{data:function(){return{suchwort:""}},methods:{search:function(){this.$parent.search(this.suchwort)}}}),O=$,B=Object(u["a"])(O,k,j,!1,null,null,null),S=B.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-10 m-5 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer text-center hover:shadow-2xl",class:{"bg-blue-100 text-gray-900 hover:bg-blue-200":!(t.buch.lent>0),"bg-gray-100 text-gray-500 hover:bg-gray-200":t.buch.lent>0},on:{click:function(e){return t.goto(t.buch.id)}}},[s("div",{staticClass:"text-2xl lg:text-3xl",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.title,t.suchwort))}}),s("div",{staticClass:"text-xl",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.subtitle,t.suchwort))}}),s("div",{staticClass:"flex justify-center pt-3"},[t.buch.lent>0?t._e():s("img",{staticClass:"object-contain h-48",attrs:{src:l("b54e")}}),t.buch.lent>0?s("img",{staticClass:"object-contain h-48",attrs:{src:l("a7df")}}):t._e()]),s("div",{staticClass:"py-4",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.author,t.suchwort))}},[t._v(">"+t._s(t.buch.author))]),t.buch.lent>0?s("div",[s("b",[t._v("Dieses Buch ist bereits verliehen.")])]):t._e(),t.buch.lent>0?t._e():s("div",{staticClass:"text-green-700"},[s("b",[t._v("Dieses Buch ist verfügbar.")])])])},E=[],T=(l("d3b7"),l("4d63"),l("25f0"),l("5319"),{props:{buch:Object,suchwort:String},methods:{goto:function(t){this.$router.push({path:"/buch/"+t})}},filters:{highlight:function(t,e){var l=new RegExp(e,"ig");return t.toString().replace(l,(function(t){return'<strong class="text-blue-700">'+t+"</strong>"}))}}}),P=T,z=Object(u["a"])(P,L,E,!1,null,null,null),F=z.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-3 m-3 rounded-lg shadow-lg flex flex-col cursor-pointer lg:items-center lg:flex-row hover:shadow-2xl",class:{"bg-blue-100 text-gray-900 hover:bg-blue-200":!(t.buch.lent>0),"bg-gray-100 text-gray-500 hover:bg-gray-200":t.buch.lent>0},on:{click:function(e){return t.goto(t.buch.id)}}},[s("div",{staticClass:"flex justify-center"},[t.buch.lent>0?t._e():s("img",{staticClass:"object-contain h-12",attrs:{src:l("b54e")}}),t.buch.lent>0?s("img",{staticClass:"object-contain h-12",attrs:{src:l("a7df")}}):t._e()]),s("div",{staticClass:"ml-5 text-2xl text-left lg:w-1/5",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.title,t.suchwort))}}),s("div",{staticClass:"ml-5 text-xl text-left lg:w-1/5 ",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.subtitle,t.suchwort))}}),s("div",{staticClass:"ml-5 text-left lg:w-1/5",domProps:{innerHTML:t._s(this.$options.filters.highlight(t.buch.author,t.suchwort))}},[t._v(">"+t._s(t.buch.author))]),t.buch.lent>0?s("div",{staticClass:"ml-5"},[s("b",[t._v("Dieses Buch ist bereits verliehen.")])]):t._e(),t.buch.lent>0?t._e():s("div",{staticClass:"ml-5 text-green-700"},[s("b",[t._v("Dieses Buch ist verfügbar.")])])])},D=[],M={props:{buch:Object,suchwort:String},methods:{goto:function(t){this.$router.push({path:"/buch/"+t})}},filters:{highlight:function(t,e){var l=new RegExp(e,"ig");return t.toString().replace(l,(function(t){return'<strong class="text-blue-700">'+t+"</strong>"}))}}},A=M,I=Object(u["a"])(A,N,D,!1,null,null,null),H=I.exports,U={components:{"app-buch":F,"app-buch2":H,"app-suche":S},data:function(){return{buchliste:[],suchwort:""}},methods:{search:function(t){this.suchwort=t},ansichtUmschalten:function(){this.$store.commit("ansichtUmschalten",{flacheliste:!this.flacheliste})}},mounted:function(){var t=this;this.$axios.get("http://localhost/web/buchverwaltung/php/books/",{}).then((function(e){t.buchliste=e.data})).catch((function(t){return console.log(t)}))},computed:{admin:function(){return this.$store.state.admin},flacheliste:function(){return this.$store.state.flacheliste},buchlisteFiltered:function(){var t=this;return Array.isArray(this.buchliste)?this.buchliste.filter((function(e){return e.title.toLowerCase().indexOf(t.suchwort.toLowerCase())>=0||e.subtitle.toLowerCase().indexOf(t.suchwort.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.suchwort.toLowerCase())>=0||e.isbn.toLowerCase().indexOf(t.suchwort.toLowerCase())>=0})):{}}}},J=U,R=Object(u["a"])(J,C,y,!1,null,null,null),Z=R.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-6 flex flex-col flex-wrap lg:flex-row lg:justify-center lg:p-16"},[s("div",{staticClass:"flex flex-col justify-between text-center w-full xl:w-3/12"},[t.buch.lent>0?t._e():s("img",{staticClass:"object-scale-down h-48 xl:h-auto xl:object-contain",attrs:{src:l("b54e")}}),t.buch.lent>0?s("img",{staticClass:"object-scale-down h-48 xl:h-auto xl:object-contain",attrs:{src:l("a7df")}}):t._e(),t.buch.lent>0?s("div",{staticClass:"lg:text-lg"},[s("b",[t._v("Dieses Buch ist bereits verliehen.")])]):t._e(),t.buch.lent>0?t._e():s("div",{staticClass:"bg-green-500 hover:bg-green-700 shadow-lg text-white text-center text-lg lg:text-xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-pointer flex justify-center items-center",on:{click:function(e){return t.leihen("lent")}}},[s("i",{staticClass:"las la-book-reader mr-4 text-xl lg:text-4xl"}),t._v(" Buch ausleihen ")]),t.buch.lent>0?s("div",{staticClass:"bg-indigo-500 hover:bg-indigo-700 shadow-lg text-white text-center text-lg lg:text-xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-pointer flex justify-center items-center",on:{click:function(e){return t.leihen("return")}}},[s("i",{staticClass:"las la-undo-alt mr-4 text-xl lg:text-4xl"}),t._v(" Buch zurück geben ")]):t._e()]),s("div",{staticClass:"w-full xl:w-9/12 px-6 flex flex-col"},[s("div",{staticClass:"text-2xl lg:text-4xl"},[t._v(t._s(t.buch.title))]),s("div",{staticClass:"text-xl lg:text-2xl"},[t._v(t._s(t.buch.subtitle))]),s("div",{staticClass:"text-lg lg:text-xl mt-4"},[t._v("Von "+t._s(t.buch.author))]),s("div",{staticClass:"text-lg lg:text-xl mt-16 leading-loose text-justify"},[t._v(t._s(t.buch.text))]),s("div",{staticClass:"text-lg lg:text-xl mt-16"},[t._v("ISBN: "+t._s(t.buch.isbn))])]),s("app-deletemodal",{attrs:{showmodal:t.showmodal},on:{loeschen:t.loeschen,hidemodal:t.hidemodal}}),s("router-link",{staticClass:"absolute top-0 left-0 m-5 text-white lg:m-6 no-underline flex items-center cursor-pointer hover:text-teal-200",attrs:{to:"/"}},[s("i",{staticClass:"las la-arrow-circle-left text-3xl lg:text-5xl"}),s("div",{staticClass:"invisible text-2xl lg:visible lg:ml-4"},[t._v("Zurück")])]),t.admin?s("div",{staticClass:"fixed bottom-0 right-0 mb-5 text-white flex items-center bg-purple-500 text-white p-5 rounded-l-full"},[s("router-link",{staticClass:"cursor-pointer no-underline flex items-center ml-3 mr-5 text-white hover:text-teal-200",attrs:{to:{path:"/edit/"+t.buchnummer},title:"Buch bearbeiten"}},[s("i",{staticClass:"las la-pen text-3xl lg:text-5xl"})]),s("div",{staticClass:"cursor-pointer no-underline flex items-center ml-3 text-white hover:text-red-500",attrs:{title:"Buch löschen"},on:{click:t.loeschfrage}},[s("i",{staticClass:"las la-trash text-3xl lg:text-5xl"})])],1):t._e()],1)},V=[],W=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.showmodal?l("div",{staticClass:"fixed z-50 top-0 left-0 right-0 bottom-0 overflow-auto flex",staticStyle:{"background-color":"#ffffff87"},on:{click:t.hidemodal}},[l("div",{staticClass:"fixed border-2 border-red-400 max-w-md md:relative align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow-2xl flex flex-col"},[l("h2",{staticClass:"text-4xl text-center font-hairline md:leading-loose text-grey mb-4"},[t._v("Buch löschen")]),l("p",{staticClass:"text-xl leading-normal mb-8 text-center"},[t._v(" Wollen Sie das Buch wirklich entfernen? ")]),l("div",{staticClass:"inline-flex justify-center"},[l("button",{staticClass:"bg-red-500 w-full hover:bg-red-700 font-bold mr-2 py-2 px-5 rounded text-white text-xl",on:{click:t.loeschen}},[t._v(" Löschen ")]),l("button",{staticClass:"bg-green-500 w-full hover:bg-green-700 font-bold ml-2 py-2 px-5 rounded text-white text-xl",on:{click:t.hidemodal}},[t._v(" Behalten ")])]),l("span",{staticClass:"absolute top-0 right-0 pt-4 px-4",on:{click:t.hidemodal}},[l("svg",{staticClass:"h-8 w-8 text-grey hover:text-grey-darkest",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[l("title",[t._v("Schließen")]),l("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])])]):t._e()])},q=[],G={methods:{hidemodal:function(){this.$emit("hidemodal")},loeschen:function(){this.$emit("loeschen")}},props:{showmodal:{type:Boolean,default:!1}}},Q=G,X=Object(u["a"])(Q,W,q,!1,null,null,null),Y=X.exports,tt={data:function(){return{buch:[],showmodal:!1}},components:{"app-deletemodal":Y},methods:{hidemodal:function(){this.showmodal=!1},loeschen:function(){this.$axios.post("http://localhost/web/buchverwaltung/php/del/",{id:this.buchnummer,action:"del"}).then(this.$router.push({path:"/"})).catch((function(t){return console.log(t)}))},leihen:function(t){var e=this;this.$axios.post("http://localhost/web/buchverwaltung/php/"+t+"/",{id:this.buchnummer,action:t}).then((function(t){e.buch.lent=t.data})).catch((function(t){return console.log(t)}))},loeschfrage:function(){this.showmodal=!0}},computed:{admin:function(){return this.$store.state.admin},buchnummer:function(){return this.$route.params.buchnummer}},mounted:function(){var t=this;this.$axios.get("http://localhost/web/buchverwaltung/php/books/"+this.buchnummer,{}).then((function(e){t.buch=e.data})).catch((function(e){console.log(e),t.$router.push({path:"/"})}))}},et=tt,lt=Object(u["a"])(et,K,V,!1,null,null,null),st=lt.exports,it=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"flex flex-col md:flex-row text-lg lg:text-xl mt-16 w-full px-10 lg:px-20"},[l("div",{staticClass:"flex-grow"},[t.buchnummer>0?l("h1",{staticClass:"text-3xl mb-8"},[t._v("Buch bearbeiten ("+t._s(t.buchnummer)+")")]):t._e(),!t.buchnummer>0?l("h1",{staticClass:"text-3xl mb-8"},[t._v("Buch hinzufügen")]):t._e(),l("label",{staticClass:"block"},[l("span",{staticClass:"text-blue-700"},[t._v("Titel")]),l("div",{staticClass:"flex flex-col lg:flex-row"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.buch.title,expression:"buch.title"}],staticClass:"border-gray-600 border-1 form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Bitte Titel eingeben"},domProps:{value:t.buch.title},on:{input:function(e){e.target.composing||t.$set(t.buch,"title",e.target.value)}}}),l("div",{staticClass:"bg-blue-500 hover:bg-blue-700 shadow-lg text-white text-center text-sm lg:text-lg font-bold mt-1 lg:ml-4 px-4 py-2 rounded cursor-pointer flex justify-center items-center",attrs:{title:"OpenLibrary mit Titel durchsuchen"},on:{click:function(e){t.api_searchword=t.buch.title,t.api_isbn=null}}},[l("i",{staticClass:"las la-cloud-download-alt text-xl lg:text-2xl mr-4"}),t._v(" OpenLibrary ")])])]),l("label",{staticClass:"block mt-5"},[l("span",{staticClass:"text-blue-700"},[t._v("Untertitel")]),l("input",{directives:[{name:"model",rawName:"v-model",value:t.buch.subtitle,expression:"buch.subtitle"}],staticClass:"border-gray-600 border-1 form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Bitte Untertitel eingeben"},domProps:{value:t.buch.subtitle},on:{input:function(e){e.target.composing||t.$set(t.buch,"subtitle",e.target.value)}}})]),l("label",{staticClass:"block mt-5"},[l("span",{staticClass:"text-blue-700"},[t._v("Autor(en)")]),l("input",{directives:[{name:"model",rawName:"v-model",value:t.buch.author,expression:"buch.author"}],staticClass:"border-gray-600 border-1 form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Bitte Autor(en) eingeben"},domProps:{value:t.buch.author},on:{input:function(e){e.target.composing||t.$set(t.buch,"author",e.target.value)}}})]),l("label",{staticClass:"block mt-5"},[l("span",{staticClass:"text-blue-700"},[t._v("ISBN/EAN")]),l("div",{staticClass:"flex flex-col lg:flex-row"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.buch.isbn,expression:"buch.isbn"}],staticClass:"border-gray-600 border-1 form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Bitte ISBN oder EAN eingeben"},domProps:{value:t.buch.isbn},on:{input:function(e){e.target.composing||t.$set(t.buch,"isbn",e.target.value)}}}),l("div",{staticClass:"bg-blue-500 hover:bg-blue-700 shadow-lg text-white text-center text-sm lg:text-lg font-bold mt-1 lg:ml-4 px-4 py-2 rounded cursor-pointer flex justify-center items-center",attrs:{title:"OpenLibrary mit ISBN durchsuchen"},on:{click:function(e){t.api_isbn=t.buch.isbn,t.api_searchword=null}}},[l("i",{staticClass:"las la-cloud-download-alt text-xl lg:text-2xl mr-4"}),t._v(" OpenLibrary ")])])]),l("label",{staticClass:"block mt-5"},[l("span",{staticClass:"text-blue-700"},[t._v("Text")]),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.buch.text,expression:"buch.text"}],staticClass:"border-gray-600 border-1 form-textarea mt-1 block w-full",attrs:{rows:"6",placeholder:"Bitte Beschreibung / Text eingeben"},domProps:{value:t.buch.text},on:{input:function(e){e.target.composing||t.$set(t.buch,"text",e.target.value)}}})]),l("div",{staticClass:"bg-green-500 hover:bg-green-700 shadow-lg text-white text-center text-xl font-bold mt-5 py-4 px-8 rounded cursor-pointer flex justify-center items-center",on:{click:t.speichern}},[l("i",{staticClass:"las la-save text-4xl mr-4"}),t._v(" Buch speichern ")])]),l("div",[l("app-openlibrary",{attrs:{isbn:t.api_isbn,searchword:t.api_searchword},on:{emitDataToForm:t.emitDataToForm}})],1)]),l("app-formmodal",{attrs:{showmodal:t.showmodal},on:{hidemodal:t.hidemodal}}),l("div",{staticClass:"absolute top-0 left-0 m-5 text-white lg:m-6 no-underline flex items-center cursor-pointer hover:text-teal-200",on:{click:function(e){return t.$router.go(-1)}}},[l("i",{staticClass:"las la-arrow-circle-left text-3xl lg:text-5xl"}),l("div",{staticClass:"invisible text-2xl lg:visible lg:ml-4"},[t._v("Zurück")])])],1)},nt=[],at=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.showmodal?l("div",{staticClass:"fixed z-50 top-0 left-0 right-0 bottom-0 overflow-auto flex",staticStyle:{"background-color":"#ffffff87"},on:{click:t.hidemodal}},[l("div",{staticClass:"fixed border-2 border-red-400 max-w-md md:relative align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow-2xl flex flex-col"},[l("h2",{staticClass:"text-4xl text-center font-hairline md:leading-loose text-grey mb-4"},[t._v("Hinweis")]),l("p",{staticClass:"text-xl leading-normal mb-8 text-center"},[t._v(" Bitte alle Felder ausfüllen ")]),l("div",{staticClass:"inline-flex justify-center"},[l("button",{staticClass:"bg-blue-500 w-full hover:bg-blue-700 font-bold py-2 px-5 rounded text-white text-xl",on:{click:t.hidemodal}},[t._v(" OK ")])]),l("span",{staticClass:"absolute top-0 right-0 pt-4 px-4",on:{click:t.hidemodal}},[l("svg",{staticClass:"h-8 w-8 text-grey hover:text-grey-darkest",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[l("title",[t._v("Schließen")]),l("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])])]):t._e()])},rt=[],ot={methods:{hidemodal:function(){this.$emit("hidemodal")}},props:{showmodal:{type:Boolean,default:!1}}},ct=ot,ut=Object(u["a"])(ct,at,rt,!1,null,null,null),ht=ut.exports,dt=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"max-w-lg mb-20 overflow-y-scroll lg:px-12",class:{hidden:!t.isbn&&!t.searchword},staticStyle:{height:"calc(100vh - 230px)"}},[l("div",{staticClass:"text-3xl mb-6 mt-6 lg:mt-0"},[t._v(" OpenLibrary ")]),t.isbn?l("div",{staticClass:"text-blue-700"},[t._v(" Informationen für die ISBN"),l("br"),l("b",[t._v(t._s(t.isbn))])]):t._e(),t.searchword?l("div",{staticClass:"text-blue-700"},[t._v(" Informationen für den Suchbegriff"),l("br"),l("b",[t._v(t._s(t.searchword))])]):t._e(),t.waitforapi?l("div",{staticClass:"text-orange-500 mt-3"},[t._v(" Bitte warten... ")]):t._e(),t.rueckgabenanzahl<1&&!t.waitforapi?l("div",{staticClass:"text-red-500 mt-3"},[t._v(" Es wurden leider keine Informationen gefunden. ")]):t._e(),1==t.rueckgabenanzahl?l("div",{staticClass:"text-green-500 mt-3"},[t._v(" Es wurde 1 Egebnis gefunden. ")]):t._e(),t.rueckgabenanzahl>1?l("div",{staticClass:"text-green-500 mt-3"},[t._v(" Es wurden "+t._s(t.rueckgabenanzahl)+" Egebnisse gefunden. ")]):t._e(),t.waitforapi?t._e():l("div",t._l(t.openlibrary,(function(e,s){return l("div",{key:s},[l("div",{staticClass:"flex flex-col break-all lg:flex-row items-center lg:items-start mt-5 p-2 border-green-500 border rounded shadow-lg"},[t.searchword?[l("div",[l("div",{staticClass:"no-underline cursor-pointer bg-green-500 hover:bg-green-700 mb-2 lg:m-2 rounded p-2 text-sm shadow-lg text-white",on:{click:function(l){return t.emitDataToForm(e.title_suggest,!1,e.author_name,e.isbn,!1)}}},[l("i",{staticClass:"las la-check text-xl lg:text-2xl"})])]),l("div",[l("p",{staticClass:"font-medium"},[t._v(t._s(e.title_suggest))]),e.author_name?l("p",{},[t._v(t._s(e.author_name.toString()))]):t._e(),e.isbn?l("p",{},[t._v(t._s(e.isbn.toString()))]):t._e()])]:t._e(),t.isbn?[l("div",[l("div",{staticClass:"no-underline cursor-pointer bg-green-500 hover:bg-green-700 mb-2 lg:m-2 rounded p-2 text-sm shadow-lg text-white",on:{click:function(l){t.emitDataToForm(e.title,e.subtitle,t.autorenliste(e.authors),!1,e.notes)}}},[l("i",{staticClass:"las la-check text-xl lg:text-2xl"})])]),l("div",[l("p",{staticClass:"font-medium"},[t._v(t._s(e.title))]),e.subtitle?l("p",{},[t._v(t._s(e.subtitle))]):t._e(),e.authors?l("p",{},[t._v(t._s(t.autorenliste(e.authors)))]):t._e()])]:t._e()],2)])})),0)])},bt=[],pt=(l("b0c0"),l("b64b"),l("53ca")),xt={data:function(){return{waitforapi:!0,openlibrary:null}},props:{isbn:{type:String,default:null},searchword:{type:String,default:null}},computed:{rueckgabenanzahl:function(){return null!==this.openlibrary&&"object"===Object(pt["a"])(this.openlibrary)?Object.keys(this.openlibrary).length:0}},methods:{autorenliste:function(t){if("object"===Object(pt["a"])(t)&&t.length>0&&"string"===typeof t[0].name)return t[0].name},emitDataToForm:function(t,e,l,s,i){this.$emit("emitDataToForm",t,e,l,s,i)}},watch:{isbn:function(t){var e=this;t&&(this.searchword=null,this.openlibrary=null,this.waitforapi=!0,this.$axios.post("http://localhost/web/buchverwaltung/php/api_isbn/",{action:"api_isbn",isbn:t}).then((function(t){e.waitforapi=!1,e.openlibrary=t.data})).catch((function(t){return console.log(t)})))},searchword:function(t){var e=this;t&&(this.isbn=null,this.openlibrary=null,this.waitforapi=!0,this.$axios.post("http://localhost/web/buchverwaltung/php/api_search/",{action:"api_search",searchword:t}).then((function(t){e.waitforapi=!1,e.openlibrary=t.data.docs})).catch((function(t){return console.log(t)})))}}},ft=xt,mt=Object(u["a"])(ft,dt,bt,!1,null,null,null),gt=mt.exports,vt={data:function(){return{buch:{lent:0,title:null,subtitle:null,author:null,isbn:null,text:null},showmodal:!1,api_isbn:null,api_searchword:null}},components:{"app-formmodal":ht,"app-openlibrary":gt},methods:{hidemodal:function(){this.showmodal=!1},speichern:function(){var t=this;this.buch.title&&this.buch.subtitle&&this.buch.author&&this.buch.isbn&&this.buch.text?this.$axios.post("http://localhost/web/buchverwaltung/php/save/",{id:this.buchnummer,action:"save",title:this.buch.title,subtitle:this.buch.subtitle,author:this.buch.author,isbn:this.buch.isbn,text:this.buch.text,lent:this.buch.lent}).then((function(e){t.$router.push({path:"/buch/"+e.data})})).catch((function(t){return console.log(t)})):this.showmodal=!0},emitDataToForm:function(t,e,l,s,i){console.log(t+" | "+e+" | "+l+" | "+s+" | "+i),t&&(this.buch.title=t),e&&(this.buch.subtitle=e),l&&(this.buch.author=l.toString()),s&&(this.buch.isbn=s.toString()),i&&(this.buch.text=i)}},computed:{buchnummer:function(){return!this.$route.params.buchnummer>0?0:this.$route.params.buchnummer}},mounted:function(){var t=this;this.buchnummer>0&&this.$axios.get("http://localhost/web/buchverwaltung/php/books/"+this.buchnummer,{}).then((function(e){t.buch=e.data})).catch((function(t){return console.log(t)}))}},wt=vt,_t=Object(u["a"])(wt,it,nt,!1,null,null,null),Ct=_t.exports,yt=[{path:"/",component:Z},{path:"/buch",component:Z},{path:"/buch/:buchnummer",component:st},{path:"/edit",component:Z},{path:"/edit/:buchnummer",component:Ct},{path:"/add",component:Ct}];s["a"].prototype.$axios=g.a,s["a"].use(_["a"]);var kt=new _["a"]({routes:yt});s["a"].config.productionTip=!1,new s["a"]({store:w,render:function(t){return t(f)},router:kt}).$mount("#app")},a7df:function(t,e,l){t.exports=l.p+"img/buch-lent.png"},b54e:function(t,e,l){t.exports=l.p+"img/buch.png"},c898:function(t,e,l){}});
//# sourceMappingURL=app.js.map