console.log("Task 1");
console.log("");

let countOfBrackets = prompt("Count of brackets");

function printBrackets(count) {
  if (count < 0) {
    throw new RangeError("Out of range");
  }
  if (!(count instanceof Number)) {
    throw new TypeError("Invalid value type");
  }

  let string = "";

  for (let i = 0; i < count; i++) {
    string += "(";
  }

  for (let i = 0; i < count; i++) {
    string += ")";
  }

  return string;
}

try {
  console.log(`brackets: ${printBrackets("7867")}`);
} catch (error) {
  console.log(error.stack);
}

console.log("");
console.log("Task 2");
console.log("");

function getRectangleArea(width, height) {
  if (!(width instanceof Number) || !(height instanceof String)) {
    throw new TypeError("Invalid data type");
  }

  return width * height;
}

let uWidth = prompt("Width");
let uHeight = Number.parseInt(prompt("Height"));

try {
  console.log(`square: ${getRectangleArea(uWidth, uHeight)}`);
} catch (error) {
  console.log(error.stack);
}

console.log("");
console.log("Task 3");
console.log("");

class WeekdayError extends RangeError {
  constructor(message) {
    super(message || "Invalid day number");
    this.name = "WeekdayError";
  }
}

function showWeekdayName(day) {
  if (Number.parseInt(uDay) < 1 || Number.parseInt(uDay) > 7) {
    throw new WeekdayError("Incorrect weekday number");
  }

  let days = [
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[Number.parseInt(day) - 1];
}

let uDay = prompt("Weekday number");

try {
  console.log(`${uDay} day is: ${showWeekdayName(uDay)}`);
} catch (error) {
  console.log(error.stack);
}
