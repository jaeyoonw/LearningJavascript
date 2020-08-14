function update(birthday, occupation) {
  this.birthday = birthday;
  this.occupation = occupation;
}

const bruce = { name: "Bruce" };

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("actor");
console.log(bruce);
