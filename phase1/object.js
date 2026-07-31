// the object is known as the heart of js becuase the data is pass here and there using or access by using object 
const employee ={
    name:"manveer",
    age:22,
    slary:33399
}
// ecah line of object is called property that contains key-value pair for example u can see in employee object name act as key and manveer is the value of that key

console.log(employee.name);
console.log(employee["age"]);

employee.experience = 1;
console.log(employee);

// here u can see i have include one more key-value pair using experience so that demonstrate that the object grow dynamically


// we can delete the object using delete
delete employee.age;
console.log(employee);


//there can be nested objects
const n = {
    name:"manveer",
    adress:{
        city : "abd",
        state : "haryana"
    }
}
console.log(n.name);
console.log(n.adress);
console.log(n.adress.city);


//object with array
const student = {
    name:"Manveer",

    skills:[
        "C++",
        "JavaScript",
        "React"
    ]
};
console.log(student.skills[0]);


//array with object
const students = [

    {
        name:"Rahul",
        marks:90
    },

    {
        name:"Aman",
        marks:85
    },

    {
        name:"Manveer",
        marks:95
    }

];
console.log(students);