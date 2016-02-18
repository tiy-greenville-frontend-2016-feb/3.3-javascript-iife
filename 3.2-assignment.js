/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    return Math.max(num1, num2);
}

console.assert( max(5, 10) == 10 );

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    return max(max(num1, num2), num3);
}

console.assert( maxOfThree(5, 10, 15) === 15 );
console.assert( maxOfThree(-5, -10, -15) === -5 );

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    // Bail if char is not length of 1
    if(char.length != 1){
      return false;
    }

    return 'aeiouAEIOU'.indexOf(char) == -1 ? false : true;
}

console.assert( ! isVowel('ab') );
console.assert( ! isVowel('b') );
console.assert( isVowel('a') );
console.assert( isVowel('E') );

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var newPhrase = '';

    for(var index = 0; index < phrase.length; index++){
      var thisCharacter = phrase.charAt(index);
      if( ! isVowel(thisCharacter) && thisCharacter != " "){
        newPhrase += thisCharacter + "o" + thisCharacter;
      } else {
        newPhrase += thisCharacter;
      }
    }

    return newPhrase;
}

console.assert( rovarspraket("this is fun") == "tothohisos isos fofunon" );

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(values){
    "use strict";

    return values.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
}

console.assert( sum([1,2,3,4]) == 10 );

function multiply(values){
    "use strict";

    return values.reduce(function(previousValue, currentValue) {
      return previousValue * currentValue;
    });
}

console.assert( multiply([1,2,3,4]) == 24 );

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns
// the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var maxCharacters = 0;

    for(var i = words.length-1; i >= 0; i--){
      maxCharacters = words[i].length > maxCharacters ? words[i].length : maxCharacters;
    }

    return maxCharacters;
}

console.assert( findLongestWord(['and', 'for', 'before']) == 6 );

// ---------------------
// Write a function filterLongWords() that takes an array of words and an
// integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";

    return words.filter(function(value){
      return value.length > 4;
    });
}

//console.log(filterLongWords(['and', 'for', 'before', 'awesome'], 4));

//console.assert( filterLongWords(['and', 'for', 'before', 'awesome'], 4) == ['before', 'awesome']);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency
// listing of the characters contained in it. Represent the frequency listing
// as a Javascript object. Try it with something like
// charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencies = {};

    for(var i = string.length-1; i >= 0; i--){
        if( ! frequencies.hasOwnProperty(string.charAt(i)) ){
          frequencies[string.charAt(i)] = 1;
        }else{
          frequencies[string.charAt(i)] += 1;
        }
    }

    return frequencies;
}

//console.log( charFreq("abbabcbdbabdbdbabababcbcbab") );




function spanishColor(colorName){
  return {
    rojo: '#FF0000',
    blanco: '#FFFFFF'
  }[colorName];
}

console.log( spanishColor('rojo') ); // => #FF0000

//console.assert();
