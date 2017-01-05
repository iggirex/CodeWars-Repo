Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.
The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string


function isOpposite(s1,s2){
  if(s1.length === 0 || s2.length === 0) return false;
  var reverse1 = [];
  for (var i = 0; i < s1.length; i++){
    s1[i] === s1[i].toUpperCase() ? reverse1.push(s1[i].toLowerCase()) : reverse1.push(s1[i].toUpperCase());
  }
  reverse1 = reverse1.join("");
  return reverse1 === s2 ? true : false;
}

----------->


function isOpposite(s1,s2){
  if( s1 == '' || s2 == '' || s1.length != s2.length ) return false;
  
  var res = ''
  for ( var sid in s1 )
    if ( s1[sid].toUpperCase() == s1[sid] ) res += s1[sid].toLowerCase()
    else res += s1[sid].toUpperCase()
  return s2 == res
}
