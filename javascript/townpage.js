const navbar = document.getElementById("navbar");
const homebtn = document.getElementById("homebtn");
const upbtn = document.getElementById("upbtn");

navbar.addEventListener("mouseover", function(){
    navbar.style.backgroundColor = "#96EFFF";
    navbar.style.opacity = "90%";
    navbar.style.boxShadow = "0px 1px 4px #5FBDFF";
});

navbar.addEventListener("mouseleave", function(){
    navbar.style.backgroundColor = null;
    navbar.style.opacity = null;
    navbar.style.boxShadow = "none";
});

homebtn.addEventListener("mouseover", function(){
    homebtn.style.textDecoration = "underline";
});

homebtn.addEventListener("mouseleave", function(){
    homebtn.style.textDecoration = "none";
});

upbtn.addEventListener("mouseover", function(){
    upbtn.src = "/assets/Up2.svg";
});

upbtn.addEventListener("mouseleave", function(){
    upbtn.src = "/assets/Up1.svg";
});