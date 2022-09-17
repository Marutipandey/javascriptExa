// let x = new Date();

// let x = new Date(2018,11,01,10,15,16,3);

// let x = new Date("december 13,2018 11:12:5");
// document.write(x.getDate())
// document.write(x.getDay())
// document.write(x.getHours())
// x.setFullYear(2020);
// document.write(x)

/*let x = new Date("december 13,2018 11:12:3");
let y = new Date("october 12,2015 12:12:3");
y.setDate(x.getDate()+50);
console.log(x);
console.log(y);*/

/*var person = new Object();
person.name ="vishvjeet";
person.age= 25;
console.log(person.name); */

/*let person = {
    name : "priya",
    getname:function(){
        return this.name.toUpperCase();
    }
};
console.log(person.getname());*/

let person = {
    name : "priya",
    get getname(){
        return this.name.toUpperCase();
    }
};
person.name="rani";
console.log(person.getname());
