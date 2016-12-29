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
