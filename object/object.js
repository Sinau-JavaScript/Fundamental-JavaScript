console.log("------------- Object---------");
console.log("-------------How to make properti and method");

let car = {
  type: "Fiat",
  model: 500,
  color: "white",
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

// properti
console.log(car.type); //Fiat
console.log(car.model); //500
console.log(car.color); //white

car.start(); //start
car.drive(); //drive
car.stop(); //stop

console.log("----------------- cara penggunaan this");
let person1 = {
  name: "Eren",
  time: "saturday",
  place: "Wakanda",
  logIt: function () {
    console.log(`${this.name} visited ${this.place} on ${this.time}`);
  },
};

person1.logIt(); //Eren visited Wakanda on saturday

console.log("-----------Object Literal");
let shinobi1 = {
  name: "Uzumaki Naruto",
  "main jutsu": "kage bunshin no jutsu",
  secondJutsu: "Rasengan",
};

console.log(shinobi1.name); //Uzumaki Naruto
console.log(shinobi1["main jutsu"]); //kage bunshin no jutsu
console.log(shinobi1.secondJutsu); //Rasengan

console.log("---------- function Declaration");
let dataShinobi = (name, mainJutsu, secondJutsu) => {
  let shinobi = {};
  shinobi.name = name;
  shinobi["main jutsu"] = mainJutsu;
  shinobi.secondJutsu = secondJutsu;
  return shinobi;
};

console.log(dataShinobi("Uciha Sasuke", "Chidori", "Susanoo"));
let naruto = dataShinobi("Uzumaki Naruto", "Kage bunshin no jutsu", "Rasengan");
console.log(naruto.name);
console.log(naruto["main jutsu"]);
console.log(naruto.secondJutsu);

console.log("---------- Constructor Function");
function Akatsuki(nama, mainJutsu, secondJutsu) {
  this.nama = nama;
  this.mainJutsu = mainJutsu;
  this.secondJutsu = secondJutsu;
}

let itachi = new Akatsuki("Uchiha Itachi", "Genjutsu", "Sharingan");
console.log(itachi);
console.log(new Akatsuki("Kisame", "Doton", "Suiton"));

console.log("------------ for...in Loop Object");
const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

let numObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(numObj);

for (properti in numObj) {
  console.log(`Obj.${properti}= ${numObj[properti]}`);
}

// Obj.a = 1;
// Obj.b = 2;
// Obj.c = 3;
// Obj.d = 4;

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

console.log(`----------------- tescoding----------`);
function minimumBus(a, b) {
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    sum += b[i];
  }
  let minimumBus = sum / 4;
  if (a !== b.length) {
    return "Input must be equal with count of family";
  } else {
    return `Minimum bus require is : ${minimumBus}`;
  }
}

console.log(minimumBus(2, [2, 2]));

console.log("-------------add properties");
const person2 = {
  fname: "John",
  lname: "Doe",
  age: 25,
};
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25 }

person2.nasionality = "english";
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25, nasionality: 'english' }

console.log("-------------Edit properties");
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

console.log("-------------Access properties");
let person4 = {
  "full name": "Eren Jeager",
  nickName: "Eren",
};

console.log(person4.nickName); //Eren
console.log(person4["full name"]); //Eren Jeager

console.log("-------------Delete properties");
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

console.log("----------------- Check property");
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

console.log("---------------Nested Objects");
myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.cars.car1); //Ford
console.log(myObj.cars["car2"]); //BMW
console.log(myObj["cars"]["car3"]); //Fiat
let p1 = "cars";
let p2 = "car1";
console.log(myObj[p1][p2]); //Ford

console.log("---------------------- Nested Objects dan Nested Arrays");
let x = "";
const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

let y = " ";
for (let i in myObj2.cars) {
  x += myObj2.cars[i].name + " ";
  // console.log(x);
  for (let j in myObj2.cars[i].models) {
    y += myObj2.cars[i].models[j] + "-";
    // console.log(y);
  }
}

console.log(x);
console.log(y);

//baru sampai nested object dan array
console.log("-----------------Convert to Array");
let person5 = { name: "utsman", age: 30, address: "ta'if" };
let myArr = Object.values(person5);
console.log(myArr); //[ 'utsman', 30, "ta'if" ]

console.log("---------------JSON.stringify()");
let person6 = { name: "Goku", age: 27, address: "wakanda" };
let str = JSON.stringify(person6);
console.log(str); //{"name":"Goku","age":27,"address":"wakanda"}

console.log("---------------Stringify Date");
let person7 = { name: "Usop", today: new Date() };

console.log(JSON.stringify(person7)); //{"name":"Usop","today":"2022-11-29T15:39:27.286Z"}

console.log("---------------Stringify Functions");
let shinobi = {
  name: "Sikamaru",
  age: 28,
  jutsu: function () {
    return "kagemane no jutsu";
  },
};

console.log(JSON.stringify(shinobi)); //{"name":"Sikamaru","age":28}

shinobi.jutsu = shinobi.jutsu.toString();

console.log(JSON.stringify(shinobi)); //{"name":"Sikamaru","age":28,"jutsu":"function () {\n    return \"kagemane no jutsu\";\n  }"}

console.log("---------------Getter");
let person9 = {
  name: "John",
  age: 27,
  language: "English",
  get lang() {
    return this.language;
  },
};

console.log(person9.lang); //English

let org = {
  fname: "John",
  lname: "Doe",
  get fulName() {
    return `${this.fname} ${this.lname}`;
  },
};

console.log(org.fulName); //John Doe

console.log("-----------------Setter");
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

console.log("--------------Prototypes untuk property");
let Akatsuki2 = function (name, age) {
  this.name = name;
  this.age = age;
};

let obito = new Akatsuki2("obito", 30);
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
Akatsuki2.prototype.nasionality = "Konoha";
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
console.log(obito.nasionality); //Konoha

console.log("--------------- propertypes method");
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

console.log("-----------Iterables pada String");
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

console.log("-----------Iterables pada Array");
const letter = ["a", "b", "c"];
for (let prop of letter) {
  console.log(prop);
}
// a
// b
// c

console.log("-------------Home Made Iterable");
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

console.log("---------------Home Made Iterable menggunakan for of");
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

console.log("--------------------Sets()");
const letters = new Set(["a", "b", "c", "a", "c", "b", "C"]);
console.log(letters); //Set(4) { 'a', 'b', 'c', 'C' }
console.log(letters.size); //4

console.log("--------------------Sets add value");

const letters2 = new Set();
letters2.add(1);
letters2.add(2);
letters2.add(2);
letters2.add(3);
console.log(letters2); //Set(3) { 1, 2, 3 }
console.log(letters2.size); //3

console.log("--------------------Sets add variable");
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

console.log("-----------------forEach pada Set");
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

console.log("-----------------values() method");
let nums = new Set([1, 2, 3, 4]);
let numsVal = nums.values();
console.log(numsVal); //[Set Iterator] { 1, 2, 3, 4 }
console.log(numsVal.next().value); //1
console.log(numsVal.next().value); //2
console.log(numsVal.next().value); //3
console.log(numsVal.next().value); //4

console.log("---------------for of values()");
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

console.log("--------------- keys() method");
let nums2 = new Set([1, 2, 3, 4]);
console.log(nums2.keys()); //[Set Iterator] { 1, 2, 3, 4 }

console.log("--------------- entries() method");
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

console.log(typeof letters4);
console.log(letters4 instanceof Set);

console.log("---- membuat Array unik dari array yg valuenya terduplikasi ---");

let arrDuplicate = [1, 2, 1, 3, 1, 2, 4, 5, 6, 3, 1, 3, 4];
let setArr = new Set(arrDuplicate);
console.log(setArr); // Set(6) { 1, 2, 3, 4, 5, 6 }
let uniqArr = [...setArr];
console.log(uniqArr); //[ 1, 2, 3, 4, 5, 6 ]

console.log("----------delete() method-----");
let nums3 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums3); //Set(6) { 1, 2, 3, 4, 5, 6 }
nums3.delete(5);
console.log(nums3); //Set(5) { 1, 2, 3, 4, 6 }

console.log("----------clear() method-----");
let nums4 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums4); //Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(nums4.clear()); //undefined
console.log(nums4); //Set(0) {}

console.log("----------has() method-----");
let nums5 = new Set([1, 2, 3, 4, 5]);
console.log(nums5.has(1)); //true
console.log(nums5.has(8)); //false

console.log(
  "----------contoh problem solving menggunakan set-----------------"
);

console.log("---------- case Union -----");
let frontEnd = [
  "eren",
  "itachi",
  "naruto",
  "sasuke",
  "sakura",
  "hinata",
  "kakasi",
  "lee",
  "sikamaru",
];

let backEnd = [
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
];

let programmer = new Set([...frontEnd, ...backEnd]);

console.log(frontEnd); //['eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru']
console.log(backEnd); //['mikasa', 'armin', 'luffy',  'naruto', 'kakasi', 'sakura', 'goku',   'hinata', 'boruto', 'sasuke']
console.log(programmer); //Set(14) {  'eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru', 'mikasa', 'armin', 'luffy', 'goku', 'boruto'}

console.log("------------------------ Persimpangan");
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

console.log("---------------------- Perbedaan");
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

console.log("---------------- Map () -----------------");
console.log("------------------ new Map()");
let fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(fruits);
//Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log(fruits.get("apples")); //500

console.log("------------------ Map.set()");
let fruits2 = new Map();
fruits2.set("apple", 500);
fruits2.set("banana", 300);
fruits2.set("orange", 200);
console.log(fruits2);
//Map(3) { 'apple' => 500, 'banana' => 300, 'orange' => 200 }
console.log(fruits2.get("apple")); //500

console.log("---------------- size method ");
let seventhTeam = new Map([
  [1, "Naruto"],
  [2, "Sasuke"],
  [3, "Sakura"],
]);
console.log(seventhTeam);
//Map(3) { 1 => 'Naruto', 2 => 'Sasuke', 3 => 'Sakura' }
console.log(seventhTeam.size); //3

console.log("---------------- delete() method");
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

console.log("-------------------- clear() method");
let army = new Map([
  [1, "eren"],
  [2, "mikasa"],
  [3, "armin"],
]);

console.log(army);
//Map(3) { 1 => 'eren', 2 => 'mikasa', 3 => 'armin' }
army.clear();
console.log(army);
//Map(0) {}

console.log("------------------- has() method");
let mugiwaraTeam = new Map([
  [1, "Luffy"],
  [2, "Zoro"],
  [3, "Nami"],
  [4, "Usop"],
]);

console.log(mugiwaraTeam.has(3)); //true
console.log(mugiwaraTeam.has(6)); //false

console.log("------------------- forEach ");
let yonkou = new Map([
  [1, "Shirohige"],
  [2, "BigMom"],
  [3, "Kaido"],
  [4, "Shanks"],
]);

let txt5 = "";
yonkou.forEach(function (value, key) {
  txt5 += `${key}  = ${value} \n`;
});

console.log(txt5);
// 1  = Shirohige
// 2  = BigMom
// 3  = Kaido
// 4  = Shanks

console.log("------------------------- entries() method ");
let newYonkou = new Map([
  [1, "Shanks"],
  [2, "Buggy"],
  [3, "Teach"],
  [3, "Luffy"],
]);

let txt6 = "";
for (const x of newYonkou.entries()) {
  txt6 += `${x} \n`;
}
console.log(txt6);

console.log("------------------------ keys() method");
let hokage = new Map([
  [1, "Hashirama"],
  [2, "Sarutobi"],
  [3, "Minato"],
  [4, "Minato"],
  [5, "Tsunade"],
  [6, "Kakashi"],
  [7, "Naruto"],
]);

let txt7 = "";
for (const x of hokage.keys()) {
  txt7 += `${x} \n`;
}
console.log(txt7);
// 1
// 2
// 3
// 4
// 5
// 6
// 7

console.log("----------------- values() method");
let hokage2 = new Map([
  [1, "Hashirama"],
  [2, "Sarutobi"],
  [3, "Minato"],
  [4, "Minato"],
  [5, "Tsunade"],
  [6, "Kakashi"],
  [7, "Naruto"],
]);

let txt8 = "";
for (const x of hokage2.values()) {
  txt8 += `${x} \n`;
}
console.log(txt8);
// Hashirama
// Sarutobi
// Minato
// Minato
// Tsunade
// Kakashi
// Naruto

console.log("---------------- Object as Key");
// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a Map
const fruits3 = new Map();

// Add the Objects to the Map
fruits3.set(apples, 500);
fruits3.set(bananas, 300);
fruits3.set(oranges, 200);

console.log(fruits3.get(apples)); //500
console.log(fruits3.get(bananas)); //300
