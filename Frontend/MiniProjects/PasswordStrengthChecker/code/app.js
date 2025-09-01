let password = document.getElementById("password");
let strength = document.getElementById("strength");

password.addEventListener("input", function () {
    let pass = password.value;

    if (pass.length < 6) {
        strength.textContent = "Strength: Weak";
        strength.style.color = "red";
    } else if (/[a-zA-Z]/.test(pass) && /\d/.test(pass)) {
        strength.textContent = "Strength: Medium";
        strength.style.color = "orange";
    } else if (/[a-zA-Z]/.test(pass) && /\d/.test(pass) && /[!@#$%^&*]/.test(pass) && pass.length >= 8) {
        strength.textContent = "Strength: Strong";
        strength.style.color = "green";
    } else {
        strength.textContent = "Strength: Medium";
        strength.style.color = "orange";
    }
});
