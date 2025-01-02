// var let const
console.error('Em var');
var x = 10;
var y = 15;

if(y > 10){
    var x = 20;
    console.log(x);
}

console.log(x)

console.error('Em let');

let a = 10;
let b = 15;

if(b>10){
    let a = 20;
    console.log(a);
}
console.log(a)

console.error('Em const com function');

function logName(){
    const name = 'Morty';
    console.log(name);
}

const name = 'Rick';

console.log(name);
logName();

// 2- Arrow func

console.error('Arrow Func');

const sum = function (a,b) {
    return a + b;
};

const arrowSum = (a,b) => a + b;

console.log(sum(1,2));
console.log(arrowSum(3,2));

const greetings = (name) => {
    if(!name){
        return 'who are you?';
    } else {
        return `Hello, ${name}`;
    }
}

console.log(greetings());
console.log(greetings('Ana'));