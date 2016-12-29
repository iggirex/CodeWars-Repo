function smash (words) {
    "use strict";
    var sentence = "";
    words.forEach(function(curr, i, arr){
      arr.indexOf(curr) === arr.length - 1 ? sentence += curr : sentence += curr + " ";
    })
    return sentence;
};


-------->


// Smash Words
function smash (words) {
    "use strict";
    return words.join(" ")
};
