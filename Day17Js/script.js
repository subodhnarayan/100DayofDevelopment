console.log("This is subodh");

let Array = [1, 2, 3, 4, 5];
Array.push(7);
console.log(Array);

let sum = 0;
for (let i = 0; i < Array.length; i++) {
    sum += Array[i];
}
console.log("Average=" + sum / Array.length)



Array.pop();
console.log(Array);
Array.toString();
console.log(Array)

let Arr = [5, 6, 7, 8, 9, 10];
Array.concat(Arr)
console.log(Array)
Array.unshift(5);
console.log(Array)


Array.shift();
console.log(Array)

console.log(Arr.slice(3, 5))


let compnay = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(compnay)
compnay.shift()
console.log(compnay)
compnay.splice(2, 1, "Ola")
console.log(compnay)
compnay.push("Amazon")
console.log(compnay)

