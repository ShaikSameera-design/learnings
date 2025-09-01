let input=document.getElementById("input");
let count=document.getElementById("count");
input.addEventListener("input",function (){
    let currentchar=input.value.length;
    count.textContent = `${currentchar} / 100 characters`;

});