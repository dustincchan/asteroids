(function () {
  if (typeof window.Asteroids === "undefined" ) {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  var Game = Asteroids.Game = function () {
    this.DIM_X = 500;
    this.DIM_Y = 300;

    this.asteroids = [];
    this.NUM_ASTEROIDS = 3;
    this.addAsteroids();
  };

  Game.prototype.randomPos = function() {
    var x = Math.random()*this.DIM_X;
    var y = Math.random()*this.DIM_Y;
    return [x, y];
  };

  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPos()));
    }
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };
})();
