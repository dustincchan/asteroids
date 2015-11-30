(function () {
  if (typeof window.Asteroids === "undefined" ) {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  Function.prototype.inherits = function (ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
  };

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    ChildClass.inherits(ParentClass);
  };
})();
