for (let i = 1; i <= 5; i++) {
    console.log("This is subodh");
}
let j = 1;
while (j < 5) {
    console.log("This is subodh");
    j++;
}

let k = 1;
do {
    console.log("This is subodh");
    j++;
} while (j < 5);

console.log("Subodh");

let strVar = "subodh";
for (let val of strVar) {
    console.log(val);
}

let str = "Hy i am subodh Nararayan sah"
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}

console.log(size);



let Student = {
    Name: "Subodh",
    Age: 22,
    CGPA: 8,
    Sem: 6


}

for (let key in Student) {
    console.log(key);
}

for (let key in Student) {
    console.log(Student[key]);
}

// print even number from 1 to 100

for (let i = 2; i <= 100; i = i + 2) {
    console.log("num=" + i);
}



// let lotterynumber = 5;
// let num = prompt("Enter Number")
// do {
//     num = prompt("Enter Number")
// } while (num != lotterynumber);
// console.log("congrutulation you entered correct number");


