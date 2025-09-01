let input=document.getElementById("input");
let charcount=document.getElementById("charcount");
let wordcount=document.getElementById("wordcount");
input.addEventListener("input",function (){
    let currentchar=input.value.length;
    let wordnum=input.value.split(" ").length;
    charcount.textContent=`${currentchar} / 100`;
    wordcount.textContent=`${wordnum} words`;
})