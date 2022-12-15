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

## Looping Array Elements

```
const timEbisu = ["Ebisu", "Konohamaru", "Moegi", "Udon"];
let txt = "";

for (let i = 0; i < timEbisu.length; i++) {
  txt += `${timEbisu[i]} \n`;
}

console.log(txt);
// Ebisu
// Konohamaru
// Moegi
// Udon
```

Kita juga dapat melakukan looping menggunkan forEach

```
const fruits = ["banana", "orange", "apple", "mango"];
let txt2 = "";
fruits.forEach(displayer);

function displayer(value) {
  txt2 += `${value} \n`;
}

console.log(txt2);
// banana
// orange
// apple
// mango
```

## Adding Array Element

Cara termudah untuk menambahkan elemen baru ke dalam array adalah menggunakan metode push() :

```

const hokage = [
  "Hashirama",
  "Tobirama",
  "Hiruzen",
  "Minato",
  "Tsunade",
  "Kakashi",
];

console.log(hokage);
//[ 'Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi' ]

hokage.push("Naruto");
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto' ]
```

Elemen baru juga dapat ditambahkan ke array menggunakan properti length:

```
hokage[hokage.length] = "Sarada";
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sarada' ]
```

## How to Recognize an Array

Saat kita menggunakan operator typeof untuk mencari tahu apakah sebuah variabel array ata bukan, operator tersebut akan mereturn object

```
const yonko = ["Big Mom", "Shirohige", "Shanks", "Kaido"];
console.log(typeof yonko); //object
```

Untuk mengatasi masalah ini ECMAScript 5 (JavaScript 2009) mendefinisikan metode Array.isArray():

```
console.log(Array.isArray(yonko)); //true
```

Method ini akan menggembalikan true jika variabel yang dimaksud benar array, dan akan mereturn false jika sebaliknya

kita juga bisa menggunakan operator instanceof

```
console.log(yonko instanceof Array); //true
```

Operator ini jugan akan mereturn true jika variabel yang dituju dibuat dengan konstruktor tertentu (dalam hal ini Array), dan akan mereturn false jika sebaliknya
