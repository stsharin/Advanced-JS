const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// start from index-2 and end before index-5
const part = nums.slice(2, 5);
console.log(part);
// start from index-2 and remove count = 5
const removed = nums.splice(2, 3);
console.log(removed);
console.log(nums);

const together = nums.join("|");
console.log(together);