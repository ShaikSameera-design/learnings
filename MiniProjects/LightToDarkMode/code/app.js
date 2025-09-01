let light=document.getElementById("light");
let dark=document.getElementById("dark");
dark.addEventListener("click", function (){
    document.body.style.background="black";
});
light.addEventListener("click", function (){
    document.body.style.background="white";
});