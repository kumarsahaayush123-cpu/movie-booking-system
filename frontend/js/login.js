// Registration

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const password=document.getElementById("regPassword").value;

localStorage.setItem("username",name);

localStorage.setItem("email",email);

localStorage.setItem("password",password);

alert("Registration Successful!");

window.location.href="login.html";

});

}

// Login

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

const savedUser = localStorage.getItem("email");

const savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

alert("Login Successful!");

window.location.href="movies.html";

}else{

alert("Invalid Username or Password");

}

});

}