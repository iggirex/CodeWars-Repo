Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.


function parseF(s) {
  if(typeof s !== "string" && typeof s !== "number") return null;
  return isNaN(Number(s)) ? null : (s * 1);
}

--------------->

var parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s);

