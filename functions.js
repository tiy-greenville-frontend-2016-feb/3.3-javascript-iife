
console.log(hello())

function hello(){

}

(function(){
  var highscore = 100;

  function calculateWinners(firstPlace){
    //console.log(highscore);

    var theWinner = firstPlace;

    function gameOver(){
      //console.log(theWinner);
    }
    gameOver();
  }
  calculateWinners('Andrew');

  //window.setInterval(calculateWinners, 5000);
}());

var square = function(number){
  return number * number;
};

var timesTwo = function(number){
  return number * 2;
};

function doNothing(){
  //
}

// Expects 1st param to be invokable
function doStuff( whatToDo, withWhat ){
  return whatToDo(withWhat);
}

console.log( doStuff(square, 2) );
console.log( doStuff(timesTwo, 4) );
console.log( doStuff(10) );
