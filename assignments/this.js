/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. Window Binding- using the this keyword will open the window which represents the window of the console.
* 2. Implicit Binding- implicit means automatic, left of the dot
* 3. New Binding- new binding is a keyword that constructs a new object and points this to it
* 4. Explicit Binding- uses .call, .apply (arrays), or.bind to point the this keyword to a certain point
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log (this); 
//<---- basically passing in the this keyword with nothing for it to point to, opens into thw console window.
//Can use 'use strict' stops undefined instead of defaulting to the window

// Principle 2
// code example for Implicit Binding

const myCat = {
    name: "Dexter",
    what: "black cat",
    type: "total jerk",
    cat: function () {
        console.log(`My ${this.what} named ${this.name} is a ${this.type}...`);
    }
}

myCat.cat();

// Principle 3
// code example for New Binding

function Pickles (opinion) {
    this.truth = opinion;
}

let myOpinion = new Pickles("Pickles are disgusting");

console.log(myOpinion.truth);

// Principle 4
// code example for Explicit Binding

function apple () {
    console.log(this.food);
}

const faveFood = {
    food: "Apple",
    color: "Red",
    type: "Red Delicious",
}

apple.call(faveFood);