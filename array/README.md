# Array

Tipe data yang digunakan untuk manampung kumpulan elemen (nilai atau variabel), yang tiap – tiap elemennya memiliki index.

## Kenapa Array

berikut beberapa keunggulan dari penggunaan array:

- mempermudah pengelolaan nilai/data/value (penelusuran dan pencarian)
- manajemen memori (lebih ringan memori) , karena tidak memerlukan banyak variabel

## Membuat Array

### Array Literal

Array literal adalah cara termudah untuk membuat array.

```
const akatsuki = ["Deidara", "Itachi", "Hidan", "Kisame"];
console.log(akatsuki); //[ 'Deidara', 'Itachi', 'Hidan', 'Kisame' ]
```

Kita juga bisa membuat array kosong, lalu menambahkan value untuk dijadikan elemen-elemennya:

```
const jinchuriki = [];
jinchuriki[0] = "Utakata";
jinchuriki[1] = "Naruto";
jinchuriki[2] = "Gaara";
jinchuriki[3] = "Killer Bee";

console.log(jinchuriki); //[ 'Utakata', 'Naruto', 'Gaara', 'Killer Bee' ]
```

### Keyword New

Kita juga bisa membuat array menggunakan keyword New

```
const tim7 = new Array("Naruto", "Sasuke", "Sakura");
console.log(tim7); //[ 'Naruto', 'Sasuke', 'Sakura' ]
```

## Access Array

Kita dapat mengakses elemen array dengan mengacu pada nomor indeks:

```
const tim10 = ["Asuma", "Ino", "Chouji", "Shikamaru"];
console.log(tim10[0]); //Asuma
```

## Length Property

Length Property dari array mengembalikan panjang array (jumlah elemen array).

```
const tim8 = ["Akamaru", "Hinata", "Kiba", "Shino", "Kurenai"];
console.log(tim8.length); //5
```

## Accessing The First and Last Array Element

```
const timGai = ["Gai", "Neji", "Lee", "Tenten"];
console.log(timGai[0]); //Gai
console.log(timGai[timGai.length - 1]); //Tenten
```
