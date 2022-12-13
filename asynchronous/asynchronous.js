console.log("------------- Waiting a Timeout");
setTimeout(display, 3000);

function display() {
  console.log("Hallo World!");
}

console.log("--------- complete function as Argument");

setTimeout(function () {
  displayer("Hello");
}, 5000);

function displayer(some) {
  console.log(some);
}

console.log("------------------ setInterval");
// setInterval(timeDisplayer, 1000);

function timeDisplayer() {
  let d = new Date();
  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}
