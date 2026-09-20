
// to calculate the performance there is a standard way named performance.now()  with the help of it we can find out how much time a line of code will take
// Code  1
// const t1 = performance.now()

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code 1: " + (t2-t1));

// Code 2

// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));



//best code 
//fragment means create light copy of dom and it does not contain any  reflow and repaint concept like we can assume it  assemble the changes inside the fragment and then append it to the document in one efficient operation, avoiding unnecessary reflows and protecting the live DOM structure.  
let fragment = document.createDocumentFragment();


for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i + "abc";
    ///NO reflow ande No repaint for the below line
    fragment.appendChild(para);
}
///the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);