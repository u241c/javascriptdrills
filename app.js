if (1 !== 1){
    console.log("It's True!")
}


let rating = 2;
if(rating !== 3) {
    console.log('you are a superstar!');
}

// let num = 37;

// if(num % 2 !== 0){
//     console.log('odd number!')
// }

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

// the switch statement
let day = 17;

// if(day === 1){
//     console.log("Monday");
// }
// else if (day === 2){
//     console.log("Tuesday");
// }
// else if (day === 3){
//     console.log("Wednesday");
// }
// else if (day === 4){
//     console.log("Thursday");
// }
// else if (day === 5){
//     console.log("Friday");
// }
// else if (day === 6){
//     console.log("Saturday");
// }
// else if (day === 7){
//     console.log("Sunday");
// }
// else{
//     console.log("Invalid day");
// }

switch (day){
    case 1:
        console.log('monday');
        break;  
    case 2:
        console.log('tueday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('Invalid day')    
}
let emoji = "eggplant";
    switch (emoji){
        case "sad Face":
        case "Happy Face":
            console.log("yellow");
            break;
        case "eggplant":
            console.log("purple");
            break;
        case "lips":    
        case "Heart":
            console.log("red");
            break;
    }

    //Ternary Operators
    // condition ? expIfTrue: expIfFalse
    // only works with a simple yes || no && if && else

let num = 2;
// if(num === 7)  {
//     console.log('lucky!')
// } 
// else {
//     console.log('bad!')
// } 
// num === 7 ? console.log('lucky!') :  console.log('bad!')

let status = "online";
// let color;
// if(status === "offline"){
//     console.log("red")
// }
// else {
//     console.log("green");
// }

let color = status === "offline" ? console.log("red") : console.log("green");



