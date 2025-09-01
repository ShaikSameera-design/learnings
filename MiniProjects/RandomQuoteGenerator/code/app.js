let btn=document.querySelector("button");
let h1=document.querySelector("h1");

btn.addEventListener("click",function (){
    const quotes = [
  "Believe in yourself!",
  "Keep pushing forward.",
  "Stay curious.",
  "You’re doing amazing!",
  "Success is built daily."
];
    let rand=quotes[Math.floor(Math.random()*quotes.length)];
    h1.textContent=rand;
});