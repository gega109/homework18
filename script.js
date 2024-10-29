let age = prompt("Enter your age");
let movietype = prompt("Enter movie type");
let time = prompt("Enter time of day");
let sale = prompt("what kind of sale do you have?");
function TicketPrice(num) {
  switch (true) {
    case age < 10:
      return num + 5;
    case age >= 10 && age <= 65:
      return num + 15;
    case age > 65:
      return num + 10;
    default:
      break;
  }
}
function TypeFunc(num) {
  switch (true) {
    case movietype === "3Dfile":
      return num + 5;
    case movietype === "regular":
      return num + 5;
    default:
      break;
  }
}
function TimeFunc(num) {
  switch (true) {
    case time === "matine":
      return num + 5;
    case time === "evening":
      return num + 5;
    default:
      break;
  }
}
function SaleFunc(num) {
  switch (true) {
    case sale === "gegamagaria":
      return num - 5;
    case sale === "":
      return num - 0;
    default:
      break;
  }
}
let total = TicketPrice(0) + TypeFunc(0) + TimeFunc(0) + SaleFunc(0);
console.log(total);
