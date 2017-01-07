Create a method include? (JS include)that accepts a list and an item, and returns true if the item belongs to the list.


function include(arr, item){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i], item);
    if(arr[i] === item) {
      return true;
    }
  }
  return false;
}

----------------->

function include(arr, item){
  return arr.some(function(ele){
    if(ele === item) return true
  })
  return false;
}

----------------->

function include(arr, item) {
  return arr.indexOf(item) !== -1;
}
