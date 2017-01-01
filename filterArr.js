Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.


function removeEveryOther(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){  
    if(i % 2 === 0) newArr.push(arr[i]);
  }
  return newArr;
}

------------------->>

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
