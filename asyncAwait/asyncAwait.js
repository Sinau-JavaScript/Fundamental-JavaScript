console.log("---------------- exam1 async");
function displayer(some) {
  console.log(some);
}

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    displayer(value);
  },
  function (error) {
    displayer(error);
  }
);

console.log("---------------- contoh jika hanya butuh respons normal");
function displayer2(some) {
  console.log(some);
}

async function myFunction2() {
  return "Hello2";
}

myFunction2().then(function (value) {
  displayer2(value);
});

console.log("----------------- exam await");
async function displayGreating() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Hello World");
  });
  console.log(await myPromise);
}
displayGreating();

console.log("----------------- exam await tanpa reject");
async function displayGeating2() {
  let myPromise = new Promise(function (resolve) {
    resolve("Good Morning");
  });
  console.log(await myPromise);
}
displayGeating2();

console.log("------------------ async await pada waiting for a timeout");
async function displayGreeting() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Good Luck");
    }, 3000);
  });
  console.log(await myPromise);
}
displayGreeting();
