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
//   Arrays: ordered collections of elements that can be of any type.
//   Objects: unordered collections of key-value pairs that represent a single entity.
//   Stacks: a last-in, first-out (LIFO) data structure, where elements are added and removed from the top.
//   Queues: a first-in, first-out (FIFO) data structure, where elements are added to the back and removed from the front.
//   Array.join() is in general faster to execute on bigger lists than string concatenation.
