// if (1 !== 1){
//     console.log("It's True!")
// }


// let rating = 2;
// if(rating !== 3) {
//     console.log('you are a superstar!');
// }

// let num = 37;

// if(num % 2 !== 0){
//     console.log('odd number!')
// }

// let frank = 481;
// if(frank === 48){
//     console.log("He is the greatest!")
// }else if(frank < 48){
//     console.log("Hes awsome!")
// }else if(frank > 48){
//     console.log("Say What!")
// }else{
//     console.log('Invalid Age!')
// }

// let highScore = 1430;
// let userScore = 1601;

// if(userScore >= highScore){
//     console.log(`Congrats, you have the new high score of ${userScore}`);
//     highScore = userScore;
// }
// else{
//     console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
// }
//

// let password = 'hello kitty';

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Valid Password");
//     }
//     else {
//         console.log('Password is long enough, but cannot contain spaces');
//     }
// }
// else{
//     console.log('Password must be longer');
// }
//

// let loggedInUser =' akdjf';

// if(loggedInUser) {
//     console.log('Get out of here');
// }

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

// switch (day){
//     case 1:
//         console.log('monday');
//         break;  
//     case 2:
//         console.log('tueday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('Invalid day')    
// }
// let emoji = "eggplant";
//     switch (emoji){
//         case "sad Face":
//         case "Happy Face":
//             console.log("yellow");
//             break;
//         case "eggplant":
//             console.log("purple");
//             break;
//         case "lips":    
//         case "Heart":
//             console.log("red");
//             break;
//     }

    //Ternary Operators
    // condition ? expIfTrue: expIfFalse
    // only works with a simple yes || no && if && else

// let num = 2;
// if(num === 7)  {
//     console.log('lucky!')
// } 
// else {
//     console.log('bad!')
// } 
// num === 7 ? console.log('lucky!') :  console.log('bad!')

// let status = "online";
// let color;
// if(status === "offline"){
//     console.log("red")
// }
// else {
//     console.log("green");
// }

// let color = status === "offline" ? console.log("red") : console.log("green");

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
// const boxes = [0,1,2,3,4,5];
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]); //O(1) # of operations
//     console.log(boxes[1]); //O(1) # of operations
// }
// logFirstTwoBoxes(boxes) // O(2) 2 operations

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

// let shoppingList = ['Cheddar Cheese', '2% milk'];
// shoppingList[1] = "whole milk";
// shoppingList[2] = "ice cream";

// shoppingList[shoppingList.length] = 'tomatoes';

// let fruits = ['apple', 'banana'];
// let veggies = ['asparagus', 'brussel sprouts'];
// let meats = ['steak', 'chicken leggs'];

// console.log(fruits.concat(veggies));

// let allFoods = fruits.concat(veggies, meats);


// let ingredients = ['fish', 'meat', 'cheese', 'shrimp', 'flour'];
// ingredients.includes("milk"); to be placed in console

// if(ingredients.includes('flour')) {
//     console.log('I am gluten free, I cannot eat that!');//use to find and test
// }

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
// let swimmers = animals.slice(0, 3);
// let mammals = animals.slice(2, 4);
// let reptiles = animals.slice(4, 6);
// animals.splice(1, 0, 'octopus');

// working with sort
// let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
//people.sort()
// (5) ["Angie", "Jolene", "Maggie May", "Mrs. Robinson", "Roxanne"] alphabetical

// when working with arrays they are stored as reference types and variables or in memory, rather than the actual value being stored.

// working with an array you can change the content with const
// const foods = ['milk']
// foods.push('chocolate')
// console.log(foods);
// it works cause the reference stays the same

//nested arrays
// const animalPairs = [
//     ['doe', 'buck'],
//     ['ewe', 'ram'],
//     ['peahen', 'peacock']
// ];
//animalPairs
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["doe", "buck"]
// 1: (2) ["ewe", "ram"]
// 2: (2) ["peahen", "peacock"]

// Key: value pair objects are collections of properties. 
// const fitbitData = {
//     totalSteps: 308727,
//     tolalMiles: 211.7,
//     avgCalorieBurn: 5755,
//     workoutsThisWeek: "5 of 7",
//     avgGoodSleep: '2:13'
// }; // {} object literal

// accessing Object Properties
// const numbers = {
//     100: 'one hundred',
//     16: 'sixteen',
// }
// const palette = {
//     red: '#eb4d4b',
//     yellow: '#f9ca24',
//     blue: '#3033bb',
// };
// let mysteryColor = 'yellow';
// palette['mysteryColor']
// undefined
// palette.mysteryColor
// undefined
// palette[mysteryColor]
// "#f9ca24"

//nested arrays
// const student = {
//     firstName: 'joe',
//     lastName: 'mama',
//     strengths: ["music", 'Art'],
//     exams : {
//         midterm : 92,
//         final : 88,
//     }
// };

// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];

// nums and myster don't store the array, but a reference. they both have different reference numbers. nums === mystery false unless I add

// let moreNums = nums; // nums === moreNums true || nums == moreNums true

//all about loops!

// for(let i = 1; i <= 10; i ++){
// console.log('Hello:', i);
// }
// for(let i = 1; i <= 10; i += 3){
// console.log('Hello:', i);
// }
// in the console
// Hello: 1
// app.js:336 Hello: 4
// app.js:336 Hello: 7
// app.js:336 Hello: 10

// for(let num = 1; num <= 20; num++){
//     console.log(`${num}*${num}=${num*num}`);
// }
// for(let i = 200; i >= 0; i-=25){
//     console.log(i);
// }
// console.log('After the loop!');

// dont run infinate loop
// for(let i = 1; i !== 20; i += 2){
//     console.log(i);
// }
// 1
// 3
// 5
// 7 we will never meet 20 so it will keep looping over and over Crash!

// const examScores = [98, 77, 84, 91, 57, 66];
// for (let i = 0; i < examScores.length; i++){
//     console.log(i, examScores[i]);
// }

// const word = 'stressed';
// for(let i = word.length - 1; i >= 0; i--){
//     console.log(word[i]);
// }
// nested loops
// for(let i = 1; i <= 10; i++){
//     console.log('outer loop:', i);
//     for(let j = 10; j >= 0; j -= 2){
//         console.log(' inner loop', j);
//     }
// }
// we need two loops to access each element because we have two arrays that are nested
// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// let totalScore = 0;
// for(let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++){
//         totalScore += row[j];
//     }

// while loops
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target){
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`congrats you win!!`);


// let password = 'kitty';

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Valid Password");
//     }
//     else {
//         console.log('Password is long enough, but cannot contain spaces');
//     }
// }
// else{
//     console.log('Password must be longer');
// }

// let password = "hello kitty";

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log('Valid Password!')
//     }
//     else {
//         console.log('Password is long enough, but cannot contain spaces!');
//     }
// }
// else {
//     console.log('Password must be longer');
// }

// let mystery = 18;

// if (mystery){
//     console.log('truthy');
// }
// else {
//     console.log('falsy');
// }

// let loggInUser = null;
// if(loggInUser){
//     console.log('You are logged in!');
// }
// else {
//     console.log('Please log in!');
// }

// let homework = "science,math";

// if(homework.length >= 12 && homework.indexOf(' ') === -1){
//     console.log('Homework Tonight!');
// }
// else{
//     console.log('Easy Night tonight!');
// }
// let money = 'Eighty-thousandanually';

// if(money.length >= 22 && money.indexOf (' ')=== -1){
//     console.log('Take it or leave it!')
// }
// else{
//     console.log('Keep on a looking!')
// }
// let loggedInUser = "";
// if(!loggedInUser){
//     console.log('get out of here!')
// }
// else{
//     console.log("ralph mouth")
// }
 
// let cellPhone = 's9';
// if(cellPhone !== 's9' && cellPhone !== 'Blu'){
//     console.log("We only carry the S9plus.")
// }



// for(let i = 1; i <= 10; i++){
//     console.log("PISSED!", i)
// }
// for(let num = 1; num <= 20; num++){
//     console.log(`${num}*${num} = ${num * num}`)
// }

// for(let i = 200; i >= 0; i-=25){
//     console.log("Does it work!", i)
// }
// console.log('It does not work!')






// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let j = 0;
// while (j <= 5){
//     console.log(j);
//     j++;
// }


// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target){
//     console.log(guess);
//     guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target} Guess: ${guess}`)
// ;


// const movieReviews = {
//     Arrival                 :9.5,
//     Alien                   :9,
//     Amelie                  :8,
//     "In Bruges"             :9,
//     Amadeus                 :10,
//     "Kill Bill"             :8,
//     "Little Miss Sunshine"  :8.5,
//     Coraline                :7.5
// };

// for (let movie of Object.keys(movieReviews)){
//     console.log(movie, movieReviews[movie]);
// }
// const ratings = Object.values(movieReviews);
// let total = 0;
// for(let r of ratings){
//     total += r ;

// }
// let avg = total / ratings.length;
// console.log(avg);



//Functions
// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice(){
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//

// function square(num){
//     console.log(num * num);
// }

// function sum(x, y){
//     console.log(x+y);
// }
// const scream = 'hello'.toUpperCase();
// console.log(scream)

// function add(x, y){
//     return x+y;
// }

// function square(x){
//     return x * x;
//     console.log('all done!');
// }
// function containsPurple(arr){
//     for(let color of arr){
//         if(color === 'purple' || color === 'magenta'){
//             return true;
//         }
//         return true;
//     }
// }

// function isValidPassword(password, username){
//     if(password.indexOf !== (' ') !== -1 && password.indexOf(username) !== -1){
//         return false
//     }
//     if(password.length < 8);
//     return false
// }

// function avg(arr){
//     let total = 0;
//     for(let num of arr){
//         total += num;
//     }
//     return total / arr.length;
    
// }

// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(lowerCased.indexOf(char) === -1){
//             return false;
//         }
//     }
//     return true;
// }
    
// function doubleArr(arr){
//     const result = [];
//     for(let num of arr){
//     var double = num * 2;
//     result.push(double);
//     }
//     console.log(double);
//     return result;
// }


// function add(x,y){
//     return x + y;
// }

// //functions are objects anomous function expression
// const sum = function (x, y){
//     return x + y;
// }

// //functions are objects   named function expression
// const product = function multiply (x, y){
//     return x + y;
// }

// //function statment
// function add(x, y){
//     return x + y;
// }

// //function expression
// const subtract = function(x, y){
//    return x-y;
// }

// function multiply(x, y){
//     return x * y;
// }

// const divide = function(x, y){
//     return x / y 
// } 


// //4 functions stored in an array
// const operations = [add,subtract,multiply,divide];

// for (let func of operations){
//     let result = func(30, 5);
//     console.log(result);
// }

// function callThreeTimes(f){
//     f();
//     f();
//     f();
// }

// function cry(){
//     console.log("BOO HOO I'm so sad!")
// }

// function repeatNTimes(action, num){
//     for(let i = 0; i < num; i++){
//         action();
//     }
// }

// repeatNTimes(cry, 13);



// const triple = multiplyBy(3);
// triple(5);

// const double = multiplyBy(2);
// double(8);
 
// function multiplyBy(num){
//     return function (x){
//         return x * num;
//     }
// }
//  const triple = multiplyBy(3);
//  const double = multiplyBy(2);

// function makeBetweenFunc(x, y){
//     return function (num){
//         return num >= x && num <= y;
//     }
// }
// const isChild = makeBetweenFunc(0, 18);
// const isInNinties = makeBetweenFunc(1990, 2000);

// function makeLessThan(a, b){
//     return function (num){
//         return num >= a && num <= b;
//     }
// }

// const isAdultAge = makeLessThan(0, 21);
// const isAge = makeLessThan(5, 18);

// function notEqualTo (num){
//     return function(x) {
//         return x === num; 
//     }
// }
// const throughPut  = notEqualTo(80);

// function makeLessThan(a){
//         return function (num){
//             return a < num;
//         }
//     }
//     const underDrive = makeLessThan(16);
//     const isPhone = makeLessThan(12);


// 94 Callbacks:

// function grumpus(){
//     alert("Gahhh go AwaY!")
// }
// setTimeout(grumpus, 5000)

// const numbers = [1,2,3,4,5,6,7,8];
// numbers.forEach(function (num){
//   console.log(num * 2) ;
// })

// function printTriple(n){
//   console.log(n*3)
// }
// numbers.forEach(printTriple);

// 98 Map

const numbers = [1,2,3,4,5,6];
const words = ["diy","fyi","lol","asap"];

const doubles = numbers.map(function(num){
  return num * 2;
});

const numDetail = numbers.map(function(n){
return{
  value: n,
  isEven: n % 2 === 0
}
})

const abbreves = words.map(function(word){
  return word.toUpperCase().split('').join('.');
})