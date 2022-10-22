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
