Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
3. `flat`
4. `push`
5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`

join
Parameter:Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). 
Return:A string with all array elements joined. If arr.length is 0, the empty string is returned.
let color=['red','blue','green'];
color.join('-');
'red-blue-green;

let color=['red','blue','green'];
color.join('/');
'red/blue/green'

2.flat
Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
Return:A new array with the sub-array elements concatenated into it.
const arr = [1, 2, [3, 4]];
arr.flat();
[1,2,3,4]
const arr = [1, 2, [3, [4,5,6]]];
arr.flat();
[1,2,3,4,5,6]

3.Push
Parameter:The element(s) to add to the end of the array.
Return:The new length property of the object upon which the method was called.

let color=['red','blue','green'];
color.push('browm');
['red','blue','green','brown'];

let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')
console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']

4.Indexof
Parameter:Element to locate in the array.
Return:The first index of the element in the array; -1 if not found.

const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2

5.lastIndexOf
Parameter:Element to locate in the array.
Return:The last index of the element in the array; -1 if not found.

const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3

6.includes
Parameter:The value to search for.
Return:A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

let value=[1,2,3];
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3) //false

7.reverse

Parameter:he reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
Return:The reversed array.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]

8.every
Parameter:A function to test for each element.

The function is called with the following arguments:
Return:true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
let num=[1,2,3,4,5,6];
function isGreater(num){
  return num>0;
}
num.every(num);
let newNum=num.every(num);///
newNum////true

9.shift
Parameter:The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.
Return:shift is intentionally generic; this method can be called or applied to objects resembling

const array1 = [1, 2, 3];
undefined
array1.shift();
1
array1///[2,3]

10.splice
Parameter:The index at which to start changing the array.
Return:An array containing the deleted elements.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
 Array ///["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
 Array//// ["Jan", "Feb", "March", "April", "May"]

11.find
Parameter:Function to execute on each value in the array.

The function is called with the following arguments:
Return:The first element in the array that satisfies the provided testing function. Otherwise,
let numbers=[2,3,5,9];
function isGreater(number){
  return number>5;
}
let newNum=numbers.find(isGrater);
nuwNum//9

12.unshift
Parameter:The elements to add to the front of the arr.
Return:The new length property of the object upon which the method was called.

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));

console.log(array1);
// Array [4, 5, 1, 2, 3]

13findIndex
Parameter:A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
Return:The index of the first element in the array that passes the test. Otherwise, -1.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
//  output: 3

14.filter
Parameter:Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
Return:A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

let numbers=[1,2,3,4,5,6];
function isEven(num){
  return num%2===0;
}
let evenNumber=number.filter(isEven);
evenNumber//[2,4,6

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);
//["exuberant", "destruction", "present"]

15.flat
Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
Return:A new array with the sub-array elements concatenated into it.
const arr = [1, 2, [3, 4]];
arr.flat();
[1,2,3,4]
const arr = [1, 2, [3, [4,5,6]]];
arr.flat();
[1,2,3,4,5,6]

16.`forEach`
Parameter:Function to execute on each element.

The function is called with the following arguments:
Return:undefined.

function log(numbers){
  console.log(numbers)
}
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
output: "a"
// : "b"
// "c"

17.map`
Parameter:Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
Return:A new array with each element being the result of the callback function.

function log(num){
retun num*2;
}
let doubleNumber=numbers.map(log);
const array1 = [1, 4, 9, 16];
const roots = numbers.map((num) => Math.sqrt(num));
[1, 4, 9]

18.`pop`
Parameter:The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
Return:The removed element from the array; undefined if the array is empty.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
["broccoli", "cauliflower", "cabbage"]

19.`reduce`
Parameter:A "reducer" function.

The function is called with the following arguments:
Return:The value that results from running the "reducer" callback function to completion over the entire array.
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

20.`slice`
Parameter:Zero-based index at which to start extraction.
Return:A new array containing the extracted elements.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
onsole.log(animals.slice(2));
["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
Array ["camel", "duck"]

21.`some`
Parameter:A function to test for each element.

The function is called with the following arguments:
Return:true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
true

