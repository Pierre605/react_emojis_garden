(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(2),l=t(3),n=t(6),s=t(5),u=t(0),c=t.n(u),o=t(4),i=t.n(o);t(12);var m=function(e){return c.a.createElement("button",{className:"button",onClick:function(){return e.addEmo(e.id)}},"Plant an Emoji")};t(13);var v=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper"},e.jardin.map(function(a){return c.a.createElement("div",{className:"cell",key:a.id,onClick:function(){return e.delete(a.id,e.id)}},a.valeur)})))};t(14);var d=function(e){return c.a.createElement("div",null,c.a.createElement("button",{className:"button2",onClick:e.addGarden},"Add Garden"))};t(15),t(16);var f=function(e){return c.a.createElement("div",{className:"settings"},c.a.createElement("span",null,"Theme: "),c.a.createElement("select",{name:"theme",defaultValue:"plant",onChange:e.toggle},c.a.createElement("option",{value:""},"Choisir th\xe8me"),c.a.createElement("option",{value:"plant"},"Plants"),c.a.createElement("option",{value:"human"},"Human"),c.a.createElement("option",{value:"sea"},"Sea")),c.a.createElement("span",null,"Growth speed (seconds): ",c.a.createElement("input",{onChange:e.growth})))};t(17);var h=function(e){return c.a.createElement(c.a.Fragment,null,e.scorelayout.map(function(e){if(!0===e.state)return c.a.createElement("div",{className:"score"},e.lay," ",e.val)}))},E=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).GenerateGarden=function(e){for(var a=[],t=0;t<e;t++)a.push({id:t,valeur:null});return a},l.setGrowthSpeed=function(e){var a=e.currentTarget.value;l.setState({growthSpeed:1e3*a})},l.addEmoji=function(e){console.log(e);for(var a=l.state.farm,t=[],r=0;r<a[e].length;r++)null==a[e][r].valeur&&t.push(r);var n=document.querySelector("select");if(t.length>0&&"plant"===n.value){a[e][t[0]].valeur;"\ud83c\udf31",a[e][t[0]].valeur="\ud83c\udf31",l.setState({farm:a})}else if(t.length>0&&"sea"===n.value){a[e][t[0]].valeur;"\ud83d\udc1f",a[e][t[0]].valeur="\ud83d\udc1f",l.setState({farm:a})}else if(t.length>0&&"human"===n.value){a[e][t[0]].valeur;"\ud83d\ude36",a[e][t[0]].valeur="\ud83d\ude36",l.setState({farm:a})}var s=l.state.growthSpeed;setTimeout(function(){switch(a[e][t[0]].valeur){case"\ud83c\udf31":a[e][t[0]].valeur;"\ud83c\udf3f",a[e][t[0]].valeur="\ud83c\udf3f",l.setState({farm:a});break;case"\ud83d\udc1f":a[e][t[0]].valeur;"\ud83d\udc2c",a[e][t[0]].valeur="\ud83d\udc2c",l.setState({farm:a});break;case"\ud83d\ude36":a[e][t[0]].valeur;"\ud83d\ude42",a[e][t[0]].valeur="\ud83d\ude42",l.setState({farm:a})}},s),setTimeout(function(){switch(a[e][t[0]].valeur){case"\ud83c\udf3f":a[e][t[0]].valeur;"\ud83c\udf33",a[e][t[0]].valeur="\ud83c\udf33",l.setState({farm:a});break;case"\ud83d\udc2c":a[e][t[0]].valeur;"\ud83d\udc0b",a[e][t[0]].valeur="\ud83d\udc0b",l.setState({farm:a});break;case"\ud83d\ude42":a[e][t[0]].valeur;"\ud83e\udd20",a[e][t[0]].valeur="\ud83e\udd20",l.setState({farm:a})}},2*s),l.scoreEmos()},l.RemoveEmoji=function(e,a){console.log(e,a);var t=l.state.farm;t[a][e].valeur;t[a][e].valeur=null,l.setState({farm:t}),l.scoreEmos()},l.addGarden=function(){var e=l.GenerateGarden(25),a=l.state.farm;a.push(e),l.setState({farm:a})},l.changeTheme=function(){for(var e=document.querySelector("select"),a=document.getElementsByClassName("wrapper"),t=l.state.score,r=l.state.farm,n=0;n<t.length;n++)e.value==t[n].id?(t[n].state=!0,l.setState({score:t})):(t[n].state=!1,l.setState({score:t}));for(var s=0;s<r.length;s++)for(var u=0;u<25;u++){if("human"===e.value){r[s][u].valeur;null,r[s][u].valeur=null,l.setState({farm:r}),a[s].childNodes[u].className="",a[s].childNodes[u].classList.add("cell2")}if("sea"===e.value){r[s][u].valeur;null,r[s][u].valeur=null,l.setState({farm:r}),a[s].childNodes[u].className="",a[s].childNodes[u].classList.add("cell3")}if("plant"===e.value){r[s][u].valeur;null,r[s][u].valeur=null,l.setState({farm:r}),a[s].childNodes[u].className="",a[s].childNodes[u].classList.add("cell")}}},l.scoreEmos=function(){for(var e=[],a=[],t=[],r=document.querySelector("select"),n=l.state.farm,s=l.state.score,u=0;u<n.length;u++)for(var c=0;c<25;c++)if("human"===r.value){if("\ud83d\ude36"===n[u][c].valeur||"\ud83d\ude42"===n[u][c].valeur||"\ud83e\udd20"===n[u][c].valeur){a.push(n[u][c]);var o=s[0].val;o=a.length,s[0].val=o,l.setState({score:s})}}else if("sea"===r.value){if("\ud83d\udc1f"===n[u][c].valeur||"\ud83d\udc2c"===n[u][c].valeur||"\ud83d\udc0b"===n[u][c].valeur){t.push(n[u][c]);var i=s[1].val;i=t.length,s[1].val=i,l.setState({score:s})}}else if("plant"===r.value&&("\ud83c\udf33"===n[u][c].valeur||"\ud83c\udf3f"===n[u][c].valeur||"\ud83c\udf31"===n[u][c].valeur)){e.push(n[u][c]);var m=s[2].val;m=e.length,s[2].val=m,l.setState({score:s})}},l.state={farm:[],growthSpeed:2e3,score:[{id:"human",state:!1,val:0,lay:"\ud83d\ude42: "},{id:"sea",state:!1,val:0,lay:"\ud83d\udc1f: "},{id:"plant",state:!0,val:0,lay:"\ud83c\udf31: "}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({farm:[this.GenerateGarden(25)]})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"My Emoji Garden"),c.a.createElement(f,{toggle:this.changeTheme,growth:this.setGrowthSpeed}),c.a.createElement(h,{scorelayout:this.state.score}),c.a.createElement("div",{className:"aside"},this.state.farm.map(function(a,t){return c.a.createElement("div",{className:"aerer",key:t},c.a.createElement(v,{id:t,jardin:a,delete:e.RemoveEmoji}),c.a.createElement(m,{id:t,addEmo:e.addEmoji}))})),c.a.createElement("div",null,c.a.createElement(d,{addGarden:this.addGarden})))}}]),t}(c.a.Component);i.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.29f07aab.chunk.js.map