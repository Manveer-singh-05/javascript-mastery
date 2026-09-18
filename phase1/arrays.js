const arr = [10,12,33];
// delete last element
arr.pop();

// to push new element at the last by default
arr.push(39);

// to push new element at the front
arr.unshift(22);


// removing first element
arr.shift();


// slice method  extract the specific part
let k = [12,35,566, 335]
let op=  k.slice(1,2);
console.log(k);
console.log(op);

// splice = content change in array like insert, remove and update

k.splice(1,3,"manveer");  // splice(start, no of removal, inserting values);
console.log(k);



let n = arr.length;
for(let i=0;i<n;i++){
    console.log(arr[i]);
}
console.log(arr);



// using some logic or searching some thing
const data = [
    {
        id: 1,
        name:"manveer singh",
        course: "btech"
    }
    ,
    {
        id:2,
        name:"aman",
        course:"bcom"
    },
    {
        id:3,
        name:"man",
        course:"bsc"
    }

]
let l = data.length;
for(let i=0; i<l;i++){
    if(data[i].name==="aman"){
        console.log(data[i]);
    }
}