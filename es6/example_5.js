let x = 2;
const r1 = x++ + x++; // 2 + 3 , x = 4
const r2 = ++x + ++x; // 5 + 6, x = 6
const r3 = x++ + ++x; // 6 + 8, x = 8
const r4 = ++x + x++; // 9 + 9, x = 10
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

console.log("33" == 33);
console.log("33" === 33);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);
