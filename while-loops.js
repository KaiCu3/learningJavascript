//Basic while-loop (not a Do-while loop)

//Array of complex objects
import employees from './module6.loops/data.json' assert { type: 'json' };

// Basic while loop using import data from data.json
// A while loop won't run at all if the condition isn't met (unlike a Do while loop, which will always run at least once, even if the condition from outset isn't met). 
// I.e., a While loop checks the condition first and will only run its code block if the condition is true.

let i = 0; 
while(employees[i]) {
  
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++; // the increment is necessary because eventually the index will be incremented to a number greater than the number of indices in the array, and it will return undefined and hence, break out of the while loop.
}

console.log(`------- section break ------`);

// ^ I.e. the while loop operates as such:
// initialising the index counter at 0.
/* employees is an arbirtrary placeholder name given to the imported JSON data using ES6 modules. We named it 'employees' to make it easier to comprehend, and refer to the data within the data.JSON file as employees.
JSON data imported this way, will be in the form of an array,
and each element of the array is an object that represents an employee (based on your JSON data).

The loop starts with i = 0, which represents the index of the first object (employee) in the array.

  /* employees[i] accesses the employee object at index i.

    As long as employees[i] is truthy 
    (i.e., as long as there is an employee object at index i), the loop will continue to run. 
    If i becomes larger than the highest index in the employees array, employees[i] will return undefined, which is falsy, and the loop will stop.
    */


//Do while loop

/*
First, it always executes the code inside the block first, 
If the condition is true, it then goes back and runs the code block again.
This loop ensures that the code block is executed at least once even if the condition is false from the start. 
*/ 
i = 0;
do {console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
i++;
} while(employees[i]);

/* Recursion vs While loops:
Mechanism:

Recursion: A function calls itself with modified arguments. Each call creates a new execution context (essentially a new "layer" or "frame" on the call stack).

Loop: The code inside the loop is executed repeatedly as long as the loop's condition remains true. It remains within the same execution context.
Use Cases:

Recursion: Typically used for problems that can be broken down into smaller, similar problems. Common in algorithms related to tree structures, like traversing a file directory or parsing syntax trees. For example, the calculation of a factorial, traversing a file system, depth-first search in trees/graphs, etc.

Loop: Best for problems where you need to perform the same action an identifiable number of times or until a particular condition is met, without breaking the problem into smaller similar problems. For example, iterating through the items in a list, or repeating an action until a specific input is received.
*/


console.log(`Section break for beginning of For loops moving forwards ----------------------`);
//For loops - most common & important type of loop
/* 
 For loops = we use .length instead of employees[i].firstName as in the while and do While loops
 becayse: For loop's nature is different to while and do while loops.

While and do while loops: Don't count the length of the items in the array (indices) before operating.
For loops: Count the length of items in the array first, and then start executing.
*/

for (let i = 0; i < employees.length; i++) {
    console.log(`Name: ${employees[i].firstName}`);
}
