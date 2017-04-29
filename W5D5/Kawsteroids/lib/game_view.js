var Game = require("./game");

function GameView (context) {
  this.game = new Game();
  this.ctx = context;
}

GameView.prototype.start = function(){
  setInterval(function(){
    this.game.moveObjects();
    this.game.draw(this.ctx);
  },20);
};

module.exports = GameView;
