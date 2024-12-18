// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - getElementByTagName

const listItems = document.getElementsByTagName("li");

console.log(listItems);

// 3 - Selecionando elemento por ID

const tit = document.getElementById('title');

console.log(tit)

// 4 - Selecionando por classe

const prod = document.getElementsByClassName("products");

console.log(prod)

// 5 - Query Selector

const prodQSelec = document.querySelectorAll('.products')
console.log(prodQSelec);

const mainContainer = document.querySelector('#main-container');
console.log(mainContainer)

// 6 - insertBefore

const paragraph = document.createElement("p");


const beforeTitle = tit.parentElement;

beforeTitle.insertBefore(paragraph,tit);

// 7 - appendChild

const navLinks = document.querySelector("nav ul");

const linkNew = document.createElement("li");

navLinks.appendChild(linkNew);

setTimeout(function(){
    console.log(`We add new ${linkNew}`)
}, 3000);

// 8 - replaceChild
const titNew = document.createElement("h2");
titNew.textContent = "New Title of this DOM";

beforeTitle.replaceChild(titNew, tit);
console.warn(tit);

// 9 - createTextNode
const myText = document.createTextNode("New text to be add");
console.log(myText);

const newLine = document.createElement("h3");

newLine.appendChild(myText);
console.log(newLine);

mainContainer.appendChild(newLine)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://ricksalgado.ca/")
console.log(firstLink.getAttribute('href'));

firstLink.setAttribute("target", "_blank");

// 11 - Width and Height
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);


console.log(footer.clientWidth);
console.log(footer.clientHeight);

//12 - posicao do elemento
const product1 = prod[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "grey";
mainContainer.style.paddingBottom = "90px"

// 14 - alterando estilos de varios elementos
for (const li of listItems){
    li.style.color = "#000000";
    li.style.fontWeight = "bold";
    li.style.backgroundColor = "green"
    
}