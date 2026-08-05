// functions are the barin of javascript
// it a block of code  that perform a specific task 

//return type
function calculate(price){
    return price * 0.18;
}
console.log(calculate(8000));


function calculatetotal(cart){
    let ans = cart.reduce((total,m)=>{
        return total+ m.price;
    },0);
    return ans;
}
const cart = [

    {
        name:"Laptop",
        price:60000
    },

    {
        name:"Mouse",
        price:1000
    }

];

let ans = calculatetotal(cart);
console.log(ans);


