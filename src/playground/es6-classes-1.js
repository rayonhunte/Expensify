class Person {

  //default values constructor 
  constructor(name='sub zero', age = 0){
    this._name = name;
    this._age = age;
    console.log(this._name, this._age);
  }

  //template string
  getGretting(){
    // return 'Hi' +' '+ this._name
    return `Hi I am ${this._name}`;
  }

  getDescription(){
    return `${this._name} is ${this._age} years old`; 
  }

}

class Student  extends Person {
  //override constructor
  constructor(name,age,major) {
    super(name, age);
    this._major = major; 
  }
  //net method
  hasMajor(){
    return !!this._major;
  }
  //override method
  getDescription(){
    //get parent description
    let description = super.getDescription();
    console.log("testing")
    if (this.hasMajor()){
      description += `Thier major is ${this._major}`;
      return description;
    }
  } 

}

class Traveler extends Person {
  constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }
  getGretting(){
    let greet = super.getGretting();
    return this.homeLocation ? `${greet} I am  visiting from ${this.homeLocation}` : greet
  }
}


const me = new Person('Rayon Hunte',35);
const  rayon = new Student('Rayon Hunte', '35', 'computer science');

const ryan = new Traveler('Ryan Hunte', 8, 'New York');




console.log(me.getGretting());
console.log(me.getDescription());
console.log(rayon.hasMajor());
console.log(ryan.getGretting());