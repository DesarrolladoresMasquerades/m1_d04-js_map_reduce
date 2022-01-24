// ONLY USE THE .map() METHOD FOR THIS EXERCISE

const fruits = ['pineapple', 'orange', 'mango'];

const capsFruits = fruits.map(oneFruit => {
  return oneFruit.toUpperCase();
});

// we can write it in one line:
// const capsFruits = fruits.map(oneFruit => oneFruit.toUpperCase())
//
console.log(`fruits: ${fruits}`); // fruits: pineapple,orange,mango
console.log(`capsFruits: ${capsFruits}`); // capsFruits: PINEAPPLE,ORANGE,MANGO


// Exercise 2: Capitalize the first letter of every city. 

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']


const capsCities = cities.map(city => {
  if (city.includes(' ')) {
    
    let splittedArr = city.split(' ');
    
    const newArr = splittedArr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
    
    return newArr.join(' ');
  }
  return city[0].toUpperCase() + city.slice(1);
});

console.log(capsCities);
// [ 'Miami',
// 'Barcelona',
// 'Madrid',
// 'Amsterdam',
// 'Berlin',
// 'Sao Paulo',
// 'Lisbon',
// 'Mexico City',
// 'Paris' ]


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

