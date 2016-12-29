var min = function(list){
    var least = list[0];
    list.forEach(function(curr,i,a){
      if(curr <= least) least = curr;
    })
    return least;
}

var max = function(list){
  var most = list[0];
  list.forEach(function(curr,i,a){
      if(curr >= most) most = curr;
    })
    return most;
}
---------------------------------->
    
    
var min = function(list){
    list.sort((a, b) => a - b)
    return list[0];
}

var max = function(list){
    list.sort((a, b) => a - b)
    return list[list.length - 1];
}

--------------------------------->
    
    
var min = function(list){
    list.sort((a, b) => a -b)
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a)
    return list[0];
}
