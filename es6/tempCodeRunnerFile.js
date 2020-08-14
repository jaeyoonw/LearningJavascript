const jaeyoon = { name: "Jaeyoon" };
const arr = [2, 3, -5, 15, 7];

console.log(Math.max.apply(jaeyoon, arr));
console.log(Math.min.call(jaeyoon, arr));
