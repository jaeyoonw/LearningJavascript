//객체 선언
// const obj = {
//   b: 2,
//   c: 3,
//   d: 4,
// };
//객체 해체 할당
// const { a, b, c, d } = obj;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//배열 선언
const arr = [1, 2, 3];
//배열 해체 할당
let [x, y, ...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

//해체 활당 활용
let a = 5,
  b = 10;
[a, b] = [b, a];
// console.log(a);
// console.log(b);
//보통 해체할당을 쓸 상황은 언제냐면 가져온 객체나 배열에서 필요한 것들을 뽑아야 할 때이다.

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
label = isPrime(97) ? "prime" : "non-prime";
console.log(label);

var me = "";
var you = me || "천재";
console.log(you);
