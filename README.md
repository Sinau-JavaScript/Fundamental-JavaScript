# Fundamental-JavaScript

To learn fundamental javascript

## Install nodemon di linux

`sudo npm install -g nodemon`

### Cara Penggunaannya

`nodemon [nama file]`
<br>
penjelasan lebih lanjut [disini](https://www.youtube.com/watch?v=xIcXqKEUpAw)

## Data Types

### Check a Data Type

` let x = "hello world";` <br>
`let y = 10;` <br>
`console.log(typeof x); //string` <br>
`console.log(typeof y); //number`

### Tipe Data Number

#### integer dan float

`let num1 = 1 //integer`<br>
`let num2 = 1.5 //float`

#### Angka Spesial

`console.log(2 / 0); // Infinity` <br>
`console.log(-2 / 0); // -Infinity` <br> `console.log(0 / 0); //NaN` <br>
`console.log(100 / "sepuluh"); // NaN` <br> `console.log(100 / "10") // 10` <br>
`console.log(10 - "1"); // 9 ` <br>
`console.log(10 + "1"); // 101` <br>
` console.log(100 \* "10"); //1000` <br>
`console.log(123e5); //12300000` <br>
`console.log(123e-5); //0.00123` <br>

#### isNaN()

Untuk mengecek data sebuah variabel NaN atau bukan, jikan NaN method ini akan mengembalikan nilai true jika bukan NaN method ini akan mengembalikan nilai false

`console.log(isNaN(10)); //false` <br>
`console.log(isNaN("7")); //false` <br>
`console.log(typeof "7"); //stirng` <br>
`console.log(isNaN("contoh")); //true`

#### Number.isInteger()

Untuk mengecek value sebuah variabel integer atau bukan, jika integer method ini akan mengembalikan nilai true tetapi jika bukan method ini akan mengambalikan false

`console.log(Number.isInteger(1)); //true` <br>
`console.log(Number.isInteger(2.5)); //false` <br>
`console.log(Number.isInteger("2")); //false` <br>
`console.log(Number.isInteger("tiga")); //false` <br>

### Number Methods

#### toString()

Digunakan untuk mengembalikan/mengubah tipe data suatu variabel menjadi string <br>

`let number = 23010;` <br>
`console.log(typeof number); //number` <br>
`let tostring = number.toString();` <br>
`console.log(typeof tostring); //string` <br>

#### toExponential()

Digunakan untuk mengubah format penulisan data number menjadi format exponensial dan merubah tipe datanya menjadi string <br>

`let number2 = 23.3;` <br>
`console.log(typeof number2); //number`

`console.log(number2.toExponential()); //2.33e+1` <br>
`console.log(typeof number2.toExponential()); //string` <br> <br>
Di dalam metode toExponential ini bisa ditambahkan parameter yang mana parameter ini akan menentukan jumlah angka di belakang koma, seperti contoh dibawah ini

`console.log(number2.toExponential(1)); //2.3e+1` <br>
`console.log(typeof number2.toExponential(1)); //string`

`console.log(number2.toExponential(2)); //2.33e+1` <br>
`console.log(typeof number2.toExponential(2)); //string`

`console.log(number2.toExponential(3)); //2.330e+1` <br>
`console.log(typeof number2.toExponential(3)); //string`

`console.log(number2.toExponential(4)); //2.3300e+1` <br>
`console.log(typeof number2.toExponential(4)); //string`

#### toFixed()

Untuk mengembalikan string dan ditulis dengan jumlah desimal yang ditentukan

`let numberFixed = 6.33;`<br>
`console.log(typeof numberFixed) //number ;` <br> <br>

Sama seperti metode toExponential, di metode toFixed juga bisa ditambahkan parameter yang mana parameter ini akan menentukan jumlah angka di belakang koma, seperti contoh dibawah ini

`console.log(numberFixed.toFixed()); //6` <br>
`console.log(typeof numberFixed.toFixed()); //string`

`console.log(numberFixed.toFixed(1)); //6.3` <br>
`console.log(typeof numberFixed.toFixed(1)); //string`

`console.log(numberFixed.toFixed(2)); //6.33` <br>
`console.log(typeof numberFixed.toFixed(2)); //string`

`console.log(numberFixed.toFixed(3)); //6.330` <br>
`console.log(typeof numberFixed.toFixed(3)); //string`

`console.log(numberFixed.toFixed(4)); //6.3300` <br>
`console.log(typeof numberFixed.toFixed(4)); //string`

#### toPrecission()

Untuk mengembalikan string, dengan number yang ditulis dengan ukuran panjang tertentu <br>
`let numberPrecission = 5.67;`<br>
`console.log(typeof numberPrecission); //number` <br>
`console.log(numberPrecission.toPrecision()); //5.67` <br>
`console.log(typeof numberPrecission.toPrecision()); //string`

di metode toPrecission juga bisa ditambahkan parameter yang mana parameter ini akan menentukan ukuran atau jumlah angka, seperti contoh dibawah ini

`console.log(numberPrecission.toPrecision(1)); //6` <br>
`console.log(typeof numberPrecission.toPrecision(1)); //string`

`console.log(numberPrecission.toPrecision(2)); //5.7` <br>
`console.log(typeof numberPrecission.toPrecision(2)); //string`

`console.log(numberPrecission.toPrecision(3)); //5.67` <br>
`console.log(typeof numberPrecission.toPrecision(3)); //string`

`console.log(numberPrecission.toPrecision(4)); //5.670` <br>
`console.log(typeof numberPrecission.toPrecision(4)); //string`

`console.log(numberPrecission.toPrecision(5)); //5.6700` <br>
`console.log(typeof numberPrecission.toPrecision(5)); //string`

### Convert to Number

#### ParseInt()

Untuk mengembalikan argumentnya menjadi float

`console.log(parseInt(2)); //2` <br>
`console.log(typeof parseInt(2)); //number` <br>

`console.log(parseInt(3.9)); //3` <br>
`console.log(typeof parseInt(3.9)); //number` <br>

`console.log(parseInt("10")); //10` <br>
`console.log(typeof "10"); //string` <br>
`console.log(typeof parseInt("10")); //number` <br>

`console.log(parseInt("10.5")); //10` <br>
`console.log(typeof parseInt("10.5")); //number` <br>

`console.log(parseInt("oke")); //NaN;` <br>
`console.log(typeof parseInt("oke")); //number` <br>

#### parseFloat()

Untuk mengembalikan argumentnya menjadi float

`console.log(10); //10` <br>
`console.log(parseFloat(11.45)); //11.45` <br>
`console.log(parseFloat(11.6)); //11.6` <br>

`console.log(parseFloat("10")); //10` <br>
`console.log(typeof parseFloat("10")); //number`

`console.log(parseFloat("10.45")); //10.45` <br>
`console.log(parseFloat("10 45")); //10`

`console.log(parseFloat("10 years")); //10` <br>
`console.log(typeof parseFloat("10 years")); //number`

`console.log(parseFloat("years 10")); //NaN` <br>
`console.log(typeof parseFloat("years 10")); //number`

## Function

### Declaration Function

Berikut format penulisannya:

```
function namaFunction(param1, param2) {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg2)`

berikut contohnya:

```
function hello(name) {
  console.log(`hello ${name}`);
}

hello("john"); //hello john
```

### Expression Function

berikut format penulisannya:

```
let namaFunction = function(param1, param2) {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg2)` <br>

berikut contohnya:

```
let morning = function (name) {
  console.log(`good morning ${name}`);
};

morning("john"); //good morning john
```

### Arrow Function

berikut format penulisannya:

```
let namaFunction = (param1, param2) => {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg1)`

berikut contohnya:

```
let night = (name) => {
console.log(`good night ${name}`);
};

night("john"); //goog night john
```
