// for loop used where we know the number of iteration
for(let i=0;i<=10;i++){
    console.log(i);
}

// while loop used where we dont know the number of iterations 
let i = 5;
while(i<8){
    console.log(i);
    i++;
}


// do while loop is the loop that guranteed one iteration even though the conditon is not satisifed
let m = 2;
do{
    console.log(m);
    m++;
}while(m<2);


// for each loop
let arr = [12,24,66,77,3233];
let ansarray = arr.forEach((value)=>{
    console.log(value);
})

// for in function
let ob = {
    name: "manveer singh",
    age: 21,
    class : "btech"
}
for(let keys in ob){
    console.log(keys, ob[keys]);
}


// for of loop
let newa = [3,4,5,8,3,7];
for(let x of newa){
    console.log(x);
}