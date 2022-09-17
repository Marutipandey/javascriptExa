/*let person = {};
console.log(person);*/

let person ={
    'first name' :'ram', //space ke liye '' me rakhenge
    lastname :'hii'
};
person.age = 22;
// delete person.lastname;
// console.log(person);
// console.log('height' in person);
// console.log(person["first name"]);
// console.log(person.firstname)
// console.log(person['lastname']);
for(let key in person){
    console.log(key);
}