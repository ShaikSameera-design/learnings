let bill=document.getElementById("bill");
let tip=document.getElementById("tip");
let calcbtn=document.getElementById("calcBtn");
let h3=document.querySelector("h3");
calcbtn.addEventListener("click",function (){
    let billAmount = parseFloat(bill.value);
  let tipPercent = parseFloat(tip.value);
    
  if (isNaN(billAmount) || isNaN(tipPercent) || billAmount <= 0 || tipPercent < 0) {
    h3.textContent = "Please enter valid positive numbers!";
    return;
  }
  let Tip = billAmount * (tipPercent / 100);
  let Total = billAmount + Tip;
  h3.textContent = `Tip: ₹${Tip.toFixed(2)} | Total: ₹${Total.toFixed(2)}`;

});