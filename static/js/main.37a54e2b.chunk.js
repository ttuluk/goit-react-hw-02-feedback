(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,a){t.exports={btn:"Feedback_btn__2mRda"}},17:function(t,e,a){},2:function(t,e,a){t.exports={statistic:"Statistics_statistic__1g8jx",statistic_list:"Statistics_statistic_list__Yg2Ot",statistic_title:"Statistics_statistic_title__2jxmp",statistic_item:"Statistics_statistic_item__3vW90"}},28:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(6),i=a.n(s),r=(a(17),a(4)),o=a(7),l=a(8),j=a(12),b=a(11),u=a(0),d=function(t){var e=t.value;return Object(u.jsx)("span",{className:"Counter__Value",children:e})},h=a(2),O=a.n(h),x=function(t){var e=t.options,a=t.onCountFeedback;return Object(u.jsxs)("div",{className:O.a.statistic,children:[Object(u.jsx)("h2",{className:O.a.statistic_title,children:"Statistics"}),Object(u.jsx)("ul",{className:O.a.statistic_list,children:e.map((function(t,e){return Object(u.jsxs)("li",{className:O.a.statistic_item,children:[t,": ",Object(u.jsx)(d,{value:a[t]})]},e)}))})]})},_=a(9),p=a.n(_),f=a(10),v=a.n(f),m=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:e.map((function(t){return Object(u.jsx)("button",{id:p.a.generate(),className:v.a.btn,type:"button",onClick:a,children:t},t)}))})},g=function(t){var e=t.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e})})})},k=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0,total:0,persantage:0},t.handleClick=function(e){var a,c=e.target.textContent,n=t.state,s=n.good,i=n.total;t.setState((a={},Object(r.a)(a,c,t.state[c]+1),Object(r.a)(a,"total",t.countTotalFeedback(i)),Object(r.a)(a,"persantage",t.countPositiveFeedbackPercentage(s,i)),a))},t.countTotalFeedback=function(t){return t+1},t.countPositiveFeedbackPercentage=function(t,e){return e>0?Math.round(t/e*100):0},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{options:["good","neutral","bad"],onLeaveFeedback:this.handleClick}),this.state.total>0?Object(u.jsx)(x,{options:Object.keys(this.state),onCountFeedback:this.state}):Object(u.jsx)(g,{message:"No feedback given"})]})}}]),a}(n.a.Component),F=function(t){var e=t.title;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:e}),Object(u.jsx)(k,{})]})};var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(F,{title:"Please leave feedback"})})};a(27);i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.37a54e2b.chunk.js.map