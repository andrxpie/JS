console.log("Task 1");

let sentence = "cascade style sheet";
function countSpaces(sentence) {
  let counter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") counter++;
  }

  console.log(`spaces: ${counter}`);
}

countSpaces(sentence);

console.log("");
console.log("Task 2");

function firstToUpperCase(sentence) {
  let fl = sentence[0].toUpperCase();

  console.log(`sentence: ${fl + sentence.slice(1)}`);
}

firstToUpperCase(sentence);

console.log("");
console.log("Task 3");

function countWords(sentence) {
  let counter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") counter++;
  }

  if(sentence[sentence.length - 1] == ' ') counter--;

  console.log(`words: ${counter + 1}`);
}

countWords(sentence);

console.log("");
console.log("Task 4");

function toAbbreviation(sentence) {
  let abb = sentence.toUpperCase()[0];
  
  for (let i = 0; i < sentence.length; i++) {
    if(i != sentence.length - 1) {
        if(sentence[i] == ' ') abb += sentence[i + 1].toUpperCase();
    }
  }

  console.log(`abb: ${abb}`);
}

toAbbreviation(sentence);

console.log("");
console.log("Task 5");

function isPalindrome(sentence) {
  let copy = sentence.reverse;

  let isP = true;
  if(copy != sentence) {
    isPalindrome = false;
  }

  console.log(`is palindrome?: ${isP}`);
}

isPalindrome("anna");