// this is an important topic from an interview prespective 
console.log(typeof null); // u think it is null but its an object because it is an bug at the intially phase of js during development
console.log(typeof NaN); // first of all nan is a not a number that comes when an mathematical error is going to happen like 0/0 instead of crashing the whole program it return NaN so its datatype is a number
console.log(typeof function(){}); // it is an special types of object we can say that all functions are object but all object are not function so there datatype is function
// example of how an fuunction can behava like an object
function greet(){};
greet.message ="Hello world";
console.log(greet.message);
// here u can see how i used function as an object 

const arr = [1,2,4];
console.log(typeof arr); // this gives us object becuase all array act as an object

console.log(typeof []); // object 
console.log(typeof {}); // object
console.log(typeof false); //boolean
console.log(typeof 2333); //number
console.log(typeof "manveer"); //string
console.log(typeof 123456n); //bigint
console.log(NaN == NaN); // false becuase how can an one unknown number equals to another unknown number 
console.log(Number.isNaN(NaN)); // to check whether the Nan equals to another Nan js provide us unbuilt function that is Nan
