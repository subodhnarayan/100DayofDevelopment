//tackling call back hell using promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise");
//     //resolve("sucess");
//     reject("some problem");
// })


// function getData(dataId, getnextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data ", dataId);
//             resolve("sucess");
//             //  reject("error");
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 500);
//     });
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         //resolve("sucess");
//         reject("networkerror");
//     })
// }


// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res);
// })  //promise resolved

// promise.catch((err) => {
//     console.log("rejected", err);
// })   //rejected prmoise


function asyfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucess")
        }, 3000);
    });
}

function asyfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2 ");
            resolve("sucess")
        }, 3000);
    });
}


// console.log("fetching data1...");
// let p1 = asyfunc1();
// p1.then((res) => {
//     //console.log(res);
//     console.log("fetching data2...");
//     let p2 = asyfunc2();
//     p2.then((res) => {
//         //console.log(res);
//     })
// })

//prmise changing
console.log("fetching data1...");
let p1 = asyfunc1().then((res) => {
    //console.log(res);
    console.log("fetching data2...");
    let p2 = asyfunc2().then((res) => {
        //console.log(res);
    })
})


// console.log("fetching data2...");
// let p2 = asyfunc2();
// p1.then((res) => {
//     console.log(res);
// })


