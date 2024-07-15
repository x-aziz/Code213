const oddArray = (array) => {
  let result = [];
  array.forEach((element) => {
    if (element % 2 != 0) {
      result.push(element);
    }
  });
  return result;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log("====================================");
console.log(oddArray(array));
console.log("====================================");
const person = [
  {
    name: "Said",
    age: 20,
    city: "New York",
    email: "john@gmail.com",
  },
  {
    name: "Aziz",
    age: 40,
    city: "texas",
    email: "john@gmail.com",
  },
  {
    name: "Anass",
    age: 50,
    city: "London",
    email: "john@gmail.com",
  },
];
const overThirty = (person) => {
  let result = person.filter((element) => {
    return element.age > 30;
  });
  return result;
};
console.log("====================================");
console.log(overThirty(person));
console.log("====================================");

let stack = [];

stack.push("Said");
stack.push("Aziz");
stack.push("UK_Nationality");
stack.push("USA_Nationality");
stack.push("Germany_Nationality");

let name = stack.pop();

function peek(stack) {
  let positionLastElement = stack.length - 1;
  return stack[positionLastElement];
}

console.log(peek(stack));

function isEmpty(stack) {
  return stack.length === 0;
}
console.log("====================================");
console.log(isEmpty(stack));
console.log("====================================");

let queue = [];

stack.push("Said");
stack.push("Aziz");
stack.push("UK_Nationality");
stack.push("USA_Nationality");
stack.push("Germany_Nationality");

let firstName = queue.shift();

function front(queue) {
  return queue[0];
}

console.log(front(queue));

function isEmptyQueue(queue) {
  return queue.length === 0;
}
console.log("====================================");
console.log(isEmptyQueue(queue));
console.log("====================================");
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
console.log("====================================");
console.log(removeVowels("Hello, World!"));
console.log("====================================");
const array1 = [
  "said",
  "20 years_old",
  "UK_Nationality",
  "USA_Nationality",
  "Japan_Nationality",
];
const array2 = [
  "said",
  "19 years_old",
  "UK_Nationality",
  "USA_Nationality",
  "Germany_Nationality",
];
const similaritiesArray = (array1, array2) => {
  let result = array1.filter((element) => {
    return array2.includes(element);
  });
  return result;
};
console.log("====================================");
console.log(similaritiesArray(array1, array2));
console.log("====================================");
