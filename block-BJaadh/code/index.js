// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ');
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentence');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ');
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is');
// - Find all the words that contain 'is' use string method 'indexOf'
for(let i=0;i<strings.length;i++){
  if(string[i]==='is')
}
console.log([i]);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
function divideByThree(num){
  return num%3===0;
}
numbers.every(divideByThree);
// -  Sort Array from smallest to largest
function compareFunction(a,b){
  return a-b;
}
numbers.sort(compareFunction);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
function largest(num){
return num>100;
}
numbers.find(largest);
// - Find longest string in strings
function word(lar){
  return lar>4;
}
strings.find(lar);
// - Find all the even numbers
function even(num){
  return num%2===0;
}
numbers.filter(even);
// - Find all the odd numbers
function odd(num){
  return num%2!==0;
}
numbers.map(odd);
// - Place a new word at the start of the array use (unshift)
strings.unshift('This')
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);
// - Make a subset of strings array ['a','collection']
string.slice(2,4);
// - Replace 12 & 18 with 1221 and 1881
function change(num){
  if(num===18){
    return 1221;
  }elseif(num===18);{
    return 1881;
  }
}
numbers.replace(change)
// - Replace words in strings array with the length of the word
let stringLength=strings.map((string)=>string.length);
// - Find the sum of the length of words using above question
stringLength.reduce((acc,cb) =>{
  acc=acc+cb;
  return acc;
},0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let filterCustomer=customers.filter((customer)=> customer.firstname.startsWith('J'));
// - Create new array with only first name
let firstName=customers.map((customer) => customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName=cutomers.map((customer)=>`${customers.firstname} ${customers.lastname}`)
// - Sort the array created above alphabetically
[...fullnameCustomer].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel=customers.filter((customer)=>{
  if(customers.firstname.toLowerCase().include('a') ||customers.firstname.toLowerCase().include('e') ||
  customers.firstname.toLowerCase().include('i') || customers.firstname.toLowerCase().include('o') || customers.firstname.toLowerCase().include('a') ){
    return true;
  }else{
    return false;
  }
})