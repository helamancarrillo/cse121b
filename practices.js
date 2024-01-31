let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];


function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }


console.log(filterItems(names, "B")); 


const namesLength = names.map((x) => x.length); 

console.log(namesLength); 


const sum = namesLength.reduce((x , y) => (x + y));

const average = sum / 5 

console.log(average);