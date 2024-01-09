console.log("Task 1");
console.log("");

let timeNow = new Date();

if (timeNow.getHours() >= 0 && timeNow.getHours() < 6)
  console.log("Good night");
else if (timeNow.getHours() >= 6 && timeNow.getHours() <= 10)
  console.log("Good morning");
else if (timeNow.getHours() > 10 && timeNow.getHours() < 17)
  console.log("Good day");
else if (timeNow.getHours() >= 17 && timeNow.getHours() <= 23)
  console.log("Good evening");

console.log("");

console.log("Task 2 & 3");
console.log("");

let array = new Array(20);
for (let i = 0; i < 20; i++) {
  array[i] = Math.round(Math.random() * 100);
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 4");
console.log("");

if (array.find((x) => x % 7 == 0)) {
  console.log("ans: yes");
} else {
  console.log("ans: no");
}

console.log("");
console.log("Task 5");
console.log("");

array.sort((a, b) => b - a);
for (let i = 0; i < 20; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 6");
console.log("");

array.fill(0, array.length / 2, array.length);
for (let i = 0; i < 20; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 7");
console.log("");

let arr3 = [1, 2, 3];
if (arr3.filter((x, ind) => arr3.indexOf(x, ind + 1) != -1).length > 0) {
  console.log("ans: yes");
} else {
  console.log("ans: no");
}

console.log("");
console.log("Task 8");
console.log("");

let array2 = array.slice(1, array.length - 1);
for (let i = 0; i < array2.length; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 9");
console.log("");

let even = 0;
let arr4 = [5, 35, 2, 56, 3, 6];
for (let i = 0; i < arr4.length; i++)
  if(arr4[i] % 2 == 0) even++;

console.log(`Even numbers: ${even}`);