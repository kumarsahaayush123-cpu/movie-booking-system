const movie = localStorage.getItem("movieName");

const seats = JSON.parse(localStorage.getItem("selectedSeats"));

const payment = localStorage.getItem("paymentMethod");

const price = Number(localStorage.getItem("moviePrice"));

document.getElementById("movie").innerHTML = movie;

document.getElementById("seat").innerHTML = seats.join(", ");

document.getElementById("price").innerHTML = seats.length * price;

document.getElementById("payment").innerHTML = payment;

const booking = "BK"+Math.floor(Math.random()*100000);

document.getElementById("bookingId").innerHTML = booking;

const today = new Date();

document.getElementById("date").innerHTML = today.toDateString();

document.getElementById("download").onclick=function(){

window.print();

}