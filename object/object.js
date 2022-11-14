console.log("-------------membuat object---------");
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
