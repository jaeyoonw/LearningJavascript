const player = {
  name: "Thomas",
  rank: "Midshipman",
  age: 25,
};

for (let p in player) {
  // 객체의 프로퍼티를 반복할때 주로 쓰도록 설계했다.
  console.log("p:" + player[p]);
}

const hand = [1, 2, 3];
for (let h of hand) {
  console.log("h : " + h);
}
