// TODO 1 : Create a variable called welcomeMessage and assign it a string
var welcomeMessage = "Welcome to our awesome node app!"
console.log(welcomeMessage);
// TODO 2 : Create a variable called person of type Object using the Object literal syntax:
var person = {};
console.log(person);
// TODO 3 : Add firstName properties to our person:
person.firstName = "Jack";
console.log("First Name: " + person.firstName);
// TODO 4 : Add the city property using Array syntax:
person["city"] = "New Orleans";
console.log("City: " + person.city);
// TODO 5 : Create a function that prints the firstName and city of the person:
person.sayHello = function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ", I live in " + this.city);  
}
person.sayHello();
// TODO 6 : Create an Array of likes:
person.likes = ["Music", "Food", "Stuff"];