// Hoisting is JavaScript's behavior where declarations of variables and functions are processed before the code is executed, making them available according to their declaration rules.

console.log(a);
var a = 90;
// it doest give us any error it give us undefined

// u can assume why this is not giving any error or something becuase of hositing behavior
var a;          // declaration processed first

console.log(a); // undefined

a = 10;         // assignment happens here


// the case that i talked about eralier is variable hoisting and only happens in var not in let and const

// now talk about function hositing this is only happens in plain function 

add(2,4);
function add(a, b){
    console.log(a+b);
}

// u can visualize how this is happening 
function add(a,b){
    console.log(a+b);
}
add(2,4);


