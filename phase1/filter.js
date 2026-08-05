// where we have to search data under the certain conditions we se filter like only is the important keyword here
const doctors = [

    {
        name:"Dr. Raj",
        rating:4.8,
        fee:800
    },

    {
        name:"Dr. Aman",
        rating:4.5,
        fee:500
    },

    {
        name:"Dr. Neha",
        rating:4.9,
        fee:1200
    },

    {
        name:"Dr. Ravi",
        rating:4.2,
        fee:700
    }

];

//Show only doctors whose rating is above 4.7.
let m = doctors.filter(d=> d.rating > 4.7).map((p)=>{
    return p.name;
})
console.log(m);

// there is another way also 
let l = doctors.filter(d=> d.rating>4.7);
console.log(l);
