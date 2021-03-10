//1. Write a traditional function that converts fahrenheit to celsius

function FtoC(num) {
  return ((num - 32) * 5) / 9;
}

// console.log(FtoC(-40));
//2. Modify your function for #10 to be arrow syntax
const FtoC_Arrow = (num) => ((num - 32) * 5) / 9;

//3. Write a one-line arrow function that takes in a number and returns a string stating whether the
//   number is positive or negative using a ternary operator (assume the number will never be zero)

const getSign = (num) => (num > 0 ? "positive" : "negative");

//4. Write a switch case for a 'day' variable that prints out something
// based off of what day of the week it is
// i.e. if its monday print "good luck" or wednesday print "hump day" or friday print "party"
const getHappiness = (day) => {
  switch (day) {
    case "Monday":
      console.log(":(");
      break;
    case "Tuesday":
      console.log(":/");
      break;
    case "Wednesday":
    case "Thursday":
      console.log(":|");
      break;
    case "Friday":
      console.log(":)");
      break;
    default:
      console.log("That is not a day of the week!");
  }
};

//5. Write a function that takes in a number, and uses a for loop to
//return the sum of every number from 1 up to that number
//ex. sumUp(7) = 1 + 2 + 3 + 4 + 5 + 6 + 7
const sumUp = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumUp(7));

//6. Write a function that takes in a number, and prints out every number up to and including that value.
//For each multiple of 3, instead print "fizz". For each multiple of 5, print "buzz". For numbers that
//are multiples of 3 AND 5, print "fizzbuzz"

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    let printString = "";
    if (i % 3 === 0) printString += "fizz";
    if (i % 5 === 0) printString += "buzz";

    if (printString === "") console.log(i);
    else console.log(printString);

    // console.log(printString ? printString : i);

    // console.log(printString || i)
  }
};

// fizzBuzz(15);
//7. Create an object for yourself with first Name, last Name,
//   a list of three of your family members' names, and age
const william = {
  firstName: "William",
  lastName: "Helmrath",
  familyMembers: ["Lisa", "Bill", "Ethan"],
  age: 20,
};

const getFieldValues = (obj) => Object.keys(obj);

const printFieldValues = (obj) =>
  Object.keys(obj).forEach((field) => console.log(field));

console.log(getFieldValues(william));
//8. Write a function that takes in an array and prints out the amount of truthy values in that array
//   using .forEach()
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthyValues = (array) => {
  let sum = 0;

  array.forEach((value) => {
    if (value) sum += 1;
  });

  return sum;
};

// console.log(truthyValues(exampleArray));

//9. Using the map function and arrow syntax, return an array of objects
//   that contain a fullName field and an averageGrade field representing
//   the letter grade that corresponds to their GPA

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const newArray = attendance.map((student) => {
  const fullName = student.firstName + " " + student.lastName;
  let averageGrade;

  if (student.gpa >= 4) averageGrade = "A";
  else if (student.gpa >= 3.7) averageGrade = "B+";
  else if (student.gpa >= 3.3) averageGrade = "B";
  else if (student.gpa >= 3) averageGrade = "B-";
  else if (student.gpa >= 2.7) averageGrade = "C+";
  else if (student.gpa >= 2.3) averageGrade = "C";
  else if (student.gpa >= 2) averageGrade = "C-";
  else averageGrade = "Eh, it's a failing grade :/";

  return { fullName, averageGrade };
});

// console.log(newArray);

const getRandomArray = (min, max) => {
  let array = [];
  for (let i = 0; i < 5; i++) {
    let rand = Math.random() * max;

    while (rand < min) rand = Math.random() * max;

    array.push(rand);
  }
  return array;
};

const getRandomArrayV2 = (min, max) => {
  let array = [];
  for (let i = 0; i < 5; i++) {
    const range = max - min;

    array.push(Math.random() * range + min);
  }
  return array;
};
