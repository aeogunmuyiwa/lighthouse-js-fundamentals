function range (start,end,step){
  var myarray = [];
  var i = start;
  do{
     myarray.push(i);
     i += step ;
  }while (i <=end);

  return myarray;


}
console.log(range(1,10,2));