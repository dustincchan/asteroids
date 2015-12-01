(function () {
  if (typeof window.Asteroids === "undefined" ) {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  var Asteroid = Asteroids.Asteroid = function(pos) {
    this.pos = pos;
    this.color = "#66ff66";
    this.radius = 30;
    this.vel = [1,1];
    // Asteroids.MovingObject.call(this, pos, color, radius);

  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
