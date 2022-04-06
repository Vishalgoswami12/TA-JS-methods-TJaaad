let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(word){
  return [...word].sort((a,b) =>a.length-b.length).pop()
}
findLongestWord(words)
// - Convert the above array "words" into an array of length of word instead of word.
function wordLength(word){
  return word.length;
}
let newWord=words.map(wordLength);
// - Create a new array that only contains word with atleast one vowel.
function vowel(array){
  return (array.toLowerCase().includes('a')|| array.toLowerCase().includes('e')||array.toLowerCase().includes('i')|| array.toLowerCase().includes('o')|| array.toLowerCase().includes('u'));
}
let compare=words.filter(vowel);
// - Find the index of the word "rhythm"
words.indexOf('rhythm')
// - Create a new array that contians words not starting with vowel.
function notEqual(array){
  return array !==vowel;
}
let words.filter(notEqual);
// - Create a new array that contianse words not ending with vowel
let notEnd=words.filter(
  (w) =>!vowel(w[w.length-1])
)
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
 function add(acc,cv){
   return acc+cv;
 }
 let sum = numbers.reduce(add )
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function mulThree(num){
  return num*3;
}
let newMultiply=numbers.map(mulThree);
// - Create a new array that contains only even numbers
function onlyEven(num){
  return num%2===0;
}
let even=numbers.filter(onlyEven);
// - Create  a new array that contains only odd numbers.
function onlyOdd(num){
  return num%2===0;
}
let Odd=numbers.filter(onlyOdd);
// - Create a new array that should have true for even number and false for odd numbers.
function compareNumber(num){
  if(num%2===0){
    return true;
  }else{
    return false
  }
}
let value=numbers.map(compareNumber);
// - Sort the above number in assending order.
function functionCompare(a,b){
  return a-b;
}
numbers.sort(functionCompare);
// - Does sort mutate the original array?
// yes sort mutate the original array.
// - Find the sum of the numbers in the array.
function add(acc,cv){
  return acc+cv;
}
let sum = numbers.reduce(add )
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(a,b){
let sumOf=a+b;
let average=sumOf/numbers.length;
return average;
}
numbers.reduce(averageNumbers);

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words){
return(words.map((w)=>w.length).reduce((acc,cv)=>{
  return acc+cv;
},0))/words.length
}
strings.reduce(averageWordLength);