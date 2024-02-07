/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Helaman Carrillo",
    photo : "images/playa.jpeg", 
    favoriteFoods : ["Lasagna", "Spaguetti","Pizza","Calzone"],
    hobbies : ["Swimming", "Dancing","Running","Reading"],
    placesLived : [], 

}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
    place : "Copan Ruinas, Honduras", 
    length : "5 months", 
    },
    {
        place : "Potrerillos, Honduras",
        length : "5 months"
    },
    {
        place : "Choloma, Honduras", 
        length : "2 months"
    }
); 



/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name; 

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});



/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {

    let dt = document.createElement("dt");
    let dd = document.createElement("dd");



    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});



