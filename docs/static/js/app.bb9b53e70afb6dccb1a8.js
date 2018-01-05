webpackJsonp([1],{"7yjv":function(t,e,s){t.exports=s.p+"static/img/mosquito.29a2e3c.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("MICi"),r=s.n(i),n=s("+cKO"),o={name:"app",data:function(){return{attendees:10,hours:10,salary:1e5,salaryDisplay:null,bednetImages:null,isInputActive:!1}},computed:{displayValue:{get:function(){return this.isInputActive&&null!=this.salary?this.salary.toString():null==this.salary?"":"$ "+this.salary.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")},set:function(t){var e=parseFloat(t.replace(/[^\d.]/g,""));isNaN(e)&&(e=0),this.salary=e}},bednets:function(){return(this.attendees*this.hours*(this.salary/2087)/2.5).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},bednetsMoney:function(){var t=this.attendees*this.hours*(this.salary/2087);return t.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},bednetImagesTotal:function(){return Math.floor(this.attendees*this.hours*(this.salary/2087)/2.5)},bednetImagesLarge:function(){return Math.floor(this.bednetImagesTotal/1e3)},bednetImagesMedium:function(){return Math.floor(this.bednetImagesTotal%1e3/100)},bednetImagesSmall:function(){return Math.floor(this.bednetImagesTotal%100)},socialMessage:function(){return"We could have bought "+this.bednets.toString()+" anti-malaria bednets instead of having this meeting."}},validations:{attendees:{between:Object(n.between)(0,100)},hours:{between:Object(n.between)(0,99)},salary:{between:Object(n.between)(0,9999999)}},methods:{handleAttendees:function(t){var e=Number(t.target.value);e>99?this.attendees=99:(e<0||r()(e))&&(this.attendees=0)},handleHours:function(t){var e=Number(t.target.value);e>99?this.hours=99:(e<0||r()(e))&&(this.hours=0)}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"hero is-primary"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"container has-text-left",attrs:{id:"inputs"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"}),t._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":t.$v.attendees.$error}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.attendees,expression:"attendees",modifiers:{trim:!0}}],staticClass:"input is-medium form__input",attrs:{type:"number",placeholder:"# meeting attendees"},domProps:{value:t.attendees},on:{input:[function(e){e.target.composing||(t.attendees=e.target.value.trim())},t.handleAttendees],blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("p",{staticClass:"form-group__message"},[t._v("Enter the number of attendees")]),t._v(" "),t.$v.attendees.between?t._e():s("p",{staticClass:"form-group__message"},[t._v("Must be no more than "+t._s(t.$v.attendees.$params.between.max))])]),t._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":t.$v.hours.$error}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.hours,expression:"hours",modifiers:{trim:!0}}],staticClass:"input is-medium form__input",attrs:{type:"number",placeholder:"duration"},domProps:{value:t.hours},on:{input:[function(e){e.target.composing||(t.hours=e.target.value.trim())},t.handleHours],blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"form-group__message"},[t._v("Enter the number of hours of the meeting/event")])]),t._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":t.$v.salary.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.displayValue,expression:"displayValue"}],staticClass:"input is-medium form__input",attrs:{placeholder:"salary"},domProps:{value:t.displayValue},on:{blur:function(e){t.isInputActive=!1},focus:function(e){t.isInputActive=!0},input:function(e){e.target.composing||(t.displayValue=e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-group__message"},[t._v("Enter the estimated average yearly salary of the attendees")])]),t._v(" "),s("div",{staticClass:"column is-1"})])]),t._v(" "),s("hr")]),t._v(" "),s("div",{staticClass:"column is-8 is-offset-2"},[s("transition-group",{attrs:{name:"slide-fade"}},[t._l(t.bednetImagesLarge,function(e){return t.bednetImagesTotal>0?s("div",{key:e+"large",staticClass:"bednet large"},[s("span",{staticClass:"centered title is-size-1"},[t._v("1,000")])]):t._e()}),t._v(" "),t._l(t.bednetImagesMedium,function(e){return t.bednetImagesTotal>0?s("div",{key:e+"medium",staticClass:"bednet medium"},[s("span",{staticClass:"centered title is-size-3"},[t._v("100")])]):t._e()}),t._v(" "),t._l(t.bednetImagesSmall,function(e){return t.bednetImagesTotal>0?s("div",{key:e+"small",staticClass:"bednet small"}):t._e()})],2)],1)]),t._v(" "),s("div",{attrs:{id:"band"}},[s("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[s("h1",{staticClass:"subtitle is-size-4 has-text-white"},[s("strong",{staticClass:"has-text-white"},[t._v(" The Formula: ")]),t._v(t._s(t.attendees)+" attendees · "+t._s(t.hours)+" hours · ( "+t._s(t.displayValue)+" yearly salary / 2,087 billable hours"),s("sup",[t._v("1")]),t._v(") = $"+t._s(t.bednetsMoney)+"(USD) = "+t._s(t.bednets)+" Bednets"),s("sup",[t._v("2")])])])]),t._v(" "),s("div",{staticClass:"hero-foot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"column is-6 is-offset-3 has-text-centered"},[s("h1",{staticClass:"subtitle is-size-3",attrs:{id:"subheading"}},[t._v("Share on social media with how many bednets you could have bought!")]),t._v(" "),s("social-sharing",{attrs:{url:"https://gabrielkrieshok.github.io/mosquitoes-vs-meetings/",title:t.socialMessage,description:t.socialMessage,quote:t.socialMessage,hashtags:"#malaria #meetings #bednets","twitter-user":"gabrielkrieshok"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("ul",[e("li",[e("network",{attrs:{network:"email",id:"email"}},[e("i",{staticClass:"fa fa-fw fa-envelope  fa-2x"})])],1),this._v(" "),e("li",[e("network",{attrs:{network:"facebook",id:"facebook"}},[e("i",{staticClass:"fa fa-fw fa-facebook  fa-2x"})])],1),this._v(" "),e("li",[e("network",{attrs:{network:"twitter",id:"twitter"}},[e("i",{staticClass:"fa fa-fw fa-twitter fa-2x"})])],1)])])},staticRenderFns:[]}})],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[e("img",{attrs:{src:s("7yjv"),width:"150"}}),this._v(" "),e("h1",{staticClass:"title is-size-1 is-spaced",attrs:{id:"heading"}},[this._v("Mosquitoes vs. Meetings")]),this._v(" "),e("h1",{staticClass:"subtitle is-size-4",attrs:{id:"subheading"}},[this._v("How many bednets could be bought in lieu of the resources required for your meeting?")]),this._v(" "),e("h1",{staticClass:"subtitle is-size-6",attrs:{id:"subheading"}},[e("em",[this._v("Creator's Note: I created this simple web app after sitting in one too many meetings that really should have been just been an email in the first place. Just a way to remind us that our time and resources should always be used efficiently and effectively. ☺ ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"band"}},[e("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[e("h1",{staticClass:"subtitle is-size-4 has-text-white"},[this._v("Every two minutes, a child dies from malaria - a deadly, yet preventable disease.")]),this._v(" "),e("h1",{staticClass:"subtitle is-size-4 has-text-white"},[this._v("One great way to help is to support the "),e("a",{staticClass:"has-text-white",attrs:{href:"https://nothingbutnets.net/"}},[this._v("UN's 'Nothing But Nets' Campaign.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("p",[s("strong",[t._v("1) ")]),s("a",{attrs:{href:"https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/computing-hourly-rates-of-pay-using-the-2087-hour-divisor/"}},[t._v("According to OPM")]),t._v(", 2,087 as the average number of work hours in a calendar year reasonably accommodates the year-to-year fluctuations in work hours, thus salary/2,087 for hourly salary.")]),t._v(" "),s("p",[s("strong",[t._v("2) ")]),t._v("There is a lot of variability in bednet costs -- accounting for manufacturing, pre-treated, and shipping costs, a "),s("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3348006/"}},[t._v("generally recognized figure of $2.50 per bednet")]),t._v(" is used.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"column is-10 is-offset-1 has-text-centered"},[e("h1",{staticClass:"title is-size-6"},[this._v("Made with ♥ by "),e("a",{attrs:{href:"https://gabrielkrieshok.com"}},[this._v("Gabriel Krieshok")]),this._v(" as a way to learn "),e("a",{attrs:{href:"https://vuejs.org"}},[this._v("Vue.js")]),this._v(", hosted on "),e("a",{attrs:{href:"https://github.com/gabrielkrieshok/mosquitos-vs-meetings"}},[this._v("Github")]),this._v(".")])])])}]},u=s("VU/8")(o,l,!1,function(t){s("fHsu")},null,null).exports,d=s("MMSg"),c=s.n(d),h=s("ESwS"),m=s.n(h),v=s("VK1f"),f=s.n(v);a.default.config.productionTip=!1,a.default.use(f.a),a.default.use(m.a),a.default.use(c.a,{defaultIconPack:"fa"}),new a.default({el:"#app",template:"<App/>",components:{App:u}})},fHsu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bb9b53e70afb6dccb1a8.js.map