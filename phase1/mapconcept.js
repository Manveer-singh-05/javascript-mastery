// most important concept also known as the king of react
// why do we create map because with the use of map we can create new collections from it without changing the orginal data
const data = [1,3,4,2];
const d = data.map((nums)=>{
    return nums*2;
})
console.log(data);
console.log(d);


// real life example if manager want only array of products only then we use map
const products = [

    {
        id:1,
        name:"Laptop",
        price:65000
    },

    {
        id:2,
        name:"Mouse",
        price:900
    },

    {
        id:3,
        name:"Keyboard",
        price:1500
    }

];

let product  = products.map((p)=>{
    return p["name"];
})
console.log(product);



// if i want to increase the price by 100 each item 
let price = products.map((p)=>{
    return {
        name: p.name,
        price:p.price+100
    }
});
console.log(price);


