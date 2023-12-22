function getFibonacci() {
  let num = 1;
  let prev = 0;

  return function () {
    let tmp = num;
    num = num + prev;
    prev = tmp;
    return num;
  };
}

const fib = getFibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

