function positiveSum(arr) {
  var counter = 0;
  arr.forEach(function(val){
    if(val > 0) counter += val
  })
  return counter
}
