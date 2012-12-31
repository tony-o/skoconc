var l = require("./skoconc.js");

l.max(3);

for(var i = 0; i < 500; i++){
  l.push(function(a,cb){
    setTimeout(function(){
      cb();
      if(a == 100){ l.max(25); }
      console.log("i:" + a);
      cb(); //doesn't do anything..
    },i);
  }, i);
}

