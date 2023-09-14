// Maps & Sets 

// Using .map 
let treasureMap = new Map();
treasureMap.set('Skull Island', {
    anime: 'One Piece',
    episode: '136',
});

treasureMap.set('Greed Island', {
    anime: 'Hunter x Hunter',
    episode: '95',
});


// Using Sets
// Our student set (we'll use an array of objects for complexity)
let students = new Set([
    {name: "Alice", score: 45},
    {name: "Bob", score: 60},
    {name: "Charlie", score: 55},
    {name: "Dana", score: 70}
]); // This set contains objects with key-value pairs for each student HOWEVER, javascript Sets ignores this, and treats each individual entry as a singular unique value, regardless if 'name' and 'score' are repeated in every entry, as long as there is at least one thing different in the line. I.e. {name: "Alice", score: 50}, and {name: "Alice", score: 55}, are treated as unique, and both would get registered in the set even thoguh some elements are repeated.

// We want to print out the names of students who scored above 50
students.forEach(function(student) {
    if(student.score > 50) {
        console.log(`${student.name} scored above 50! Great job! 🎉`); // The "student.name" is just a placeholder which refers to the current item in the set that is being looped over. You could change it to "rarara.score" and it would still work, as long as you then use "rarara.name" as .score and .name refer to the values within each unique item in the set. Just make sure your forEach function then refers to the same placeholder value, otherwise it will throw an undefined error, as the placeholder name used needs to match.
    }
});

/* Here, our forEach function goes through each student object in our set. For each student, it checks the score property. If the score is above 50, it prints out a celebratory message for that student.

Clarifying the Syntax:

students: This is our set.
forEach: This is a method provided by the Set object in JavaScript.
function(student): This is our callback function that gets executed for each element in our set.
student: This is the current element we're looking at. In our example, it's an object with properties name and score.
Inside our callback function, we can use the student object just like any other object in JavaScript. We can access its properties (e.g., student.name and student.score) and make decisions based on them.





console.log(`Anime Islands and their episodes: ${treasureMap.get('Skull Island').anime}, episode ${treasureMap.get('Skull Island').episode};  ${treasureMap.get('Greed Island').anime}, episode ${treasureMap.get('Greed Island').episode}}`);
console.log(`Using JSON.stringify to log out all properties of both value objects: Skull Island = ${JSON.stringify(treasureMap.get('Skull Island'), null, 2)} and Greed Island: ${JSON.stringify(treasureMap.get('Greed Island'), null, 2)}`);

// JSON.stringify() = console.log(JSON.stringify(key, (replacer function or array, if no replacer, then use null, 2));

/* Replacer as a Function:
When the replacer is a function, it's called for every item in the object or array being stringified. The function can:

Modify the value: By returning a new value.
Omit the value: By returning undefined.
Keep the value unchanged: By returning the value as is.
This provides a fine-grained control over the stringification process, allowing you to customize the resulting JSON string based on the content of the original data.

// Replacer function when dealing with non-arrays
const data = {
  name: "John",
  age: 25,
  password: "secret",
  isAdmin: false
};

const keysToInclude = ["name", "age"];

console.log(JSON.stringify(data, keysToInclude));
// Output: '{"name":"John","age":25}'


Replacer as an Array:
If the replacer is an array, it's simpler in behavior. The array should contain strings, representing the names of properties that you want to include in the final JSON string. All other properties not listed in the array will be omitted. 

^ const users = [
  { name: "John", age: 25, password: "secret1", isAdmin: true },
  { name: "Jane", age: 30, password: "secret2", isAdmin: false },
  { name: "Doe", age: 35, password: "secret3", isAdmin: true }
];

const keysToInclude = ["name", "age"];

console.log(JSON.stringify(users, keysToInclude, 2));
*/

