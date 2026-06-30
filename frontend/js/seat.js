const movieName = localStorage.getItem("movieName");

const moviePrice = Number(localStorage.getItem("moviePrice"));

document.getElementById("movieName").innerHTML = movieName;

const container = document.getElementById("seatContainer");

let selectedSeats = [];

for(let i=1;i<=25;i++){

let seat=document.createElement("div");

seat.className="seat";

seat.innerHTML=i;

// Random booked seats

if(Math.random()<0.2){

seat.classList.add("booked");

}

seat.addEventListener("click",function(){

if(seat.classList.contains("booked")){

return;

}

seat.classList.toggle("selected");

if(seat.classList.contains("selected")){

selectedSeats.push(i);

}

else{

selectedSeats=selectedSeats.filter(x=>x!=i);

}

document.getElementById("selectedSeat").innerHTML=

selectedSeats.length;

document.getElementById("total").innerHTML=

selectedSeats.length*moviePrice;

});

container.appendChild(seat);

}

document.getElementById("continue")

.addEventListener("click",function(){

if(selectedSeats.length==0){

alert("Please Select At Least One Seat");

return;

}

localStorage.setItem(

"selectedSeats",

JSON.stringify(selectedSeats)

);

window.location.href="payment.html";

});