const movies=[

{

name:"Avenger Endgame",

genre:"Action",

price:250,

rating:"⭐⭐⭐⭐⭐",

image:"../images/avenger.jpg"

},

{

name:"Pushpa 3",

genre:"Action",

price:180,

rating:"⭐⭐⭐⭐",

image:"../images/puspa.jpg"

},

{

name:"Kalki 2898 AD",

genre:"Sci-Fi",

price:220,

rating:"⭐⭐⭐⭐⭐",

image:"../images/kalki.jpg"

},

{

name:"Interstellar",

genre:"Sci-Fi",

price:300,

rating:"⭐⭐⭐⭐⭐",

image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"

},

{

name:"The Batman",

genre:"Action",

price:260,

rating:"⭐⭐⭐⭐",

image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600"

}

];

const container=document.getElementById("movieContainer");

function displayMovies(list){

container.innerHTML="";

list.forEach(movie=>{

container.innerHTML+=`

<div class="card">

<img src="${movie.image}">

<h2>${movie.name}</h2>

<p>Genre : ${movie.genre}</p>

<p>${movie.rating}</p>

<p>₹${movie.price}</p>

<button class="book"
onclick="bookMovie('${movie.name}',${movie.price})">

Book Now

</button>

</div>

`;

});

}

displayMovies(movies);

function bookMovie(name,price){

localStorage.setItem("movieName",name);

localStorage.setItem("moviePrice",price);

window.location.href="seat.html";

}

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=movies.filter(movie=>

movie.name.toLowerCase().includes(value)

);

displayMovies(filtered);

});