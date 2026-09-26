let age = document.getElementById('id1');
let btn = document.getElementById('submit');
btn.addEventListener("click", function(){
   if(age.value.trim() === ""){
    alert("Enter the age: ")
    return;
   }
    let userAge = Number(age.value);
     if(userAge>=18){
        alert("you are eligible");
    }
    else{
        alert("you are not eligible");
    }

});