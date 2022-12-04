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
