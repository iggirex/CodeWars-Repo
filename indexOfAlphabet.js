When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"


function position(letter){
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var position = alphabet.indexOf(letter) + 1;
  return "Position of alphabet: " + position;
}

---------------------->

function position(letter){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + alphabet.indexOf(letter) + 1;
}
