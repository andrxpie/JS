//#region Task 1

// let usersYear = prompt("Your's birthday?");
// alert(2023 - usersYear);

// let flashSize = prompt("Flash size (Gb)?");
// alert(`${Math.round((flashSize * 1000) / 820)} files can be on flash`);

//#endregion Task 1

//#region Task 2

// let usersSymbol = prompt("Enter num from 0 to 9:");

// switch (usersSymbol) {
//   case "1":
//     alert("!");
//     break;
//   case "2":
//     alert("@");
//     break;
//   case "3":
//     alert("#");
//     break;
//   case "4":
//     alert("$");
//     break;
//   case "5":
//     alert("%");
//     break;
//   case "6":
//     alert("^");
//     break;
//   case "7":
//     alert("&");
//     break;
//   case "8":
//     alert("*");
//     break;
//   case "9":
//     alert("(");
//     break;
//   case "0":
//     alert(")");
//     break;
//   default:
//     break;
// }

// let yearToCheck = prompt("Enter year (to check if he is a leap year):");
// let isLeap =
//   yearToCheck % 400 == 0 || (yearToCheck % 4 == 0 && yearToCheck % 100 != 0)
//     ? true
//     : false;
// alert(`Is ${yearToCheck} a leap year?: ${isLeap}`);

// let day = prompt("Enter day:");
// let month = prompt("Enter month:");
// let year = prompt("Enter year:");

// let date = new Date(year, month, day + 1);
// alert(`Next Year-Day-Month: ${date.getFullYear()}-${date.getDay()}-${date.getMonth()}`);

//#endregion Task 2

//#region Task 3

// let di1 = Number.parseInt(prompt("Sum all from:"));
// let di2 = Number.parseInt(prompt("To:"));

// let sum = 0;

// for (let i = di1; i <= di2; i++) {
//   sum += i;
// }

// alert(`${di1} + ... + ${di2} = ${sum}`);

// let number = prompt("Enter number to count digits in it:");
// alert(`${number.length} digits`);

// let even = 0,
//   odd = 0,
//   positive = 0,
//   negative = 0,
//   zero = 0,
//   digit;

// for (let i = 0; i < 10; i++) {
//   digit = Number.parseInt(prompt(`${i + 1} num:`));

//   if (digit == 0) {
//     zero++;
//   } else if (digit > 0) {
//     positive++;
//   } else {
//     negative++;
//   }

//   if (digit % 2 == 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }

// alert(`Even: ${even}, odd: ${odd}, positive: ${positive}, negative: ${negative}, zero: ${zero}`);

// let tomorrow = new Date();
// while(prompt("Show next day?").repeat) {
//  tomorrow.setDate(tomorrow.getDate()+1);
//  alert(`Year-Day-Month: ${tomorrow.getFullYear()}-${tomorrow.getDate()}-${tomorrow.getMonth()}`);
// }

//#endregion Task 3
