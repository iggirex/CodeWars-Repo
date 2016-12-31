Write a function that returns a string in which firstname is swapped with last name.


function nameShuffler(str){
  //Shuffle It
  var arr = str.split(" ");
  return arr.reverse().join(" ");
}

--------------------->

function nameShuffler(str){
  return str.split(" ").reverse().join(" ");
}
