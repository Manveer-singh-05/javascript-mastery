// to make for loop easier we have created this reduce method
const numbers = [10,30,34];
let ans = numbers.reduce((total, p)=>{
        return total+p;
},0)
console.log(ans);


// real life cart example
const cart = [

    {
        name:"Laptop",
        price:65000
    },

    {
        name:"Mouse",
        price:900
    },

    {
        name:"Keyboard",
        price:1500
    }

];
//need total price
let ans1 = cart.reduce((total,p)=>{
    return total + p.price;
},0);
console.log(ans1);


// need multiplication of price
let ans2 = cart.reduce((total,p)=>{
    return total* p.price;
},1);
console.log(ans2);