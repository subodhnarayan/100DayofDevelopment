const student = {
    fullname: "Subodh Narayan Sah",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};


student["age"] += 1;
student.age += 1;
student.fullname = "Subodh Narayan"

console.log(student)
console.log(typeof (student))
console.log(student["fullname"]);
console.log(student.age)