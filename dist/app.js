window["AOT"]=function(t){function i(i){for(var o,s,l=i[0],a=i[1],u=i[2],d=0,p=[];d<l.length;d++)s=l[d],n[s]&&p.push(n[s][0]),n[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);c&&c(i);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],o=!0,l=1;l<e.length;l++){var a=e[l];0!==n[a]&&(o=!1)}o&&(r.splice(i--,1),t=s(s.s=e[0]))}return t}var o={},n={app:0},r=[];function s(i){if(o[i])return o[i].exports;var e=o[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)s.d(e,o,function(i){return t[i]}.bind(null,o));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var l=window["webpackJsonpAOT"]=window["webpackJsonpAOT"]||[],a=l.push.bind(l);l.push=i,l=l.slice();for(var u=0;u<l.length;u++)i(l[u]);var c=a;return r.push([0,"chunk-vendors"]),e()}({0:function(t,i,e){t.exports=e("56d7")},1242:function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);var o=e("cebc"),n=(e("cadf"),e("551c"),e("f751"),e("097d"),e("2b0e")),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("AOTGroup",{attrs:{group:t.$root.$data.root,removable:!1},on:{"update:group":function(i){return t.$set(t.$root.$data,"root",i)}}})],1)},s=[],l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.getGroupClasses()},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-1"},[t.getConditions().length>1||t.hasGroups()?e("div",{staticClass:"toolbar toolbar--vertical"},[e("div",{staticClass:"toolbar__item item--show",on:{click:function(i){return t.toggleActions()}}},[e("i",{staticClass:"icon icon-053-more",attrs:{"aria-hidden":"true"}})])]):t._e(),t.actionsDisplayed?e("div",{staticClass:"drop",on:{mouseleave:function(i){return t.hideActions()}}},[e("div",{staticClass:"toolbar toolbar--vertical"},[t.hasGroups()?t._e():e("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.addCondition()}}},[e("i",{staticClass:"icon icon-075-save-2",attrs:{"aria-hidden":"true"}})]),t.hasGroups()||t.hasConditions()?e("div",{staticClass:"toolbar__item item--show tooltip",attrs:{"aria-label":"Switch operator"},on:{click:function(i){return t.toggleType()}}},[e("span",{staticClass:"text-uppercase"},[t._v(t._s(t.group.type))])]):t._e(),t.removable?e("div",{staticClass:"toolbar__item item--show tooltip",attrs:{"aria-label":"Remove"},on:{click:function(i){return t.$emit("remove")}}},[e("i",{staticClass:"icon icon-202-clear-circle",attrs:{"aria-hidden":"true"}})]):t._e()])]):t._e()]),e("div",{staticClass:"col-md-11"},[t.hasGroups()?e("ul",[t._l(t.getGroups(),function(i,o){return[e("li",{key:o,class:"element element__"+t.group.type},[e("AOTGroup",{attrs:{group:i},on:{"update:group":function(t){i=t},remove:function(i){return t.removeGroup(o)},empty:function(e){return t.empty(i)}}})],1)]})],2):t._e(),e("ul",t._l(t.getConditions(),function(i,o){return e("li",{key:o,class:"element element__"+t.group.type},[e("AOTCondition",{attrs:{condition:i},on:{"update:condition":function(t){i=t},remove:function(i){return t.removeCondition(o)},addand:function(i){return t.addToGroup(o,"and")},addor:function(i){return t.addToGroup(o,"or")}}})],1)}),0),t.hasGroups()?t._e():e("div",{staticClass:"add-condition",on:{click:function(i){return t.addCondition()}}},[t._v("\n        +\n      ")])])])])},a=[],u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"condition row",on:{mouseover:function(i){t.hover=!0},mouseleave:function(i){t.hover=!1}}},[e("label",{staticClass:"col-md-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.condition.field,expression:"condition.field"}],on:{change:[function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.$set(t.condition,"field",i.target.multiple?e:e[0])},function(i){return t.resetCondition()}]}},[e("option",{domProps:{value:null}},[t._v("-")]),t._l(t.getFields,function(i){return e("option",{key:i,domProps:{value:i}},[t._v(t._s(t.getFieldLabel(i)))])})],2)]),e("label",{staticClass:"col-md-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.condition.filter,expression:"condition.filter"}],attrs:{disabled:null===t.condition.field},on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.$set(t.condition,"filter",i.target.multiple?e:e[0])}}},[e("option",{domProps:{value:null}},[t._v("-")]),t._l(t.getFieldFilters(t.condition.field),function(i){return e("option",{key:i,domProps:{value:i}},[t._v(t._s(i))])})],2)]),e("label",{staticClass:"input-field col-md-3",attrs:{"data-init":"auto"}},["select"===t.getFieldType(t.condition.field)?e("Multiselect",{attrs:{multiple:t.isMultiple(t.condition.field),label:"name","track-by":"id",disabled:null===t.condition.filter,options:t.getFieldValues(t.condition.field)},model:{value:t.condition.value,callback:function(i){t.$set(t.condition,"value",i)},expression:"condition.value"}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.value,expression:"condition.value"}],attrs:{type:"text",disabled:null===t.condition.filter},domProps:{value:t.condition.value},on:{input:function(i){i.target.composing||t.$set(t.condition,"value",i.target.value)}}})],1),t.hover?e("div",{staticClass:"toolbar"},[e("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("remove")}}},[t._v("\n      DELETE\n    ")]),e("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("addor")}}},[t._v("\n      +OR\n    ")]),e("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("addand")}}},[t._v("\n      +AND\n    ")])]):t._e()])},c=[],d=(e("456d"),e("ac6a"),e("8e5f")),p=e.n(d),f={name:"AOTCondition",components:{Multiselect:p.a},data:function(){return{hover:!1}},props:{condition:{type:Object}},methods:{getFieldFilters:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].filters:[]},getFieldLabel:function(t){return void 0!==this.getFieldDefinitions[t].label?this.getFieldDefinitions[t].label:t},getFieldValues:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].values:[]},getFieldType:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].type:"text"},isMultiple:function(t){return void 0!==this.getFieldDefinitions[t]&&this.getFieldDefinitions[t].multiple},resetCondition:function(){this.condition.filter=null,this.condition.value=null}},computed:{getFieldDefinitions:function(){return this.$root.$data.fieldDefinitions},getFields:function(){return Object.keys(this.$root.$data.fieldDefinitions)}}},h=f,v=(e("60bc"),e("e7c1"),e("2877")),g=Object(v["a"])(h,u,c,!1,null,null,null),m=g.exports,y=e("2ef0"),_=e.n(y),b={name:"AOTGroup",components:{AOTCondition:m},props:{group:{type:Object,required:!0},removable:{type:Boolean,default:!0}},data:function(){return{emptyCondition:{field:null,filter:null,value:null},actionsDisplayed:!1}},methods:{getGroupClasses:function(){var t="group ";return t+="group__".concat(this.group.type," "),t},addCondition:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t&&(t=_.a.clone(this.emptyCondition)),this.group.hasOwnProperty("conditions")&&0!==this.group.conditions.length){var i=this.group.conditions;i.push(_.a.clone(this.emptyCondition)),this.group.conditions=i}else n["a"].set(this.group,"conditions",[t]);this.hideActions()},addGroup:function(t,i){if(this.hasGroups()){var e=this.getGroups();e.push({type:t,conditions:i}),n["a"].set(this.group,"groups",e)}else{var o=[{type:t,conditions:i},{type:this.group.type,conditions:this.getConditions()}];n["a"].set(this.group,"groups",o),n["a"].delete(this.group,"conditions")}this.hideActions()},removeGroup:function(t){this.group.groups.length<=1?(n["a"].set(this.group,"groups",[]),this.addCondition()):n["a"].delete(this.group.groups,t),this.getGroups().length<=1&&!this.hasConditions()&&this.$emit("empty")},empty:function(t){var i=t.conditions;if(void 0!==i)for(var e=0;e<i.length;e++)this.addCondition(i[e]);this.removeGroup(t)},removeCondition:function(t){this.group.conditions.length<=1?(this.$emit("remove"),this.removable||(n["a"].delete(this.group.conditions,t),this.addCondition())):n["a"].delete(this.group.conditions,t),this.getGroups().length<=1&&this.$emit("empty")},addToGroup:function(t,i){if(1===this.getConditions().length)this.group.type=i,this.addCondition();else{var e=_.a.clone(this.group.conditions),o=e.splice(t,1);o=o[0],n["a"].set(this.group,"conditions",e),this.addGroup(i,[o,_.a.clone(this.emptyCondition)])}},hasGroups:function(){return this.group.hasOwnProperty("groups")&&this.group.groups.length>0},getGroups:function(){return this.hasGroups()?this.group.groups:[]},hasConditions:function(){return this.group.hasOwnProperty("conditions")&&this.group.conditions.length>0},getConditions:function(){return this.hasConditions()?this.group.conditions:[]},toggleActions:function(){this.actionsDisplayed=!this.actionsDisplayed},toggleType:function(){"or"===this.group.type?this.group.type="and":this.group.type="or",this.hideActions()},hideActions:function(){this.actionsDisplayed=!1}}},C=b,w=(e("e97f"),Object(v["a"])(C,l,a,!1,null,null,null)),O=w.exports,G={name:"app",components:{AOTGroup:O}},$=G,F=Object(v["a"])($,r,s,!1,null,null,null),T=F.exports;n["a"].config.productionTip=!1,window.AOT=new n["a"]({render:function(t){return t(T)},data:Object(o["a"])({},window.AOTData)}).$mount("#app")},6744:function(t,i,e){},e7c1:function(t,i,e){"use strict";var o=e("1242"),n=e.n(o);n.a},e97f:function(t,i,e){"use strict";var o=e("6744"),n=e.n(o);n.a}})["default"];
//# sourceMappingURL=app.js.map