
function loopyLighthouse(number1, number2){
  for(var start = number1; start<= number2; start++)
  {
    if(start % 3 === 0 && start % 4 === 0){
      console.log("Loopy Lighthouse");
    }else if (start % 3 === 0){
      console.log("Loopy");
    }else if( start % 4 === 0){
      console.log("Lighthouse");
    }
  }

}

loopyLighthouse(100, 200);
