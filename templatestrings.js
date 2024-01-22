

let output = `Welcome to ${courseSubject} ${courseNumber} !Credits: ${courseCredits} Length: ${courseLength}`


let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
  listItems += `<li>${temple}</li>`;
}
document.querySelector("ul").innerHTML = listItems; 