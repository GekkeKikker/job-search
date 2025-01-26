const numbers = [1, 2, 3, 4, 5];
const names = ["BOBBY", "SALLY", "DEBBIE"];

// an array of squares
// [1, 4, 9, 16, 25]

const squares = numbers.map((number) => number * number);

const lowerCaseNames = names.map((name) => {
  return name.toLocaleLowerCase();
});

console.log(squares);
console.log(lowerCaseNames);
