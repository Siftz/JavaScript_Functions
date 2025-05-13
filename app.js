console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        console.log("Please provide a positive number!");
        return;
    } //loop from 1 to count
    for (let i = 1; i <= count; i++) { 
        // check if number is odd
        if (i % 2 !== 0) {
            console.log(i); // print the odd number
        } 
    }
}
//ex usage:
printOdds(20);
// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "User", age = undefined) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;

    if (age === undefined) {
        console.log("Please provide your age.");
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
//example usage 
checkAge("Logan", 35); // output should read : Congrats Logan, you can drive!
checkAge("Madison", 30); // same output as above
checkAge("Grace", 14); // output should read : Sorry Grace, but you need to wait until you are 16.
checkAge(); // output should be ; Please provide your age.

console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) { // this should take two numbers as input (x and y)
  if (x === 0 && y === 0) {
    console.log("The point is at the origin."); // print the point is at the origin
  } else if (x === 0) {
    console.log(`(${x}, ${y}) is on the y-axis.`); // axis check
  } else if (y === 0) {
    console.log(`(${x}, ${y}) is on the x-axis.`); // axis check for y
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 1.`); //quadrant checks 
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 2.`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 3.`);
  } else {
    console.log(`(${x}, ${y}) is in Quadrant 4.`);
  }
}

// Example usage:
checkQuadrant(0, 2);  // output: (0, 2) is on the y-axis.
checkQuadrant(1, 2);  // output: (1, 2) is in Quadrant 1.
checkQuadrant(-6, 18); // output: (-6, 18) is in Quadrant 2.
checkQuadrant(0, 0);  // output: The point is at the origin.