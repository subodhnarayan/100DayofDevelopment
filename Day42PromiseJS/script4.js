// //async

// async function hello() {
//     console.log("hello");
// }


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);   //represent the successfull api call
//         }, 2000);
//     });
// }

// async function getweatherData() {
//     await api();
//     await api(); 
// };




function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess");
        }, 3000);
    })
}



// //await-async
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// }


// //callback chain
// console.log("fetching data1...");
// getData(1)
//     .then((res) => {
//         console.log("fetching data2...");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("fetching data3...");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });



//IIFE function is a function that is called immediately as soon as it is dendined



(async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
})();





