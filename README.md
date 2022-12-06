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
