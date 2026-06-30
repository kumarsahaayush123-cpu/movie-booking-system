const buttons = document.querySelectorAll(".book");

buttons.forEach(button => {

button.addEventListener("click",function(){

window.location.href="pages/login.html";

});

});

document.getElementById("loginBtn").onclick=function(){

window.location.href="pages/login.html";

}