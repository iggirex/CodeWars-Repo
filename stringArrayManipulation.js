You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have '***' between each of its letters.


function twoSort(s) {
  var arr = s.sort()[0].split("");
  for (var i = 0; i < arr.length; i++){
    if(i !== arr.length - 1){
      arr[i] = arr[i].concat("***");
      }
  }
  return arr.join("");
}

-------------->

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
