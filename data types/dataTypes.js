console.log("-------------- Check Tipe data -------");
let x = "hello world";
let y = 10;
console.log(typeof x); //string
console.log(typeof y); //number

console.log("------------- Tipe data number------------");
// angaka spesial
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity
console.log(0 / 0); //NaN
console.log(100 / "sepuluh"); // NaN
console.log(100 / "10"); // 10
console.log(10 - "1"); // 9
console.log(10 + "1"); // 101
console.log(100 * "10"); //1000
console.log(123e5); //12300000
console.log(123e-5); //0.00123

console.log("-------------- isNaN()----------------");
console.log(isNaN(10)); //false
console.log(isNaN("7")); //false
console.log(typeof "7"); //stirng
console.log(isNaN("contoh")); //true

console.log("-------------- isNaN()----------------");
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(2.5)); //false
console.log(Number.isInteger("2")); //false
console.log(Number.isInteger("tiga")); //false

console.log(`--------------- Number Methods ----------`);
console.log(`----------- toString()`);
let number = 23010;
console.log(typeof number); //number
let tostring = number.toString();
console.log(typeof tostring); //string

console.log(`----------toExponential()`);
let number2 = 23.3;
console.log(typeof number2);

console.log(number2.toExponential()); //2.33e+1
console.log(typeof number2.toExponential()); //string

console.log(number2.toExponential(1));
console.log(typeof number2.toExponential(1)); //string

console.log(number2.toExponential(2));
console.log(typeof number2.toExponential(2)); //string

console.log(number2.toExponential(3));
console.log(typeof number2.toExponential(3)); //string

console.log(number2.toExponential(4));
console.log(typeof number2.toExponential(4)); //string

console.log(`----------Fixed()`);
let numberFixed = 6.33;
console.log(typeof numberFixed);

console.log(numberFixed.toFixed()); //6
console.log(typeof numberFixed.toFixed()); //string

console.log(numberFixed.toFixed(1)); //6.3
console.log(typeof numberFixed.toFixed(1)); //string

console.log(numberFixed.toFixed(2)); //6.33
console.log(typeof numberFixed.toFixed(2)); //string

console.log(numberFixed.toFixed(3)); //6.330
console.log(typeof numberFixed.toFixed(3)); //string

console.log(numberFixed.toFixed(4)); //6.3300
console.log(typeof numberFixed.toFixed(4)); //string

console.log(`----------toFixed()`);
let numberPrecission = 5.67;
console.log(typeof numberPrecission); //number
console.log(numberPrecission.toPrecision()); //5.67
console.log(typeof numberPrecission.toPrecision()); //string

console.log(numberPrecission.toPrecision(1)); //6
console.log(typeof numberPrecission.toPrecision(1)); //string

console.log(numberPrecission.toPrecision(2)); //5.7
console.log(typeof numberPrecission.toPrecision(2)); //string

console.log(numberPrecission.toPrecision(3)); //5.67
console.log(typeof numberPrecission.toPrecision(3)); //string

console.log(numberPrecission.toPrecision(4)); //5.670
console.log(typeof numberPrecission.toPrecision(4)); //string

console.log(numberPrecission.toPrecision(5)); //5.6700
console.log(typeof numberPrecission.toPrecision(5)); //string

console.log("---------- Convert to Number ------------");
console.log("-----------parseInt");
console.log(parseInt(2)); //2
console.log(typeof parseInt(2)); //number

console.log(parseInt(3.9)); //3
console.log(typeof parseInt(3.9)); //number

console.log(parseInt("10")); //10
console.log(typeof "10"); //string
console.log(typeof parseInt(`10`)); //number

console.log(parseInt("10.5")); //10
console.log(typeof parseInt("10.5")); //number

console.log(parseInt("oke")); //NaN;
console.log(typeof parseInt("oke")); //number

console.log("-----------parseFloat()");
console.log(10); //10
console.log(parseFloat(11.45)); //11.45
console.log(parseFloat(11.6)); //11.6

console.log(parseFloat("10")); //10
console.log(typeof parseFloat("10")); //number

console.log(parseFloat("10.45")); //10.45
console.log(parseFloat("10 45")); //10

console.log(parseFloat("10 years")); //10
console.log(typeof parseFloat("10 years")); //number

console.log(parseFloat("years 10")); //NaN
console.log(typeof parseFloat("years 10")); //number

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
