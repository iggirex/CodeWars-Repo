Task

Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  var min = numbers[0];
  var max = numbers[0];
  var arr = [];
  for (var i = 0; i < numbers.length; i++){
    if(min > numbers[i]) min = numbers[i];
    if(max < numbers[i]) max = numbers[i];
  }
  for (var j = min; j<= max; j++){
    arr.push(j)
  }
  return arr
}

-------------------------

function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
