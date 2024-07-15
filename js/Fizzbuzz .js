let fizz = "fizz";
let buzz = "buff";
let i = 1;
while (i !=100) {
  console.log((i % 3 == 0 ? fizz : "") + (i % 5 == 0 ? buzz : "") || i);
  i++;
}
