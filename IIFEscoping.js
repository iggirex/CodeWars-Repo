(function(){
  var com = {};
  com.domain = {};
  com.domain.AProgram = {};
  
  com.domain.AProgram.utility = function(){
    console.log("utility A");
  }
  // function utility(){
  //   console.log("utility A");
  // }
  utility();
  com.domain.AProgram.utility();
  
  function utility(){
    console.log("utility B");
  }
  utility();
}());
