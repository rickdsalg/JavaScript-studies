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
}, 3000)