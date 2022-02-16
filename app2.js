// let behavioralScore = 1;

// if (behavioralScore === 3){
//     console.log('Leader in the house!');
// }
// else if (behavioralScore === 2){
//     console.log('improvement required!');
// }
// else {
//     console.log('Say bye bye!');
// }


//Truthy & Falsy to check which is which depends on the value you use.
// let keyChain = 10;
// if (keyChain){
    //console.log('truthy');
//}
//else {
    //console.log('falsy');
//}       Value 10 is truthy, however if placed a value of NaN, 0, empty string, false, undefined will come out falsy.

let loggin = 'Hellokitty';

if (loggin.length >= 6){
    if(loggin.indexOf (' ') !== -1) {
        console.log('No Spaces');
}
else{
    console.log('Valid');
}
}
else{
    console.log('Invalid Password');
}
