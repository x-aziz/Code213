let message = "There is no war in Ba Sing Se";
const arr = message.split;
console.log("====================================");
console.log("the number of strings in the message" + arr.length + 1);
console.log("====================================");
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

console.log("====================================");
for (let i = 0; i < countries.length; i++) {
  console.log(
    `Your country : ${countries[i]} has the capital named : ${capital[i]}.`
  );
}
console.log("====================================");
let randomizer = Math.floor(Math.random() * 4);

let fate;

if (randomizer === 0) {
  fate = "A certain victory";
} else if (randomizer === 1) {
  fate = "Not so certain victory";
} else if (randomizer === 2) {
  fate = "An uneasy victory";
} else {
  fate = "Your fate is unclear, ô chosen undead";
}

console.log(fate);
console.log("====================================");
function checkSeason(month) {
  if (month < 1 || month > 12) {
    return "Invalid month";
  }

  if (month === 12 || month === 1 || month === 2) {
    return "Winter";
  } else if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  }
}

console.log(checkSeason(1));
console.log(checkSeason(4));
console.log(checkSeason(7));
console.log(checkSeason(10));
console.log(checkSeason(12));
console.log(checkSeason(0));
console.log(checkSeason(13));

console.log("====================================");
//   peek: Returns the top element of the stack without removing it.
// isEmpty: Returns a boolean indicating whether the stack is empty.
