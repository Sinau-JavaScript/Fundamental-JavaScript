# Object

Object merupakan kumpulan nilai, yang memiliki nama. Berikut cara penulisan Properti dan Method dalam object:

```
let car = {
  //Property
  type: "Fiat",
  model: 500,
  color: "white",

  //method
  start: () => {
    console.log("start");
  },
  drive: () => {
    console.log("drive");
  },
  stop: () => {
    console.log("stop");
  },
};
```

Berikut cara memanggilnya

```
// properti
console.log(car.type); //Fiat
console.log(car.model); //500
console.log(car.color); //white

car.start(); //start
car.drive(); //drive
car.stop(); //stop
```

## Cara Memanggil (acceess) Object

Properti di dalam Object dapat dipanggil menggunakn dot(.) atau kurung siku([]). Untuk properi yang nama key-nya lebih dari satu kata hanya dapat diakses menggunakan kurung siku:

```
let person4 = {
  "full name": "Eren Jeager",
  nickName: "Eren",
  logIt: function () {
    console.log(`${this.name} visited ${this.place} on ${this.time}`);
  },
};

console.log(person4.nickName); //Eren
console.log(person4["full name"]); //Eren Jeager
person1.logIt(); //Eren visited Wakanda on saturday

```

Seperti yang terlihat diatas harus kita perhatikan untuk memanggil meethod dalam objeckt harus ditambahkan tanda kurung (), seperti berikut:

```
person1.logIt(); //Eren visited Wakanda on saturday
```

## Penggunaan key word This

This adalah sebuah keyword khusus yang merujuk pada pada objek pemiliknya. Keyword dis tidak bisa digunakan untuk arrow function, berikut contoh penggunaanya untuk object:

```
let person1 = {
  name: "Eren",
  time: "saturday",
  place: "Wakanda",
  logIt: function () {
    console.log(`${this.name} visited ${this.place} on ${this.time}`);
  },
};

person1.logIt(); //Eren visited Wakanda on saturday
```

Object dapat dibuat dengan cara Object Literal, Function declaration, constructor function (keyword new) dan object.create()

### Object Literal

```
let shinobi1 = {
  name: "Uzumaki Naruto",
  "main jutsu": "kage bunshin no jutsu",
  secondJutsu: "Rasengan",
};

console.log(shinobi1.name); //Uzumaki Naruto
console.log(shinobi1["main jutsu"]); //kage bunshin no jutsu
console.log(shinobi1.secondJutsu); //Rasengan
```

Kekurangan object literal, saat kita akan membuat lebih dari satu object meskipun propertinya sama kita harus menuliskannya satu – satu.

### Function Declaration

```
let dataShinobi = (name, mainJutsu, secondJutsu) => {
  let shinobi = {};
  shinobi.name = name;
  shinobi["main jutsu"] = mainJutsu;
  shinobi.secondJutsu = secondJutsu;
  return shinobi;
};

console.log(dataShinobi("Uciha Sasuke", "Chidori", "Susanoo"));
//{ name: 'Uciha Sasuke', 'main jutsu': 'Chidori', secondJutsu: 'Susanoo'}

let naruto = dataShinobi("Uzumaki Naruto", "Kage bunshin no jutsu", "Rasengan");
console.log(naruto);
//{ name: 'Uzumaki Naruto', 'main jutsu': 'Kage bunshin no jutsu', secondJutsu: 'Rasengan'}
console.log(naruto.name); //Uzumaki Naruto
console.log(naruto["main jutsu"]); //Kage bunshin no jutsu
console.log(naruto.secondJutsu); // Rasengan
```

Atau bisa juga dibuat seperti ini

```
let makeUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

let user1 = makeUser("john", 30);
console.log(user1); // { name: 'john', age: 30 }
console.log(user1.name); //john
console.log(user1.age); // 30
```

### Constructor Function (Keyword New)

Marupakan function yang dikhususkan untuk membuat object. Biasanya nama functionnya diawali dengan huruf besar untuk membedakan dengan funtion declaration. <br><br>
Cara membuatnya hampir sama dengan function declaration bedanya di constructor ada keyword this yang menggantikan nama object (var namaObject) serta tidak perlu mendeklarasikan variabel dan tidak perlu menambahkan return diakhir function. <br> <br>
Cara memanggilnya juga mirip bedanya di constructor harus menggunakan keyword new sebelum nama functionnya.

```
function Akatsuki(nama, mainJutsu, secondJutsu) {
  this.nama = nama;
  this.mainJutsu = mainJutsu;
  this.secondJutsu = secondJutsu;
}

let itachi = new Akatsuki("Uchiha Itachi", "Genjutsu", "Sharingan");
console.log(itachi);
//Akatsuki {nama: 'Uchiha Itachi', mainJutsu: 'Genjutsu', secondJutsu: 'Sharingan'}

console.log(new Akatsuki("Kisame", "Doton", "Suiton"));
//Akatsuki { nama: 'Kisame', mainJutsu: 'Doton', secondJutsu: 'Suiton' }
```

## For in Loop Object

For in di dalam object digunakan untuk mengurai/memetakan semua properti di dalam object. Berikut syntaxnya:

```
for (let variable in object) {
  // code to be executed
}
```

Berikut contoh penggunaanya:

```
const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text); //John Doe 25
```

Berikut contoh lain penggunaan for in

```
let numObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(numObj);

for (properti in numObj) {
  console.log(`Obj.${properti}= ${numObj[properti]}`);
}

// Obj.a = 1;
// Obj.b = 2;
// Obj.c = 3;
// Obj.d = 4;
```

```
let person8 = { name: "John", email: "John@mail.com", age: 25, active: true };

let txt = "";
for (let prop in person8) {
  txt += `${prop} =  ${person8[prop]} \n`;
}
console.log(txt);
// name =  John
// email =  John@mail.com
// age =  25
// active =  true
```

## Menambahkan Properti

```

const person2 = {
fname: "John",
lname: "Doe",
age: 25,
};
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25 }

person2.nasionality = "english";
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25, nasionality: 'english' }

```

## Check Properti

Kita bisa memeriksa apakah properti yang kita cari tersebut ada atau tidak di dalah suatu object menggunakan operator `in`, jika ada operator ini akan mengembalikan true jika tidak ad operator ini akan mengembalikan false

```

let makeUser = (name, age) => {
return {
name: name,
age: age,
};
};

let user1 = makeUser("john", 30);
console.log(user1); // { name: 'john', age: 30 }
console.log("age" in user1); //true
console.log("address" in user1); // false

```

## Edit Properti

Berikut cara untuk perbarui property dalam object, bisa menggunakan dot (.) ataupun kurung siku ([])

```

let book = {
title: "harry poter",
author: "J K Rowling",
year: 2000,
};

console.log(book.title); //harry poter
book.title = "harry poter jilid 2";
console.log(book.title); //harry poter jilid 2

console.log(book["year"]); //2000
book["year"] = 2002;
console.log(book["year"]); //2002

```

## Menghapus Properti

```

const person3 = {
fname: "John",
lname: "Doe",
age: 25,
eyeColor: "blue",
};
console.log(person3); //{ fname: 'John', lname: 'Doe', age: 25, eyeColor: 'blue' }

delete person3.eyeColor;
console.log(person3); //{ fname: 'John', lname: 'Doe', age: 25 }

delete person3["age"];
console.log(person3); //{ fname: 'John', lname: 'Doe' }

```

## Nested Objects

Nilai di dalam sebuah object dapat berupa object lain

```

myObj = {
name: "John",
age: 30,
cars: {
car1: "Ford",
car2: "BMW",
car3: "Fiat",
},
};

```

Kita dapat mengaksesnya menggunakan menggunakan notasi dot atau braket.

```

console.log(myObj.cars.car1); //Ford
console.log(myObj.cars["car2"]); //BMW
console.log(myObj["cars"]["car3"]); //Fiat

```

Atau bisa juga dengan cara ini

```

let p1 = "cars";
let p2 = "car1";
console.log(myObj[p1][p2]); //Ford

```

## Konversi Ke Array

Properti dalam object dapat dikonversi menjadi array

```

let person5 = { name: "utsman", age: 30, address: "ta'if" };
let myArr = Object.values(person5);

console.log(myArr); //[ 'utsman', 30, "ta'if" ]

```

## JSON.stringify()

Dengan menggunakan JSON.stringify() semua property dalam object dapat ditampilkan dalam bentuk string

```

let person6 = { name: "Goku", age: 27, address: "wakanda" };
let str = JSON.stringify(person6);
console.log(str); //{"name":"Goku","age":27,"address":"wakanda"}

```

## JSON.stringify Dates

JSON.stringify dapat digunakan untuk mengkonversi tanggal menjadi string

```

let person7 = { name: "Usop", today: new Date() };

console.log(JSON.stringify(person7)); //{"name":"Usop","today":"2022-11-29T15:39:27.286Z"}

```

## Stringify Functions

JSON.stringify tidak akan mengubah function menjadi string, hasilnya akan seperti ini:

```

let shinobi = {
  name: "Sikamaru",
  age: 28,
  jutsu: function () {
  return "kagemane no jutsu";
  },
};

console.log(JSON.stringify(shinobi)); //{"name":"Sikamaru","age":28}

```

Tetapi ini dapat diakali dengan cara mengubah function tersebut menjadi string menggunakan method toString()

```

shinobi.jutsu = shinobi.jutsu.toString();

console.log(JSON.stringify(shinobi));
//{"name":"Sikamaru","age":28,"jutsu":"function () {\n return \"kagemane no jutsu\";\n }"}

```

## Pilar OOP

[referensinya disini](https://medium.com/codeacademia/belajar-fundamental-opp-dengan-javascript-c1b721677ce9) lagi males buat dokumentasi

## Accessors (Getters and Setters)

Accessors adalah fungsi untuk mendapatkan dan mengatur sebuah nilai, tapi mereka mirip seperti properti biasa pada kode eksternal.

### Getter

Digunanakan untuk mendapatkan value dari properti lain

```
let person9 = {
  name: "John",
  age: 27,
  language: "English",
  get lang() {
    return this.language;
  },
};

console.log(person9.lang); //English
```

Dari luar, properti accessor tampak seperti variabel pada umumnya. Itulah ide dari properti accesor. Kita tidak memanggil person9.lang melaui fungsi, Namun kita membacanya secara biasa: properti getter berjalan di belakang layar.

### Setter

Digunakan untuk menetapkan / memperbarui nilai suatu properti dalam objek

```
let org2 = {
  fname: "John",
  lname: "Doe",
  language: "Java",
  set lang(value) {
    this.language = value;
  },
};

org2.lang = "goLang";
console.log(org2.language);
```

## Prototypes

Prototype digunakan untuk mewariskan property atau method ke object dibawahnya/keturunannya, biasanya dibuat menggunakan object constructor

### Prototype Untuk Property

```
let Akatsuki2 = function (name, age) {
  this.name = name;
  this.age = age;
};

let obito = new Akatsuki2("obito", 30);
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
Akatsuki2.prototype.nasionality = "Konoha";
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
console.log(obito.nasionality); //Konoha
```

### Prototype Untuk Method

```
let Akatsuki3 = function (name, age) {
  this.name = name;
  this.age = age;
};

let ucihaItachi = new Akatsuki3("Uchiha Itachi", 27);
console.log(ucihaItachi); //Akatsuki3 { name: 'Uchiha Itachi', age: 27 }
Akatsuki3.prototype.showNameAge = function () {
  console.log(`His namae is ${this.name} and his age is ${this.age}`);
};
ucihaItachi.showNameAge(); //His namae is Uchiha Itachi and his age is 27
```

## Iterables

### Iterables pada String

```
const str2 = "productive";
for (let prop of str2) {
  console.log(prop);
}
// p
// r
// o
// d
// u
// c
// t
// i
// v
// e
```

### Iterables untuk Array

```
const letter = ["a", "b", "c"];
for (let prop of letter) {
  console.log(prop);
}
// a
// b
// c
```

### Home Made Iterable

Iterable ini mengembalikan value tanpa akhir setiap kali `next()` dipanggil:

```
function myNumber() {
  let x = 0;
  return {
    next: function () {
      x += 10;
      return { value: x, done: false };
    },
  };
}
const n = myNumber();
console.log(n.next()); //{ value: 10, done: false }
console.log(n.next().value); //20
console.log(n.next().value); //30
console.log(n.next().value); //40
```

### Home Made Iterable Menggunakan for of

```
let myNumbers = {};
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

for (const num of myNumbers) {
  console.log(num);
}
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
```

## Set()

Set() adalah objek yang berisikan nilai-nilai yang bersifat unik, artinya dalam objek tersebut hanya ada satu nilai saja.

```
const letters = new Set(["a", "b", "c", "a", "c", "b", "C"]);
console.log(letters); //Set(4) { 'a', 'b', 'c', 'C' }
console.log(letters.size); //4
```

### Membuat Set dengan method add value

```
const letters2 = new Set();
letters2.add(1);
letters2.add(2);
letters2.add(2);
letters2.add(3);
console.log(letters2); //Set(3) { 1, 2, 3 }
console.log(letters2.size); //3
```

### Membuat Set dengan Method add Variable

```
let numb = new Set();
let a = 1;
let b = 2;
let c = 3;
let d = 1;
let e = 3;
numb.add(a);
numb.add(b);
numb.add(c);
numb.add(d);
numb.add(e);

console.log(numb); //Set(3) { 1, 2, 3 }
console.log(numb.size); //3
```

### forEach Pada Set

forEach digunakan untuk mereturn setiap value pada Set()

```
let letters3 = new Set(["a", "b", "c", "d"]);
let txt2 = "";
letters3.forEach(function (value) {
  txt2 += value + "\n";
});

console.log(txt2);
// a
// b
// c
// d
```

### Values() Method

Digunakan untuk mereturn objek Iterator baru yang berisi semua item yang tersedia dalam set.

```
let nums = new Set([1, 2, 3, 4]);
let numsVal = nums.values();
console.log(numsVal); //[Set Iterator] { 1, 2, 3, 4 }
console.log(numsVal.next().value); //1
console.log(numsVal.next().value); //2
console.log(numsVal.next().value); //3
console.log(numsVal.next().value); //4
```

### for of pada values method

for of dapat dimanfaatkan untuk mengakses/mengiterasi object iterator yang dihasilkan dari values method.

```
let txt3 = "";
let letter3 = new Set(["a", "b", "c", "e"]);

for (let x of letter3.values()) {
  txt3 += x + "\n";
}
console.log(txt3);
// a
// b
// c
// e
```

### Method Keys()

Set tidak memiliki kunci. Fungsinya sama seperti method value() untuk mengembalikan value yang ada di dalam Set
Method keys ini membuat Sets kompatibel dengan Maps.

```
let nums2 = new Set([1, 2, 3, 4]);
console.log(nums2.keys()); //[Set Iterator] { 1, 2, 3, 4 }
```

### Method Entries()

Set tidak memiliki key, Sehingga entri() akan mengembalikan pasangan [value, value] bukannya pasangan [key, value]. Ini membuat Sets kompatibel dengan Maps

```
let letters4 = new Set(["a", "b", "c", "d"]);
let iterator = letters4.entries();

let txt4 = "";
for (x of iterator) {
  txt4 += x + "\n";
}

console.log(txt4);
// a,a
// b,b
// c,c
// d,d
```

### method delete()

berfungsi menghapus value pada element Set yang diletakan pada parameter di method ini

```
let nums3 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums3); //Set(6) { 1, 2, 3, 4, 5, 6 }
nums3.delete(5);
console.log(nums3); //Set(5) { 1, 2, 3, 4, 6 }
```

### method clear()

Digunakan untuk menghapus semua value pada Set.

```
let nums4 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums4); //Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(nums4.clear()); //undefined
console.log(nums4); //Set(0) {}
```

### Membuat Array Uniq dari Array yg Valuenya Terduplikasi

```
let arrDuplicate = [1, 2, 1, 3, 1, 2, 4, 5, 6, 3, 1, 3, 4];
let setArr = new Set(arrDuplicate);
console.log(setArr); // Set(6) { 1, 2, 3, 4, 5, 6 }
let uniqArr = [...setArr];
console.log(uniqArr); //[ 1, 2, 3, 4, 5, 6 ]

```

### method has()

Digunakan untuk memeriksa nilai pada Set, akan bernilai true apabila nilai yang di berikan pada parameter has ada pada element object set jika sebaliknya akan menghasilkan nilai false

```
let nums5 = new Set([1, 2, 3, 4, 5]);
console.log(nums5.has(1)); //true
console.log(nums5.has(8)); //false
```

### Contoh Kasus Yang Dipecahkan Menggunakan Set

[ref](https://code.tutsplus.com/id/tutorials/understanding-sets-with-javascript--cms-29789)

#### Union

Yaitu mengelompokkan nilai diantara dua kelompok dengan mengabaikan duplikat pada nilai yang terdapat di kedua kelompok tersebut. Seperti contoh berikut mengumpulkan semua value yang terdapat di kelompok engineering dan freelancers berikut

```
let frontEnd = ["eren", "itachi", "naruto", "sasuke", "sakura", "hinata", "kakasi", lee", "sikamaru", ];

let backEnd = [ "mikasa", "armin", "luffy", "naruto", "kakasi", "sakura", "goku", "hinata", "boruto", "sasuke",];
let programmer = new Set([...frontEnd, ...backEnd]);

console.log(frontEnd); //['eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru']
console.log(backEnd); //['mikasa', 'armin', 'luffy',  'naruto', 'kakasi', 'sakura', 'goku',   'hinata', 'boruto', 'sasuke']
console.log(programmer); //Set(14) {  'eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru', 'mikasa', 'armin', 'luffy', 'goku', 'boruto'}
```

### Persimpangan

Digunakan untuk mencari value yang ada di kedua kelompok, seperti contoh berikut:

```
let frontEnd2 = new Set([
  "eren",
  "itachi",
  "naruto",
  "sasuke",
  "sakura",
  "hinata",
  "kakasi",
  "lee",
  "sikamaru",
]);
let backEnd2 = new Set([
  "mikasa",
  "armin",
  "luffy",
  "naruto",
  "kakasi",
  "sakura",
  "goku",
  "hinata",
  "boruto",
  "sasuke",
]);

console.log(frontEnd2);
//Set(9) {
//   'eren',
//   'itachi',
//   'naruto',
//   'sasuke',
//   'sakura',
//   'hinata',
//   'kakasi',
//   'lee',
//   'sikamaru'
// }
console.log(backEnd2);
// Set(10) {
//   'mikasa',
//   'armin',
//   'luffy',
//   'naruto',
//   'kakasi',
//   'sakura',
//   'goku',
//   'hinata',
//   'boruto',
//   'sasuke'
// }

let intersection = new Set([...frontEnd2].filter((x) => backEnd2.has(x)));
console.log(intersection); //Set(5) { 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi' }

```

### Perbedaan

Case untuk mencari value yang ada di salah satu kelompok tetapi tidak ada di kelompok lainnya.

```
let frontEnd3 = new Set([
  "eren",
  "itachi",
  "naruto",
  "sasuke",
  "sakura",
  "hinata",
  "kakasi",
  "lee",
  "sikamaru",
]);
let backEnd3 = new Set([
  "mikasa",
  "armin",
  "luffy",
  "naruto",
  "kakasi",
  "sakura",
  "goku",
  "hinata",
  "boruto",
  "sasuke",
]);

console.log(frontEnd3);
//Set(9) {
//   'eren',
//   'itachi',
//   'naruto',
//   'sasuke',
//   'sakura',
//   'hinata',
//   'kakasi',
//   'lee',
//   'sikamaru'
// }
console.log(backEnd3);
// Set(10) {
//   'mikasa',
//   'armin',
//   'luffy',
//   'naruto',
//   'kakasi',
//   'sakura',
//   'goku',
//   'hinata',
//   'boruto',
//   'sasuke'
// }

let difference = new Set([...frontEnd3].filter((x) => !backEnd3.has(x)));
console.log(difference);
//Set(4) { 'eren', 'itachi', 'lee', 'sikamaru' }
```

## Map()

Map adalah sebuah koleksi dari elemen-elemen yang ada pada JavaScript yang tiap elemen ini disimpan sebagai pasangan KV (key, value). Hal ini memungkinkan untuk objek pada JavaScript Map untuk menahan objek dan nilai primitif sebagai kunci atau nilainya.

### Membuat Map()

Membuat map dapat dilakukan dengan 2 cara yaitu menggunakan new Map() dan Map.Set().

#### new Map()

let fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200],
]);

console.log(fruits);
//Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log(fruits.get("apples")); //500

#### Map.set()

```
let fruits2 = new Map();
fruits2.set("apple", 500);
fruits2.set("banana", 300);
fruits2.set("orange", 200);
console.log(fruits2);
//Map(3) { 'apple' => 500, 'banana' => 300, 'orange' => 200 }
console.log(fruits2.get("apple")); //500
```

### Method get()

method get digunakan untuk mereturn value dari key pada map.

```
let fruits2 = new Map();
fruits2.set("apple", 500);
fruits2.set("banana", 300);
fruits2.set("orange", 200);

console.log(fruits2.get("apple")); //500
```

### Method Size

Method size digunakan untuk mereturn jumlah elemen dalam Map

```
let seventhTeam = new Map([
  [1, "Naruto"],
  [2, "Sasuke"],
  [3, "Sakura"],
]);
console.log(seventhTeam);
//Map(3) { 1 => 'Naruto', 2 => 'Sasuke', 3 => 'Sakura' }
console.log(seventhTeam.size); //3
```

### delete() method

Digunakan untuk menghapus element di dalam Map

```
let akatsuki = new Map([
  [1, "Itachi"],
  [2, "Pain"],
  [3, "Hidan"],
]);

console.log(akatsuki);
// Map(3) { 1 => 'Itachi', 2 => 'Pain', 3 => 'Hidan' }
akatsuki.delete(2);
console.log(akatsuki);
// Map(2) { 1 => 'Itachi', 3 => 'Hidan' }
```
