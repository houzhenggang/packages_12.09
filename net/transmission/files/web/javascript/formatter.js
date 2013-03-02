Transmission.fmt=(function(){var q=1000;var b="B/s";var m="kB/s";var r="MB/s";var c="GB/s";var d="TB/s";var p=1000;var l="B";var e="kB";var h="MB";var n="GB";var o="TB";var g=1024;var i="B";var a="KiB";var f="MiB";var j="GiB";var k="TiB";return{updateUnits:function(s){},percentString:function(s){if(s<10){return s.toTruncFixed(2)}else{if(s<100){return s.toTruncFixed(1)}else{return s.toTruncFixed(0)}}},ratioString:function(s){if(s===-1){return"无"}if(s===-2){return"&infin;"}return this.percentString(s)},mem:function(s){if(s<g){return[s,i].join(" ")}var t;var u;if(s<Math.pow(g,2)){t=s/g;u=a}else{if(s<Math.pow(g,3)){t=s/Math.pow(g,2);u=f}else{if(s<Math.pow(g,4)){t=s/Math.pow(g,3);u=j}else{t=s/Math.pow(g,4);u=k}}}return t<=9.995?[t.toTruncFixed(2),u].join(" "):[t.toTruncFixed(1),u].join(" ")},size:function(s){if(s<p){return[s,l].join(" ")}var t;var u;if(s<Math.pow(p,2)){t=s/p;u=e}else{if(s<Math.pow(p,3)){t=s/Math.pow(p,2);u=h}else{if(s<Math.pow(p,4)){t=s/Math.pow(p,3);u=n}else{t=s/Math.pow(p,4);u=o}}}return t<=9.995?[t.toTruncFixed(2),u].join(" "):[t.toTruncFixed(1),u].join(" ")},speedBps:function(s){return this.speed(this.toKBps(s))},toKBps:function(s){return Math.floor(s/q)},speed:function(s){var t=s;if(t<=999.95){return[t.toTruncFixed(0),m].join(" ")}t/=q;if(t<=99.995){return[t.toTruncFixed(2),r].join(" ")}if(t<=999.95){return[t.toTruncFixed(1),r].join(" ")}t/=q;return[t.toTruncFixed(2),c].join(" ")},timeInterval:function(z){var A=Math.floor(z/86400),u=Math.floor((z%86400)/3600),v=Math.floor((z%3600)/60),z=Math.floor(z%60),y=A+" "+(A>1?"天":"天"),x=u+" "+(u>1?"小时":"小时"),t=v+" "+(v>1?"分钟":"分钟"),w=z+" "+(z>1?"秒":"秒");if(A){if(A>=4||!u){return y}return y+", "+x}if(u){if(u>=4||!v){return x}return x+", "+t}if(v){if(v>=4||!z){return t}return t+", "+w}return w},timestamp:function(B){if(!B){return"N/A"}var w=new Date(B*1000);var s=new Date();var u="";var t="";var y=s.getFullYear()===w.getFullYear();var C=s.getMonth()===w.getMonth();var x=s.getDate()-w.getDate();if(y&&C&&Math.abs(x)<=1){if(x===0){u="今天"}else{if(x===1){u="昨天"}else{u="明天"}}}else{u=w.toDateString()}var A=w.getHours();var z="上午";if(A>12){A=A-12;z="下午"}if(A===0){A=12}if(A<10){A="0"+A}var v=w.getMinutes();if(v<10){v="0"+v}var B=w.getSeconds();if(B<10){B="0"+B}t=[A,v,B].join(":");return[u,z,t].join(" ")},ngettext:function(t,s,u){return u===1?t:s},countString:function(t,s,u){return[u.toStringWithCommas(),this.ngettext(t,s,u)].join(" ")},peerStatus:function(v){var w=[];for(var u=0,t;t=v[u];++u){var s=null;switch(t){case"O":s="Optimistic unchoke";break;case"D":s="从此节点下载";break;case"d":s="若对方允许，将从此节点下载";break;case"U":s="上传到节点";break;case"u":s="若对方请求，将上传至此节点";break;case"K":s="对方已对我们解锁，但我们不感兴趣";break;case"?":s="我们已解锁此节点，但是对方不感兴趣";break;case"E":s="加密连接";break;case"H":s="通过DHT找到的节点";break;case"X":s="通过PEX源交换找到的节点";break;case"I":s="与该节点间的连接是入站连接";break;case"T":s="通过µTP协议连接到节点";break}if(!s){w.push(t)}else{w.push('<span title="'+t+": "+s+'">'+t+"</span>")}}return w.join("")}}})();