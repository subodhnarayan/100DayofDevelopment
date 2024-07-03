// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/v1";
const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = currCode;
        newOptions.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOptions.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOptions.selected = "selected";
        }
        select.append(newOptions);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        //console.log(currCode);
    })
}


const updateFlag = (element) => {
    let currCode = element.value;
    // console.log(currCode);
    let countrycode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }
    console.log(fromCurrency.value, toCurrency.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    const URL = `${BASE_URL}/currencies/${fromCurrencyValue.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response);

});





// const url = fetchJSON(`/currencies/{fromCurrency}`)