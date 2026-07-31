// see the basic diifefence is like in primitive data is copied by value and in object the data is pass by reference
let a = 30;
let b =a;
b= 50;
console.log(a);
// like in this example u can see that there is no change is value of a when i changed the value of b

const user1 = {
    name: "Manveer",
    age:39
}
const user2= user1;
user2.name= "veer";
console.log(user1.name);
// see in this example as we know the object is pass by reference so when i chaged the value of user2 the user1 value is also changed


// so this is the difference between primitive and object