const navbar = document.getElementById("navbar");
const homebtn = document.getElementById("homebtn");

navbar.addEventListener("mouseover", function () {
    navbar.style.backgroundColor = "#96EFFF";
    navbar.style.opacity = "90%";
    navbar.style.boxShadow = "0px 1px 4px #5FBDFF";
});

navbar.addEventListener("mouseleave", function () {
    navbar.style.backgroundColor = null;
    navbar.style.opacity = null;
    navbar.style.boxShadow = "none";
});

homebtn.addEventListener("mouseover", function () {
    homebtn.style.textDecoration = "underline";
});

homebtn.addEventListener("mouseleave", function () {
    homebtn.style.textDecoration = "none";
});

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
document.getElementById('form').addEventListener('submit', function (e) {
    let email = document.getElementById('femail').value;
    let password = document.getElementById('fpassword').value;
    let confirm_password = document.getElementById('fconfirm-password').value;
    let age = document.getElementById('fage').value;
    let gender = document.getElementById('fgender').value;
    let tnc = document.getElementById('ftnc').checked;

    // Empty Fields Validation
    if (email === '' || password === '' || confirm_password === '' || age === '') {
        confirm("Empty fields are not allowed!");
    }
    // Terms and Conditions Validation
    else if (!tnc){
        confirm("You need to accept the terms and condition!");
    }
    // Email Validation
    else if (!email.endsWith("@gmail.com")) {
        confirm("E-Mail needs to end in @gmail.com!");
    }
    // Password Strength Validation
    else if (!(password.match(lowerCaseLetters) && password.match(upperCaseLetters))){
        confirm("Password needs to have upper case and lower case!");
    }
    // Password Confirmation Validation
    else if (password !== confirm_password){
        confirm("Confirmation password doesn't match!");
    }
    // Age Validation
    else if (age < 0){
        confirm ("Age can't be negative!");
    }
    // Gender Validation
    else if (gender === 'default'){
        confirm("Gender needs to either be male or female!");
    }
    // Success Validation
    else {
        confirm("Submitted succesfully!");
    }
    
})