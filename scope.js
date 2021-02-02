// let, const -> scope variable
let bonus = 20; // global variable
function sum(first, second){
    let result = first + second + bonus;
    if(result > 9){
        const mood = 'happy';
    }
    // console.log(mood); 
    return  result;
}
const output = sum(3, 7);
// console.log(bonus);
// console.log(result);
console.log(output);