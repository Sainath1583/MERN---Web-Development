let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum = parseInt(prompt('Enter a valid number!!'));
}

const targetNum =  Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your 1st guess!!"));
let attemts = 1;
while(guess !== targetNum){
    if(guess === 'q') break;
    attemts++;
    if(guess > targetNum){
        guess = parseInt(prompt("To high! ENter a new guess"));
    }else{
        guess = parseInt(prompt("To low! ENter a new guess"));
    }
}
if(guess === 'q'){
    console.log("Okay, you quit");
}else{
    console.log("You win!!")
    console.log(`You got it! at ${attemts}th attempt`);
}
