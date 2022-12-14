console.log("-------------------- Array Literal");
const akatsuki = ["Deidara", "Itachi", "Hidan", "Kisame"];
console.log(akatsuki); //[ 'Deidara', 'Itachi', 'Hidan', 'Kisame' ]

const jinchuriki = [];
jinchuriki[0] = "Utakata";
jinchuriki[1] = "Naruto";
jinchuriki[2] = "Gaara";
jinchuriki[3] = "Killer Bee";

console.log(jinchuriki); //[ 'Utakata', 'Naruto', 'Gaara', 'Killer Bee' ]

console.log("-------------------- keyword New");
const tim7 = new Array("Naruto", "Sasuke", "Sakura");
console.log(tim7); //[ 'Naruto', 'Sasuke', 'Sakura' ]

console.log("----------------- Access Array");
const tim10 = ["Asuma", "Ino", "Chouji", "Shikamaru"];
console.log(tim10[0]); //Asuma

console.log("------------------ Length Property");
const tim8 = ["Akamaru", "Hinata", "Kiba", "Shino", "Kurenai"];
console.log(tim8.length); //5

console.log("------------ Accessing Last and first Array Element");
const timGai = ["Gai", "Neji", "Lee", "Tenten"];
console.log(timGai[0]); //Gai
console.log(timGai[timGai.length - 1]); //Tenten

console.log("--------------- Looping");

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

console.log("--------------- Looping forEach");
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

console.log("--------- Adding Array Element");
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

hokage[hokage.length] = "Sarada";
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sarada' ]
