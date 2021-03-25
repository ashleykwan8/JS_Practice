// * IMPORTANT: COMPLETE WEB DEVELOPMENT 2021 UDEMY COURSE
// TODO: generate a random number (example 1 - 6)
// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

// TODO: Random Love Calculator Generator 
// const yourName = prompt("What is your name?");
// const companName = prompt("What is your companion's name?");

// let loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1;

// alert(yourName + " and " + companName + " are " + loveScore + "% compatible.");

// -----------------------------------
// var yourName = prompt("What is your name?");
// var companName = prompt("What is your companion's name?");

// let n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;

// if (n > 70) {
//     alert("Your love score is " + n + "%." + "You love each other more than a cat loves catnip!");

// } 
// if (n > 30 && n <= 70){
//     alert("Your love score is " + n + "%." + "You love each other like milk and cookies!");

// }
// if (n <= 30) {
//     alert("Your love score is " + n + "%." + "You love each other like oil and water!");

// }

// TODO: ADV. BMI Calculator 
// function bmiCalculator (weight, height) {
//     const bmi = weight / Math.pow(height, 2);
//     if (bmi < 18.5) {
//         return ("Your BMI is "+bmi+", so you are underweight.")
//     }
//     if (bmi>=18.5 && bmi<=24.9){
//         return ("Your BMI is "+bmi+", so you have a normal weight.")
//     }
//     else {
//         return ("Your BMI is "+bmi+", so you are overweight.")
//     }

//     return interpretation;
// }

// TODO: LEAP YEAR CALCULATOR
// year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
// not	except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
// yes	except if it can be exactly divided by 400, then it is (such as 2000, 2400)

// function isLeap(year) {
// if(year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
//     return "Leap year."
// }

// else{
//     return "Not leap year."
// }
// }
// TODO: FizzBuzz Challenge
// var output = [];
// var count = 1
// function fizzBuzz() {
//     while(count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push("fizzbuzz");
//     }
//     else if (count % 3 === 0){
//         output.push("fizz");
//     }
//     else if (count % 5 === 0){
//         output.push("buzz");
//     }
//     else {
//         output.push(count);
//     }
//     console.log(output);
//     count++;

//     }  
// }
// NOTE: UPDATED CODE
// var output = [];

// function fizzBuzz() {
//     for(var count=1;count<=100;count++ {
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push("fizzbuzz");
//     }
//     else if (count % 3 === 0){
//         output.push("fizz");
//     }
//     else if (count % 5 === 0){
//         output.push("buzz");
//     }
//     else {
//         output.push(count);
//     }
//     console.log(output);
//     count++;

//     }  
// }

// TODO: Buying Lunch Generator 
// function whosPaying(names) {
    
//         var index = Math.random();
//         index = index * names.length;
//         index = Math.floor(index);
//         return names[index] + " is going to buy lunch today!";
// } 
// whosBuying(['Bob','Jane','Sue',"James"]); 

// TODO: 99 Bottles of Beer on the Wall loop challenge
// function beer() {
//     var beer = 99
//     while(beer>=1){
//         var beerDown = beer - 1
//         console.log(beer+" bottles of beer on the wall " + beer + " bottles of beer! You take one down, pass it around " + beerDown + " bottles of beer on the wall");
//         beer--;
//         if(beer === 1){
//             console.log(beer+" bottle of beer on the wall " + beer + " bottle of beer! You take one down, pass it around" + " 99 bottles of beer on the wall");
//         beer--;
//         }
//     }
// }