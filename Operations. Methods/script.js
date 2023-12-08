console.log("Task 1 & 2");
console.log("");

let array = new Array(20);
for (let i = 0; i < 20; i++) {
  array[i] = Math.round(Math.random() * 100);
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 3");
console.log("");

if (array.find((x) => x % 7 == 0)) {
  console.log("ans: yes");
} else {
  console.log("ans: no");
}

console.log("");
console.log("Task 4");
console.log("");

array.sort((a, b) => b - a);
for (let i = 0; i < 20; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 5");
console.log("");

array.fill(0, array.length / 2, array.length);
for (let i = 0; i < 20; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 6");
console.log("");

array.splice(0, 3);
for (let i = 0; i < 17; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}

console.log("");
console.log("Task 7");
console.log("");

let arr3 = [1, 2, 3];
if (arr3.filter((x, ind) => arr3.indexOf(x, ind+1) != -1).length > 0) {
  console.log("ans: yes");
}

console.log("");
console.log("Task 8");
console.log("");

let array2 = array.slice(1, array.length - 1);
for (let i = 0; i < array2.length; i++) {
  console.log(`[${i + 1}] - ` + `${array[i]}`);
}
