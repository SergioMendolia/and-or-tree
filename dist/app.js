window["AOT"]=function(t){function i(i){for(var e,s,l=i[0],a=i[1],u=i[2],d=0,p=[];d<l.length;d++)s=l[d],n[s]&&p.push(n[s][0]),n[s]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);c&&c(i);while(p.length)p.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,i=0;i<r.length;i++){for(var o=r[i],e=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(e=!1)}e&&(r.splice(i--,1),t=s(s.s=o[0]))}return t}var e={},n={app:0},r=[];function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,i,o){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)s.d(o,e,function(i){return t[i]}.bind(null,e));return o},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var l=window["webpackJsonpAOT"]=window["webpackJsonpAOT"]||[],a=l.push.bind(l);l.push=i,l=l.slice();for(var u=0;u<l.length;u++)i(l[u]);var c=a;return r.push([0,"chunk-vendors"]),o()}({0:function(t,i,o){t.exports=o("56d7")},1242:function(t,i,o){},"56d7":function(t,i,o){"use strict";o.r(i);var e=o("cebc"),n=(o("cadf"),o("551c"),o("f751"),o("097d"),o("2b0e")),r=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"app"}},[o("AOTGroup",{attrs:{group:t.$root.$data.root,removable:!1},on:{"update:group":function(i){return t.$set(t.$root.$data,"root",i)}}})],1)},s=[],l=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{class:t.getGroupClasses()},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-1"},[o("div",{staticClass:"toolbar toolbar--vertical"},[o("div",{staticClass:"toolbar__item item--show",on:{click:function(i){return t.toggleActions()}}},[o("i",{staticClass:"icon icon-053-more",attrs:{"aria-hidden":"true"}})])]),t.actionsDisplayed?o("div",{staticClass:"drop",on:{mouseleave:function(i){return t.hideActions()}}},[o("div",{staticClass:"toolbar toolbar--vertical"},[t.hasGroups()?t._e():o("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.addCondition()}}},[o("i",{staticClass:"icon icon-075-save-2",attrs:{"aria-hidden":"true"}})]),t.hasGroups()||t.hasConditions()?o("div",{staticClass:"toolbar__item item--show tooltip",attrs:{"aria-label":"Switch operator"},on:{click:function(i){return t.toggleType()}}},[o("span",{staticClass:"text-uppercase"},[t._v(t._s(t.group.type))])]):t._e(),t.removable?o("div",{staticClass:"toolbar__item item--show tooltip",attrs:{"aria-label":"Remove"},on:{click:function(i){return t.$emit("remove")}}},[o("i",{staticClass:"icon icon-202-clear-circle",attrs:{"aria-hidden":"true"}})]):t._e()])]):t._e()]),o("div",{staticClass:"col-md-11"},[t.hasGroups()?o("ul",[t._l(t.getGroups(),function(i,e){return[o("li",{key:e,class:"element element__"+t.group.type},[o("AOTGroup",{attrs:{group:i},on:{"update:group":function(t){i=t},remove:function(i){return t.removeGroup(e)}}})],1)]})],2):t._e(),o("ul",t._l(t.getConditions(),function(i,e){return o("li",{key:e,class:"element element__"+t.group.type},[o("AOTCondition",{attrs:{condition:i},on:{"update:condition":function(t){i=t},remove:function(i){return t.removeCondition(e)},addand:function(i){return t.addToGroup(e,"and")},addor:function(i){return t.addToGroup(e,"or")}}})],1)}),0),t.hasGroups()?t._e():o("div",{staticClass:"add-condition",on:{click:function(i){return t.addCondition()}}},[t._v("\n        +\n      ")])])])])},a=[],u=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"condition row",on:{mouseover:function(i){t.hover=!0},mouseleave:function(i){t.hover=!1}}},[o("label",{staticClass:"col-md-3"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.condition.field,expression:"condition.field"}],on:{change:[function(i){var o=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.$set(t.condition,"field",i.target.multiple?o:o[0])},function(i){return t.resetCondition()}]}},[o("option",{domProps:{value:null}},[t._v("-")]),t._l(t.getFields,function(i){return o("option",{key:i,domProps:{value:i}},[t._v(t._s(t.getFieldLabel(i)))])})],2)]),o("label",{staticClass:"col-md-3"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.condition.filter,expression:"condition.filter"}],attrs:{disabled:null===t.condition.field},on:{change:function(i){var o=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.$set(t.condition,"filter",i.target.multiple?o:o[0])}}},[o("option",{domProps:{value:null}},[t._v("-")]),t._l(t.getFieldFilters(t.condition.field),function(i){return o("option",{key:i,domProps:{value:i}},[t._v(t._s(i))])})],2)]),o("label",{staticClass:"input-field col-md-3",attrs:{"data-init":"auto"}},["select"!==t.getFieldType(t.condition.field)?o("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.value,expression:"condition.value"}],attrs:{type:"text",disabled:null===t.condition.filter},domProps:{value:t.condition.value},on:{input:function(i){i.target.composing||t.$set(t.condition,"value",i.target.value)}}}):o("Multiselect",{attrs:{multiple:t.isMultiple(t.condition.field),label:"name","track-by":"id",disabled:null===t.condition.filter,options:t.getFieldValues(t.condition.field)},model:{value:t.condition.value,callback:function(i){t.$set(t.condition,"value",i)},expression:"condition.value"}})],1),t.hover?o("div",{staticClass:"toolbar"},[o("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("remove")}}},[t._v("\n      DELETE\n    ")]),o("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("addor")}}},[t._v("\n      +OR\n    ")]),o("div",{staticClass:"toolbar__item item--show tooltip",on:{click:function(i){return t.$emit("addand")}}},[t._v("\n      +AND\n    ")])]):t._e()])},c=[],d=(o("456d"),o("ac6a"),o("8e5f")),p=o.n(d),f={name:"AOTCondition",components:{Multiselect:p.a},data:function(){return{hover:!1}},props:{condition:{type:Object}},methods:{getFieldFilters:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].filters:[]},getFieldLabel:function(t){return void 0!==this.getFieldDefinitions[t].label?this.getFieldDefinitions[t].label:t},getFieldValues:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].values:[]},getFieldType:function(t){return void 0!==this.getFieldDefinitions[t]?this.getFieldDefinitions[t].type:"text"},isMultiple:function(t){return void 0!==this.getFieldDefinitions[t]&&this.getFieldDefinitions[t].multiple},resetCondition:function(){this.condition.filter=null,this.condition.value=null}},computed:{getFieldDefinitions:function(){return this.$root.$data.fieldDefinitions},getFields:function(){return Object.keys(this.$root.$data.fieldDefinitions)}}},h=f,v=(o("60bc"),o("e7c1"),o("2877")),g=Object(v["a"])(h,u,c,!1,null,null,null),m=g.exports,y=o("2ef0"),_=o.n(y),b={name:"AOTGroup",components:{AOTCondition:m},props:{group:{type:Object,required:!0},removable:{type:Boolean,default:!0}},data:function(){return{emptyCondition:{field:null,filter:null,value:null},actionsDisplayed:!1}},methods:{getGroupClasses:function(){var t="group ";return t+="group__".concat(this.group.type," "),t},addCondition:function(){if(this.group.hasOwnProperty("conditions")&&0!==this.group.conditions.length){var t=this.group.conditions;t.push(_.a.clone(this.emptyCondition)),n["a"].set(this.group,"conditions",t)}else n["a"].set(this.group,"conditions",[_.a.clone(this.emptyCondition)]);this.hideActions()},addGroup:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===i&&(i=[_.a.clone(this.emptyCondition)]),this.group.hasOwnProperty("conditions")&&this.group.conditions.length>0&&(i=this.group.conditions),this.group.hasOwnProperty("groups")&&0!==this.group.groups.length){var o=this.group.groups;o.push({type:t,conditions:i}),n["a"].set(this.group,"groups",o)}else n["a"].set(this.group,"groups",[{type:t,conditions:i}]);n["a"].set(this.group,"conditions",[]),this.hideActions()},removeGroup:function(t){this.group.groups.length<=1?(n["a"].set(this.group,"groups",[]),this.addCondition()):n["a"].delete(this.group.groups,t)},removeCondition:function(t){this.group.conditions.length<=1?(this.$emit("remove"),this.removable||(n["a"].delete(this.group.conditions,t),this.addCondition())):n["a"].delete(this.group.conditions,t)},addToGroup:function(t,i){var o=_.a.clone(this.group.conditions[t]);n["a"].delete(this.group.conditions,t);var e=_.a.clone(this.group.conditions);n["a"].set(this.group,"conditions",[]),this.addGroup(i,[o,_.a.clone(this.emptyCondition)]),e.length>0&&this.addGroup(this.group.type,e)},hasGroups:function(){return this.group.hasOwnProperty("groups")&&this.group.groups.length>0},getGroups:function(){return this.hasGroups()?this.group.groups:{}},hasConditions:function(){return this.group.hasOwnProperty("conditions")},getConditions:function(){return this.hasConditions()?this.group.conditions:{}},toggleActions:function(){this.actionsDisplayed=!this.actionsDisplayed},toggleType:function(){"or"===this.group.type?this.group.type="and":this.group.type="or",this.hideActions()},hideActions:function(){this.actionsDisplayed=!1}}},C=b,w=(o("e97f"),Object(v["a"])(C,l,a,!1,null,null,null)),O=w.exports,F={name:"app",components:{AOTGroup:O}},T=F,A=Object(v["a"])(T,r,s,!1,null,null,null),G=A.exports;n["a"].config.productionTip=!1,window.AOT=new n["a"]({render:function(t){return t(G)},data:Object(e["a"])({},window.AOTData)}).$mount("#app")},6744:function(t,i,o){},e7c1:function(t,i,o){"use strict";var e=o("1242"),n=o.n(e);n.a},e97f:function(t,i,o){"use strict";var e=o("6744"),n=o.n(e);n.a}})["default"];
//# sourceMappingURL=app.js.map