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