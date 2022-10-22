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

#### Angka Spesial

`console.log(2 / 0); // Infinity` <br>
`console.log(-2 / 0); // -Infinity` <br> `console.log(0 / 0); //NaN` <br>
`console.log(100 / "sepuluh"); // NaN` <br> `console.log(100 / "10") // 10` <br>
`console.log(10 - "1"); // 9 ` <br>
`console.log(10 + "1"); // 101` <br>
` console.log(100 \* "10"); //1000` <br>
`console.log(123e5); //12300000` <br>
`console.log(123e-5); //0.00123` <br>

#### Number Methods

#### toString()

Digunakan untuk mengembalikan/mengubah tipe data suatu variabel menjadi string <br>

`let number = 23010;` <br>
`console.log(typeof number); //number` <br>
`let tostring = number.toString();` <br>
`console.log(typeof tostring); //string` <br>

#### toExponential()

Digunakan untuk mengubah format penulisan data number menjadi format exponensial dan merubah tipe datanya menjadi string <br>

`let number2 = 23.3;` <br>
`console.log(typeof number2); //number` <br> <br>

`console.log(number2.toExponential()); //2.33e+1` <br>
`console.log(typeof number2.toExponential()); //string` <br> <br>
Di dalam metode toExponential ini bisa ditambahkan parameter yang mana parameter ini akan menentukan jumlah angka di belakang koma, seperti contoh dibawah ini

`console.log(number2.toExponential(1)); //2.3e+1` <br>
`console.log(typeof number2.toExponential(1)); //string` <br><br>
`console.log(number2.toExponential(2)); //2.33e+1` <br>
`console.log(typeof number2.toExponential(2)); //string` <br> <br>
`console.log(number2.toExponential(3)); //2.330e+1` <br>
`console.log(typeof number2.toExponential(3)); //string` <br><br>
`console.log(number2.toExponential(4)); //2.3300e+1` <br>
`console.log(typeof number2.toExponential(4)); //string`

#### toFixed()

Untuk mengembalikan string dan ditulis dengan jumlah desimal yang ditentukan

`let numberFixed = 6.33;`<br>
`console.log(typeof numberFixed) //number ;`

`console.log(numberFixed.toFixed()); //6` <br>
`console.log(typeof numberFixed.toFixed()); //string` <br><br>

`console.log(numberFixed.toFixed(1)); //6.3`

`console.log(typeof numberFixed.toFixed(1)); //string`

console.log(numberFixed.toFixed(2)); //6.33
console.log(typeof numberFixed.toFixed(2)); //string

console.log(numberFixed.toFixed(3)); //6.330
console.log(typeof numberFixed.toFixed(3)); //string

console.log(numberFixed.toFixed(4)); //6.3300
console.log(typeof numberFixed.toFixed(4)); //string
