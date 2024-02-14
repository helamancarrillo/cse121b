/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

const templeList = []; 


/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach((temple) => {


        let article = document.createElement("article");
        
        let title = document.createElement("h3");
        title.textContent = temple.templeName;


        let imaGe = document.createElement("img");
        imaGe.src = temple.imageUrl;
        imaGe.alt = temple.location;


        article.appendChild(title);
        article.appendChild(imaGe);

        templesElement.appendChild(article);
   
    }); 

}; 


/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        
        const data = await response.json();
        

        templeList.push(...data);

    }

    displayTemples(templeList);
   
};




/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};


/* filterTemples Function */

const filterTemples = (temples) => {

    reset();

    let filter = document.getElementById("filtered").value; 

    switch (filter) {

        case "utah":

        /*let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
        displayTemples(utahTemples); */
            
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));

         break;

        case "notutah":

            /*let notutahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notutahTemples); */
           
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            
            displayTemples(temples);
            break;
    }
};



/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();