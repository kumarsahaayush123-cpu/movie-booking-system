const movie = localStorage.getItem("movieName");

const seats = JSON.parse(localStorage.getItem("selectedSeats"));

const price = Number(localStorage.getItem("moviePrice"));

document.getElementById("movie").innerHTML = movie;

document.getElementById("seatList").innerHTML = seats.join(", ");

document.getElementById("amount").innerHTML = seats.length * price;

document.getElementById("payBtn").onclick = function(){

const method =
document.querySelector("input[name='pay']:checked").value;

localStorage.setItem("paymentMethod",method);

window.location.href="ticket.html";

}