const navbar = document.getElementById("navbar");
const homebtn = document.getElementById("homebtn");
const storybtn = document.getElementById("storybtn");
const worldbtn = document.getElementById("worldbtn");
const playnowbtn = document.getElementById("playnowbtn");
const morebtn = document.getElementById("morebtn");
const morebtn2 = document.getElementById("morebtn2");
const playbtn = document.getElementById("playbtn");
const checkreqbtn = document.getElementById("checkreqbtn");
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

storybtn.addEventListener("mouseover", function(){
    storybtn.style.textDecoration = "underline";
});

storybtn.addEventListener("mouseleave", function(){
    storybtn.style.textDecoration = "none";
});

worldbtn.addEventListener("mouseover", function(){
    worldbtn.style.textDecoration = "underline";
});

worldbtn.addEventListener("mouseleave", function(){
    worldbtn.style.textDecoration = "none";
});

playnowbtn.addEventListener("mouseover", function(){
    playnowbtn.style.textDecoration = "underline";
});

playnowbtn.addEventListener("mouseleave", function(){
    playnowbtn.style.textDecoration = "none";
});

morebtn.addEventListener("mouseover", function(){
    morebtn.style.textDecoration = "underline";
});

morebtn.addEventListener("mouseleave", function(){
    morebtn.style.textDecoration = "none";
});

morebtn2.addEventListener("mouseover", function(){
    morebtn2.style.textDecoration = "underline";
});

morebtn2.addEventListener("mouseleave", function(){
    morebtn2.style.textDecoration = "none";
});

playbtn.addEventListener("mouseover", function(){
    playbtn.style.textDecoration = "underline";
});

playbtn.addEventListener("mouseleave", function(){
    playbtn.style.textDecoration = "none";
});

checkreqbtn.addEventListener("mouseover", function(){
    checkreqbtn.style.textDecoration = "underline";
});

checkreqbtn.addEventListener("mouseleave", function(){
    checkreqbtn.style.textDecoration = "none";
});

upbtn.addEventListener("mouseover", function(){
    upbtn.src = "/assets/Up2.svg";
});

upbtn.addEventListener("mouseleave", function(){
    upbtn.src = "/assets/Up1.svg";
});