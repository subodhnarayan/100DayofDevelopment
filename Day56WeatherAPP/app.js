// let key = b416fefe1a81e3c252d828b2d918ecc8
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=b416fefe1a81e3c252d828b2d918ecc8&units=metric


// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form botton");
// const cityname = document.querySelector(".city-input");
// const msg1 = document.querySelector(".msg1");
// const msg2 = document.querySelector(".msg2");
// const msg3 = document.querySelector(".msg3");

// for (let select of dropdowns) {
//     for (countrycode in countryList) {
//         let newoptions = document.createElement("option");
//         newoptions.innerText = countrycode;
//         newoptions.value = countrycode;
//         if (select.name === "from" && countrycode === "NP") {
//             newoptions.selected = "selected";
//         }
//         select.append(newoptions);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     })
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     // console.log(currCode);
//     let countrycode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;

// }


// dropdowns.forEach(select => {
//     for (let countrycode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = countrycode;
//         newOption.value = countrycode;
//         if (select.name === "cont-from" && countrycode === "NP") {
//             newOption.selected = true;
//         }
//         select.append(newOption);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// });

// for (let select of dropdowns) {
//     for (currCode in countryList) {
//         let newOptions = document.createElement("option");
//         newOptions.innerText = currCode;
//         newOptions.value = currCode;
//         if (select.name === "from" && currCode === "USD") {
//             newOptions.selected = "selected";
//         }
//         else if (select.name === "to" && currCode === "INR") {
//             newOptions.selected = "selected";
//         }
//         select.append(newOptions);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//         //console.log(currCode);
//     })
// }





// const updateFlag = (element) => {
//     let currCode = element.value;
//     // console.log(currCode);
//     let countrycode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;

// }

// document.addEventListener('DOMContentLoaded', function () {
//     const countrySelect = document.getElementById('country');

//     // Populate the country dropdown
//     for (const [currency, countryCode] of Object.entries(countryList)) {
//         const option = document.createElement('option');
//         option.value = countryCode;
//         option.textContent = currency;
//         countrySelect.appendChild(option);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    populateCountryDropdown();
    setupFormListener();
});

function populateCountryDropdown() {
    const countrySelect = document.getElementById('country');

    // Populate the country dropdown
    for (let currency in countryList) {
        let countryCode = countryList[currency];
        let newOption = document.createElement("option");
        newOption.innerText = countryCode;
        newOption.value = countryCode;
        if (currency === "AED") {  // Default selected currency code, change as necessary
            newOption.selected = "selected";
        }
        countrySelect.append(newOption);
    }

    countrySelect.addEventListener("change", function (evt) {
        updateFlag(evt.target);
    });

    // Set the initial flag
    updateFlag(countrySelect);
}

function updateFlag(element) {
    let countryCode = element.value;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

function setupFormListener() {
    document.getElementById('weatherForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;

        fetchWeatherData(city, country);
    });
}

function fetchWeatherData(city, countryCode) {
    const apiKey = 'b416fefe1a81e3c252d828b2d918ecc8'; // Replace with your actual API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('temperature').textContent = `${Math.round(data.main.temp - 273.15)}°C`;
                document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;

                document.getElementById('flag').src = `https://flagsapi.com/${countryCode}/flat/64.png`;
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
