// 1. spread operator
let obj1 = {
    name: "nman",
    age: 21,
    class: "10"
}
let obj2= {...obj1};

obj1.name = "manveer";
console.log(obj1);
console.log(obj2);

//2. assign method
let obj3= Object.assign({}, obj1);
console.log(obj3);


//3. using iterations

let obj4 = {}
for(let key in obj2){
    let newkey = key;
    let newvalue = obj2[key];
    obj4[newkey] = newvalue;
}

console.log(obj4);