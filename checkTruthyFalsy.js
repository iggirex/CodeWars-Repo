Create a method all? (JS: all) which takes an array, and a block (JS: function), and returns true if the block (/function) returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the block (/function) test.


function all( arr, fun ){
  for (var i = 0; i < arr.length; i++){
    console.log(fun(arr[i]), fun.toString())
    if( fun(arr[i]) == false) return false;
  }
  return true;
}

---------------->

function all( arr, fun ){
  return arr.every(fun);
}

---------------->

