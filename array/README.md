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
