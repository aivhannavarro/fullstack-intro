// STEP 2: ARRAYS

// Create arrays
let numbers = [1, 2, 3];
let fruits = ["Apple", "Banana", "Cherry"];

console.log("Original numbers:", numbers);

// Array methods
numbers.push(4); // add at end
console.log("After push:", numbers);

numbers.pop(); // remove last
console.log("After pop:", numbers);

numbers.shift(); // remove first
console.log("After shift:", numbers);

numbers.unshift(0); // add at beginning
console.log("After unshift:", numbers);

console.log("Length:", numbers.length);

// STEP 3: OBJECTS

// Create object
let person = {
    name: "Lance",
    age: 18,
    isStudent: true
};

// Access properties
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation

// Modify properties
person.age = 19;
person["name"] = "Gilbert";

console.log("Updated person:", person);

// STEP 4: BUILT-IN METHODS

// map
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
let greaterThanOne = numbers.filter(num => num > 1);
console.log("Filtered:", greaterThanOne);

// forEach
numbers.forEach(num => {
    console.log("Number:", num);
});

// STEP 4.2: ARRAY OF OBJECTS

let students = [
    { name: "Ana", grade: 90 },
    { name: "Ben", grade: 85 },
    { name: "Carl", grade: 95 }
];

// Access objects inside array
students.forEach(student => {
    console.log(student.name + ":", student.grade);
});

// Filter students with grade > 90
let topStudents = students.filter(s => s.grade > 90);
console.log("Top Students:", topStudents);