function getChange(amount, denominations) {
  denominations.sort((a, b) => b - a);

  let change = {};
  let remainingAmount = amount;

  for (let i = 0; i < denominations.length; i++) {
    let denomination = denominations[i];
    if (remainingAmount >= denomination) {
      let count = Math.floor(remainingAmount / denomination);
      change[denomination] = count;
      remainingAmount -= count * denomination;
    }
  }

  if (remainingAmount > 0) {
    return "Exact change not possible with given denominations";
  }

  return change;
}

let amount = 47;
let denominations = [1, 5, 10, 20];
console.log(getChange(amount, denominations));
