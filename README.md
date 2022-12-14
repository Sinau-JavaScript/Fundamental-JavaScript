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

### Callback Alternatives

Dengan pemrograman asinkron, program JavaScript dapat memulai tugas yang berjalan lama, dan terus menjalankan tugas lain secara paralel.
<br>
Namun, program asinkron sulit untuk ditulis dan sulit untuk di-debug.
<br>
Oleh karena itu, sebagian besar metode JavaScript asinkron modern tidak menggunakan callback. Sebagai gantinya, dalam JavaScript pemrograman asinkron diselesaikan menggunakan Promises sebagai gantinya.

## Promise

Memproduksi kode" adalah kode yang dapat memakan waktu
<br>
"Mengkonsumsi kode" adalah kode yang harus menunggu hasilnya
<br>
Promise adalah objek JavaScript yang menautkan produksi kode dan konsumsi kode

Objek promise JavaScript berisi producing code and calls untuk consuming code, berikut syntax dari promise:

```
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

Saat producing code mendapatkan hasilnya, ia harus memanggil salah satu dari dua callback:

| Result  | Call                    |
| ------- | ----------------------- |
| Success | myResolve(result value) |
| Error   | myReject(error object)  |

### Promise Object Properties

Objek Janji JavaScript dapat berupa:

- Pending
- Fulfilled
- Rejected

Objek Janji mendukung dua properti: state dan result.
<br>
Saat objek Promise "pending" (working), resultnya adalah undefined.
<br>
Saat objek Promise "Fulfilled", resultnya adalah sebuah value.
<br>
Saat objek Promise "Rejected", resultnya adalah objek error

| myPromise.state | myPromise.result |
| --------------- | ---------------- |
| "pending"       | undefined        |
| "fulfilled"     | a result value   |
| "rejected"      | an error object  |

Kita tidak dapat mengakses properti Promise states dan result.
<br>
Kita harus menggunakan metode promise untuk meghandle promise.

### Promise How To

Berikut cara menggunakan promise:

```
myPromise.then(
  function(value) { /_ code if successful _/ },
  function(error) { /_ code if some error _/ }
);
```

Promise.then() membutuhkan dua argumen, satu callback untuk success dan satu lagi untuk failure.
<br>
Keduanya opsional, sehingga Anda dapat menambahkan panggilan balik hanya untuk success atau failure.

```
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
```

Untuk mendemonstrasikan penggunaan promise, kita akan menggunakan contoh callback dari bab sebelumnya:

- Waiting for a Timeout
- Waiting for a File

### Waiting For a Timeout

```
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello");
  }, 3000);
});

promise.then(function (value) {
  console.log(value);
}); //Hello
```
