if (1 !== 1){
    console.log("It's True!")
}


let rating = 2;
if(rating !== 3) {
    console.log('you are a superstar!');
}

let num = 37;

if(num % 2 !== 0){
    console.log('odd number!')
}

let frank = 481;
if(frank === 48){
    console.log("He is the greatest!")
}else if(frank < 48){
    console.log("Hes awsome!")
}else if(frank > 48){
    console.log("Say What!")
}else{
    console.log('Invalid Age!')
}

let highScore = 1430;
let userScore = 1601;

if(userScore >= highScore){
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else{
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

let password = 'hellokitty';

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid Password");
    }
    else {
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else{
    console.log('Password must be longer')
}

let loggedInUser =' akdjf';

if(loggedInUser) {
    console.log('Get out of here');
}


