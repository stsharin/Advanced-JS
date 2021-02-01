// forEach(), reduce() -> search
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(x => x * x); // output -> array
// console.log(result);

// returns the matching elements
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

// returns the first matching element
const isThere = numbers.find(x => x < 5);
console.log(isThere);

