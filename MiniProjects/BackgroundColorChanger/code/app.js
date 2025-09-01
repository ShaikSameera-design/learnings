let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let colorbtn=document.getElementById("colorbtn");

btn.addEventListener("click",function () {
    let color=["red","blue","green","yellow","black","gold","cyan","silver","pink","violet"];
let randcol=color[Math.floor(Math.random()*color.length)];
    h1.textContent="button clicked!!";
    alert("button clicked!!");
    document.body.style.backgroundColor=randcol;
    

});