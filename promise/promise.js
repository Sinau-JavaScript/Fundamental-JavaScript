console.log("------------ex Promise");
let myPromise = new Promise(function (resolve, reject) {
  // some code (try to change x to 5)
  let x = 0;

  if (x === 0) {
    resolve("ok");
  } else {
    reject("error");
  }
});

myPromise.then(
  function (value) {
    displayer(value);
  },
  function (error) {
    displayer(error);
  }
); //ok

function displayer(some) {
  console.log(some);
}

console.log("------------- promise waiting for a Timeout");

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello");
  }, 3000);
});

promise.then(function (value) {
  console.log(value);
}); //Hello
