## Callbacks

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain. Teknik ini memungkinkan suatu fungsi untuk memanggil fungsi lain. Fungsi callbakc dapat dijalankan setelah fungsi lain selesai dijalankan

### Sequence Control

Terkadang kita ingin memiliki kontrol yang lebih baik saat menjalankan suatu fungsi. Misalkan kita ingin melakukan perhitungan, lalu menampilkan hasilnya. Seperti di contoh berikut kita dapat memanggil fungsi kalkulator (myCalculator), menyimpan hasilnya, lalu memanggil fungsi lain (myDisplayer) untuk menampilkan hasilnya:

```
function myCalculator(num1, num2) {
  return num1 + num2;
}

function displayer(some) {
  console.log(some);
}

displayer(myCalculator(2, 6)); //8

```

Atau kita bisa memanggil function kalkulator (myCalculator2) dan membiarkan function kalkulator tersebut memanggil function displayer2 untuk menampilkan hasil dari funnction kalkulator.

```
function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  displayer2(sum);
}

myCalculator2(3, 3); //6

function displayer2(some) {
  console.log(some);
}
```

Masalah dengan contoh pertama di atas adalah Anda harus memanggil dua fungsi untuk menampilkan hasilnya.

Masalah dengan contoh kedua, adalah Anda tidak dapat mencegah fungsi kalkulator menampilkan hasilnya.

Karena problem inilah kita butuh Callbakcs

### Callbacks JavaScript

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain.

#### example 1

Menggunakan callback, Anda dapat memanggil fungsi kalkulator (myCalculator3) dengan callback (myCallback), dan biarkan fungsi kalkulator menjalankan callback setelah perhitungan selesai:

```
function myCalculator3(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator3(2, 5, displayer3); //7

function displayer3(some) {
  console.log(some);
}

```

#### example 2

```
const myNums = [4, 1, -20, -7, 5, 9, -6];

const posNums = removeNeg(myNums, (x) => x >= 0);

function removeNeg(numbers, callback) {
  let myArr = [];
  for (let x of numbers) {
    if (callback(x)) {
      myArr.push(x);
    }
  }
  return myArr;
}

console.log(posNums); //[ 4, 1, 5, 9 ]
```

## Asynchronous

fungsi yang berjalan paralel dengan fungsi lain disebut asynchronous.

### Waiting a Timeout

Saat menggunakan fungsi setTimeout JavaScript (), kita dapat menentukan fungsi callback untuk dieksekusi setelah waktu habis:

```
setTimeout(display, 3000);

function display() {
  console.log("Hallo World!");
}
```

Pada contoh di atas, function display digunakan sebagai callback. function display diteruskan ke setTimeout() sebagai argumen. 3000 adalah jumlah milidetik sebelum waktu habis, jadi display() akan dijalankan setelah 3 detik.

Kita juga bisa meneruskan seluruh fungsi sebagai argumen ke fungsi lain:

```
setTimeout(function () {displayer("Hello");}, 5000);

function displayer(some) {
  console.log(some);
}
```

Pada contoh di atas, function(){ displayer("Hello"); } digunakan sebagai panggilan balik. Ini adalah fungsi yang lengkap. Fungsi lengkap diteruskan ke setTimeout() sebagai argumen.

### Waiting for Interval

Saat menggunakan fungsi JavaScript setInterval(), kita dapat menentukan fungsi panggilan balik yang akan dijalankan untuk setiap interval:

```
setInterval(timeDisplayer, 1000);

function timeDisplayer() {
  let d = new Date();
  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}
```

Pada contoh di atas, timeDisplayer() digunakan sebagai callback.
<br>timeDisplayer() diteruskan ke setInterval() sebagai argumen.
<br>
1000 adalah jumlah milisecond antar interval, jadi timeDisplayer() akan dipanggil setiap detik.
