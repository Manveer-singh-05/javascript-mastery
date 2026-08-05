const arr = [10,12,33];
// delete last element
arr.pop();

// to push new element at the last by default
arr.push(39);

// to push new element at the front
arr.unshift(22);


// removing first element
arr.shift();

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