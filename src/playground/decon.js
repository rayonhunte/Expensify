// object decon


const person = {
  name: 'Rayon',
  age: 35, 
  location: {
    mycity: 'Guyana',
    temp: 102
  }
};


const {name: firstName="james", age, location} = person

const {mycity, temp: temploc} = location;

console.log(`${name} is ${age}`);

// var can be renamed 
if (mycity && temploc){
  console.log(`rayon lives in ${mycity} and it's ${temploc}`)
};


const book = {
  title: 'Ego is the Enemy', 
  author: 'Rayon Hunte', 
  publisher:{
    //name: 'rash'
  } 
}

const {publisher: publisherName="self-published"} = book.publisher;


console.log(publisherName)



//array  decon

const address = [
  '1299 s Juniper Street', 'Kitty', 'Georgetown', '592'
]

// skip the first item //set default
const [, city, state= 'New York', zip] = address;

console.log(`you are in ${city} ${state}`);

const items =  ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , ,cost ] = items

console.log(`A medium ${coffee} cost ${cost}`)