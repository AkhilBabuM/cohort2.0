/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length == 0) return [];
  let object2=[];
  let priceMap= new Map();
  transactions.forEach(element => {
    const category = element.category;
    const totalSpent = element.price;
    if(!priceMap.get(category))
      priceMap.set(category, totalSpent);
    else
      priceMap.set(category, priceMap.get(category)+totalSpent);
  });

  object2 = Array.from(priceMap, ([cat, cost])=> ({category:cat, totalSpent:cost}))
  return object2;
}

let object1 = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 20,
    category: "Footwear",
    itemName: "Burger",
  },
];

let result = calculateTotalSpentByCategory(object1);
console.log(result);
