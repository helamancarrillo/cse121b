/* W02-Task - Profile Home Page */





/*
const profilePicture = document.createElement('img');
profilePicture.setAttribute("src", "images/montana.jpeg")
profilePicture.setAttribute("alt", "Mountain View");
document.body.appendChild(profilePicture);*/






/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Helaman Carrillo";
const currentYear = "2024";
const profilePicture = "images/montana.jpeg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');


const imageElement = document.querySelector('img'); 


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const foods = ["Lasagna", "Spaguetti", "Pizza", "Calzone"];

foodElement.innerText = `${foods}`

const favFood = "Burgers";

foods.push(favFood);

foodElement.innerHTML += `<br>${foods}</br>`;

foods.shift(); 

foodElement.innerHTML += `${foods}`;

foods.pop(); 

foodElement.innerHTML += `<br>${foods}<br>`







