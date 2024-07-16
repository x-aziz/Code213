// Object-based programming is another beast, it requires the use of objects, and is in general less and less used in web programming, but it is one of the main programming paradigms that exist.
// Let’s look at the same problem, solved with Object-based programming.
//Object-based programming or object-based programming
let School = {
  grades: [
    14, 10, 3, 6, 8, 12, 10, 5, 17, 0, 0, 4, 5, 4, 9, 14, 10, 9, 9, 1, 14,
  ], //Method to calculate the sum of the array
  sum: function () {
    let sumArr = 0;
    for (index in this.grades) {
      sumArr += this.grades[index];
    }
    return sumArr;
  }, //Method that returns the average of the array
  average: function () {
    let avgArr = this.sum() / this.grades.length;
    return avgArr;
  }, //Method that returns the maximum of an array
  maximum: function () {
    let max = this.grades[0];
    for (index in this.grades) {
      if (this.grades[index] > max) {
        max = this.grades[index];
      }
    }
    return max;
  },
};
console.log(`The sum of grades is : ${School.sum()}. the average of grades is : ${School.average()}.
  the max of the array is ${School.maximum()}`);

console.log("====================================");
let planets = ["Jupiter", "Earth", "Mars", "Venus"];
let galaxies = ["Milky Way", "Andromeda"];

let space = [...planets, ...galaxies];
console.log(space);
console.log("====================================");
let Planet = {
  name: "Earth",
  "orbital period": 365.256363004,
  excentricity: 0.0167086,
  "mean radius": 6371.0,
};
let Earth = { ...Planet, "surface gravity": 9.80665 };
console.log(Earth);

let Planet1 = {
  name: "Earth",
  "orbital period": 365.256363004,
  excentricity: 0.0167086,
  "mean radius": 6371.0,
};
let Earth1 = { ...Planet1, "surface gravity": 9.80665 };
console.log(Earth1);

console.log("====================================");
// Spreading is very useful and we’ll use it in a lot of different situations.
// Let’s say we want to calculate the mean grade of a classroom, but we don’t know how many students we have, we can use the rest operator to send an unknown number of arguments inside a function and then we calculate the average of such function
const mean = (...grades) => {
  let sum = 0;
  for (let i in grades) {
    sum += grades[i];
  }
  return sum / grades.length;
};
let avg = mean(10, 15, 13, 11, 12, 14, 16);
console.log(`The mean of our class is ${avg}`);
