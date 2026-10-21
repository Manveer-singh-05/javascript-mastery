
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let num = document.getElementById('num');

plus.addEventListener("click", () => {
    let x = Number(num.innerText);
    x = x + 1;
    num.innerText = x;
});

minus.addEventListener("click", () => {
    let x = Number(num.innerText);
    x = x - 1;
    num.innerText = x;
});

