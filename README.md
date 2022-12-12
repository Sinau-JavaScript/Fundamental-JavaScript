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
