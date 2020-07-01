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

while (funds > 1 && funds < 100) {
  let totalBet = rand(1, funds);
  if (totalBet === 13) {
    console.log("Unlucky! Skip this round...");
  } else {
    //플레이..
  }
}

while (funds > 1 && funds < 100) {
  let totalBet = rand(1, funds);
  if (totalBet === 13) {
    console.log("Unlucky! Skip this round...");
    continue;
  }
  //플레이..
}
