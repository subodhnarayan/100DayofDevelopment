console.log("Subodh Narayan sah")

function printname() {
    console.log("Your are using function to print name")
}

function addnum(a, b) {
    return a + b;
}

printname();
console.log(addnum(2, 3))



// Arrow Functions

const functionName = (a, b) => {
    return a + b;
}

console.log(functionName(5, 6))

//couting vowel in string by function

const vowels = ["a", "e", "i", "o", "u"]
function countvowel(a) {
    let vow = 0
    for (let i of a.toLowerCase()) {
        if (vowels.includes(i))
            vow++;
    }
    return vow;
}

//couting vowel in string by array function
const cntvowel = (a) => {
    let vow = 0
    for (let i of a.toLowerCase()) {
        if (vowels.includes(i))
            vow++;
    }
    return vow;
}

console.log(countvowel("SUBODH"))
console.log(cntvowel("SUBODH"))

// for Each loop in Array

let arr = [1, 2, 3, 4, 5]
arr.forEach((val) => {
    console.log(val);
})


let calcsquare = (num) => {
    console.log(num * num);
}

//printing square 
arr.forEach((val) => {
    console.log(val * val);
})



arr.forEach(calcsquare)

//Maps method in js

let newarr = arr.map((val) => {
    return val * 2;
})

console.log(newarr)


//filter Method in Js

let newArr = arr.filter((val) => {
    // return val % 2 == 0;
    return val > 3;
})

console.log(newArr)



// Reduce Method

const init = 0;
const sum = arr.reduce((prev, curr) => {
    return prev + curr;
    // return prev > curr ? prev : curr;  to return the greatest number in the array
});

console.log(sum)


