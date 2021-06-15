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

1.1// Big O and Scalability Beginnings how long an alogo takes to run
// const nemo = ['nemo'];
// // creating an array (nemo) 100xs
// const large = new Array(100).fill('nemo')
// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('found Nemo!');
//         }
//     }
//     let t1 = performance.now();
//     console.log('call to find nemo took' + (t1-t0) + 'milliseconds');
// }
// findNemo(large);

1.2// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// // creating an array (nemo) 100xs
// const large = new Array(100).fill('nemo')
// function findNemo(array) {
    
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('found Nemo!');
//         }
//     }
    
    
// }
// findNemo(large); // 0(n) --> linear time to find nemo --> (n)can be replaced with anything means the Big 0 depend on the number of imputs(1)for nemo array (10)for the everyone array


1.3 // in terms of Scalability O(1) - constant time - flat line
const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1) # of operations
    console.log(boxes[1]); //O(1) # of operations
}
logFirstTwoBoxes(boxes) // O(2) 2 operations

// Big O excersize
// function funChallenge(input) {
//     let a = 10;//O(1)
//     a = 50 + 3;//O(1)

//     for (let i = 0; i < input.length; i++) { //O(n)
//         anotherFunction(); //O(n)
//         let stranger = true; //O(n)
//         a++; //O(n)
//     }
//     return a; //O(1)
// }
// 3 + 4n

// Big O excersize 2
// function anotherFunChallenge(input) {
//     let a = 5; //O(1)x's
//     let b = 10; //O(1)
//     let c = 50; //O(1)
//     for (let i = 0; i < input; i++) { //O(n)
//       let x = i + 1; //O(n)
//       let y = i + 2; //O(n)
//       let z = i + 3; //O(n)
  
//     }
//     for (let j = 0; j < input; j++) { //O(n)
//       let p = j * 2; //O(n)
//       let q = j * 2; //O(n)
//     }
//     let whoAmI = "I don't know"; //O(1)
//   }

  // 4 + 7n

//   let shoppingList = ['cereal', 'cheese', 'ice',];

//   let lotto = [45, 12, 89, 64, 13];

//   let myCollection = [12, "dog", true, null, NaN];

let shoppingList = ['Cheddar Cheese', '2% milk'];
shoppingList[1] = "whole milk";
shoppingList[2] = "ice cream";

shoppingList[shoppingList.length] = 'tomatoes';

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken leggs'];

console.log(fruits.concat(veggies));

let allFoods = fruits.concat(veggies, meats);


let ingredients = ['fish', 'meat', 'cheese', 'shrimp', 'flour'];
// ingredients.includes("milk"); to be placed in console

if(ingredients.includes('flour')) {
    console.log('I am gluten free, I cannot eat that!');//use to find and test
}

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
let reptiles = animals.slice(4, 6);
