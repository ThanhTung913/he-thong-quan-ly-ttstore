!function(o){"use strict";var t=function(){};t.prototype.createLine=function(t,i,n,e,r){return o(t).peity("line",{fill:i,stroke:n,width:e,height:r}),o(t)},t.prototype.init=function(){var n=this.createLine(".updating-chart","#9261c6","#9261c6",120,40);setInterval(function(){var t=Math.round(10*Math.random()),i=n.text().split(",");i.shift(),i.push(t),n.text(i.join(",")).change()},1e3)},o.PeityChart=new t,o.PeityChart.Constructor=t}(window.jQuery),function(t){"use strict";window.jQuery.PeityChart.init()}();