function print(name = "hi everyone"){
    console.log(name);
}
print("manveer"); // manveer
print()   // hi everyone


function sayname(name , lname = "singh"){
    console.log(name, lname);
}
sayname("manveer");



// placement point of view
function casess(name = "manveer"){
    console.log(name);
}
casess(null);    // it takes null value
casess(undefined);   // it take defualt value over undefined value


// in default parameter we can pass anything like array, object and function also 

function demo(name, lastname = ["singh"]){
    console.log(name, lastname);
}
demo("manveer");


function last(){
    return "singh";
}

function demo1(name, lastname = last()){
    console.log(name,lastname);
}
demo1("manveet");