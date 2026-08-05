// the difference between an find and an filter is that filter retrun an array of object while find only return one object only 

const products = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Mouse"
    },
    {
        id: 3,
        name: "Keyboard"
    }
];
// using find
const p = products.find(l=> l.id===1);
//using filter 
const l = products.filter(p=>p.id===2);
console.log(p);
console.log(l);