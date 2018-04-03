// console.time('sample')
// let arr = [1, 2, 3, 4, 5]
// arr.forEach(function(num){
//   console.log(num * num);
// });
// console.timeEnd('sample')



// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    Animal.call(this, name)
    this.numLegs = 2;
}
function Emperor(name) {
    Penguin.call(this, name)
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");
var myPenguin = new Penguin("Henry");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true
console.log( myEmperor.name ); // should print Jules
console.log( myPenguin.name );

// Inherits the Animal prototype methods
Penguin.prototype = Object.create(Animal.prototype)
// Make Penguin.prototype return Penguin
Penguin.prototype.constructor = Customer
