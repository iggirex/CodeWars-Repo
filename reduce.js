Write function avg which calaculates average of numbers in given list.


function find_average(array) {
  var nuArr = array.reduce(function(a, b){ return a + b}, 0)
  return nuArr / array.length;
}
