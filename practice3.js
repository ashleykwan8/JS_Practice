// TODO: Passing Functions as Arguments(Higher Order Functions)

// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// operator is the function that it'll pass through 
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// calculator(4,5,add());
// calculator(4,5,multiply());

// TODO: Constructor Functions
// function HouseKeeper (name, yearsOfExperience, duties)  {
//     this.name = name;
//     this.yearsOfExperience = yearsOfExperience;
//     this.duties = duties;
// }

// var houseKeeper1 = new HouseKeeper ('Jane', 12, ['vacuum','mopping','dusting']);

// houseKeeper1.name /*Jane*/

// TODO: Constructor Function with methods
// function HouseKeeper (name, yearsOfExperience, duties)  {
//     this.name = name;
//     this.yearsOfExperience = yearsOfExperience;
//     this.duties = duties,
//     this.cleaning = function () {
//     alert("I'm cleaning right now.");
//     }
// }

// TODO: Callback functions: 
// function anotherEventListener(typeOfEvent, callback) {
//     var eventThatHappened = {
//         eventType: 'keypress',
//         key : 'p',
//         durationOfKey : 2
//     }
//     if (eventThatHappened.eventType === typeOfEvent) {
//         callback(eventThatHappened);
//     }
// }
// In the console 
// anotherEventListner("keypress", function(event) {
//     console.log(event);
//     });