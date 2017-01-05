Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  console.log(s);
  return s.replace(/[aeiou]/ig, "!");
}
