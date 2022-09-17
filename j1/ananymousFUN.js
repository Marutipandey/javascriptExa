let person = {
    firstname : "priya",
    lastname : "kumari"
};person.age = 25;

person.sayhehho = function (){
    console.log("HELLO");
};person.sayhehho();

function greet(){
    console.log("hoooooo");
};person.sayhehho = greet
person.sayhehho();