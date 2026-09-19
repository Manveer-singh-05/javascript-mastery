// there are multiple methods to styling an dom with the help of js
// using style 
document.getElementById('fdiv').style;  // get the properties
document.getElementById('fdiv').style.backgroundColor = "grey";
// there is one draw back like we can change only one properties at a time 

// so to change multiple properties at a time we have cssText
document.getElementById('fdiv').cssText;  // get the details or properites
document.getElementById('fdiv').style.cssText = "backgrond-Color: orange; color: pink ";  // change or add multiple properites


//setAttribute ->it is use to set attributes 
let firstElement = document.querySelector('#fdiv');
firstElement.setAttribute('class', 'divclass'); // create a new attribute calass with name divclass
 
firstElement.setAttribute('style', "padding: 0.1rem");
// there is one thing if there is any exiting attribute there then it deletes all the content of previous attribute and update with newone
// like in this example i have just set attribute of style using padding but there background color also but when i run this query background color automatically remove


//className with the help of this we can add multiple className
let k = document.querySelector('#fpara');
k.className; // give the class names

k.className = "goku vageta";


// class List -> we can perform certain operation here like add , remove, toggle, contains


k.classList;  // give the list of classes
k.classList.add('thirdclass');  // add
k.classList.remove('goku');  // remove
k.classList.toggle('vageta');  // if preseent then remove if not present then added
k.classList.contains('goku');


