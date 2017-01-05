Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"


function remove(s){
  var arr = s.split("");
  for (var i = arr.length - 1; i >= 0; i--){
    if(arr[i] === "!") {
      arr.pop();
    } else {
      break;
    }
  }
  return arr.join("");
}

----------------->


const remove = s => s.replace(/!+$/, '');
