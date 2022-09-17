function Student(name,lastname,age,cls){
      this.firstname = name;
      this.lastname = lastname;
      this.age = age;
      this.class=cls;
      this.nationallity = "Indian";
      this.name=function(){
        return this.firstname + " " + this.lastname;
    }

}var Student1=new Student("rani","ji",23,2);
// Student1.nationallity = "Indian";
// console.log(Student1);

console.log(Student1.name());

