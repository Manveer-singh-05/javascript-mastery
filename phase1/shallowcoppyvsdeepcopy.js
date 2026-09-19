//  Shallow copy = create a new outer object, but nested objects are still shared.
//Deep copy = create a completely independent copy, including nested objects.

// let see the example of shallow copy 
// there are methids like spread, assign method
let obj1 = {
    name : "manveet",
    roll: 32,
    greet : {
        location : "delhi",
        dist : "jind"
    }
}
let obj2 = {...obj1};

obj2.greet.location = "jalandhar";
console.log(obj1);
// here the output will be jalandhar because obj1 and obj2 is pointed to same nested object

// let see the example of deep copy 
// there are two methods 1. strucutre clone that we used
// 2. json method   const copy = JSON.parse(JSON.stringify(original));
const user1 = {
    name: "Manveer",
    address: {
        city: "Jalandhar"
    }
};

const user2 = structuredClone(user1);
user1.address.city = "jind";
console.log(user2);
console.log(user1);