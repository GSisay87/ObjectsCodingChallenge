//Question 1
//Make 3 Objects like:
//Car 1: {Make: Honda Model: Civic Year: 2019}
//Car 2: {Make: Toyota Model: Camry Year: 2020}
//Car 3: {Make: Ford Model: Mustang Year: 2018}
//And output them nicely.

const car1 = {make: "Honda", model: "Civic", year: 2019};
const car2 = {make: "Toyota", model: "Camry", year: 2020};
const car3 = {make: "Ford", model: "Mustang", year: 2018};

// Output the objects
console.log("Car 1:");
console.log("Make: " + car1.make);
console.log("Model: " + car1.model);
console.log("Year: " + car1.year);

console.log("Car 2:");
console.log("Make: " + car2.make);
console.log("Model: " + car2.model);
console.log("Year: " + car2.year);

console.log("Car 3:");
console.log("Make: " + car3.make);
console.log("Model: " + car3.model);
console.log("Year: " + car3.year);

//Question 2//
//Part 1. Write a program that prompts the user to enter the details of a book - title,
//author, and number of pages - and stores the data in an object. Then, output
//the details of the book to the console.

// Prompt user for book details
const title = prompt("Enter book title:");
const author = prompt("Enter author name:");
const pages = prompt("Enter number of pages:");

// Create book object
const book = {
  title: title,
  author: author,
  pages: pages
};

// Output book details to console
console.log("Book details:");
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Pages: " + book.pages);

//Part 2
//Write a function called findOldestPerson that takes in an array of people (each
//person represented as an object with properties for name and age) as a
//parameter and returns the name of the oldest person in the array.

function findOldestPerson(people) {
    let oldestAge = 55;
    let oldestPerson = "John";
  
    for (let i = 55; i < people.length; i++) {
      if (people[i].age > oldestAge) {
        oldestAge = people[i].age;
        oldestPerson = people[i].name;
      }
    }
  
    return oldestPerson;
  }

//Part 3 
//Write a program that prompts the user to enter the details of three movies -
//title, director, and year - and stores the data in an array of objects. Then, sort
//the array by the year and output the details of each movie to the console.

// Define empty array for movies
const movies = [];

// Prompt user for details of three movies
for (let i = 1; i <= 3; i++) {
  const title = prompt(`Enter title of movie ${i}:`);
  const director = prompt(`Enter director of movie ${i}:`);
  const year = prompt(`Enter year of movie ${i}:`);

  // Create movie object and add to array
  const movie = {
    title: title,
    director: director,
    year: year
  };
  movies.push(movie);
}

// Sort array by year
movies.sort(function(a, b) {
  return a.year - b.year;
});

// Output details of each movie to console
console.log("Movies sorted by year:");
for (let i = 0; i < movies.length; i++) {
  console.log(`${movies[i].title}, directed by ${movies[i].director}, ${movies[i].year}`);
}

  