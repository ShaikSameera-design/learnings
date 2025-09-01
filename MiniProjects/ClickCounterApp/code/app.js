let btn=document.querySelector("button");
let h3=document.querySelector("h3");
let num=0;
btn.addEventListener("click",function () {
     num=num+1;
    h3.textContent=num;
});
let reset=document.getElementById("reset");
reset.addEventListener("click", function () {
    h3.textContent="0";
})