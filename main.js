(function(){
  'use strict';

  var containerElement = document.querySelector('.container');

  function max(a, b){
    if( a > b ){
      return a;
    }else{
      return b;
    }
  }

  var maxNumber = max(5, 10);
  console.assert(max(5, 10) == 10);
  console.assert(max(-10, 15) == 15);
  console.assert(max(5, 5) == 5);


  function maxOfThree(number1, number2, number3){
    var biggestValue = max(number1, number2);
    var result = max(number3, biggestValue);
    return result;
    //return max(max(a, b), c);
  }

  console.assert(  maxOfThree(5, 10, 15) == 15 );

}());
