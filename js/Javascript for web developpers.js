function averageEvenNumbers(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const total = evenNumbers.reduce((sum, num) => sum + num, 0);
  return evenNumbers.length === 0 ? 0 : total / evenNumbers.length;
}
console.log("====================================");
console.log(averageEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("====================================");
function longestWord(words) {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}
console.log("====================================");
console.log(longestWord(["said", "abdelAziz", "20_years_Old", "December"]));
console.log("====================================");
const books = [
  { title: "Can't Hurt me", author: "David Goggense ", pages: 200 },
  { title: "Rich Dad Poor Dad", author: "Robert ", pages: 300 },
  { title: "Cush Flow 3", author: "Robert ", pages: 150 },
];
console.log("function1 :====================================");

function averagePages1(books) {
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  return books.length === 0 ? 0 : totalPages / books.length;
}
console.log(averagePages1(books));
console.log("function2 :====================================");
function averagePages2(books) {
  const totalPages = books
    .map((book) => book.pages)
    .reduce((sum, pages) => sum + pages, 0);
  return books.length === 0 ? 0 : totalPages / books.length;
}
console.log(averagePages2(books));
console.log("====================================");
const array = [
  "said",
  "said",
  "aziz",
  "computer science",
  "software engineers",
  "said",
  "said",
  "aziz",
  "computer science",
  "software engineers",
];
function stringFrequency(arr) {
  return arr.reduce((freq, str) => {
    freq[str] = (freq[str] || 0) + 1;
    return freq;
  }, {});
}

// Example usage:
console.log(stringFrequency(["hello", "world", "hello"]));
console.log("====================================");
const people = [
  { name: "Said", age: 30, city: "New York" },
  { name: "aziz", age: 40, city: "Chicago" },
  { name: "aness", age: 50, city: "New York" },
];
function countByCity(people) {
  return people.reduce((count, person) => {
    count[person.city] = (count[person.city] || 0) + 1;
    return count;
  }, {});
}
console.log(countByCity(people));
console.log("====================================");
