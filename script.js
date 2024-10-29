let age = prompt("Enter your age");
let movietype = prompt("Enter movie type");
let time = prompt("Enter time of day");
function TicketPrice(num) {
  switch (true) {
    case age < 10:
      return num + 5;
      break;
    case age >= 10 && age <= 65:
      return num + 15;
      break;
    case age > 65:
      return num + 10;
      break;
    default:
      break;
  }
}
function typefunc(num) {
  switch (true) {
    case movietype === "3Dfile":
      return num + 5;
      break;
    case movietype === "regular":
      return num + 5;
      break;
    default:
      break;
  }
}
function timefunc(num) {
  switch (true) {
    case time === "matine":
      return num + 5;
      break;
    case time === "evening":
      return num + 5;
      break;
    default:
      break;
  }
}
console.log(TicketPrice(0));
console.log(typefunc(0));
console.log(timefunc(0));

