// console.log("Hi this is subodh");


const url = "https://cat-fact.herokuapp.com/facts"

const para = document.querySelector("#para");
const btn = document.querySelector("#btn");


const getfacts = async () => {
    console.log("getting data..........");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    para.innerText = data[0].text;
}


//promise chaining
// function getfacts() {
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         para.innerText = data[0].text;;
//     })
// }



btn.addEventListener("click", getfacts);