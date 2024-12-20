//1 - add avents
const btn = document.querySelector('#my-button')

btn.addEventListener("click", function(){
    console.log("Button clicked")
});

// 2 - Removing event
const secondBtn = document.querySelector("#btn");

function clickMessage(){
    console.log("Event added")
}

secondBtn.addEventListener("click", clickMessage);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", ()=> {

    console.log('Event removed');
    secondBtn.removeEventListener("click", clickMessage);

})

// 3 - event argument
const myTitle = document.querySelector('#my-title')

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - Stop Propagatioon
const containerBtn = document.querySelector('#btn-container');
const btnInsider = document.querySelector('#div-btn');

containerBtn.addEventListener("click", () => {
    console.log("Event 1");
});

btnInsider.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Event 2");
})

// 5 - Prevent Event default
const prevLink = document.getElementById('link-google');

prevLink.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Event default prevented");
})

// 6 - Key events

document.addEventListener("keyup", (e) => {
    console.warn(`The user release the ${e.key} key`)
});
document.addEventListener("keydown", (e) => {
    console.warn(`The user pressed the ${e.key} key`)
});

// 7 - Other mouse events
const mouseEvent = document.getElementById('mouse-event');

mouseEvent.addEventListener("mousedown", () => {
    console.log("Mouse down");
});
mouseEvent.addEventListener("mouseup", () => {
    console.log("Mouse clicked");
});
mouseEvent.addEventListener("dblclick", () => {
    console.log("Doooouble Clicked");
});

// 8 - Mouse moving
document.addEventListener("mousemove", (e) => {
    // console.log(`mouse moved to ${e.x} in X`);
    // console.log(`mouse moved to ${e.y} in Y`);
})
