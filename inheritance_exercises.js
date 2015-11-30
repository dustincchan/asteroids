// function Surrogate() {}
// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

var blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
