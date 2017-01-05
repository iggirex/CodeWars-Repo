Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  var arr = [];
  for(var i = 0; i < x.length; i++){
    x[i] < 5 ? arr.push(0) : arr.push(1);
  }
  return arr.join("");
}

--------->

function fakeBin(x){
  return x.split("").map(function(el) { return el < 5 ? 0 : 1 }).join("");
}

------------>

function fakeBin(x){
  return x.split("").map((el) => el < 5 ? 0 : 1 ).join("");
}
