// accessing the element 
// there are various methods
document.getElementById('fpara');
document.getElementsByClassName('fclass');
document.getElementsByTagName('p');
document.querySelector(".fclass"); // gives only first matching element with this class name
document.querySelectorAll(".fclass"); // gives all the matching element with this class name


// updating existing element

document.getElementById('fpara').innerHTML = '<p>changed the paragprah</p>';   // Returns a string with the element and all its inner content (tags, attributes, and nested elements).
// to getting first element of class with the help of [0]; like we do in array
document.getElementsByClassName('fclass')[0].outerHtml = '<p>changed the whole tag</p>'; //  Replaces the element and its content entirely with new HTML.
document.getElementById('fpara').textContent;  // it shows all the content even the content is hiddden
document.getElementById('fpara').innerText;  // it shows only rendered content that is showing to ui


// creating the element
let newele = document.createElement('h1');
newele.textContent = "My name is Manveer Singh";
let bodytag = document.getElementsByTagName('body')[0];
bodytag.appendChild(newele);

// in default it insert in last if we want to add to specific position then then there are fours pattern
//insertAdjacentElement(CaretPosition, element);
let posi = document.getElementById('fpara');
posi.insertAdjacentElement("beforebegin",newele);   // just add before the starting of element
posi.insertAdjacentElement("afterbegin", newele);  // just add after the starting of element or tag
posi.insertAdjacentElement("beforeend", newele);    // just add before the ending of tag
posi.insertAdjacentElement("afterend", newele);  // just add after the ending of tag




// delete-> to delete an child we have to use removeChild();
let parent = document.querySelector('body');
let child = document.getElementById('fheading');
parent.removeChild(child);