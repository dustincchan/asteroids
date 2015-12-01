(function () {
  var Asteroids = window.Asteroids;

  var GameView = Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game();
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    // console.log(this);
    setInterval(this.game.moveObjects(), 20);
    setInterval(this.game.draw(this.ctx),20);
  };
})();
