console.log("one");
console.log("two");


function hello() {
    console.log("hello");
}

setTimeout(hello, 2000);// we can make it wait for 2 or 4 sec

setTimeout(() => {
    console.log("hello");
}, 4000);

console.log("three");
console.log("four");

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

