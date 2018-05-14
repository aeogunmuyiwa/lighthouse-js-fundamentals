function merge(array1, array2){

  var array3= new Array();
  array3 = array1.concat(array2);
  if( array3.length === 1){
    return array3;
  }

  for(var i = 0 ; i < array3.length-1; i++){
    for(var j = i ; j < array3.length; j++){
      if(array3[i]> array3[j]){
        var temp = array3[i];
        array3[i] = array3[j];
        array3[j]=temp;
      }
    }
  }
  return array3;


  //return array3;
}
//function merge_sort(array3,)

console.log(merge([ 1, 2, 6 ], []));