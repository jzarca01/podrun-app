(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(53)},25:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=(n(25),n(12)),s=n(6),l=n.n(s),u=n(13),m=n(14),d=n(15),h=n(18),v=n(16),f=n(19),p=n(4),b=(n(3),n(17)),g=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(v.a)(t).call(this))).sendText=function(){e.remote.send("hello")},e.sendJSON=function(){e.remote.sendJSON({payload:"hello"})},e.emitEvent=function(){e.remote.emit("greetingFromWebview",{payload:"hello"})},e.state={isPlaying:!1,tempo:90,message:null},e.handleInputChange=e.handleInputChange.bind(Object(p.a)(Object(p.a)(e))),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.connectToRemote)();case 2:this.remote=e.sent,this.remote.emit("connected"),window.addEventListener("error",function(e){return t.remote.emit("log",JSON.stringify(e))},!0),this.remote.on("text",function(e){return console.log(e)}),this.remote.on("json",function(e){return console.log(e)}),this.remote.on("custom-event-from-rn",function(e){return console.log(e)}),this.remote.send("plain text from WebView"),this.remote.sendJSON({payload:"JSON from WebView"}),this.remote.emit("custom-event-from-webview",{payload:"Custom event from WebView"});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:parseInt(t.value),o=t.name;this.setState(Object(c.a)({},o,n))}},{key:"render",value:function(){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("div",null,a.a.createElement("button",{onClick:this.sendText},"Send text to RN")),a.a.createElement("div",null,a.a.createElement("button",{onClick:this.sendJSON},"Send JSON to RN")),a.a.createElement("div",null,a.a.createElement("button",{onClick:this.emitEvent},"Emit greeting event to RN")),a.a.createElement("p",null,this.state.message?this.state.message:null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.2954eae0.chunk.js.map