let username=document.getElementById("username");
let password=document.getElementById("password");
let form=document.querySelector("form");
form.addEventListener("submit",function (e){
    e.preventDefault();
    if(username.value==""||password.value=="")
    {
        alert("details should not be empty");
    }
    else{
        alert(`Welcome ${username.value}`);
    }

})