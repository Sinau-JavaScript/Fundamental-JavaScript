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
  console.log(x);
  for (let j in myObj2.cars[i].models) {
    y += myObj2.cars[i].models[j] + "-";
    console.log(y);
  }
}

// console.log(x);
// console.log(y);

//baru sampai nested object dan array
