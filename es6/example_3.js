const dialog =
  'Sam looked up, and said "hello, old friend!", as Max walked in.';
const dialog2 = 'Sam looked up,˜ and said "don\'t do that!" to Max.';
const imperative = "Don't do that!";
const s = "In Javascript, use \\ as an escape character in strings";

let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;

const multiline = "line1\nline2";
const multiline2 = `line1
line2
line3`;
const multiline3 =
  "Current temperature:\n" +
  `\t${currentTemp}\u00b0C\n` +
  "Don't worry...the heat is on!";

const result1 = 3 + "30";
const result2 = 3 * "30";
const result3 = 30 / "3";
const result4 = 30 - "3";

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");

const obj = {};

const SIZE = Symbol(); // Symbol??? new ???? ???? ??.
obj[SIZE] = 8;

const sam1 = {
  name: "Sam",
  age: 4,
};
const sam2 = { name: "Sam", age: 4 };
const sam3 = {
  name: "Sam",
  classification: {
    liverpool: 1,
    mancity: 2,
  },
  speak: function () {
    return "Meow!";
  },
};

const a4 = [
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];

const now = new Date();

const a = parseInt("7 volts", 10);

console.log(a);
