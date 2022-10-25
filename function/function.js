console.log("-------------- Function -------");

function tambah(value1, value2) {
  return value1 + value2;
}

function kurang(value1, value2) {
  return value1 - value2;
}

function kali(value1, value2) {
  return value1 * value2;
}

function calculate(value1, value2, arg) {
  switch (arg) {
    case "tambah":
      return tambah(value1, value2);
    case "kurang":
      return kurang(value1, value2);
    case "kali":
      return kali(value1, value2);
  }
}

console.log(calculate(2, 3, "tambah"));
console.log(calculate(2, 3, "kali"));
console.log(calculate(2, 3, "kurang"));

console.log("-------------- Declaration Function");
function hello(name) {
  console.log(`hello ${name}`);
}

hello("john"); //hello john

console.log("-------------- Expression Function ");
let morning = function (name) {
  console.log(`good morning ${name}`);
};

morning("john"); //good morning john

console.log("-------------- Arrow Function");
let night = (name) => {
  console.log(`good night ${name}`);
};

night("john"); //goog night john
// function, looping, mthod array, method object, method string, method math, percabangan logic (if else or and dll), ternary
