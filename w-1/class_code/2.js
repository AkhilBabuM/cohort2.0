let array = [
  2, 5, 3, 1, 6, 4, 7, 8, 9, 34, 678, 234, 568, 6897, 3245, 123, 457, 6789,
  8679, 567, 8079, 45, 64325, 234,
];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) console.log(array[i]);
}

let largest = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] > largest) largest = array[i];
}

console.log("Largest Number is: " + largest);

const person1 = {
  firstName: "Akhil",
  gender: "male",
};

const person2 = {
  firstName: "Athira",
  gender: "female",
};
const person3 = {
  firstName: "Murali",
  gender: "male",
};

const person4 = {
  firstName: "Nandini",
  gender: "female",
};

let personArray = [
  person1,
  person2,
  person3,
  person4,
  { firstName: "Baran", gender: "male" },
];

for (i = 0; i < personArray.length; i++) {
  if (personArray[i].gender === "male") console.log(personArray[i].firstName);
}
