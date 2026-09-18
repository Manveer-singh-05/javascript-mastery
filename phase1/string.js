// there is many method to declare the string
let m = "manveer";
let k = 'jeu';
let j = new String("kai");
let o = `my name 
is manveer singh`;

console.log(m)
console.log(k)
console.log(j)
console.log(o)


// some method that is very common and useful
// uppercase and lowercase
console.log(m.toUpperCase());
console.log(m.toLowerCase());

// substring 
console.log(m.substring(2)); // substring(start,end) last end is not considered
console.log(m.substring(1,5));

// length
console.log(m.length);

// split and join

let ans = "my name is manveer singh";
let words = ans.split(" ");
console.log(words);
console.log(words.join("-"));

