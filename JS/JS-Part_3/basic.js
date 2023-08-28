// strings
name = "Swamp   "

// String methods
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(3));
console.log(name.replace("p","t"));

// Array
students = ["riya", "swamp", "shagun"]
console.log(students[2]);

// Array Methods
cars = ["bmw", "audi", "hyundai"]

// Push
// adde to the last element
cars.push("tesla")
console.log(cars);

// Pop
// removes the last element
cars.pop()
console.log(cars);

// Unshift
// adds to the first element
cars.unshift("MG");
console.log(cars);

// Shift
// removes the first element
cars.shift()
console.log(cars);


// Includes
// checks if element in array or not 
console.log(cars.includes("bmw"));

// Concat
// joins to arrays
console.log(students.concat(cars));

// Slice
// same as for strings
console.log(students.slice(2));

// Sort
console.log(students);
console.log(students.sort());

// Reverse
// reverses the array
console.log(students.reverse());

// Tic Tac Toe representation
const game = [["X", "" , "O"],
              ["" , "X", "" ],
              ["O", "" , "X"]]
for (const row of game){
    console.log(row);
}

