function getSumm(arr, start, end) {
    return new Promise((res, rej) => {
      if (start >= end) rej(new RangeError("Incorrect range!"));
  
      let sum = 0;
      for (let i = start; i < end; i++) sum += arr[i];
  
      res(sum);
    });
  }
  
  getSumm([1, 2, 3, 4, 5], +prompt("Start"), +prompt("End"))
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
  
  
  