let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);


//Block Scoping

let fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName);
}

console.log(firstName);

//arrow functions

const square = (x) =>{
  return x * 2;
}

// arrow function expersion single sintax

const squareTwo  = (x) => x * x;


// arguments no longer bound

const add = (a, b) =>{
  return a + b;
}

// this key word not bound

const user = {
  name: 'Rayon Hunte',
  cities: ['NewYork', 'Port of Spain', 'Dublin'],
  printPlacesLived(){

    // this.cities.foreach((city)=>{
    //   console.log(this.name);
    //   console.log(city);
    // }) 

    const CityMessages = this.cities,map((city)=>{
      return city + '!';
    });
    return CityMessages;

  }
}