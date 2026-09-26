let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let div = document.getElementById('kl');
let button = document.getElementById('su');
button.addEventListener("click", function(e) {
    e.preventDefault();
    div.innerHTML += `<p id = 'p1'>${id1.value}</p>`;
    div.innerHTML += `<p id = 'p2'>${id2.value}</p>`;
    div.innerHTML += `<button id ="swap" onClick = swap()>swap button</button>`;
})

function swap(){
    
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let temp = p1.innerText;
    p1.innerText = p2.innerText;
    p2.innerText = temp;
}

