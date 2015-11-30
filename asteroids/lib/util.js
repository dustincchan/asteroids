(function () {
  if (typeof window.Asteroids.Util === "undefined" ) {
    window.Asteroids.Util = {};
  }

  var Asteroids = window.Asteroids;

  Asteroids.Util.inherits = function (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };
})();
