//practice js

let data = "set information";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log("Name: ", name, "Email: ", email);
    }
}

class admin extends user {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        Data = "some new value";
    }
}

let student1 = new user("subodh", "abc@gmail.com");
let student2 = new user("Shiv", "abcd@gmail.com");

let teacher = new user("teach", "teach@gmail.com");

let ad1 = new admin("sub", "admingmail.com");


//error handling in js

let a = 5;
let b = 5;

console.log("a=", a);
console.log("b=", b);
console.log("a+b=", a + b);
try {
    console.log("a+c", a + c);
}
catch (err) {
    console.log(err);
}    //erros in js so handdle to them


console.log("a-b=", a - b);



