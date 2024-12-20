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
});

// 9 - Scroll event
// the scroll event has to be setted on window, not on the document, because what we want to control is the action on the screen, not on our HTML
window.addEventListener("scroll" , (e) => {
    if (window.scrollY > 200) {
        console.log("You scrolled more than 200px");
    }
});

// 10 - Focus/blur event
const inputOne = document.getElementById('my-input');
inputOne.addEventListener("focus", (e) => {
    console.log("Input got the focus");
});
inputOne.addEventListener("blur", (e) => {
    console.log("Input exit");
});

// 11 - load event
window.addEventListener("load", () => {
    console.log("The page has been loaded");
})

// window.addEventListener("beforeunload", (e) => {
//     // e.preventDefault();
//     // e.returnValue = "Testing"
// })


// 12 - Debounce
const debouncing = (f, delay) => {
    let timeout;

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mouseover", debouncing(() => {
    console.log(`mouse is stop`)

}, 400));