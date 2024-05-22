//Js5 Practice

// let mark = [98, 89, 92, 96, 45, 67]


// let newarr = mark.filter((val) => {
//     return val > 90;
// })

// console.log(newarr)

let n = prompt("Enter number to create array")
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
}

console.log(arr);
const sum = arr.reduce((prev, curr) => {
    return prev + curr;
    // return prev > curr ? prev : curr;  to return the greatest number in the array
});

const prod = arr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(sum, prod, arr)
