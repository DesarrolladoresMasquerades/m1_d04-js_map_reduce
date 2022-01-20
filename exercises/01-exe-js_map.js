// ONLY USE THE .map() METHOD FOR THIS EXERCISE

// Exercise 1: Capitalize each element of the array - the whole word:
const fruits = ['pineapple', 'orange', 'mango'];

let uppercaseFruits = fruits.map( (oneFruit) => {
  //your code here...

  return oneFruit.toUpperCase();

})

console.log(uppercaseFruits)

// Answer should be  ['PINEAPPLE', 'ORANGE', 'MANGO'];


// Exercise 2: Capitalize the first letter of every city. 

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']

// your code here...

let uppercaseCities =  cities.map( city => {

   if (city.includes(' ')) {
     
     let splittedArr = city.split(' ');
     
     const newArr = splittedArr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
     
     return newArr.join(' ');
   }

   return city[0].toUpperCase() + city.slice(1);
 
});

 console.log(uppercaseCities)
// Answer should be 
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam', 'Berlin', 'Sao paulo', 'Lisbon', 'Mexico city', 'Paris' ]


// Exercise  3: Create an array with only the names of the restaurants 
// Note: Be careful here. Info is an object with a key called 'cities' which is an array
 
const info = {
    cities : [
      {name: 'Mirazur', owner : 'Gustavo'},
      {name: 'Noma', owner : 'Jorge'},
      {name: 'Gaggan', owner : 'Alvaro'},
      {name: 'Geranium', owner : 'Gustavo'},
      {name: 'Arpège', owner : 'Luis'},    
   ]  
}

const getRestaurantsNames = (arr) => {

   return arr.map( ( restaurant) => restaurant.name)

}

let restaurantsNames = getRestaurantsNames( info.cities )

console.log(restaurantsNames)

// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']

