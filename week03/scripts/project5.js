///import List from "../uscitites.js"





 /*const statesElement = document.querySelector("#states");

const statesList = []; 


const displayCities = (cities) => {

 
    cities.forEach((city) => {


        let article = document.createElement("article");
        
        let title = document.createElement("h3");
        title.textContent = city.name;


        let imaGe = document.createElement("img");
        imaGe.src = city.img;
        imaGe.alt = city.name;
        
        let para = document.createElement('h4');
        para.textContent = `Capital City:${city.capital}`;

        let lat = document.createElement('p');
        lat.textContent = `Latitud:${city.lat}`


        article.appendChild(title);
        article.appendChild(imaGe);
        article.appendChild(para);
        article.appendChild(lat);


        statesElement.appendChild(article);
   
    }); 

};


const getCities = async () => {

    const response = List; 

    console.log(response);

   

    statesList.push(response);

    console.log(statesList)

    

    displayCities(statesList); 
    
   
};


const reset = () => {
    statesElement.innerHTML = "";
};


const filterStates = (states) => {

    reset();

    let filter = document.getElementById("filter").value; 

    switch (filter) {

        case "Utah":
            displayCities(states.filter(city => city.name === "Utah"));

            console.log(displayCities(states.filter(city => city.name === "Utah")));


        /*let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
        displayTemples(utahTemples); 
            
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));

        displayCities(cities.filter(city => city.name.includes("Utah")));
        
        
        break;

        case "alabama":
            displayCities(states.filter(city => city.name === "Alabama"));
            break;

        /*    let notutahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notutahTemples);
           
            

        /*case "older":
            
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            
            displayTemples(temples);
            break;
    }
};

document.querySelector("#filter").addEventListener("change", () => { filterStates(statesList) });

/* document.querySelector("#filter").addEventListener("change",filterCities); 

getCities(); */ 

/*import List from "../uscitites.js"

console.log(List);

const statesElement = document.querySelector("#states");

const statesList = [];

const displayCities = (cities) => {
    cities.forEach((city) => {
        let article = document.createElement("article");
        let title = document.createElement("h3");
        title.textContent = city.name;

        let imaGe = document.createElement("img");
        imaGe.src = city.img;
        imaGe.alt = city.name;

        let para = document.createElement('h4');
        para.textContent = `Capital City:${city.capital}`;

        let lat = document.createElement('p');
        lat.textContent = `Latitude:${city.lat}`;

        article.appendChild(title);
        article.appendChild(imaGe);
        article.appendChild(para);
        article.appendChild(lat);

        statesElement.appendChild(article);
    });
};

const getCities = async () => {
    try {
        // Assuming List is defined in the imported "uscitites.js" file
        const response = List;
        statesList.push(...response);
        displayCities(statesList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const reset = () => {
    statesElement.innerHTML = "";
};

const filterStates = (cities) => {
    reset();
    let filter = document.getElementById("filter").value;

    switch (filter) {
        case "Utah":
            displayCities(cities.filter(city => city.name === "Utah"));
            console.log(displayCities(cities.filter(city => city.name === "Utah"))); 
            break; 
        case "Alabama":
            displayCities(cities.filter(city => city.name === "Alabama"));
            break;
        // Add other cases as needed
    }
};

document.querySelector("#filter").addEventListener("change", () => { filterStates(statesList) });

getCities(); */





const List = [
    {
        "abbr": "AL",
        "name": "Alabama",
        "img": "https://cdn.britannica.com/37/195737-050-BC226872/Alabama-united-states-locator-map.jpg",
        "capital": "Montgomery",
        "lat": "32.361538",
        "long": "-86.279118"
    },
    {
        "abbr": "AK",
        "name": "Alaska",
        "img": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Alaska_Locator_Map_with_US.PNG",
        "capital": "Juneau",
        "lat": "58.301935",
        "long": "-134.419740"
    },
    {
        "abbr": "AZ",
        "name": "Arizona",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Arizona_in_United_States.svg/800px-Arizona_in_United_States.svg.png",
        "capital": "Phoenix",
        "lat": "33.448457",
        "long": "-112.073844"
    },
    {
        "abbr": "AR",
        "name": "Arkansas",
        "img": "https://cdn.britannica.com/40/195740-050-B9DA3DFC/Arkansas-united-states-locator-map.jpg",
        "capital": "Little Rock",
        "lat": "34.736009",
        "long": "-92.331122"
    },
    {
        "abbr": "CA",
        "name": "California",
        "img": "https://cdn.britannica.com/41/195741-050-E68CF3CA/California-united-states-locator-map.jpg",
        "capital": "Sacramento",
        "lat": "38.555605",
        "long": "-121.468926"
    },
    {
        "abbr": "CO",
        "name": "Colorado",
        "img": "https://cdn.britannica.com/42/195742-050-D4D801A1/Colorado-united-states-locator-map.jpg",
        "capital": "Denver",
        "lat": "39.7391667",
        "long": "-104.984167"
    },
    {
        "abbr": "CT",
        "name": "Connecticut",
        "img": "https://cdn.britannica.com/43/195743-050-0F6A8E34/connecticut-united-states-locator-map.jpg",
        "capital": "Hartford",
        "lat": "41.767",
        "long": "-72.677"
    },
    {
        "abbr": "DE",
        "name": "Delaware",
        "img": "https://cdn.britannica.com/44/195744-050-7183CF35/Delaware-united-states-locator-map.jpg",
        "capital": "Dover",
        "lat": "39.161921",
        "long": "-75.526755"
    },
    {
        "abbr": "FL",
        "name": "Florida",
        "img": "https://cdn.britannica.com/45/195745-050-CC350E56/Florida-united-states-locator-map.jpg",
        "capital": "Tallahassee",
        "lat": "30.4518",
        "long": "-84.27277"
    },
    {
        "abbr": "GA",
        "name": "Georgia",
        "img": "https://cdn.britannica.com/46/195746-050-A553D4A9/Georgia-united-states-locator-map.jpg",
        "capital": "Atlanta",
        "lat": "33.76",
        "long": "-84.39"
    },
    {
        "abbr": "HI",
        "name": "Hawaii",
        "img": "https://cdn.mappr.co/wp-content/uploads/2023/07/hawaii-location-usa-map.png",
        "capital": "Honolulu",
        "lat": "21.30895",
        "long": "-157.826182"
    },
    {
        "abbr": "ID",
        "name": "Idaho",
        "img": "https://cdn.britannica.com/48/195748-050-DC19C8E0/Idaho-united-states-locator-map.jpg",
        "capital": "Boise",
        "lat": "43.613739",
        "long": "-116.237651"
    },
    {
        "abbr": "IL",
        "name": "Illinois",
        "img": "https://cdn.britannica.com/49/195749-050-2FFF4350/Illinois-united-states-locator-map.jpg",
        "capital": "Springfield",
        "lat": "39.783250",
        "long": "-89.650373"
    },
    {
        "abbr": "IN",
        "name": "Indiana",
        "img": "https://cdn.britannica.com/50/195750-050-A8E0645E/Indiana-united-states-locator-map.jpg",
        "capital": "Indianapolis",
        "lat": "39.790942",
        "long": "-86.147685"
    },
    {
        "abbr": "IA",
        "name": "Iowa",
        "img": "https://cdn.britannica.com/00/195700-050-58EA9AD6/Iowa-united-states-locator-map.jpg",
        "capital": "Des Moines",
        "lat": "41.590939",
        "long": "-93.620866"
    },
    {
        "abbr": "KS",
        "name": "Kansas",
        "img": "https://cdn.britannica.com/01/195701-050-C7E86041/Kansas-united-states-locator-map.jpg",
        "capital": "Topeka",
        "lat": "39.04",
        "long": "-95.69"
    },
    {
        "abbr": "KY",
        "name": "Kentucky",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Kentucky_in_United_States.svg/640px-Kentucky_in_United_States.svg.png",
        "capital": "Frankfort",
        "lat": "38.197274",
        "long": "-84.86311"
    },
    {
        "abbr": "LA",
        "name": "Louisiana",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Louisiana_in_United_States.svg/1200px-Louisiana_in_United_States.svg.png",
        "capital": "Baton Rouge",
        "lat": "30.45809",
        "long": "-91.140229"
    },
    {
        "abbr": "ME",
        "name": "Maine",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Maine_in_United_States.svg/1200px-Maine_in_United_States.svg.png",
        "capital": "Augusta",
        "lat": "44.323535",
        "long": "-69.765261"
    },
    {
        "abbr": "MD",
        "name": "Maryland",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Maryland_in_United_States.svg",
        "capital": "Annapolis",
        "lat": "38.972945",
        "long": "-76.501157"
    },
    {
        "abbr": "MA",
        "name": "Massachusetts",
        "img": "https://cdn.britannica.com/06/195706-050-9649FB05/Massachusetts-united-states-locator-map.jpg",
        "capital": "Boston",
        "lat": "42.2352",
        "long": "-71.0275"
    },
    {
        "abbr": "MI",
        "name": "Michigan",
        "img": "https://proyectoviajero.com/wp-content/uploads/2023/04/mapa_ubicacion_michigan-XL.webp",
        "capital": "Lansing",
        "lat": "42.7335",
        "long": "-84.5467"
    },
    {
        "abbr": "MN",
        "name": "Minnesota",
        "img": "https://proyectoviajero.com/wp-content/uploads/2023/04/mapa_ubicacion_minnesota_usa-XL.webp",
        "capital": "Saint Paul",
        "lat": "44.95",
        "long": "-93.094"
    },
    {
        "abbr": "MS",
        "name": "Mississippi",
        "img": "https://cdn.britannica.com/09/195709-050-7AA0A248/Mississippi-united-states-locator-map.jpg",
        "capital": "Jackson",
        "lat": "32.320",
        "long": "-90.207"
    },
    {
        "abbr": "MO",
        "name": "Missouri",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Missouri_in_United_States.svg/800px-Missouri_in_United_States.svg.png",
        "capital": "Jefferson City",
        "lat": "38.572954",
        "long": "-92.189283"
    },
    {
        "abbr": "MT",
        "name": "Montana",
        "img": "https://proyectoviajero.com/wp-content/uploads/2022/10/donde_esta_montana_estados_unidos-XL.webp",
        "capital": "Helana",
        "lat": "46.595805",
        "long": "-112.027031"
    },
    {
        "abbr": "NE",
        "name": "Nebraska",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nebraska_in_United_States.svg/1200px-Nebraska_in_United_States.svg.png",
        "capital": "Lincoln",
        "lat": "40.809868",
        "long": "-96.675345"
    },
    {
        "abbr": "NV",
        "name": "Nevada",
        "img": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Nevada_in_United_States.svg",
        "capital": "Carson City",
        "lat": "39.160949",
        "long": "-119.753877"
    },
    {
        "abbr": "NH",
        "name": "New Hampshire",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/New_Hampshire_in_United_States_%28US48%29.svg/640px-New_Hampshire_in_United_States_%28US48%29.svg.png",
        "capital": "Concord",
        "lat": "43.220093",
        "long": "-71.549127"
    },
    {
        "abbr": "NJ",
        "name": "New Jersey",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/New_Jersey_in_United_States.svg/1200px-New_Jersey_in_United_States.svg.png",
        "capital": "Trenton",
        "lat": "40.221741",
        "long": "-74.756138"
    },
    {
        "abbr": "NM",
        "name": "New Mexico",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_Mexico_in_United_States.svg/1200px-New_Mexico_in_United_States.svg.png",
        "capital": "Santa Fe",
        "lat": "35.667231",
        "long": "-105.964575"
    },
    {
        "abbr": "NY",
        "name": "New York",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/New_York_in_United_States.svg/300px-New_York_in_United_States.svg.png",
        "capital": "Albany",
        "lat": "42.659829",
        "long": "-73.781339"
    },
    {
        "abbr": "NC",
        "name": "North Carolina",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/North_Carolina_in_United_States.svg/300px-North_Carolina_in_United_States.svg.png",
        "capital": "Raleigh",
        "lat": "35.771",
        "long": "-78.638"
    },
    {
        "abbr": "ND",
        "name": "North Dakota",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/North_Dakota_in_United_States.svg/1200px-North_Dakota_in_United_States.svg.png",
        "capital": "Bismarck",
        "lat": "48.813343",
        "long": "-100.779004"
    },
    {
        "abbr": "OH",
        "name": "Ohio",
        "img": "https://proyectoviajero.com/wp-content/uploads/2022/11/mapa_ubicacion_ohio_eeuu-XL.webp",
        "capital": "Columbus",
        "lat": "39.962245",
        "long": "-83.000647"
    },
    {
        "abbr": "OK",
        "name": "Oklahoma",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Oklahoma_in_United_States.svg/800px-Oklahoma_in_United_States.svg.png",
        "capital": "Oklahoma City",
        "lat": "35.482309",
        "long": "-97.534994"
    },
    {
        "abbr": "OR",
        "name": "Oregon",
        "img": "https://proyectoviajero.com/wp-content/uploads/2023/03/mapa_ubicacion_oregon_usa-XL.webp",
        "capital": "Salem",
        "lat": "44.931109",
        "long": "-123.029159"
    },
    {
        "abbr": "PA",
        "name": "Pennsylvania",
        "img": "https://cdn.britannica.com/23/195723-004-C4E932C5.jpg",
        "capital": "Harrisburg",
        "lat": "40.269789",
        "long": "-76.875613"
    },
    {
        "abbr": "RI",
        "name": "Rhode Island",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Rhode_Island_in_United_States_%28zoom%29.svg/1200px-Rhode_Island_in_United_States_%28zoom%29.svg.png",
        "capital": "Providence",
        "lat": "41.82355",
        "long": "-71.422132"
    },
    {
        "abbr": "SC",
        "name": "South Carolina",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/South_Carolina_in_United_States.svg/300px-South_Carolina_in_United_States.svg.png",
        "capital": "Columbia",
        "lat": "34.000",
        "long": "-81.035"
    },
    {
        "abbr": "SD",
        "name": "South Dakota",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/South_Dakota_in_United_States.svg/1200px-South_Dakota_in_United_States.svg.png",
        "capital": "Pierre",
        "lat": "44.367966",
        "long": "-100.336378"
    },
    {
        "abbr": "TN",
        "name": "Tennessee",
        "img": "https://proyectoviajero.com/wp-content/uploads/2022/12/mapa_ubicacion_tennessee_eeuu-XL.webp",
        "capital": "Nashville",
        "lat": "36.165",
        "long": "-86.784"
    },
    {
        "abbr": "TX",
        "name": "Texas",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Texas_in_United_States.svg/300px-Texas_in_United_States.svg.png",
        "capital": "Austin",
        "lat": "30.266667",
        "long": "-97.75"
    },
    {
        "abbr": "UT",
        "name": "Utah",
        "img": "https://proyectoviajero.com/wp-content/uploads/2022/09/estados_usa_alabama-XL.webp",
        "capital": "Salt Lake City",
        "lat": "40.7547",
        "long": "-111.892622"
    },
    {
        "abbr": "VT",
        "name": "Vermont",
        "img": "https://proyectoviajero.com/wp-content/uploads/2023/02/mapa_ubicacion_vermont_usa-XL.webp",
        "capital": "Montpelier",
        "lat": "44.26639",
        "long": "-72.57194"
    },
    {
        "abbr": "VA",
        "name": "Virginia",
        "img": "https://proyectoviajero.com/wp-content/uploads/2023/03/mapa_ubicacion_virginia_estados_unidos-XL.webp",
        "capital": "Richmond",
        "lat": "37.54",
        "long": "-77.46"
    },
    {
        "abbr": "WA",
        "name": "Washington",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Washington_in_United_States.svg/300px-Washington_in_United_States.svg.png",
        "capital": "Olympia",
        "lat": "47.042418",
        "long": "-122.893077"
    },
    {
        "abbr": "WV",
        "name": "West Virginia",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/West_Virginia_in_United_States.svg/1200px-West_Virginia_in_United_States.svg.png",
        "capital": "Charleston",
        "lat": "38.349497",
        "long": "-81.633294"
    },
    {
        "abbr": "WI",
        "name": "Wisconsin",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wisconsin_in_United_States.svg/1200px-Wisconsin_in_United_States.svg.png",
        "capital": "Madison",
        "lat": "43.074722",
        "long": "-89.384444"
    },
    {
        "abbr": "WY",
        "name": "Wyoming",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Wyoming_in_United_States.svg/300px-Wyoming_in_United_States.svg.png",
        "capital": "Cheyenne",
        "lat": "41.145548",
        "long": "-104.802042"
    }
]; 



// selecting the elements from html 
const statesElement = document.querySelector("#states");
const filterElement = document.querySelector("#filter"); 


// display each element
const displayCities = (cities) => {
    statesElement.innerHTML = ""; 

    cities.forEach((city) => {
        const article = document.createElement("article");
        const title = document.createElement("h3");
        const image = document.createElement("img");
        const capital = document.createElement("p");
        const latitude = document.createElement("p");
        const longitude = document.createElement("p");

        title.textContent = city.name;
        image.src = city.img;
        image.alt = city.name;
        capital.textContent = `Capital City: ${city.capital}`;
        latitude.textContent = `Latitude: ${city.lat}`;
        longitude.textContent = `Longitude: ${city.long}`;

        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(capital);
        article.appendChild(latitude);
        article.appendChild(longitude);

        statesElement.appendChild(article);
    });
};



// filter the cities by each state
const filterCitiesByState = (state) => {
    const filteredCities = List.filter((city) => city.name === state);
    displayCities(filteredCities);
};

// the event listener to change it 
filterElement.addEventListener("change", () => {
    const selectedState = filterElement.value;
    if (selectedState) {
        filterCitiesByState(selectedState);
    } else {
        // If no state is selected, display all cities
        displayCities(List);
    }
});




// Display all cities initially
displayCities(List);  


