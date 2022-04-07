let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];


// Create an array peopleName and store value of name key from persons array
 let peopleName = persons.map((person)=>person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) =>person.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map((person)=>person.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((name)=>name.startsWith('J') || name.startsWith('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((name)=>name.startsWith('A') || name.startsWith('C')).length);
// Log all the filtered male ('M') in persons array
function filterMale(name){
  console.log(name.sex==='M')
  
}
persons.filter(filterMale);
// Log all the filtered female ('F') in persons array
function filterFemale(name){
  console.log(name.sex==='F')
  
}
persons.filter(filterFemale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person) => person.sex==='F').filter ((person) => person.name.startsWith('C') || person.name.startsWith('J')));

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,cv)=>{
   acc = acc + cv.grade;
   return acc; 
},0);
// Find the average grade
let averageTotal = persons.reduce((acc,cv)=>{
  acc = acc + cv.grade;
  let average=acc/persons.length;
  return average;
},0);
// Find the average grade of male
let maleAverage=persons.filter((person)=>person.sex==='M');
maleAverage.reduce((acc,cv)=>{
acc=acc+cv.grade;
let average=acc/maleAverage.length;
return average;
},0)
// Find the average grade of female
let femaleAverage=peoples.filter((person)=>person.sex==='F');
femaleAverage.reduce((acc,cv)=>{
  acc=acc+cv.grade;
  let average=acc/femaleAverage.length;
  return average;
},0)
// Find the highest grade
[...persons].sort((a,b)=>a-b).pop();
// Find the highest grade in male
[...maleAverage].sort((a,b)=>a-b).pop();
// Find the highest grade in female
[...femaleAverage].sort((a,b)=>a-b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let alpha=peopleName.filter((name)=>name.startsWith('J') || name.startsWith('P'));
[...alpha].sort((a,b)=>a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=>a-b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=>b-a).pop;
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let peopleMutate=peopleGrade.sort((a,b)=>a-b);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort((a,b)=>a-b);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let namePeople=peopleName.sort((a,b)=>a-b);