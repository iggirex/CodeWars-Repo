function odds(values){
  // arrow it
  return values.filter( (ele)=> {
    if(ele % 2 != 0){
      return ele;
    }
  });
}
