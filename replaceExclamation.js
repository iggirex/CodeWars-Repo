Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"


function remove(s){
  s = s.replace(/[!]/g, "");
  var x = s.split("");
  x.push("!");
  x = x.join("");
  return x;
}

------------------->

function remove(s){
  return s.replace(/[!]/g, "") + "!";
}
