let person={
    firstname:"rani",
    lastname:"hiiiii",
    sayhello (){
        // console.log("Hello i am"+person.firstname+" have a "+car.brand+"car");
        console.log("Hello i am"+this.firstname+" have a "+car.brand+"car");

    }

};person.age=24;
 
let car={
    brand:"tata",
    model:"Safari"
}
person.sayhello();