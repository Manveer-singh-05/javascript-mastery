//The DOM (Document Object Model) lets JavaScript change the content of a web page
//The BOM (Browser Object Model) lets JavaScript interact with the browser window itself

//Document Object Model (DOM)What it is: A tree-like structure representing the HTML content of your webpage.What it does: Allows you to add, delete, or change HTML elements, text, and styles.

// examppl of dom
document.getElementById("greeting").textContent = "Hello, World!";



//Browser Object Model (BOM)What it is: A set of objects exposed by the web browser that deals with the browser environment.What it does: Allows you to control browser windows, check screen size, navigate history, or read the current URL using the root window object.

// example of bom
// Show a pop-up alert box in the browser
window.alert("Welcome to the site!");