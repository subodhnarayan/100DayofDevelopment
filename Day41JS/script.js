const student = {
    fullname: "subodh narayan",
    marks: 94.4,

    printMarks: function () {
        console.log("marks= ", this.marks); //student.mark=student.mark
    }

}


const employee = {
    calctax1() {
        console.log("tax rate is 10%");
    },

    calctax2: function () {
        console.log("tax rate is 10%");
    }
}


const karanArjun = {
    salary: 5000,
}

const karanArjun1 = {
    salary: 5000,
    calctax1() {
        console.log("Tax rate is 20&")
    }
}

const karanArjun2 = {
    salary: 5000,
}

const karanArjun3 = {
    salary: 5000,
}

const karanArjun4 = {
    salary: 5000,
}


karanArjun.__proto__ = employee

karanArjun1.__proto__ = employee




class Toyotacar {
    constructor(brand, milege) {
        console.log("Creating new Object");
        this.brand = brand;
        this.milege = milege;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;  //this bala object ka property hai
    }
}   //creating class


let fortuner = new Toyotacar("forturner", 10);
console.log(fortuner);

//fortuner.setBrand("forturner");

let lexus = new Toyotacar("lexus", 20);
console.log(lexus);
//lexus.setBrand("lexux");


//we can make the bank class in which we can make parameter to store the bank details



//Inheritance
//uses keyword of extends

class parent {
    hello() {
        console.log("Hello");
    }
}

class child extends parent {

}

class person {

    constructor(name) {
        console.log("Enter parent constructor");
        this.species = "Homo Sapiens";
        this.name = name;
    }
    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }

    work() {
        console.log("Do Nothing");
    }
}


class Enginner extends person {
    constructor(branch, name) {
        // console.log("Enter child constructor");
        super(name);//to invoke to parent class constructor fist
        this.branch = branch;
        //console.log("Exit child constructor");
    }
    work() {
        super.eat();
        console.log("solve problem, build something");
    }
}

class Doctor extends person {
    work() {
        console.log("Treat Patients"); //method overriding
    }
}


let obj = new child();
//let subodh = new Enginner();
let sub = new Enginner("comuter", "subodh");
//let arj = new Doctor();











