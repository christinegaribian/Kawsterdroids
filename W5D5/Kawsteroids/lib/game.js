var Kawsterdroid = require("./kawsterdroid");
function Game(){
  this.DIM_X = 1000;
  this.DIM_Y = 1000;
  this.NUM_KAWSTERDROIDS = 20;
  this.kawsterdroids = [];
  this.addKawsterdroids();

}
Game.prototype.draw = function(context){
  context.clearRect(0,0,this.DIM_X,this.DIM_Y);
  this.kawsterdroids.forEach(function(kawsterdroid){
    kawsterdroid.draw(context);
  });
};
Game.prototype.addKawsterdroids = function(){
  for(let i = 0; i < this.NUM_KAWSTERDROIDS; i++){
    this.kawsterdroids[i] = new Kawsterdroid(this.randomPosition());
  }
};

Game.prototype.randomPosition = function(){
  return [Math.floor(Math.random()*this.DIM_X), Math.floor(Math.random()*this.DIM_Y)];
};

Game.prototype.moveObjects = function(){
  this.kawsterdroids.forEach(function(kawsterdroid){
    kawsterdroid.move();
  });
  this.draw();
};
module.exports = Game;
