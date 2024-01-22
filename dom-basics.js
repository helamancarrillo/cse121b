const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200")
newImage.setAttribute("alt", "Lo que sea la foto")
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<section><h2>CSE 121b</h2><p>Welcome to Javascript Language</p></section>";
document.body.append(newSection);