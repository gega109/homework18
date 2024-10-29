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
  }
}
function TypeFunc(num) {
  switch (true) {
    case movietype === "3Dfile":
      return num + 5;
    case movietype === "regular":
      return num + 5;
    case movietype !== "3Dfile" || "regular":
      return (num = 0);
    default:
  }
}
function TimeFunc(num) {
  switch (true) {
    case time === "matine":
      return num + 5;
    case time === "evening":
      return num + 5;
    case time !== "matine" || "evening":
      return (num = 0);
    default:
  }
}
function SaleFunc(num) {
  switch (true) {
    case sale === "yes":
      return num - 5;
    case sale === "no":
      return num - 0;
    case sale !== "no" || "yes":
      return (num = 0);
    default:
  }
}
let total = TicketPrice(0) + TypeFunc(0) + TimeFunc(0) + SaleFunc(0);
alert(total);
