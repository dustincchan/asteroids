(function () {
  var Asteroids = window.Asteroids;

  var GameView = Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game();
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    // console.log(this);
    window.setInterval(this.game.moveObjects.bind(this.game), 20);
    var gameView = this;
    var draw_this = function() {
      gameView.game.draw(gameView.ctx);
    };
    window.setInterval(draw_this, 20);
  };
})();
