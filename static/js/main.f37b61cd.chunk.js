(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),l=a.n(c),i=a(2),o=a(3),r=a(5),m=a(4),u=a(6),p=a(49),h=a(51),E=a(50),b=a(48),d=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Home"},s.a.createElement("i",{className:"title-icon title-icon-lg"}),s.a.createElement(b.a,{to:"classroom"},s.a.createElement("button",{className:"button-1 button-lg"},"\u836f\u65b9\u5b66\u5802")),s.a.createElement(b.a,{to:"pharmacy"},s.a.createElement("button",{className:"button-1 button-lg"},"\u60ac\u58f6\u6d4e\u4e16")),s.a.createElement(b.a,{to:"ranking"},s.a.createElement("button",{className:"button-1 button-lg"},"\u7b49\u7ea7\u6392\u884c")))}}]),t}(n.Component)),y=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.progress+"%";return s.a.createElement("div",{className:"Progress"},s.a.createElement("div",{className:"Progress-content",style:{width:e}}))}}]),t}(n.Component)),v=(a(14),a(30),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={progress:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){var a=e.state.progress+20;e.setState({progress:a}),120===a&&(clearInterval(t),window.location.hash="home")},500)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Loading"},s.a.createElement("i",{className:"title-icon title-icon-lg"}),s.a.createElement("span",{className:"Loading-title animated infinite jello"},"Loding..."),s.a.createElement(y,{progress:this.state.progress}))}}]),t}(n.Component)),g=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).submit=function(){window.location.hash="loading"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(window.__PAGE_DATA__.IMAGES){var e=!0,t=!1,a=void 0;try{for(var n,s=window.__PAGE_DATA__.IMAGES[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var c=n.value;(new Image).src=c}}catch(l){t=!0,a=l}finally{try{e||null==s.return||s.return()}finally{if(t)throw a}}}}},{key:"render",value:function(){return s.a.createElement("div",{className:"Login"},s.a.createElement("i",{className:"title-icon title-icon-lg"}),s.a.createElement("div",{className:"input-line"},s.a.createElement("label",{htmlFor:"userId"},"\u8d26\u53f7\uff1a"),s.a.createElement("input",{id:"userId",type:"",placeholder:"\u7528\u6237\u540d/\u90ae\u7bb1"})),s.a.createElement("div",{className:"input-line"},s.a.createElement("label",{htmlFor:"password"},"\u5bc6\u7801\uff1a"),s.a.createElement("input",{id:"password",type:"password",placeholder:"\u5bc6\u7801"})),s.a.createElement("button",{className:"button-1 button-md",onClick:this.submit},"\u786e\u8ba4"))}}]),t}(n.Component)),k=(a(34),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).toStudy=function(){a.setState({type:1}),a.beginTimer()},a.back=function(){0===a.state.type?a.props.history.goBack():a.setState({type:0})},a.switchCourse=function(e){if(e.target.id){var t=a.state.courseList;a.setState({course:t[e.target.id],isTick:!1})}},a.beginTimer=function(){if(a.setState({course:a.state.courseList[0],isTick:!0}),a.state.timeCount>0)var e=setInterval(function(){var t=a.state,n=t.timeCount,s=t.type;n<0||!a.state.isTick||0===s?clearInterval(e):a.setState({timeCount:n-1})},1e3)},a.onHideMax=function(){a.setState({isMax:!1})},a.onShowMax=function(){a.setState({isMax:!0})},a.onclassOver=function(){a.state.timeCount<0&&a.props.history.push({pathname:"/success",state:{score:window.__PAGE_DATA__.CLASS_SCORE||5}})},a.state={isMax:!1,type:0,beginStudy:!1,timeCount:30,courseList:["static/images/courses/0.jpg","static/images/courses/1.jpg","static/images/courses/2.jpg","static/images/courses/3.jpg","static/images/courses/4.jpg"],course:"static/images/courses/0.jpg",isTick:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.courseList.slice(1);return s.a.createElement("div",{className:"ClassRoom"},s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("i",{className:"back-icon",onClick:this.back}),s.a.createElement("div",null,s.a.createElement("i",{className:"title-icon title-icon-sm"}),s.a.createElement("i",{className:"title-s-icon",style:{marginBottom:"-20px"}}))),0===this.state.type?[s.a.createElement("div",{className:"text-wrap-1",key:"0"},s.a.createElement("ul",{className:"text-list"},s.a.createElement("li",null,"\u70b9\u51fb\u201c\u4e0a\u8bfe\u201d\u8fdb\u884c\u76f8\u5173\u4ea7\u54c1\u77e5\u8bc6\u5b66\u4e60"),s.a.createElement("li",null,"\u5b8c\u6bd5\u5b66\u4e60\u5b8c\u6bd5\u70b9\u51fb\u201c\u4e0b\u8bfe\u201d\u83b7\u5f97\u5b66\u4e60\u79ef\u5206"),s.a.createElement("li",null,"\u4ea6\u53ef\u70b9\u51fb\u4ee5\u5f80\u5185\u5bb9\u8fdb\u884c\u518d\u5b66\u4e60\u54e6\uff01"))),s.a.createElement("button",{className:"button-2 button-md",onClick:this.toStudy,key:"1"},"\u4e0a\u8bfe")]:1===this.state.type?[s.a.createElement("div",{className:"course",key:"0"},s.a.createElement("img",{src:this.state.course,alt:"course",className:"course-content"}),s.a.createElement("div",{className:"course-content-mask",onClick:this.onShowMax})),s.a.createElement("ul",{className:"course-history",onClick:this.switchCourse,key:"1"},e.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("img",{src:e,alt:"course"}),s.a.createElement("div",{id:t+1,className:"course-mask"}))},this)),this.state.isTick?s.a.createElement("button",{onClick:this.onclassOver,className:this.state.timeCount<0?"button-2 button-md":"button-3 button-md",key:"2"},"\u4e0b\u8bfe",this.state.timeCount>=0?s.a.createElement("span",{className:"time-count"},this.state.timeCount):null):s.a.createElement("button",{className:"button-2 button-md",onClick:this.beginTimer,key:"2"},"\u8fd4\u56de",this.state.timeCount>=0?s.a.createElement("span",{className:"time-count"},this.state.timeCount):null),this.state.isMax?s.a.createElement("div",{className:"max-wrap",key:"3"},s.a.createElement("img",{src:this.state.course,style:{width:window.innerHeight+"px",height:window.innerWidth+"px"},alt:"course",className:"max",onClick:this.onHideMax})):null]:null,s.a.createElement("div",{className:"footer-bar"}))}}]),t}(n.Component)),N=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).back=function(){switch(a.state.pageType){case 0:a.props.history.goBack();break;case 1:a.setState({pageType:0});break;case 2:a.setState({pageType:1});break;case 3:a.props.history.goBack()}},a.onInquiry=function(){a.setState({pageType:1})},a.onCheck=function(){a.setState({pageType:2})},a.onChecked=function(e){var t=a.state.checked,n=e.target.id;t[n]?t[n]=!1:t[n]=!0,a.setState({checked:t})},a.onSubmit=function(){for(var e=a.state.answers,t=[a.state.checked.A,a.state.checked.B,a.state.checked.C,a.state.checked.D],n=!0,s=0;s<4;s++)if(!e[s]!==!t[s]){n=!1;break}n?a.props.history.push({pathname:"/success",state:{score:window.__PAGE_DATA__.ANSWER_SCORE||15}}):a.setState({pageType:3})},a.onFinish=function(){a.props.history.goBack()},a.state={bgTypes:["bg-1","bg-2","bg-3","bg-4"],bgTypes2:["bg-m-1","bg-m-2","bg-m-3"],pharmacer:["p-1","p-2","p-3","p-4"],pharmacerM:["p-1m","p-2m","p-3m","p-4m"],doctor:["doctor-1","doctor-2","doctor-3","doctor-4"],userType:window.__PAGE_DATA__.DOCTOR_TYPE||0,pharmacyType:window.__PAGE_DATA__.PROBLEM_TYPE||0,pageType:0,checked:{},answers:[!0,!1,!1,!1]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userType,a=e.pageType,n=e.checked,c=0===a||2===a?this.state.bgTypes[t]:this.state.bgTypes2[t],l=n.A?"button-4":"button-1",i=n.B?"button-4":"button-1",o=n.C?"button-4":"button-1",r=n.D?"button-4":"button-1";return s.a.createElement("div",{className:"Pharmacy "+c},s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("i",{className:"back-icon",onClick:this.back}),s.a.createElement("div",null,s.a.createElement("i",{className:"title-icon title-icon-sm"}),s.a.createElement("i",{className:"title-s-icon",style:{marginBottom:"-20px"}}))),0===this.state.pageType?[s.a.createElement("i",{className:this.state.pharmacer[this.state.pharmacyType],key:"0"}),s.a.createElement("button",{className:"button-md button-2",onClick:this.onInquiry,key:"1"},"\u95ee\u8bca")]:1===this.state.pageType?[s.a.createElement("div",{className:"text-wrap-2",key:"0"},s.a.createElement("p",null,"\u9ad8\u8840\u538b\u957f\u671f\u63a7\u5236\u4e0d\u4f73\uff0c\u80fd\u591f\u5bfc\u81f4\u54ea\u4e9b\u75be\u75c5\uff08\uff09"),s.a.createElement("ul",{className:"choose-list"},s.a.createElement("li",null,"A. \u5352\u4e2d"),s.a.createElement("li",null,"B. \u5145\u8840\u6027\u5fc3\u529b\u8870\u7aed"),s.a.createElement("li",null,"C. \u5fc3\u810f\u75c5"),s.a.createElement("li",null,"D. \u731d\u6b7b")),s.a.createElement("i",{className:this.state.pharmacerM[this.state.pharmacyType]})),s.a.createElement("button",{className:"button-md button-2",onClick:this.onCheck,key:"1"},"\u5904\u65b9")]:2===this.state.pageType?[s.a.createElement("div",{className:"button-box",onClick:this.onChecked,key:"0"},s.a.createElement("div",{className:"button-line"},s.a.createElement("button",{id:"A",className:"button-md radio "+l},"A"),s.a.createElement("button",{id:"B",className:"button-md radio "+i},"B")),s.a.createElement("div",{className:"button-line"},s.a.createElement("button",{id:"C",className:"button-md radio "+o},"C"),s.a.createElement("button",{id:"D",className:"button-md radio "+r},"D"))),s.a.createElement("i",{className:"doctor-lg "+this.state.doctor[t],key:"1"}),s.a.createElement("button",{className:"button-sm button-2",onClick:this.onSubmit,key:"2"},"\u5904\u65b9\u786e\u8ba4")]:3===this.state.pageType?[s.a.createElement("div",{className:"text-wrap-2",key:"0"},s.a.createElement("p",null,"\u9ad8\u8840\u538b\u957f\u671f\u63a7\u5236\u4e0d\u4f73\uff0c\u80fd\u591f\u5bfc\u81f4\u54ea\u4e9b\u75be\u75c5\uff08\uff09"),s.a.createElement("ul",{className:"choose-list"},s.a.createElement("li",null,s.a.createElement("i",{className:"true"}),"A. \u5352\u4e2d"),s.a.createElement("li",null,s.a.createElement("i",{className:"false"}),"B. \u5145\u8840\u6027\u5fc3\u529b\u8870\u7aed"),s.a.createElement("li",null,s.a.createElement("i",{className:"false"}),"C. \u5fc3\u810f\u75c5"),s.a.createElement("li",null,s.a.createElement("i",{className:"false"}),"D. \u731d\u6b7b")),s.a.createElement("i",{className:"doctor-sm "+this.state.doctor[t]})),s.a.createElement("button",{className:"button-md button-2",onClick:this.onFinish,key:"1"},"\u786e\u5b9a")]:null,s.a.createElement("div",{className:"footer-bar"}))}}]),t}(n.Component)),f=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).back=function(){a.state.isIntro?a.setState({isIntro:!1}):a.state.isMyLevel?a.setState({isMyLevel:!1}):a.props.history.goBack()},a.onIntro=function(){a.setState({isIntro:!0})},a.onMyLevel=function(){a.setState({isMyLevel:!0})},a.state={background:["bg-m-1","bg-m-2","bg-m-3"],doctorType1:["doctor-1","doctor-2","doctor-3"],doctorType2:["doctor-1l","doctor-2l","doctor-3l"],levelType:["level-1","level-2","level-3"],rankingType:window.__PAGE_DATA__.DOCTOR_TYPE||0,isIntro:!1,isMyLevel:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Ranking "+this.state.background[this.state.rankingType]},s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("i",{className:"back-icon",onClick:this.back}),s.a.createElement("div",null,s.a.createElement("i",{className:"title-icon title-icon-sm"}),s.a.createElement("i",{className:"title-s-icon",style:{marginBottom:"-20px"}}))),this.state.isMyLevel?[s.a.createElement("div",{className:"level-wrap "+this.state.levelType[this.state.rankingType],key:"0"},s.a.createElement("h2",null,"\u6211\u7684\u79ef\u5206\uff1a123"),s.a.createElement("h2",null,"\u6211\u7684\u6392\u884c\uff1a123")),s.a.createElement("i",{className:"doctor-lg "+this.state.doctorType2[this.state.rankingType],key:"1"})]:[s.a.createElement("div",{className:"text-wrap-2",key:"0"},this.state.isIntro?[s.a.createElement("h2",{style:{color:"#bb080a",textAlign:"center"},key:"0"},"\u79ef\u5206\u8bf4\u660e"),s.a.createElement("div",{className:"text-info",key:"1"},"\u6bcf\u65e5\u5904\u65b9\u79ef\u5206\u5956\u52b1\uff1a",s.a.createElement("ul",null,s.a.createElement("li",null,"\u6bcf\u65e5\u6b63\u786e\u5904\u65b9\u53ef\u83b7\u5f975\u79ef\u5206"),s.a.createElement("li",null,"\u4e0d\u6b63\u786e\u4e0d\u5f97\u79ef\u5206"))),s.a.createElement("div",{className:"text-info",key:"2"},"\u8fde\u7eed\u6027\u5904\u65b9\u989d\u5916\u79ef\u5206\u5956\u52b1\uff1a",s.a.createElement("ul",null,s.a.createElement("li",null,"\u8fde\u7eed\u5904\u65b9\u4e00\u4e2a\u6708\u53ef\u989d\u5916\u83b7\u5f9750\u79ef\u5206"),s.a.createElement("li",null,"\u8fde\u7eed\u5904\u65b9\u4e00\u4e2a\u4ea7\u54c1\u53ef\u989d\u5916\u83b7\u5f97100\u79ef\u5206")))]:s.a.createElement("ul",{className:"text-list-2"},s.a.createElement("li",null,"\u7b2c\u4e00\u540d\uff1a",s.a.createElement("span",null,"\u4f60\u597d\u554a")," ","\u5fa1\u533b","(450\u5206)"),s.a.createElement("li",null,"\u7b2c\u4e8c\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u4e09\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u56db\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u4e94\u540d\uff1aXXXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u516d\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u4e03\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u516b\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u4e5d\u540d\uff1aXXX (450\u5206)"),s.a.createElement("li",null,"\u7b2c\u5341\u540d\uff1aXXX (450\u5206)")),s.a.createElement("i",{className:"doctor-sm "+this.state.doctorType1[this.state.rankingType]})),this.state.isIntro||this.state.isMyLevel?null:s.a.createElement("div",{className:"button-bar",key:"1"},s.a.createElement("button",{className:"button-2 button-sm",onClick:this.onIntro},"\u79ef\u5206\u8bf4\u660e"),s.a.createElement("button",{className:"button-2 button-sm",onClick:this.onMyLevel},"\u6211\u7684\u79ef\u5206"))],s.a.createElement("div",{className:"footer-bar"}))}}]),t}(n.Component)),T=(a(40),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={successTypes:["bg-1","bg-2","bg-3"],doctorTypes:["doctor-1l","doctor-2l","doctor-3l"],userType:window.__PAGE_DATA__.DOCTOR_TYPE||0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=5;return this.props.location.state&&(e=this.props.location.state.score||5),s.a.createElement("div",{className:"Success "+this.state.successTypes[this.state.userType]},s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("i",null),s.a.createElement("div",null,s.a.createElement("i",{className:"title-icon title-icon-sm"}),s.a.createElement("i",{className:"title-s-icon",style:{marginBottom:"-20px"}}))),s.a.createElement("div",{className:"score"},s.a.createElement("div",{className:"animated fadeInUp"},"+ ",e)),s.a.createElement("i",{className:"doctor-lg "+this.state.doctorTypes[this.state.userType]}),s.a.createElement("div",{className:"handel"},s.a.createElement(b.a,{to:"/home"},s.a.createElement("button",{className:"button-2 button-md animated bounceInUp delay-1s"},"\u5b8c\u6210"))),s.a.createElement("div",{className:"footer-bar"}))}}]),t}(n.PureComponent)),w=(a(42),a(44),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(p.a,null,s.a.createElement(h.a,null,s.a.createElement(E.a,{exact:!0,path:"/",component:g}),s.a.createElement(E.a,{path:"/home",component:d}),s.a.createElement(E.a,{path:"/loading",component:v}),s.a.createElement(E.a,{path:"/classroom",component:k}),s.a.createElement(E.a,{path:"/pharmacy",component:N}),s.a.createElement(E.a,{path:"/ranking",component:f}),s.a.createElement(E.a,{path:"/success",component:T}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f37b61cd.chunk.js.map