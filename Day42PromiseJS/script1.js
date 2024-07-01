function getData(dataId, getnextData) {

    setTimeout(() => {
        console.log("Data ", dataId);
        if (getnextData) {
            getnextData();
        }
    }, 2000)
}

// getData(1);
// getData(2);
// getData(3);

//for example while login instagram


//call back hell means nested call back;
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
})