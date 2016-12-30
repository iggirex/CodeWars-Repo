Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)


function sumArray(array) {
  if(array === null || array.length === 0 || array.length === 1) return 0;
  var max = array[0];
  var min = array[0];
  var total = 0;
  array.forEach(function(curr,i,a){
    if(curr < min) min = curr;
    if(curr > max) max = curr;
    total += curr
  })
  return total - (min + max)
}
