'use strict';


// Scoping  in practice


// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);


//     if (birthYear >= 1999 && birthYear <= 2006) {
//       var Millenial = true;
//       
//       const firstName = 'Aditya';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh my god!,  you're a Millenial, ${firstName}`;
//       console.log(str);

//       function add(c, d) {
//         return c + d;
//       }
//       }
//     // console.log(str);
//     console.log(Millenial);
//     // console.log(add(5, 3));
//     console.log(output);
//       }
//      printAge();

//       return age;
//       }

//        const   firstName = 'Aditya';
//         calcAge(2006);
//         console.log(age);
//       printAge();



// 
//       Hoisting and TDZ in Practice

//     Variables
//     console.log(me);
//      console.log(job);
//      console.log(year);

//       var me = 'Aditya';
//       let profession = 'Student';
//     const year = 2025;

//        Functions
//     console.log(addDecl(5, 3));

//     console.log(addExpr(5, 3));
//     console.log(addArrow);

//      console.log(addArrow(5, 3));
//       function addDecl(c, d) {
//   return c + d;
// }
//      const addExpr = function (c, d) {
//         return c + d;
// };
// var addArrow = (c, d) => c + d;

// // Example
//       console.log(undefined);
//      if (!numProducts) deleteShoppingCart();
  
//     var numProducts = 20;

//    function deleteShoppingCart() {
//      console.log('All products deleted!');
//    }

//    var x = 1;
//  let y = 2;
//   const z = 3;

//   console.log(x === window.x);
//       console.log(y === window.y);
//     console.log(z === window.z);
// 

// 
//       console.log(this);

//    const calcAge = function (birthYear) {
//     console.log(2025 - birthYear);
//   console.log(this)
// };
//  calcAge(2005);

// const calcAgeArrow = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this)
// };
// calcAge(2006);

// const Aditya = {
//   year: 2025,
//   calcAge: function (){
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };
// Aditya.calcAge();

// const raj = {
//   year: 2012,
// };

// raj.calcAge = Aditya.calcAge;
// raj.calcAge();

// const f = Aditya.calcAge;
// f();
// 

// 
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Raj';

// const jonas = {
//   firstName: 'Raj',
//   year: 2006,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2025 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

    
//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 2000 && this.year <= 2010);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// Aditya.greet();
// Aditya.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
// */

// let lastName = 'Wilson';
// let oldLastName = lastName;
// lastName = 'David';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Wilson',
//   age: 20,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'David';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Wilson',
//   age: 25,
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'David';

// jessicaCopy.family.push('Martin');
// jessicaCopy.family.push('Johny');

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);