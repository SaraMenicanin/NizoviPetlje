//TASK 1:
// Repack old array to the new one, in the same order
var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i=0;
while (i<dataOld.length) {
    dataNew[i]=dataOld[i];
    i++;
}
console.log(dataNew)
// TASK  2:
//Repack old array to the new one, in the reverse order.Console log result.

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i=0;
while (i<dataOld.length) {
    dataNew[i]=dataOld[dataOld.length-1 -i ];
    i++;
}
console.log(dataNew)  

// task 3
// Repack old array to the new one, so the data from two arrays is joined, starting with existing
// data from the new one.Console log result.
var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
  
for (var i = 0; i < dataOld.length; i++) {
    dataNew.push(dataOld[i]);
}
console.log(dataNew)
// task  4
// Create a new array that contains data from both arrays, starting with data from array a. Console log result
var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var newArray = a.concat(b);
console.log(newArray)

// task  5
// Create a new array that contains data from both arrays, but in alternating order, one element from array a,
// then one element from array b, and so on. 
var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var alternateArray = mergeAlternateArray(a, b);

function mergeAlternateArray(arrayA, arrayB) {
    var newAlternateArray = [];
    for (var i = 0; i < arrayA.length; i++) {
        newAlternateArray.push(arrayA[i]);
        if (arrayB[i]) {
            newAlternateArray.push(arrayB[i]);
        }
    }
    return newAlternateArray;
}
console.log(alternateArray)



//task  6
// Console log next pattern (you're allowed to use only single *)

// *
// **
// ***
// ****
// *****
// ******

var number="*";
while(number.length<=6){
    console.log(number)
    number=number+"*";
}

//task  7
// Console log next pattern (you're allowed to use only single * or empty space)

// **********
// *        *
// *        *
// *        *
// *        *
// **********


function iscrtajKvadrat(){
    let kvadrat="";
    for( let i=0;i<7;i++){
        for (let j=0;j<10;j++){
            if(i===0 || (i>0 && j===0) || i===6 || (i>0 && j===9)){
                kvadrat+="*";
            }else {
                kvadrat+=" ";

            }
        }
        kvadrat+="\n\n";
    }
    console.log(kvadrat);
}
iscrtajKvadrat();