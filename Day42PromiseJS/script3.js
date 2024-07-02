function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess");
        }, 3000);
    })
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })


//callback chain
console.log("fetching data1...");
getData(1)
    .then((res) => {
        console.log("fetching data2...");
        return getData(2);
    })
    .then((res) => {
        console.log("fetching data3...");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });


//await function

async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}
