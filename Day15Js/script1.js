let str = "subodh";
let str1 = 'Narayan';

console.log(str1);
console.log(str.length)
console.log(str[0]);


//Template Literals

let sentence = `this is a template literals`
console.log(sentence)
console.log(typeof (sentence))


let object = {
    item: "pen",
    price: 10
}

console.log("The const of ", object.item, " is ", object.price);
let output = `the cost of ${object.item} is ${object.price}` //this is called string interpolation
console.log(output)

let sg = `This is template literal ${4 + 5}`;
console.log(sg)

let st = "Subodh\nNarayan"
console.log(st)   // \n is a esc character  and length of ese character is 1
console.log(st.length)


let stn = "Subodh Narayan Sah";
let up = stn.toUpperCase()
console.log(up);
console.log(stn.toLowerCase())

let st1 = "   subodh narayan sah "
console.log(st1.trim())   //remove the string after before and after the string

//strings are immutable in javascript

//string slice
let st2 = "Abcde";
console.log(st2.slice(1));
console.log(st2.slice(1, 4));  //here 4(end) is exclusive


//string concat

let s1 = "abcde";
let a2 = "fghij"
console.log(s1.concat(a2));
let a3 = s1.concat(a2);
let a4 = s1 + a2   // we can concate string by using + in js
console.log(a3)
console.log(a4)
a5 = "sdgh" + 124;
console.log(a5)



//replacing the character in the javascript
let a6 = "Subodnsan";
console.log(a6.replace('n', 'h'));   //replace n with h but fhe first n only
console.log(a6.replaceAll('n', 'h'));   //replace all n with the h



//printing the character at the index
let st7 = "IHelpyou"
st7 = str.replace('I', 'S')  //does not make change
console.log(str7.charAt(4))


//practice in js
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
//  Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “subodhnarayan” , username should be “@subodhnarayan"

