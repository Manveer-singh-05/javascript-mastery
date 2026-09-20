//Event ->event is an announcement happening on browser In technical terms, an Event is a signal that something has happened in the browser. 
//Examples: A user clicks a button (click), types a key (keydown), resizes the window (resize), or a page finishes loading (load).

// Event Target (The "Where It Happened")  -> You are exactly right—it is the element where the action occurs. In JavaScript, an Event Target is the specific HTML element (or object) that triggered the event.

// Event Listener (The "What To Do About It") -> an Event Listener is a function that waits ("listens") for a specific event to happen, and then executes code in response.

function changeText(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = " Babbar"
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);    // added event listner

// fpara.removeEventListener('click', changeText);  // removed event listner


//one important thing to remove the event listner we have to give the same function to removeEventlistner that is used by addeventlistner other wise it can be removed

//  like example i will demonstrate one way in this way the object id of both function is different so removevent listner not able to remove that event becuase the object id of both function is different


let para = document.getElementById('fpara');

para.addEventListener('click', function (event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = " Babbar"
}
);
para.removeEventListener('click',function (event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = " Babbar"
}
);      // now as u can see both event listner have same function but hte obejct is different that why remove event listner will not remove the event


// default actions
let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "Click done bhai"
});





let paras = document.querySelectorAll('p');

function alertPara(event) {
    if(event.target.nodeName === 'SPAN') {
        alert("You have Clicked on para: " + event.target.textContent );
    }
    
}

// avoiding too many listner
for(let i=0; i<paras.length; i++) {
    let para = paras[i];
    console.log("eventListener added");
    para.addEventListener('click', alertPara);
}

let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);