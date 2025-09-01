let happy=document.getElementById("happy");
let confuse=document.getElementById("confuse");
let sad=document.getElementById("sad");
let angry=document.getElementById("angry");
let shock=document.getElementById("shock");
let h2=document.querySelector("h2");
happy.addEventListener("click",function () {
    h2.textContent="I'm Happy today :)";

});
sad.addEventListener("click",function () {
    h2.textContent="I'm Feeling Sad today :(";

});
confuse.addEventListener("click",function () {
    h2.textContent="I'm confused!! ";

});
angry.addEventListener("click",function () {
    h2.textContent="I'm Angryy";

});
shock.addEventListener("click",function () {
    h2.textContent="I'm so shockedd!! :)";

});