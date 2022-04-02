Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
3. `toLowerCase`
4. `trim`
5. `trimEnd`
6. `trimStart`
7. `concat`
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
houseName.toUpperCase()///It converts into value in uppercase.
'STARK'
houseName.toLowerCase() /// It converts in lowercase.
'starks'
let name = '  Arya Stark  '
name.trim() It reduce space from both side
'Arya Stark'
name.trimEnd() it reduce space from end
'  Arya Stark'
name.trimStart()
'Arya Stark   '
name.concat("is a good developer") Its concat new word or variable.
'Arya Stark  is a good developer'
houseName.endsWith('') Its check the letter or words ends with.
true
name.includes('r') // Its check the value is it or not
name.indexOf('S')//Its check the index
7
sentance.lastIndexOf('dog')//Its check the last indexofthat which index the word is
37
houseName.padEnd('20','.')//Its adjush padding at end and add charcter.
'Starks..............'
houseName.padStart('20','.')///Its adjust padding at start and character. 
'..............Starks'
houseName.repeat(4)///it repeat that how many times you have to repeat.
'StarksStarksStarksStarks'
houseName.replace('Starks','Arya')///It replace what do you whant to replace.
'Arya
sentance.slice(0,20)//it except two parameter first where to start and second where to end.
'A quick brown fox ju'

sentance.split(' ')///it split all in array.
(9) ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog']
sentance.substring(20,0)//it also work like slice but in this we can first the last index.
'A quick brown fox ju'
